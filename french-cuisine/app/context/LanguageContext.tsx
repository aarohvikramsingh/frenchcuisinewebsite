"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.recipes": "Recipes",
    "nav.cheeseWine": "Cheese & Wine",
    "nav.regions": "Regions",
    "nav.tagline": "Gastronomie Française",
    
    // Hero
    "hero.badge": "Discover Authentic French Flavors",
    "hero.subtitle": "A journey through the art of French gastronomy — from exquisite recipes to world-renowned wines and regional delicacies",
    "hero.searchPlaceholder": "Search for exquisite dishes...",
    "hero.searchResults": "Results",
    "hero.noResults": "No results found",
    "hero.trySearching": "Try \"Coq au Vin\" or \"Croissants\"",
    
    // Sections
    "recipes.featured": "Featured Recipes",
    "recipes.subtitle": "Exquisite dishes from the heart of France",
    "recipes.viewAll": "View All",
    "cheeseWine.title": "Cheese & Wine",
    "cheeseWine.subtitle": "The perfect pairing awaits",
    "cheeseWine.explore": "Explore",
    "regions.title": "Regional Specialties",
    "regions.subtitle": "Explore France's diverse culinary regions",
    "regions.discover": "Discover",
    
    // Recipe Card
    "card.prepTime": "Prep",
    "card.servings": "Serves",
    "card.difficulty": "Level",
    "difficulty.easy": "Easy",
    "difficulty.medium": "Medium",
    "difficulty.hard": "Hard",
    
    // Recipe Detail
    "recipe.ingredients": "Ingredients",
    "recipe.instructions": "Instructions",
    "recipe.prepTime": "Preparation Time",
    "recipe.servings": "Servings",
    "recipe.difficulty": "Difficulty",
    "recipe.backToRecipes": "Back to Recipes",
    "recipe.backToAllRecipes": "Back to All Recipes",
    "recipe.notFound": "Recipe Not Found",
    "recipe.notFoundDesc": "The recipe you're looking for doesn't exist.",
    
    // Cheese & Wine Page
    "cheeseWine.cheeseMaking": "The Art of Cheese Making",
    "cheeseWine.step": "Step",
    "cheeseWine.popularCheeses": "Popular French Cheeses",
    "cheeseWine.wineRegions": "French Wine Regions",
    "cheeseWine.pairingTip": "\"What grows together, goes together.\" Try pairing regional wines with local cheeses for the ultimate French experience.",
    
    // Regions Page
    "regions.explore": "Explore Regional Specialties",
    "regions.discoverDesc": "Discover the unique flavors and traditions of France's diverse culinary landscape",
    "regions.specialties": "Specialties",
    "regions.signatureDishes": "Signature Dishes",
    
    // Footer
    "footer.crafted": "Crafted with",
    "footer.for": "for French School Presentation",
    "footer.explore": "Explore",
    "footer.categories": "Categories",
    "footer.connect": "Connect",
    
    // Quote
    "quote.text": "In France, cooking is a serious art form and a national sport.",
    "quote.author": "Julia Child",

    // Recipe Names
    "recipe.coq-au-vin.name": "Coq au Vin",
    "recipe.ratatouille.name": "Ratatouille",
    "recipe.croissants.name": "Butter Croissants",
    "recipe.creme-brulee.name": "Crème Brûlée",
    "recipe.tarte-tatin.name": "Tarte Tatin",

    // Recipe Descriptions
    "recipe.coq-au-vin.desc": "A classic French dish of chicken braised with wine, mushrooms, and bacon. Perfect for special occasions.",
    "recipe.ratatouille.desc": "A vibrant vegetable stew from Provence featuring zucchini, eggplant, and tomatoes. Healthy and colorful!",
    "recipe.croissants.desc": "Flaky, buttery pastries with a golden exterior and soft interior. A true French breakfast classic.",
    "recipe.creme-brulee.desc": "Rich vanilla custard with a caramelized sugar top that cracks beautifully with your spoon.",
    "recipe.tarte-tatin.desc": "An upside-down caramelized apple tart that originated from the Tatin sisters' restaurant.",

    // Cheese Names
    "cheese.brie.name": "Brie",
    "cheese.camembert.name": "Camembert",
    "cheese.roquefort.name": "Roquefort",

    // Cheese Descriptions
    "cheese.brie.desc": "Known as the \"Queen of Cheeses,\" Brie is a soft cheese with a buttery flavor and creamy texture.",
    "cheese.camembert.desc": "A soft, creamy cheese with an earthy aroma and rich, mushroom-like flavor.",
    "cheese.roquefort.desc": "A famous blue cheese made from sheep's milk with distinctive blue-green veins.",

    // Wine Region Names
    "wine.bordeaux.name": "Bordeaux",
    "wine.champagne.name": "Champagne",
    "wine.burgundy.name": "Burgundy",
    "wine.loire.name": "Loire Valley",

    // Wine Region Descriptions
    "wine.bordeaux.desc": "One of the world's most famous wine regions, known for its full-bodied red blends.",
    "wine.champagne.desc": "The only region that can produce true Champagne, known for its sparkling wines.",
    "wine.burgundy.desc": "A prestigious region known for both exceptional reds (Pinot Noir) and whites (Chardonnay).",
    "wine.loire.desc": "Known for its diverse range of wines, from crisp whites to light reds and sparkling wines.",

    // Region Names
    "region.provence.name": "Provence",
    "region.normandy.name": "Normandy",
    "region.alsace.name": "Alsace",
    "region.brittany.name": "Brittany",
    "region.burgundy.name": "Burgundy",

    // Region Descriptions
    "region.provence.desc": "Famous for herbs, olive oil, and fresh Mediterranean flavors. Home to ratatouille and sunny market cuisine.",
    "region.normandy.desc": "Known for apples, dairy products, and seafood from the coast.",
    "region.alsace.desc": "Famous for German-influenced dishes like choucroute and tarte flambée.",
    "region.brittany.desc": "Known for its seafood, especially oysters and mussels, and the famous crêpes.",
    "region.burgundy.desc": "Famous for wine-based cooking, mustard, and rich, hearty dishes.",

    // Cheese Making Steps
    "cheeseWine.step1.title": "Milk Collection",
    "cheeseWine.step1.desc": "Fresh milk is collected from cows, goats, or sheep, depending on the cheese type.",
    "cheeseWine.step2.title": "Curdling",
    "cheeseWine.step2.desc": "Rennet and starter cultures are added to curdle the milk into solid curds.",
    "cheeseWine.step3.title": "Cutting & Draining",
    "cheeseWine.step3.desc": "Curds are cut and whey is drained, shaping the final cheese texture.",
    "cheeseWine.step4.title": "Aging",
    "cheeseWine.step4.desc": "Cheeses are aged in controlled environments to develop flavor and character.",
  },
  fr: {
    // Navbar
    "nav.home": "Accueil",
    "nav.recipes": "Recettes",
    "nav.cheeseWine": "Fromage & Vin",
    "nav.regions": "Régions",
    "nav.tagline": "Gastronomie Française",
    
    // Hero
    "hero.badge": "Découvrez les Saveurs Authentiques Françaises",
    "hero.subtitle": "Un voyage à travers l'art de la gastronomie française — des recettes exquises aux vins de renommée mondiale et aux délices régionaux",
    "hero.searchPlaceholder": "Rechercher des plats exquis...",
    "hero.searchResults": "Résultats",
    "hero.noResults": "Aucun résultat trouvé",
    "hero.trySearching": "Essayez \"Coq au Vin\" ou \"Croissants\"",
    
    // Sections
    "recipes.featured": "Recettes en Vedette",
    "recipes.subtitle": "Plats exquis du cœur de la France",
    "recipes.viewAll": "Voir Tout",
    "cheeseWine.title": "Fromage & Vin",
    "cheeseWine.subtitle": "L'accord parfait vous attend",
    "cheeseWine.explore": "Explorer",
    "regions.title": "Spécialités Régionales",
    "regions.subtitle": "Explorez les régions culinaires diverses de la France",
    "regions.discover": "Découvrir",
    
    // Recipe Card
    "card.prepTime": "Prép",
    "card.servings": "Portions",
    "card.difficulty": "Niveau",
    "difficulty.easy": "Facile",
    "difficulty.medium": "Moyen",
    "difficulty.hard": "Difficile",
    
    // Recipe Detail
    "recipe.ingredients": "Ingrédients",
    "recipe.instructions": "Instructions",
    "recipe.prepTime": "Temps de Préparation",
    "recipe.servings": "Portions",
    "recipe.difficulty": "Difficulté",
    "recipe.backToRecipes": "Retour aux Recettes",
    "recipe.backToAllRecipes": "Retour à Toutes les Recettes",
    "recipe.notFound": "Recette Non Trouvée",
    "recipe.notFoundDesc": "La recette que vous recherchez n'existe pas.",

    // Cheese & Wine Page
    "cheeseWine.cheeseMaking": "L'Art de la Fabrication du Fromage",
    "cheeseWine.step": "Étape",
    "cheeseWine.popularCheeses": "Fromages Français Populaires",
    "cheeseWine.wineRegions": "Régions Vinicoles Françaises",
    "cheeseWine.pairingTip": "\"Ce qui se cultive ensemble, s'accorde ensemble.\" Essayez d'associer les vins régionaux avec les fromages locaux pour une expérience française ultime.",
    
    // Regions Page
    "regions.explore": "Explorez les Spécialités Régionales",
    "regions.discoverDesc": "Découvrez les saveurs uniques et les traditions du paysage culinaire divers de la France",
    "regions.specialties": "Spécialités",
    "regions.signatureDishes": "Plats Signature",
    
    // Footer
    "footer.crafted": "Conçu avec",
    "footer.for": "pour la Présentation d'École Française",
    "footer.explore": "Explorer",
    "footer.categories": "Catégories",
    "footer.connect": "Connecter",

    // Quote
    "quote.text": "En France, la cuisine est une forme d'art sérieuse et un sport national.",
    "quote.author": "Julia Child",

    // Recipe Ingredients & Steps (French)
    // Coq au Vin
    "recipe.coq-au-vin.ingredient.0": "1 poulet entier, coupé en morceaux",
    "recipe.coq-au-vin.ingredient.1": "750ml de vin rouge (Bourgogne)",
    "recipe.coq-au-vin.ingredient.2": "200g de lardons",
    "recipe.coq-au-vin.ingredient.3": "250g de champignons",
    "recipe.coq-au-vin.ingredient.4": "12 petits oignons grelots",
    "recipe.coq-au-vin.ingredient.5": "3 gousses d'ail",
    "recipe.coq-au-vin.ingredient.6": "2 cuillères à soupe de farine",
    "recipe.coq-au-vin.ingredient.7": "Thym frais et feuille de laurier",
    "recipe.coq-au-vin.ingredient.8": "Beurre et huile d'olive",
    "recipe.coq-au-vin.ingredient.9": "Sel et poivre",
    "recipe.coq-au-vin.step.0": "Faire mariner le poulet dans le vin toute la nuit (facultatif mais recommandé).",
    "recipe.coq-au-vin.step.1": "Faire dorer les lardons dans une grande marmite, puis les retirer et les réserver.",
    "recipe.coq-au-vin.step.2": "Faire dorer les morceaux de poulet dans la graisse des lardons, puis les retirer.",
    "recipe.coq-au-vin.step.3": "Faire revenir les oignons et les champignons jusqu'à ce qu'ils soient dorés.",
    "recipe.coq-au-vin.step.4": "Ajouter l'ail et la farine, puis cuire pendant 1 minute.",
    "recipe.coq-au-vin.step.5": "Remettre le poulet et les lardons dans la marmite, puis ajouter le vin et les herbes.",
    "recipe.coq-au-vin.step.6": "Laisser mijoter à couvert pendant 1 h 30 jusqu'à ce que le poulet soit tendre.",
    "recipe.coq-au-vin.step.7": "Servir chaud avec du pain croustillant ou des pommes de terre.",
    // Ratatouille
    "recipe.ratatouille.ingredient.0": "1 grosse aubergine",
    "recipe.ratatouille.ingredient.1": "2 courgettes",
    "recipe.ratatouille.ingredient.2": "2 courges jaunes",
    "recipe.ratatouille.ingredient.3": "3 tomates",
    "recipe.ratatouille.ingredient.4": "1 poivron",
    "recipe.ratatouille.ingredient.5": "1 oignon",
    "recipe.ratatouille.ingredient.6": "4 gousses d'ail",
    "recipe.ratatouille.ingredient.7": "Basilic frais et thym",
    "recipe.ratatouille.ingredient.8": "Huile d'olive",
    "recipe.ratatouille.ingredient.9": "Sel et poivre",
    "recipe.ratatouille.step.0": "Couper tous les légumes en cubes ou en tranches de taille uniforme.",
    "recipe.ratatouille.step.1": "Faire chauffer l'huile d'olive dans une grande poêle à feu moyen.",
    "recipe.ratatouille.step.2": "Faire revenir les oignons jusqu'à ce qu'ils soient tendres, puis ajouter l'ail.",
    "recipe.ratatouille.step.3": "Ajouter l'aubergine et cuire pendant 5 minutes.",
    "recipe.ratatouille.step.4": "Ajouter les courgettes, les courges jaunes et les poivrons, puis cuire encore 5 minutes.",
    "recipe.ratatouille.step.5": "Ajouter les tomates et les herbes, puis laisser mijoter pendant 20 minutes.",
    "recipe.ratatouille.step.6": "Assaisonner avec du sel et du poivre selon votre goût.",
    "recipe.ratatouille.step.7": "Garnir de basilic frais avant de servir.",
    // Croissants
    "recipe.croissants.ingredient.0": "500g de farine tout usage",
    "recipe.croissants.ingredient.1": "300g de beurre froid",
    "recipe.croissants.ingredient.2": "250ml de lait tiède",
    "recipe.croissants.ingredient.3": "50g de sucre",
    "recipe.croissants.ingredient.4": "10g de sel",
    "recipe.croissants.ingredient.5": "15g de levure sèche active",
    "recipe.croissants.ingredient.6": "1 œuf pour la dorure",
    "recipe.croissants.step.0": "Mélanger la farine, le sucre, le sel et la levure. Ajouter le lait pour former une pâte.",
    "recipe.croissants.step.1": "Pétrir jusqu'à ce que la pâte soit lisse, puis la réfrigérer pendant 1 heure.",
    "recipe.croissants.step.2": "Aplatir le beurre en un rectangle entre deux feuilles de papier cuisson.",
    "recipe.croissants.step.3": "Étaler la pâte en rectangle et placer le beurre au centre.",
    "recipe.croissants.step.4": "Replier la pâte sur le beurre comme une enveloppe.",
    "recipe.croissants.step.5": "Étaler et plier 3 fois, en réfrigérant entre chaque tour.",
    "recipe.croissants.step.6": "Couper des triangles et les rouler en forme de croissant.",
    "recipe.croissants.step.7": "Laisser lever 2 heures, badigeonner avec l'œuf, puis cuire à 200°C pendant 15 à 20 minutes.",
    // Crème Brûlée
    "recipe.creme-brulee.ingredient.0": "500ml de crème entière",
    "recipe.creme-brulee.ingredient.1": "1 gousse de vanille",
    "recipe.creme-brulee.ingredient.2": "6 jaunes d'œufs",
    "recipe.creme-brulee.ingredient.3": "100g de sucre",
    "recipe.creme-brulee.ingredient.4": "Sucre supplémentaire pour caraméliser",
    "recipe.creme-brulee.step.0": "Chauffer la crème avec la gousse de vanille jusqu'à ce qu'elle soit fumante.",
    "recipe.creme-brulee.step.1": "Fouetter les jaunes d'œufs avec le sucre jusqu'à ce que le mélange pâlisse.",
    "recipe.creme-brulee.step.2": "Verser lentement la crème chaude dans les jaunes en fouettant constamment.",
    "recipe.creme-brulee.step.3": "Filtrer le mélange dans des ramequins.",
    "recipe.creme-brulee.step.4": "Cuire au bain-marie à 150°C pendant 40 minutes.",
    "recipe.creme-brulee.step.5": "Réfrigérer pendant au moins 4 heures ou toute la nuit.",
    "recipe.creme-brulee.step.6": "Saupoudrer de sucre sur le dessus puis caraméliser au chalumeau.",
    "recipe.creme-brulee.step.7": "Laisser le caramel durcir pendant 1 minute avant de servir.",
    // Tarte Tatin
    "recipe.tarte-tatin.ingredient.0": "6 pommes Golden",
    "recipe.tarte-tatin.ingredient.1": "150g de sucre",
    "recipe.tarte-tatin.ingredient.2": "100g de beurre",
    "recipe.tarte-tatin.ingredient.3": "1 pâte feuilletée",
    "recipe.tarte-tatin.ingredient.4": "1 gousse de vanille",
    "recipe.tarte-tatin.step.0": "Préchauffer le four à 200°C.",
    "recipe.tarte-tatin.step.1": "Faire un caramel avec le sucre et le beurre dans un moule.",
    "recipe.tarte-tatin.step.2": "Disposer les pommes en rosace sur le caramel.",
    "recipe.tarte-tatin.step.3": "Recouvrir avec la pâte et rentrer les bords.",
    "recipe.tarte-tatin.step.4": "Cuire 30 minutes puis retourner délicatement sur un plat.",

    // Recipe Names (French)
    "recipe.coq-au-vin.name": "Coq au Vin",
    "recipe.ratatouille.name": "Ratatouille",
    "recipe.croissants.name": "Croissants au Beurre",
    "recipe.creme-brulee.name": "Crème Brûlée",
    "recipe.tarte-tatin.name": "Tarte Tatin",

    // Recipe Descriptions (French)
    "recipe.coq-au-vin.desc": "Un plat classique français de poulet braisé au vin, aux champignons et au lard. Parfait pour les occasions spéciales.",
    "recipe.ratatouille.desc": "Un ragoût de légumes coloré de Provence avec courgettes, aubergines et tomates. Sain et délicieux!",
    "recipe.croissants.desc": "Des pâtisseries feuilletées au beurre avec une croûte dorée et un intérieur moelleux. Un classique du petit-déjeuner français.",
    "recipe.creme-brulee.desc": "Un crème vanille riche avec une croûte de sucre caramélisée qui se casse délicatement avec votre cuillère.",
    "recipe.tarte-tatin.desc": "Une tarte aux pommes caramélisée renversée, originaire du restaurant des sœurs Tatin.",

    // Cheese Names (French)
    "cheese.brie.name": "Brie",
    "cheese.camembert.name": "Camembert",
    "cheese.roquefort.name": "Roquefort",

    // Cheese Descriptions (French)
    "cheese.brie.desc": "Connu comme le \"Roi des Fromages\", le Brie est un fromage à pâte molle au goût beurré et à texture crémeuse.",
    "cheese.camembert.desc": "Un fromage à pâte molle et crémeuse avec un arôme terreux et une saveur riche rappelant le champignon.",
    "cheese.roquefort.desc": "Un fromage bleu célèbre fait de lait de brebis avec des veines bleu-vert distinctives.",

    // Wine Region Names (French)
    "wine.bordeaux.name": "Bordeaux",
    "wine.champagne.name": "Champagne",
    "wine.burgundy.name": "Bourgogne",
    "wine.loire.name": "Vallée de la Loire",

    // Wine Region Descriptions (French)
    "wine.bordeaux.desc": "L'une des régions viticoles les plus célèbres au monde, connue pour ses vins rouges corsés.",
    "wine.champagne.desc": "La seule région qui peut produire du vrai Champagne, connue pour ses vins pétillants.",
    "wine.burgundy.desc": "Une région prestigieuse connue pour ses rouges (Pinot Noir) et ses blancs (Chardonnay) exceptionnels.",
    "wine.loire.desc": "Connue pour sa gamme diversifiée de vins, des blancs frais aux rouges légers et aux vins pétillants.",

    // Region Names (French)
    "region.provence.name": "Provence",
    "region.normandy.name": "Normandie",
    "region.alsace.name": "Alsace",
    "region.brittany.name": "Bretagne",
    "region.burgundy.name": "Bourgogne",

    // Region Descriptions (French)
    "region.provence.desc": "Célèbre pour ses herbes, son huile d'olive et ses saveurs méditerranéennes fraîches. Terre du ratatouille et d'une cuisine de marche ensoleillée.",
    "region.normandy.desc": "Connue pour ses pommes, ses produits laitiers et ses fruits de mer de la côte.",
    "region.alsace.desc": "Célèbre pour ses plats à influence allemande comme la choucroute et la tarte flambée.",
    "region.brittany.desc": "Connue pour ses fruits de mer, particulièrement les huîtres et les moules, et les célèbres crêpes.",
    "region.burgundy.desc": "Célèbre pour sa cuisine au vin, sa moutarde et ses plats riches et copieux.",

    // Cheese Making Steps (French)
    "cheeseWine.step1.title": "Collecte du Lait",
    "cheeseWine.step1.desc": "Le lait frais est collecté auprès de vaches, chèvres ou brebis, selon le type de fromage.",
    "cheeseWine.step2.title": "Caillage",
    "cheeseWine.step2.desc": "La présure et les ferments sont ajoutés pour cailler le lait en caillé solide.",
    "cheeseWine.step3.title": "Découpage & Égouttage",
    "cheeseWine.step3.desc": "Le caillé est découpé et le lactosérum est égoutté, façonnant la texture finale du fromage.",
    "cheeseWine.step4.title": "Affinage",
    "cheeseWine.step4.desc": "Les fromages sont affinés dans des environnements contrôlés pour développer leur saveur et leur caractère.",
  },
};

const defaultContextValue: LanguageContextType = {
  language: "en",
  toggleLanguage: () => {},
  t: (key: string) => translations["en"][key as keyof typeof translations.en] || key,
};

const LanguageContext = createContext<LanguageContextType>(defaultContextValue);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "en" || saved === "fr")) {
      setLanguage(saved);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("language", language);
    }
  }, [language, mounted]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "fr" : "en"));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
