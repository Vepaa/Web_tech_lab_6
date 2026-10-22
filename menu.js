document.addEventListener('DOMContentLoaded', () => {
    dishes.sort((a, b) => a.name.localeCompare(b.name, 'ru'));

    const activeFilters = { soup: null, main: null, salad: null, drink: null, dessert: null };
    const selectedDishes = { soup: null, main: null, salad: null, drink: null, dessert: null };

    function renderDishes() {
        document.getElementById('soups-container').innerHTML = '';
        document.getElementById('main-dishes-container').innerHTML = '';
        document.getElementById('salads-container').innerHTML = '';
        document.getElementById('drinks-container').innerHTML = '';
        document.getElementById('desserts-container').innerHTML = '';

        dishes.forEach(dish => {
            if (activeFilters[dish.category] && activeFilters[dish.category] !== dish.kind) return;

            const card = document.createElement('div');
            card.className = 'dish-card';
            if (selectedDishes[dish.category] && selectedDishes[dish.category].keyword === dish.keyword) {
                card.classList.add('selected');
            }
            card.dataset.dish = dish.keyword; 
            
            card.innerHTML = `
                <img src="${dish.image}" alt="${dish.name}">
                <p class="price">${dish.price} ₽</p>
                <p class="name">${dish.name}</p>
                <p class="weight">${dish.count}</p>
                <button class="btn-add" data-category="${dish.category}" data-keyword="${dish.keyword}" data-name="${dish.name}" data-price="${dish.price}">Добавить</button>
            `;
            
            let container;
            if (dish.category === 'soup') container = document.getElementById('soups-container');
            else if (dish.category === 'main') container = document.getElementById('main-dishes-container');
            else if (dish.category === 'salad') container = document.getElementById('salads-container');
            else if (dish.category === 'drink') container = document.getElementById('drinks-container');
            else if (dish.category === 'dessert') container = document.getElementById('desserts-container');
            
            if (container) container.appendChild(card);
        });

        document.querySelectorAll('.btn-add').forEach(button => {
            button.addEventListener('click', () => {
                const category = button.dataset.category;
                const keyword = button.dataset.keyword;
                
                selectedDishes[category] = {
                    keyword: keyword,
                    name: button.dataset.name,
                    price: parseInt(button.dataset.price, 10)
                };

                document.querySelectorAll('.dish-card').forEach(c => c.classList.remove('selected'));
                const selectedCard = document.querySelector(`.dish-card[data-dish="${keyword}"]`);
                if (selectedCard) selectedCard.classList.add('selected');

                updateOrderSummary();
            });
        });
    }

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.parentElement.dataset.category;
            const kind = btn.dataset.kind;

            if (activeFilters[category] === kind) {
                activeFilters[category] = null;
                btn.classList.remove('active');
            } else {
                btn.parentElement.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                activeFilters[category] = kind;
                btn.classList.add('active');
            }
            renderDishes();
        });
    });

    function updateOrderSummary() {
        const orderContent = document.getElementById('order-summary-content');
        const totalPriceBlock = document.getElementById('total-price-block');
        const totalPriceEl = document.getElementById('total-price');
        
        document.getElementById('hidden-soup').value = selectedDishes.soup ? selectedDishes.soup.keyword : '';
        document.getElementById('hidden-main').value = selectedDishes.main ? selectedDishes.main.keyword : '';
        document.getElementById('hidden-salad').value = selectedDishes.salad ? selectedDishes.salad.keyword : '';
        document.getElementById('hidden-drink').value = selectedDishes.drink ? selectedDishes.drink.keyword : '';
        document.getElementById('hidden-dessert').value = selectedDishes.dessert ? selectedDishes.dessert.keyword : '';

        let total = 0;
        let hasSelection = false;
        let html = '';

        const categories = [
            { key: 'soup', label: 'Суп' },
            { key: 'main', label: 'Главное блюдо' },
            { key: 'salad', label: 'Салат или стартер' },
            { key: 'drink', label: 'Напиток' },
            { key: 'dessert', label: 'Десерт' }
        ];

        categories.forEach(cat => {
            if (selectedDishes[cat.key]) {
                hasSelection = true; 
                total += selectedDishes[cat.key].price;
                html += `<div class="order-item"><span class="order-category">${cat.label}:</span> ${selectedDishes[cat.key].name} — ${selectedDishes[cat.key].price} ₽</div>`;
            } else {
                html += `<div class="order-item empty">${cat.label} не выбран</div>`;
            }
        });

        if (!hasSelection) {
            orderContent.innerHTML = '<p id="empty-order-message">Ничего не выбрано</p>';
            totalPriceBlock.style.display = 'none';
        } else {
            orderContent.innerHTML = html;
            totalPriceEl.textContent = total;
            totalPriceBlock.style.display = 'block';
        }
    }

    // --- ВАЛИДАЦИЯ ПРИ ОТПРАВКЕ ФОРМЫ И УВЕДОМЛЕНИЯ ---
    document.querySelector('.order-form').addEventListener('submit', (event) => {
        const hasSoup = selectedDishes.soup !== null;
        const hasMain = selectedDishes.main !== null;
        const hasSalad = selectedDishes.salad !== null;
        const hasDrink = selectedDishes.drink !== null;
        const hasDessert = selectedDishes.dessert !== null;
        
        const totalSelected = [hasSoup, hasMain, hasSalad, hasDrink, hasDessert].filter(Boolean).length;
        let message = "";

        if (totalSelected === 0) {
            message = "Ничего не выбрано. Выберите блюда для заказа";
        } else if (hasSoup && !hasMain && !hasSalad) {
            message = "Выберите главное блюдо/салат/стартер";
        } else if (hasSalad && !hasSoup && !hasMain) {
            message = "Выберите суп или главное блюдо";
        } else if (!hasSoup && !hasMain && !hasSalad && (hasDrink || hasDessert)) {
            message = "Выберите главное блюдо";
        } else if ((hasSoup || hasMain || hasSalad) && !hasDrink) {
            message = "Выберите напиток";
        }

        if (message) {
            event.preventDefault(); // Останавливаем отправку формы
            showNotification(message);
        }
    });

    function showNotification(message) {
        const existing = document.querySelector('.notification-overlay');
        if (existing) existing.remove();

        const overlay = document.createElement('div');
        overlay.className = 'notification-overlay';
        
        const box = document.createElement('div');
        box.className = 'notification-box';
        
        const text = document.createElement('p');
        text.textContent = message;
        
        const btn = document.createElement('button');
        btn.className = 'notification-btn';
        btn.textContent = 'Окей';
        btn.addEventListener('click', () => {
            overlay.remove();
        });

        box.appendChild(text);
        box.appendChild(btn);
        overlay.appendChild(box);
        document.body.appendChild(overlay);
    }

    document.querySelector('.order-form').addEventListener('reset', () => {
        selectedDishes.soup = null;
        selectedDishes.main = null;
        selectedDishes.salad = null;
        selectedDishes.drink = null;
        selectedDishes.dessert = null;
        document.querySelectorAll('.dish-card').forEach(c => c.classList.remove('selected'));
        updateOrderSummary();
    });

    renderDishes();
});