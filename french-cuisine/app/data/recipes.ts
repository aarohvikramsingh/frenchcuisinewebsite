export interface Recipe {
  id: string;
  name: string;
  description: string;
  image: string;
  prepTime: string;
  servings: string;
  difficulty: "Easy" | "Medium" | "Hard";
  ingredients: string[];
  steps: string[];
  region?: string;
}

export const recipes: Recipe[] = [
  {
    id: "coq-au-vin",
    name: "Coq au Vin",
    description: "A classic French dish of chicken braised with wine, mushrooms, and bacon. Perfect for special occasions.",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80",
    prepTime: "2 hours",
    servings: "4-6",
    difficulty: "Medium",
    ingredients: [
      "1 whole chicken, cut into pieces",
      "750ml red wine (Burgundy)",
      "200g bacon lardons",
      "250g mushrooms",
      "12 pearl onions",
      "3 cloves garlic",
      "2 tablespoons flour",
      "Fresh thyme and bay leaf",
      "Butter and olive oil",
      "Salt and pepper"
    ],
    steps: [
      "Marinate chicken in wine overnight (optional but recommended).",
      "Brown bacon in a large pot, then remove and set aside.",
      "Brown chicken pieces in bacon fat, then remove.",
      "Sauté onions and mushrooms until golden.",
      "Add garlic and flour, cook for 1 minute.",
      "Return chicken and bacon to pot, add wine and herbs.",
      "Simmer covered for 1.5 hours until chicken is tender.",
      "Serve hot with crusty bread or potatoes."
    ],
    region: "Burgundy"
  },
  {
    id: "ratatouille",
    name: "Ratatouille",
    description: "A vibrant vegetable stew from Provence featuring zucchini, eggplant, and tomatoes. Healthy and colorful!",
    image: "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?w=800&q=80",
    prepTime: "1 hour",
    servings: "4-6",
    difficulty: "Easy",
    ingredients: [
      "1 large eggplant",
      "2 zucchini",
      "2 yellow squash",
      "3 tomatoes",
      "1 bell pepper",
      "1 onion",
      "4 cloves garlic",
      "Fresh basil and thyme",
      "Olive oil",
      "Salt and pepper"
    ],
    steps: [
      "Cut all vegetables into uniform cubes or slices.",
      "Heat olive oil in a large skillet over medium heat.",
      "Sauté onions until soft, then add garlic.",
      "Add eggplant and cook for 5 minutes.",
      "Add zucchini, squash, and peppers, cook for 5 more minutes.",
      "Add tomatoes and herbs, simmer for 20 minutes.",
      "Season with salt and pepper to taste.",
      "Garnish with fresh basil before serving."
    ],
    region: "Provence"
  },
  {
    id: "croissants",
    name: "Croissants",
    description: "Buttery, flaky pastries that are the pride of French bakeries. Perfect for breakfast or brunch.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
    prepTime: "3 hours",
    servings: "8",
    difficulty: "Hard",
    ingredients: [
      "500g all-purpose flour",
      "300g cold butter",
      "250ml warm milk",
      "50g sugar",
      "10g salt",
      "15g active dry yeast",
      "1 egg for egg wash"
    ],
    steps: [
      "Mix flour, sugar, salt, and yeast. Add milk to form dough.",
      "Knead until smooth, then refrigerate for 1 hour.",
      "Flatten butter into a rectangle between parchment paper.",
      "Roll dough into rectangle, place butter in center.",
      "Fold dough over butter like an envelope.",
      "Roll and fold 3 times, chilling between each fold.",
      "Cut triangles and roll into croissant shape.",
      "Proof for 2 hours, brush with egg wash, bake at 200°C for 15-20 minutes."
    ]
  },
  {
    id: "quiche-lorraine",
    name: "Quiche Lorraine",
    description: "A savory tart from Lorraine with bacon, cheese, and creamy egg custard in a flaky pastry shell.",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&q=80",
    prepTime: "1 hour",
    servings: "6-8",
    difficulty: "Medium",
    ingredients: [
      "1 pie crust (homemade or store-bought)",
      "200g bacon lardons",
      "200g Gruyère cheese, grated",
      "4 large eggs",
      "300ml heavy cream",
      "200ml milk",
      "Nutmeg, salt, and pepper",
      "Butter for greasing"
    ],
    steps: [
      "Preheat oven to 190°C.",
      "Blind bake the pie crust for 10 minutes.",
      "Cook bacon until crispy, drain on paper towels.",
      "Whisk eggs, cream, milk, and seasonings.",
      "Sprinkle bacon and cheese in the crust.",
      "Pour egg mixture over the filling.",
      "Bake for 35-40 minutes until set and golden.",
      "Let cool slightly before slicing."
    ]
  },
  {
    id: "bouillabaisse",
    name: "Bouillabaisse",
    description: "A traditional Provençal fish stew from Marseille, served with rouille sauce and crusty bread.",
    image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800&q=80",
    prepTime: "2 hours",
    servings: "6",
    difficulty: "Hard",
    ingredients: [
      "1kg mixed fish (sea bass, red mullet, monkfish)",
      "500g mussels",
      "2 leeks",
      "1 fennel bulb",
      "4 tomatoes",
      "4 cloves garlic",
      "Saffron threads",
      "Orange peel",
      "Fish stock",
      "Olive oil and herbs"
    ],
    steps: [
      "Clean and prepare all fish and seafood.",
      "Sauté leeks, fennel, and garlic in olive oil.",
      "Add tomatoes, saffron, orange peel, and stock.",
      "Simmer for 20 minutes to create the broth.",
      "Add firm fish first, cook for 5 minutes.",
      "Add delicate fish and mussels, cook 5 more minutes.",
      "Serve broth first, then fish on separate platter.",
      "Accompany with rouille sauce and croutons."
    ]
  },
  {
    id: "creme-brulee",
    name: "Crème Brûlée",
    description: "Rich vanilla custard with a caramelized sugar top that cracks beautifully with your spoon.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80",
    prepTime: "1 hour",
    servings: "6",
    difficulty: "Medium",
    ingredients: [
      "500ml heavy cream",
      "1 vanilla bean",
      "6 egg yolks",
      "100g sugar",
      "Extra sugar for caramelizing"
    ],
    steps: [
      "Heat cream with vanilla bean until steaming.",
      "Whisk egg yolks with sugar until pale.",
      "Slowly pour hot cream into yolks, whisking constantly.",
      "Strain mixture into ramekins.",
      "Bake in water bath at 150°C for 40 minutes.",
      "Chill for at least 4 hours or overnight.",
      "Sprinkle sugar on top and caramelize with torch.",
      "Let caramel harden for 1 minute before serving."
    ]
  },
  {
    id: "onion-soup",
    name: "French Onion Soup",
    description: "Caramelized onions in rich beef broth, topped with toasted bread and melted Gruyère cheese.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80",
    prepTime: "1.5 hours",
    servings: "4",
    difficulty: "Easy",
    ingredients: [
      "1kg onions, thinly sliced",
      "2L beef stock",
      "200ml white wine",
      "3 tablespoons butter",
      "1 tablespoon flour",
      "Fresh thyme and bay leaf",
      "Baguette slices",
      "Gruyère cheese, grated"
    ],
    steps: [
      "Melt butter in a large pot over medium heat.",
      "Add onions and cook for 45 minutes until deeply caramelized.",
      "Add flour and cook for 2 minutes.",
      "Deglaze with white wine, scraping the bottom.",
      "Add stock and herbs, simmer for 30 minutes.",
      "Season with salt and pepper.",
      "Ladle into oven-safe bowls, top with bread and cheese.",
      "Broil until cheese is melted and bubbly."
    ]
  },
  {
    id: "duck-confit",
    name: "Duck Confit",
    description: "Duck legs slowly cooked in their own fat until tender, then crisped to perfection.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    prepTime: "4 hours",
    servings: "4",
    difficulty: "Hard",
    ingredients: [
      "4 duck legs",
      "500g duck fat",
      "4 cloves garlic",
      "Fresh thyme and bay leaves",
      "Coarse salt",
      "Black peppercorns"
    ],
    steps: [
      "Rub duck legs with salt, garlic, and herbs.",
      "Refrigerate for 24 hours to cure.",
      "Rinse off salt and pat dry.",
      "Melt duck fat in a heavy pot.",
      "Submerge duck legs in fat.",
      "Cook at 110°C for 2-3 hours until tender.",
      "Store covered in fat (can keep for weeks).",
      "To serve, crisp skin-side down in a hot pan."
    ]
  }
];

