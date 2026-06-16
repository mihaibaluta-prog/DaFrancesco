// Trilingual featured menu items (full menu shown as accordion below).
// Keys: de / it / en. Prices are universal.
export type MenuItem = {
  nr?: string;
  name: { de: string; it: string; en: string };
  desc?: { de: string; it: string; en: string };
  price: string;
};

export type MenuCategory = {
  id: string;
  title: { de: string; it: string; en: string };
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "antipasti",
    title: { de: "Antipasti — Vorspeisen", it: "Antipasti", en: "Antipasti — Starters" },
    items: [
      { nr: "51", name: { de: "Bruschetta", it: "Bruschetta", en: "Bruschetta" }, desc: { de: "mit Tomaten und Knoblauch", it: "con pomodoro e aglio", en: "with tomato and garlic" }, price: "6,50 €" },
      { nr: "52", name: { de: "Pizzabrot mit Kräuterbutter", it: "Pane con burro alle erbe", en: "Bread with herb butter" }, desc: { de: "", it: "", en: "" }, price: "4,50 €" },
      { nr: "55", name: { de: "Pizzabrot mit Knoblauch", it: "Pane all'aglio", en: "Garlic bread" }, desc: { de: "", it: "", en: "" }, price: "4,50 €" },
      { nr: "53", name: { de: "Carpaccio di Manzo", it: "Carpaccio di Manzo", en: "Beef Carpaccio" }, desc: { de: "hauchdünne Rinderfiletscheiben mit Rucola und Parmesankäse, dazu Pizzabrot", it: "fettine sottili di filetto di manzo con rucola e parmigiano, con pane", en: "thin beef fillet slices with rocket and parmesan, with bread" }, price: "12,90 €" },
      { nr: "54", name: { de: "Scampi alla Mediterranea", it: "Scampi alla Mediterranea", en: "Mediterranean Scampi" }, desc: { de: "Sechs Scampi leicht angebraten auf grünem Salat, mit Weißbrot", it: "sei scampi leggermente rosolati su insalata verde, con pane bianco", en: "six scampi lightly sautéed on green salad, with white bread" }, price: "18,50 €" },
      { nr: "57", name: { de: "Antipasto Misto", it: "Antipasto Misto", en: "Mixed Antipasto" }, desc: { de: "gemischter Vorspeisenteller mit Weißbrot", it: "piatto misto di antipasti con pane bianco", en: "mixed starter platter with white bread" }, price: "13,00 €" },
      { nr: "58", name: { de: "Antipasto di Verdure", it: "Antipasto di Verdure", en: "Vegetable Antipasto" }, desc: { de: "Gemüseteller mit Weißbrot", it: "piatto di verdure con pane bianco", en: "vegetable platter with white bread" }, price: "13,00 €" },
      { nr: "59", name: { de: "Carpaccio di Tonno", it: "Carpaccio di Tonno", en: "Tuna Carpaccio" }, desc: { de: "hauchdünne Thunfischfiletscheiben mit Rucola, dazu Pizzabrot", it: "fettine sottili di filetto di tonno con rucola, con pane", en: "thin tuna fillet slices with rocket, with bread" }, price: "14,50 €" },
      { nr: "60", name: { de: "Carpaccio di Salmone", it: "Carpaccio di Salmone", en: "Salmon Carpaccio" }, desc: { de: "hauchdünne Lachsfiletscheiben mit Rucola, dazu Pizzabrot", it: "fettine sottili di filetto di salmone con rucola, con pane", en: "thin salmon fillet slices with rocket, with bread" }, price: "13,50 €" },
    ],
  },
  {
    id: "suppen",
    title: { de: "Suppen", it: "Zuppe", en: "Soups" },
    items: [
      { nr: "91", name: { de: "Minestrone", it: "Minestrone", en: "Minestrone" }, desc: { de: "Gemüsesuppe", it: "zuppa di verdure", en: "vegetable soup" }, price: "6,50 €" },
      { nr: "93", name: { de: "Tomatensuppe", it: "Zuppa di Pomodoro", en: "Tomato Soup" }, desc: { de: "mit Toastbrot", it: "con pane tostato", en: "with toasted bread" }, price: "6,50 €" },
      { nr: "95", name: { de: "Zwiebelsuppe", it: "Zuppa di Cipolle", en: "Onion Soup" }, desc: { de: "", it: "", en: "" }, price: "6,50 €" },
    ],
  },
  {
    id: "salate",
    title: { de: "Salate", it: "Insalate", en: "Salads" },
    items: [
      { nr: "71", name: { de: "Gemischter Salat", it: "Insalata Mista", en: "Mixed Salad" }, desc: { de: "", it: "", en: "" }, price: "6,50 €" },
      { nr: "74", name: { de: "Rucolasalat", it: "Insalata di Rucola", en: "Rocket Salad" }, desc: { de: "Rucola und Parmesan", it: "rucola e parmigiano", en: "rocket and parmesan" }, price: "11,00 €" },
      { nr: "75", name: { de: "Caprese", it: "Caprese", en: "Caprese" }, desc: { de: "Tomaten und Mozzarella", it: "pomodoro e mozzarella", en: "tomato and mozzarella" }, price: "10,50 €" },
      { nr: "76", name: { de: "Insalata Frutti di Mare", it: "Insalata Frutti di Mare", en: "Seafood Salad" }, desc: { de: "Salatteller mit Meeresfrüchten", it: "insalata con frutti di mare", en: "salad with seafood" }, price: "13,00 €" },
      { nr: "78", name: { de: "Insalata Pollo", it: "Insalata Pollo", en: "Chicken Salad" }, desc: { de: "mit Hähnchenbruststreifen", it: "con straccetti di pollo", en: "with chicken strips" }, price: "15,50 €" },
      { nr: "79", name: { de: "Insalata dello Chef", it: "Insalata dello Chef", en: "Chef's Salad" }, desc: { de: "mit Rinderstreifen und Gemüse", it: "con straccetti di manzo e verdure", en: "with beef strips and vegetables" }, price: "17,50 €" },
    ],
  },
  {
    id: "pasta",
    title: { de: "Pasta", it: "Pasta", en: "Pasta" },
    items: [
      { nr: "111", name: { de: "Spaghetti Napoli", it: "Spaghetti Napoli", en: "Spaghetti Napoli" }, desc: { de: "in Tomatensoße", it: "al pomodoro", en: "in tomato sauce" }, price: "10,00 €" },
      { nr: "112", name: { de: "Spaghetti Bolognese", it: "Spaghetti Bolognese", en: "Spaghetti Bolognese" }, desc: { de: "Hackfleisch-Soße", it: "ragù di carne", en: "meat sauce" }, price: "10,50 €" },
      { nr: "117", name: { de: "Spaghetti Carbonara", it: "Spaghetti Carbonara", en: "Spaghetti Carbonara" }, desc: { de: "Schinken, Ei, Sahnesoße", it: "prosciutto, uovo, panna", en: "ham, egg, cream sauce" }, price: "12,00 €" },
      { nr: "118", name: { de: "Spaghetti Frutti di Mare", it: "Spaghetti Frutti di Mare", en: "Spaghetti Seafood" }, desc: { de: "mit Meeresfrüchten", it: "con frutti di mare", en: "with seafood" }, price: "15,00 €" },
      { nr: "132", name: { de: "Tagliatelle Salmone", it: "Tagliatelle Salmone", en: "Tagliatelle Salmon" }, desc: { de: "mit Lachs in Sahnesoße", it: "con salmone alla panna", en: "with salmon in cream sauce" }, price: "14,50 €" },
      { nr: "133", name: { de: "Tagliatelle Scampi", it: "Tagliatelle Scampi", en: "Tagliatelle Scampi" }, desc: { de: "Tomaten, Scampi, Shrimps, Rucola", it: "pomodoro, scampi, gamberi, rucola", en: "tomato, scampi, shrimp, rocket" }, price: "15,50 €" },
      { nr: "152", name: { de: "Lasagna Classica", it: "Lasagna Classica", en: "Classic Lasagna" }, desc: { de: "", it: "", en: "" }, price: "12,50 €" },
      { nr: "156", name: { de: "Gnocchi Gorgonzola", it: "Gnocchi Gorgonzola", en: "Gnocchi Gorgonzola" }, desc: { de: "in Gorgonzola-Sahnesoße", it: "in salsa di gorgonzola", en: "in gorgonzola cream" }, price: "13,00 €" },
    ],
  },
  {
    id: "pizza",
    title: { de: "Pizza (Ø 28cm / 32cm)", it: "Pizza (Ø 28cm / 32cm)", en: "Pizza (Ø 28cm / 32cm)" },
    items: [
      { nr: "1", name: { de: "Pizza Margherita", it: "Pizza Margherita", en: "Pizza Margherita" }, desc: { de: "Tomaten und Käse", it: "pomodoro e mozzarella", en: "tomato and cheese" }, price: "8,50 € / 10,00 €" },
      { nr: "5", name: { de: "Pizza Prosciutto", it: "Pizza Prosciutto", en: "Pizza Prosciutto" }, desc: { de: "mit Formvorderschinken", it: "con prosciutto cotto", en: "with cooked ham" }, price: "9,50 € / 11,00 €" },
      { nr: "10", name: { de: "Pizza Speciale", it: "Pizza Speciale", en: "Pizza Speciale" }, desc: { de: "Salami, Peperoni, Schinken, Champignons", it: "salame, peperoni, prosciutto, funghi", en: "salami, peperoni, ham, mushrooms" }, price: "12,00 € / 13,50 €" },
      { nr: "13", name: { de: "Pizza Quattro Stagioni", it: "Pizza Quattro Stagioni", en: "Pizza Four Seasons" }, desc: { de: "Paprika, Salami, Schinken, Champignons, Spargel", it: "peperoni, salame, prosciutto, funghi, asparagi", en: "peppers, salami, ham, mushrooms, asparagus" }, price: "12,00 € / 13,50 €" },
      { nr: "24", name: { de: "Pizza Quattro Formaggi", it: "Pizza Quattro Formaggi", en: "Pizza Four Cheeses" }, desc: { de: "vier Käsesorten", it: "quattro formaggi", en: "four cheeses" }, price: "12,50 € / 14,00 €" },
      { nr: "25", name: { de: "Pizza Frutti di Mare", it: "Pizza Frutti di Mare", en: "Pizza Seafood" }, desc: { de: "mit Meeresfrüchten", it: "con frutti di mare", en: "with seafood" }, price: "13,50 € / 15,00 €" },
      { nr: "28", name: { de: "Pizza Parma", it: "Pizza Parma", en: "Pizza Parma" }, desc: { de: "Auberginen, Mozzarella, Parmaschinken", it: "melanzane, mozzarella, prosciutto di Parma", en: "eggplant, mozzarella, Parma ham" }, price: "13,00 € / 14,50 €" },
      { nr: "31", name: { de: "Pizza della Casa", it: "Pizza della Casa", en: "Pizza della Casa" }, desc: { de: "Hauspizza mit allem Guten", it: "pizza della casa", en: "house special pizza" }, price: "14,00 € / 15,50 €" },
      { nr: "32", name: { de: "Pizza Mare e Monti", it: "Pizza Mare e Monti", en: "Pizza Mare e Monti" }, desc: { de: "Shrimps, Rucola, Parmaschinken", it: "gamberi, rucola, prosciutto di Parma", en: "shrimp, rocket, Parma ham" }, price: "14,00 € / 15,50 €" },
    ],
  },
  {
    id: "fleisch",
    title: { de: "Fleisch", it: "Carne", en: "Meat" },
    items: [
      { nr: "181", name: { de: "Schnitzel Wiener Art", it: "Cotoletta alla Viennese", en: "Wiener Schnitzel" }, desc: { de: "", it: "", en: "" }, price: "15,50 €" },
      { nr: "186", name: { de: "Cordon Bleu", it: "Cordon Bleu", en: "Cordon Bleu" }, desc: { de: "", it: "", en: "" }, price: "18,50 €" },
      { nr: "206", name: { de: "Rumpsteak mit Champignons", it: "Rumpsteak con funghi", en: "Rump steak with mushrooms" }, desc: { de: "und Zwiebeln", it: "e cipolle", en: "and onions" }, price: "26,00 €" },
      { nr: "208", name: { de: "Pfeffersteak", it: "Bistecca al Pepe", en: "Pepper Steak" }, desc: { de: "grüner Pfeffer in feiner Soße", it: "pepe verde in salsa fine", en: "green pepper in fine sauce" }, price: "26,00 €" },
    ],
  },
  {
    id: "fisch",
    title: { de: "Fisch & Meeresfrüchte", it: "Pesce & Frutti di Mare", en: "Fish & Seafood" },
    items: [
      { nr: "251", name: { de: "Calamari Fritti", it: "Calamari Fritti", en: "Fried Calamari" }, desc: { de: "mit Salat und Toastbrot", it: "con insalata e pane", en: "with salad and bread" }, price: "19,50 €" },
      { nr: "253", name: { de: "Filetto di Salmone al Vino Bianco", it: "Filetto di Salmone al Vino Bianco", en: "Salmon fillet in white wine" }, desc: { de: "Bandnudeln, Spinat, Sahnesoße, Salat", it: "tagliatelle, spinaci, panna, insalata", en: "tagliatelle, spinach, cream, salad" }, price: "24,50 €" },
      { nr: "101", name: { de: "Muscheln in Weißweinsoße", it: "Cozze al Vino Bianco", en: "Mussels in white wine" }, desc: { de: "mit Pizzabrot", it: "con pane", en: "with bread" }, price: "18,50 €" },
    ],
  },
];
