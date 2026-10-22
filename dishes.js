const dishes = [
    { keyword: "borsch", name: "Борщ с говядиной", price: 250, category: "soup", kind: "meat", count: "300 г", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400" },
    { keyword: "solyanka", name: "Солянка сборная", price: 280, category: "soup", kind: "meat", count: "350 г", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400" },
    { keyword: "ukha", name: "Уха из лосося", price: 300, category: "soup", kind: "fish", count: "300 г", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400" },
    { keyword: "fish_soup", name: "Рыбный суп с фрикадельками", price: 270, category: "soup", kind: "fish", count: "300 г", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400" },
    { keyword: "gazpacho", name: "Гаспачо", price: 220, category: "soup", kind: "veg", count: "300 г", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400" },
    { keyword: "mushroom_soup", name: "Грибной крем-суп", price: 240, category: "soup", kind: "veg", count: "300 г", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400" },

    { keyword: "kiev_cutlet", name: "Котлета по-киевски", price: 290, category: "main", kind: "meat", count: "250 г", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400" },
    { keyword: "steak", name: "Стейк из говядины", price: 450, category: "main", kind: "meat", count: "300 г", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400" },
    { keyword: "grilled_salmon", name: "Лосось на гриле", price: 400, category: "main", kind: "fish", count: "250 г", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400" },
    { keyword: "fish_cakes", name: "Рыбные котлеты с пюре", price: 280, category: "main", kind: "fish", count: "300 г", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400" },
    { keyword: "pasta_veg", name: "Паста с овощами", price: 260, category: "main", kind: "veg", count: "300 г", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400" },
    { keyword: "buckwheat_mushroom", name: "Гречка с грибами", price: 230, category: "main", kind: "veg", count: "300 г", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400" },

    { keyword: "tuna_salad", name: "Салат с тунцом", price: 320, category: "salad", kind: "fish", count: "200 г", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" },
    { keyword: "caesar", name: "Цезарь с курицей", price: 300, category: "salad", kind: "meat", count: "250 г", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" },
    { keyword: "greek_salad", name: "Греческий салат", price: 250, category: "salad", kind: "veg", count: "250 г", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" },
    { keyword: "caprese", name: "Капрезе", price: 280, category: "salad", kind: "veg", count: "200 г", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" },
    { keyword: "vitamin_salad", name: "Витаминный салат", price: 180, category: "salad", kind: "veg", count: "200 г", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" },
    { keyword: "bruschetta", name: "Брускетты с томатами", price: 220, category: "salad", kind: "veg", count: "150 г", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" },

    { keyword: "mors", name: "Морс клюквенный", price: 90, category: "drink", kind: "cold", count: "0.5 л", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400" },
    { keyword: "compote", name: "Компот из сухофруктов", price: 80, category: "drink", kind: "cold", count: "0.5 л", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400" },
    { keyword: "lemonade", name: "Домашний лимонад", price: 120, category: "drink", kind: "cold", count: "0.5 л", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400" },
    { keyword: "black_tea", name: "Чай черный", price: 50, category: "drink", kind: "hot", count: "0.3 л", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400" },
    { keyword: "green_tea", name: "Чай зеленый", price: 50, category: "drink", kind: "hot", count: "0.3 л", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400" },
    { keyword: "coffee", name: "Кофе американо", price: 100, category: "drink", kind: "hot", count: "0.3 л", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400" },

    { keyword: "cookies", name: "Овсяное печенье", price: 60, category: "dessert", kind: "small", count: "100 г", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400" },
    { keyword: "macaron", name: "Макарон", price: 90, category: "dessert", kind: "small", count: "50 г", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400" },
    { keyword: "candy", name: "Трюфель", price: 70, category: "dessert", kind: "small", count: "50 г", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400" },
    { keyword: "cheesecake", name: "Чизкейк Нью-Йорк", price: 250, category: "dessert", kind: "medium", count: "150 г", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400" },
    { keyword: "tiramisu", name: "Тирамису", price: 280, category: "dessert", kind: "medium", count: "150 г", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400" },
    { keyword: "napoleon", name: "Торт Наполеон", price: 350, category: "dessert", kind: "large", count: "250 г", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400" }
];