export const cheeses = [
  {
    id: "brie",
    name: "Brie",
    region: "Île-de-France",
    description: "Known as the 'Queen of Cheeses', Brie is a soft cheese with a creamy texture and mild, buttery flavor.",
    image: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=800&q=80",
    characteristics: ["Soft texture", "Mild flavor", "Edible rind", "Aged 4-8 weeks"]
  },
  {
    id: "camembert",
    name: "Camembert",
    region: "Normandy",
    description: "A soft, creamy cheese with an earthy aroma and rich, mushroom-like flavor.",
    image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=800&q=80",
    characteristics: ["Creamy interior", "White rind", "Earthy aroma", "Aged 3-5 weeks"]
  },
  {
    id: "roquefort",
    name: "Roquefort",
    region: "Aveyron",
    description: "A famous blue cheese made from sheep's milk with distinctive blue-green veins.",
    image: "https://images.unsplash.com/photo-1562059390-a761a084768e?w=800&q=80",
    characteristics: ["Blue veins", "Sharp taste", "Sheep milk", "Aged in caves"]
  }
];

export const wineRegions = [
  {
    id: "bordeaux",
    name: "Bordeaux",
    description: "One of the world's most famous wine regions, known for its full-bodied red blends.",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80",
    grapes: ["Cabernet Sauvignon", "Merlot", "Cabernet Franc"],
    characteristics: "Full-bodied, complex, ages beautifully"
  },
  {
    id: "champagne",
    name: "Champagne",
    description: "The only region that can produce true Champagne, known for its sparkling wines.",
    image: "https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?w=800&q=80",
    grapes: ["Chardonnay", "Pinot Noir", "Pinot Meunier"],
    characteristics: "Elegant, bubbly, celebratory"
  },
  {
    id: "burgundy",
    name: "Burgundy",
    description: "A prestigious region known for both exceptional reds (Pinot Noir) and whites (Chardonnay).",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80",
    grapes: ["Pinot Noir", "Chardonnay", "Gamay"],
    characteristics: "Elegant, terroir-driven, refined"
  }
];

export const regions = [
  {
    id: "provence",
    name: "Provence",
    description: "Known for Mediterranean flavors, olive oil, herbs, and fresh vegetables.",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80",
    dishes: ["Ratatouille", "Bouillabaisse", "Salade Niçoise"],
    specialties: "Herbs de Provence, olive oil, rosé wine"
  },
  {
    id: "burgundy",
    name: "Burgundy",
    description: "Famous for wine-based cooking, mustard, and rich, hearty dishes.",
    image: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&q=80",
    dishes: ["Coq au Vin", "Beef Bourguignon", "Escargots"],
    specialties: "Red wine, Dijon mustard, Charolais beef"
  },
  {
    id: "normandy",
    name: "Normandy",
    description: "Known for apples, dairy products, and seafood from the coast.",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80",
    dishes: ["Camembert", "Apple Tart", "Moules Marinières"],
    specialties: "Cheese, Calvados, cream, apples"
  },
  {
    id: "alsace",
    name: "Alsace",
    description: "A blend of French and German influences with unique wines and hearty cuisine.",
    image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=800&q=80",
    dishes: ["Choucroute", "Flammekueche", "Kugelhopf"],
    specialties: "Sauerkraut, Riesling, tarte flambée"
  }
];
