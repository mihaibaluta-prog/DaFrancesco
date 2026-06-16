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
  // ─── ANTIPASTI ────────────────────────────────────────────────────────────
  {
    id: "antipasti",
    title: { de: "Antipasti", it: "Antipasti", en: "Starters" },
    items: [
      { nr: "51", name: { de: "Bruschetta", it: "Bruschetta", en: "Bruschetta" }, desc: { de: "mit Tomaten und Knoblauch", it: "con pomodoro e aglio", en: "with tomato and garlic" }, price: "6,50 €" },
      { nr: "52", name: { de: "Pizzabrot mit Kräuterbutter", it: "Pane con burro alle erbe", en: "Bread with herb butter" }, desc: { de: "", it: "", en: "" }, price: "4,50 €" },
      { nr: "53", name: { de: "Carpaccio di Manzo", it: "Carpaccio di Manzo", en: "Beef Carpaccio" }, desc: { de: "hauchdünne Rinderfiletscheiben mit Rucola und Parmesankäse, dazu Pizzabrot", it: "fettine sottili di filetto di manzo con rucola e parmigiano, con pane", en: "thin beef fillet slices with rocket and parmesan, with bread" }, price: "12,90 €" },
      { nr: "54", name: { de: "Scampi alla Mediterranea", it: "Scampi alla Mediterranea", en: "Mediterranean Scampi" }, desc: { de: "Sechs Scampi leicht angebraten auf grünem Salat, mit Weißbrot", it: "sei scampi leggermente rosolati su insalata verde, con pane bianco", en: "six scampi lightly sautéed on green salad, with white bread" }, price: "18,50 €" },
      { nr: "55", name: { de: "Pizzabrot mit Knoblauch", it: "Pane all'aglio", en: "Garlic bread" }, desc: { de: "", it: "", en: "" }, price: "4,50 €" },
      { nr: "57", name: { de: "Antipasto Misto", it: "Antipasto Misto", en: "Mixed Antipasto" }, desc: { de: "gemischter Vorspeisenteller mit Weißbrot", it: "piatto misto di antipasti con pane bianco", en: "mixed starter platter with white bread" }, price: "13,00 €" },
      { nr: "58", name: { de: "Antipasto di Verdure", it: "Antipasto di Verdure", en: "Vegetable Antipasto" }, desc: { de: "Gemüseteller mit Weißbrot", it: "piatto di verdure con pane bianco", en: "vegetable platter with white bread" }, price: "13,00 €" },
      { nr: "59", name: { de: "Carpaccio di Tonno", it: "Carpaccio di Tonno", en: "Tuna Carpaccio" }, desc: { de: "hauchdünne Thunfischfiletscheiben mit Rucola, dazu Pizzabrot", it: "fettine sottili di filetto di tonno con rucola, con pane", en: "thin tuna fillet slices with rocket, with bread" }, price: "14,50 €" },
      { nr: "60", name: { de: "Carpaccio di Salmone", it: "Carpaccio di Salmone", en: "Salmon Carpaccio" }, desc: { de: "hauchdünne Lachsfiletscheiben mit Rucola, dazu Pizzabrot", it: "fettine sottili di filetto di salmone con rucola, con pane", en: "thin salmon fillet slices with rocket, with bread" }, price: "13,50 €" },
    ],
  },

  // ─── SUPPEN ───────────────────────────────────────────────────────────────
  {
    id: "suppen",
    title: { de: "Suppen", it: "Zuppe", en: "Soups" },
    items: [
      { nr: "91", name: { de: "Minestrone", it: "Minestrone", en: "Minestrone" }, desc: { de: "Gemüsesuppe", it: "zuppa di verdure", en: "vegetable soup" }, price: "6,50 €" },
      { nr: "93", name: { de: "Tomatensuppe", it: "Zuppa di Pomodoro", en: "Tomato Soup" }, desc: { de: "mit Toastbrot", it: "con pane tostato", en: "with toasted bread" }, price: "6,50 €" },
      { nr: "95", name: { de: "Zwiebelsuppe", it: "Zuppa di Cipolle", en: "Onion Soup" }, desc: { de: "", it: "", en: "" }, price: "6,50 €" },
    ],
  },

  // ─── SALATE ───────────────────────────────────────────────────────────────
  {
    id: "salate",
    title: { de: "Salate", it: "Insalate", en: "Salads" },
    items: [
      { nr: "71", name: { de: "Gemischter Salat", it: "Insalata Mista", en: "Mixed Salad" }, desc: { de: "", it: "", en: "" }, price: "6,50 €" },
      { nr: "72", name: { de: "Insalata Verde", it: "Insalata Verde", en: "Green Salad" }, desc: { de: "grüner Salat", it: "insalata verde", en: "green salad" }, price: "6,00 €" },
      { nr: "73", name: { de: "Italienischer Salat", it: "Insalata Italiana", en: "Italian Salad" }, desc: { de: "gemischter Salat mit Formvorderschinken, Käse und Ei", it: "insalata mista con prosciutto, formaggio e uovo", en: "mixed salad with ham, cheese and egg" }, price: "11,00 €" },
      { nr: "74", name: { de: "Rucolasalat", it: "Insalata di Rucola", en: "Rocket Salad" }, desc: { de: "mit Rucola und Parmesankäse", it: "rucola e parmigiano", en: "with rocket and parmesan" }, price: "11,00 €" },
      { nr: "75", name: { de: "Caprese", it: "Caprese", en: "Caprese" }, desc: { de: "mit Tomaten und Mozzarella", it: "pomodoro e mozzarella", en: "with tomato and mozzarella" }, price: "10,50 €" },
      { nr: "76", name: { de: "Insalata Frutti di Mare", it: "Insalata Frutti di Mare", en: "Seafood Salad" }, desc: { de: "Salatteller mit Meeresfrüchten", it: "insalata con frutti di mare", en: "salad with seafood" }, price: "13,00 €" },
      { nr: "77", name: { de: "Insalata Venezia", it: "Insalata Venezia", en: "Venezia Salad" }, desc: { de: "Salatteller mit Thunfisch und Zwiebeln", it: "insalata con tonno e cipolle", en: "salad with tuna and onions" }, price: "12,50 €" },
      { nr: "78", name: { de: "Insalata Pollo", it: "Insalata Pollo", en: "Chicken Salad" }, desc: { de: "Salatteller mit Hähnchenbruststreifen und Gemüse", it: "insalata con straccetti di pollo e verdure", en: "salad with chicken breast strips and vegetables" }, price: "15,50 €" },
      { nr: "79", name: { de: "Insalata dello Chef", it: "Insalata dello Chef", en: "Chef's Salad" }, desc: { de: "Salatteller mit Rinderstreifen und Gemüse", it: "insalata con straccetti di manzo e verdure", en: "salad with beef strips and vegetables" }, price: "17,50 €" },
    ],
  },

  // ─── SPAGHETTI ────────────────────────────────────────────────────────────
  {
    id: "spaghetti",
    title: { de: "Spaghetti", it: "Spaghetti", en: "Spaghetti" },
    items: [
      { nr: "111", name: { de: "Spaghetti Napoli", it: "Spaghetti Napoli", en: "Spaghetti Napoli" }, desc: { de: "in Tomatensoße", it: "al pomodoro", en: "in tomato sauce" }, price: "10,00 €" },
      { nr: "112", name: { de: "Spaghetti Bolognese", it: "Spaghetti Bolognese", en: "Spaghetti Bolognese" }, desc: { de: "in Hackfleisch-Soße", it: "ragù di carne", en: "in meat sauce" }, price: "10,50 €" },
      { nr: "113", name: { de: "Spaghetti Aglio e Olio", it: "Spaghetti Aglio e Olio", en: "Spaghetti Aglio e Olio" }, desc: { de: "mit Knoblauch und Olivenöl – leicht scharf", it: "con aglio e olio d'oliva – leggermente piccante", en: "with garlic and olive oil – mildly spicy" }, price: "10,50 €" },
      { nr: "114", name: { de: "Spaghetti Pesto", it: "Spaghetti Pesto", en: "Spaghetti Pesto" }, desc: { de: "in Basilikumsoße", it: "al pesto di basilico", en: "in basil pesto sauce" }, price: "11,50 €" },
      { nr: "117", name: { de: "Spaghetti Carbonara", it: "Spaghetti Carbonara", en: "Spaghetti Carbonara" }, desc: { de: "mit Formvorderschinken, Ei und Sahnesoße", it: "con prosciutto, uovo e panna", en: "with ham, egg and cream sauce" }, price: "12,00 €" },
      { nr: "118", name: { de: "Spaghetti Frutti di Mare", it: "Spaghetti Frutti di Mare", en: "Spaghetti Seafood" }, desc: { de: "mit Meeresfrüchten", it: "con frutti di mare", en: "with seafood" }, price: "15,00 €" },
    ],
  },

  // ─── RIGATONI ─────────────────────────────────────────────────────────────
  {
    id: "rigatoni",
    title: { de: "Rigatoni", it: "Rigatoni", en: "Rigatoni" },
    items: [
      { nr: "121", name: { de: "Rigatoni Broccoli", it: "Rigatoni Broccoli", en: "Rigatoni Broccoli" }, desc: { de: "Broccoli in Sahnesoße", it: "broccoli in salsa di panna", en: "broccoli in cream sauce" }, price: "12,00 €" },
      { nr: "122", name: { de: "Rigatoni Al Forno", it: "Rigatoni Al Forno", en: "Rigatoni Al Forno" }, desc: { de: "in Hackfleisch-Sahnesoße und mit Käse überbacken", it: "in ragù con panna e gratinati al formaggio", en: "in meat cream sauce, gratinated with cheese" }, price: "11,50 €" },
      { nr: "123", name: { de: "Rigatoni Dello Chef", it: "Rigatoni Dello Chef", en: "Rigatoni Chef's Style" }, desc: { de: "mit Erbsen, Champignons und Formvorderschinken in Sahnesoße", it: "con piselli, funghi e prosciutto in salsa di panna", en: "with peas, mushrooms and ham in cream sauce" }, price: "12,50 €" },
      { nr: "125", name: { de: "Rigatoni Arrabbiata", it: "Rigatoni Arrabbiata", en: "Rigatoni Arrabbiata" }, desc: { de: "in Tomatensoße (scharf), Zwiebeln und Tomaten", it: "in salsa di pomodoro (piccante), cipolle e pomodori", en: "in tomato sauce (spicy), onions and tomatoes" }, price: "11,50 €" },
      { nr: "128", name: { de: "Rigatoni Pollo", it: "Rigatoni Pollo", en: "Rigatoni Chicken" }, desc: { de: "mit Hähnchenbruststreifen in Tomatensoße", it: "con straccetti di pollo in salsa di pomodoro", en: "with chicken breast strips in tomato sauce" }, price: "13,50 €" },
      { nr: "129", name: { de: "Rigatoni Torresi", it: "Rigatoni Torresi", en: "Rigatoni Torresi" }, desc: { de: "mit Rindfleisch und Paprika in Tomatensoße", it: "con manzo e peperoni in salsa di pomodoro", en: "with beef and peppers in tomato sauce" }, price: "15,00 €" },
    ],
  },

  // ─── TAGLIATELLE ──────────────────────────────────────────────────────────
  {
    id: "tagliatelle",
    title: { de: "Tagliatelle", it: "Tagliatelle", en: "Tagliatelle" },
    items: [
      { nr: "131", name: { de: "Tagliatelle Contadina", it: "Tagliatelle Contadina", en: "Tagliatelle Contadina" }, desc: { de: "mit Gemüse in Tomaten-Sahnesoße", it: "con verdure in salsa di pomodoro e panna", en: "with vegetables in tomato cream sauce" }, price: "13,50 €" },
      { nr: "132", name: { de: "Tagliatelle Salmone", it: "Tagliatelle Salmone", en: "Tagliatelle Salmon" }, desc: { de: "mit Lachs in Sahnesoße", it: "con salmone in salsa di panna", en: "with salmon in cream sauce" }, price: "14,50 €" },
      { nr: "133", name: { de: "Tagliatelle Scampi", it: "Tagliatelle Scampi", en: "Tagliatelle Scampi" }, desc: { de: "mit frischen Tomaten, Scampi, Shrimps und Rucola", it: "con pomodori freschi, scampi, gamberi e rucola", en: "with fresh tomatoes, scampi, shrimps and rocket" }, price: "15,50 €" },
      { nr: "134", name: { de: "Tagliatelle Mare e Monti", it: "Tagliatelle Mare e Monti", en: "Tagliatelle Mare e Monti" }, desc: { de: "mit Steinpilzen und Shrimps in Tomaten-Sahnesoße", it: "con porcini e gamberi in salsa di pomodoro e panna", en: "with porcini mushrooms and shrimps in tomato cream sauce" }, price: "15,00 €" },
    ],
  },

  // ─── TORTELLINI ───────────────────────────────────────────────────────────
  {
    id: "tortellini",
    title: { de: "Tortellini", it: "Tortellini", en: "Tortellini" },
    items: [
      { nr: "136", name: { de: "Tortellini Panna", it: "Tortellini Panna", en: "Tortellini Panna" }, desc: { de: "mit Formvorderschinken in Sahnesoße", it: "con prosciutto in salsa di panna", en: "with ham in cream sauce" }, price: "12,50 €" },
      { nr: "137", name: { de: "Tortellini Spinaci e Gorgonzola", it: "Tortellini Spinaci e Gorgonzola", en: "Tortellini Spinach & Gorgonzola" }, desc: { de: "mit Spinat in Gorgonzola-Soße", it: "con spinaci in salsa di gorgonzola", en: "with spinach in gorgonzola sauce" }, price: "13,00 €" },
      { nr: "138", name: { de: "Tortellini Quattro Formaggi", it: "Tortellini Quattro Formaggi", en: "Tortellini Four Cheeses" }, desc: { de: "in Sahnesoße aus vier Käsesorten", it: "in salsa di panna ai quattro formaggi", en: "in cream sauce with four cheeses" }, price: "13,00 €" },
      { nr: "139", name: { de: "Tortellini Speciali", it: "Tortellini Speciali", en: "Tortellini Speciali" }, desc: { de: "mit Formvorderschinken und Zwiebeln, in Tomatensoße, mit Käse überbacken", it: "con prosciutto e cipolle, in salsa di pomodoro, gratinati al formaggio", en: "with ham and onions, in tomato sauce, gratinated with cheese" }, price: "13,00 €" },
      { nr: "140", name: { de: "Tortellini Al Forno", it: "Tortellini Al Forno", en: "Tortellini Al Forno" }, desc: { de: "mit Bolognese, Sahnesoße und mit Käse überbacken", it: "con bolognese, panna e gratinati al formaggio", en: "with bolognese, cream sauce, gratinated with cheese" }, price: "12,50 €" },
    ],
  },

  // ─── CANNELONI ────────────────────────────────────────────────────────────
  {
    id: "canneloni",
    title: { de: "Canneloni", it: "Canneloni", en: "Cannelloni" },
    items: [
      { nr: "150", name: { de: "Canneloni Alla Carne", it: "Canneloni Alla Carne", en: "Cannelloni Alla Carne" }, desc: { de: "gefüllt mit Hackfleisch, in Tomatensahnesoße, mit Käse überbacken", it: "ripieni di carne macinata, in salsa di pomodoro e panna, gratinati al formaggio", en: "filled with minced meat, in tomato cream sauce, gratinated with cheese" }, price: "13,00 €" },
      { nr: "151", name: { de: "Canneloni Ricotta e Spinaci", it: "Canneloni Ricotta e Spinaci", en: "Cannelloni Ricotta & Spinach" }, desc: { de: "gefüllt mit Ricotta und Spinat in Tomatensoße", it: "ripieni di ricotta e spinaci in salsa di pomodoro", en: "filled with ricotta and spinach in tomato sauce" }, price: "13,00 €" },
    ],
  },

  // ─── SPECIALITÁ / GNOCCHI ─────────────────────────────────────────────────
  {
    id: "specialita",
    title: { de: "Specialità & Gnocchi", it: "Specialità & Gnocchi", en: "Specialità & Gnocchi" },
    items: [
      { nr: "152", name: { de: "Lasagna Classica", it: "Lasagna Classica", en: "Classic Lasagna" }, desc: { de: "", it: "", en: "" }, price: "12,50 €" },
      { nr: "154", name: { de: "Combinazione", it: "Combinazione", en: "Combinazione" }, desc: { de: "drei Nudelsorten mit Hackfleisch-Sahnesoße und Käse überbacken", it: "tre tipi di pasta con ragù cremoso e gratinati al formaggio", en: "three pasta types with meat cream sauce and gratinated with cheese" }, price: "12,00 €" },
      { nr: "155", name: { de: "Tris di Pasta", it: "Tris di Pasta", en: "Tris di Pasta" }, desc: { de: "drei Nudelsorten mit drei verschiedenen Soßen", it: "tre tipi di pasta con tre salse diverse", en: "three pasta types with three different sauces" }, price: "14,50 €" },
      { nr: "156", name: { de: "Gnocchi Gorgonzola", it: "Gnocchi Gorgonzola", en: "Gnocchi Gorgonzola" }, desc: { de: "in Gorgonzola-Sahnesoße", it: "in salsa di gorgonzola e panna", en: "in gorgonzola cream sauce" }, price: "13,00 €" },
      { nr: "158", name: { de: "Gnocchi Bolognese", it: "Gnocchi Bolognese", en: "Gnocchi Bolognese" }, desc: { de: "in Hackfleischsoße", it: "in ragù di carne", en: "in meat sauce" }, price: "12,00 €" },
      { nr: "159", name: { de: "Gnocchi al Broccoli", it: "Gnocchi al Broccoli", en: "Gnocchi with Broccoli" }, desc: { de: "mit Broccoli in Sahnesoße", it: "con broccoli in salsa di panna", en: "with broccoli in cream sauce" }, price: "12,50 €" },
      { nr: "160", name: { de: "Gnocchi Quattro Formaggi", it: "Gnocchi Quattro Formaggi", en: "Gnocchi Four Cheeses" }, desc: { de: "mit 4 Käsesorten in Sahnesoße", it: "con 4 formaggi in salsa di panna", en: "with 4 cheeses in cream sauce" }, price: "13,00 €" },
    ],
  },

  // ─── PIZZA ────────────────────────────────────────────────────────────────
  {
    id: "pizza",
    title: { de: "Pizza (Ø 28 / 32 cm)", it: "Pizza (Ø 28 / 32 cm)", en: "Pizza (Ø 28 / 32 cm)" },
    items: [
      { nr: "1",  name: { de: "Pizza Margherita", it: "Pizza Margherita", en: "Pizza Margherita" }, desc: { de: "mit Tomaten und Käse", it: "pomodoro e mozzarella", en: "with tomato and cheese" }, price: "8,50 € / 10,00 €" },
      { nr: "2",  name: { de: "Pizza Cipolla", it: "Pizza Cipolla", en: "Pizza Cipolla" }, desc: { de: "mit Zwiebeln", it: "con cipolle", en: "with onions" }, price: "9,50 € / 11,00 €" },
      { nr: "3",  name: { de: "Pizza Salami", it: "Pizza Salami", en: "Pizza Salami" }, desc: { de: "", it: "", en: "" }, price: "9,50 € / 11,00 €" },
      { nr: "4",  name: { de: "Pizza Peperoniwurst", it: "Pizza Peperoniwurst", en: "Pizza Pepperoni" }, desc: { de: "", it: "", en: "" }, price: "9,50 € / 11,00 €" },
      { nr: "5",  name: { de: "Pizza Prosciutto", it: "Pizza Prosciutto", en: "Pizza Prosciutto" }, desc: { de: "mit Formvorderschinken", it: "con prosciutto cotto", en: "with cooked ham" }, price: "9,50 € / 11,00 €" },
      { nr: "6",  name: { de: "Pizza Funghi", it: "Pizza Funghi", en: "Pizza Funghi" }, desc: { de: "mit Champignons", it: "con funghi", en: "with mushrooms" }, price: "9,50 € / 11,00 €" },
      { nr: "7",  name: { de: "Pizza Romana", it: "Pizza Romana", en: "Pizza Romana" }, desc: { de: "mit Formvorderschinken und Champignons", it: "con prosciutto e funghi", en: "with ham and mushrooms" }, price: "10,00 € / 11,50 €" },
      { nr: "8",  name: { de: "Pizza Mary", it: "Pizza Mary", en: "Pizza Mary" }, desc: { de: "mit Peperoniwurst, Salami und Champignons", it: "con peperoniwurst, salame e funghi", en: "with pepperoni, salami and mushrooms" }, price: "10,50 € / 12,00 €" },
      { nr: "9",  name: { de: "Pizza Marinara", it: "Pizza Marinara", en: "Pizza Marinara" }, desc: { de: "mit Sardellen, Muscheln, Oregano und Knoblauch", it: "con alici, cozze, origano e aglio", en: "with anchovies, mussels, oregano and garlic" }, price: "12,00 € / 13,50 €" },
      { nr: "10", name: { de: "Pizza Speciale", it: "Pizza Speciale", en: "Pizza Speciale" }, desc: { de: "mit Salami, Peperoniwurst, Formvorderschinken, Champignons und grüne Peperoni", it: "salame, peperoniwurst, prosciutto, funghi e peperoni verdi", en: "salami, pepperoni, ham, mushrooms and green peppers" }, price: "12,00 € / 13,50 €" },
      { nr: "11", name: { de: "Pizza Napoli", it: "Pizza Napoli", en: "Pizza Napoli" }, desc: { de: "mit Sardellen, Oliven und Kapern", it: "con alici, olive e capperi", en: "with anchovies, olives and capers" }, price: "11,00 € / 12,50 €" },
      { nr: "12", name: { de: "Pizza Zingara", it: "Pizza Zingara", en: "Pizza Zingara" }, desc: { de: "mit Formvorderschinken, Salami und Champignons", it: "con prosciutto, salame e funghi", en: "with ham, salami and mushrooms" }, price: "10,50 € / 12,00 €" },
      { nr: "13", name: { de: "Pizza Quattro Stagioni", it: "Pizza Quattro Stagioni", en: "Pizza Four Seasons" }, desc: { de: "mit Paprika, Salami, Formvorderschinken, Champignons und Spargel", it: "peperoni, salame, prosciutto, funghi e asparagi", en: "peppers, salami, ham, mushrooms and asparagus" }, price: "12,00 € / 13,50 €" },
      { nr: "14", name: { de: "Pizza Piccante (scharf)", it: "Pizza Piccante", en: "Pizza Piccante (spicy)" }, desc: { de: "mit Peperoniwurst, Formvorderschinken, Champignons, Artischocken und grüne Peperoni", it: "peperoniwurst, prosciutto, funghi, carciofi e peperoni verdi", en: "pepperoni, ham, mushrooms, artichokes and green peppers" }, price: "12,00 € / 13,50 €" },
      { nr: "15", name: { de: "Pizza Venezia", it: "Pizza Venezia", en: "Pizza Venezia" }, desc: { de: "mit Thunfisch und Zwiebeln", it: "con tonno e cipolle", en: "with tuna and onions" }, price: "12,50 € / 14,00 €" },
      { nr: "16", name: { de: "Pizza Capricciosa", it: "Pizza Capricciosa", en: "Pizza Capricciosa" }, desc: { de: "mit Formvorderschinken, Champignons, Artischocken und Paprika", it: "prosciutto, funghi, carciofi e peperoni", en: "ham, mushrooms, artichokes and peppers" }, price: "12,00 € / 13,50 €" },
      { nr: "17", name: { de: "Pizza Hawaii", it: "Pizza Hawaii", en: "Pizza Hawaii" }, desc: { de: "mit Formvorderschinken und Ananas", it: "con prosciutto e ananas", en: "with ham and pineapple" }, price: "11,00 € / 12,50 €" },
      { nr: "18", name: { de: "Pizza Bolognese", it: "Pizza Bolognese", en: "Pizza Bolognese" }, desc: { de: "mit Hackfleisch-Soße und Käse", it: "con ragù e formaggio", en: "with meat sauce and cheese" }, price: "11,00 € / 12,50 €" },
      { nr: "19", name: { de: "Pizza Calzone", it: "Pizza Calzone", en: "Pizza Calzone" }, desc: { de: "gefüllt mit Salami, Formvorderschinken, Champignons und Peperoniwurst", it: "ripiena di salame, prosciutto, funghi e peperoniwurst", en: "filled with salami, ham, mushrooms and pepperoni" }, price: "11,50 € / 13,00 €" },
      { nr: "20", name: { de: "Pizza Sole", it: "Pizza Sole", en: "Pizza Sole" }, desc: { de: "mit Champignons, Formvorderschinken und Spiegelei", it: "con funghi, prosciutto e uovo al tegamino", en: "with mushrooms, ham and fried egg" }, price: "11,00 € / 12,50 €" },
      { nr: "21", name: { de: "Pizza Vesuvio (doppelt gefüllt)", it: "Pizza Vesuvio (doppio ripieno)", en: "Pizza Vesuvio (double-stuffed)" }, desc: { de: "mit Salami, Champignons, Formvorderschinken und Peperoniwurst", it: "salame, funghi, prosciutto e peperoniwurst", en: "salami, mushrooms, ham and pepperoni" }, price: "12,50 € / 14,00 €" },
      { nr: "22", name: { de: "Pizza Verde", it: "Pizza Verde", en: "Pizza Verde" }, desc: { de: "mit Spinat und Parmesankäse", it: "con spinaci e parmigiano", en: "with spinach and parmesan" }, price: "12,00 € / 13,50 €" },
      { nr: "23", name: { de: "Pizza Vegetaria", it: "Pizza Vegetaria", en: "Pizza Vegetaria" }, desc: { de: "mit Gemüse", it: "con verdure", en: "with vegetables" }, price: "12,50 € / 14,00 €" },
      { nr: "24", name: { de: "Pizza Quattro Formaggi", it: "Pizza Quattro Formaggi", en: "Pizza Four Cheeses" }, desc: { de: "mit vier verschiedenen Käsesorten", it: "con quattro formaggi diversi", en: "with four different cheeses" }, price: "12,50 € / 14,00 €" },
      { nr: "25", name: { de: "Pizza Frutti di Mare", it: "Pizza Frutti di Mare", en: "Pizza Seafood" }, desc: { de: "mit Meeresfrüchten", it: "con frutti di mare", en: "with seafood" }, price: "13,50 € / 15,00 €" },
      { nr: "26", name: { de: "Pizza Schwarzwald", it: "Pizza Schwarzwald", en: "Pizza Schwarzwald" }, desc: { de: "mit Pfifferlingen, Speck und Zwiebeln", it: "con finferli, pancetta e cipolle", en: "with chanterelles, bacon and onions" }, price: "13,50 € / 15,00 €" },
      { nr: "27", name: { de: "Pizza Italia", it: "Pizza Italia", en: "Pizza Italia" }, desc: { de: "mit Mozzarella, frischen Tomaten und Basilikum", it: "con mozzarella, pomodori freschi e basilico", en: "with mozzarella, fresh tomatoes and basil" }, price: "10,50 € / 12,00 €" },
      { nr: "28", name: { de: "Pizza Parma", it: "Pizza Parma", en: "Pizza Parma" }, desc: { de: "mit Auberginen, Mozzarella und Parmaschinken", it: "melanzane, mozzarella e prosciutto di Parma", en: "eggplant, mozzarella and Parma ham" }, price: "13,00 € / 14,50 €" },
      { nr: "29", name: { de: "Pizza Scampi", it: "Pizza Scampi", en: "Pizza Scampi" }, desc: { de: "mit Mozzarella, Scampi, Shrimps und frischen Tomaten", it: "mozzarella, scampi, gamberi e pomodori freschi", en: "mozzarella, scampi, shrimps and fresh tomatoes" }, price: "14,00 € / 15,50 €" },
      { nr: "30", name: { de: "Pizza Granata", it: "Pizza Granata", en: "Pizza Granata" }, desc: { de: "mit Salami, Formvorderschinken, Champignons, grüne Peperoni und Oliven", it: "salame, prosciutto, funghi, peperoni verdi e olive", en: "salami, ham, mushrooms, green peppers and olives" }, price: "13,00 € / 14,50 €" },
      { nr: "31", name: { de: "Pizza della Casa", it: "Pizza della Casa", en: "Pizza della Casa" }, desc: { de: "mit Salami, Formvorderschinken, Champignons, Peperoniwurst, Paprika, grüne Peperoni, Spargel, Artischocken und Oliven", it: "salame, prosciutto, funghi, peperoniwurst, peperoni, asparagi, carciofi e olive", en: "salami, ham, mushrooms, pepperoni, peppers, asparagus, artichokes and olives" }, price: "14,00 € / 15,50 €" },
      { nr: "32", name: { de: "Pizza Mare e Monti", it: "Pizza Mare e Monti", en: "Pizza Mare e Monti" }, desc: { de: "mit Shrimps, Rucola und Parmaschinken", it: "gamberi, rucola e prosciutto di Parma", en: "shrimp, rocket and Parma ham" }, price: "14,00 € / 15,50 €" },
      { nr: "33", name: { de: "Pizza Tricolore", it: "Pizza Tricolore", en: "Pizza Tricolore" }, desc: { de: "mit frischen Tomaten, Rucola und Parmesankäse", it: "pomodori freschi, rucola e parmigiano", en: "fresh tomatoes, rocket and parmesan" }, price: "12,50 € / 14,00 €" },
      { nr: "34", name: { de: "Pizza Stefano", it: "Pizza Stefano", en: "Pizza Stefano" }, desc: { de: "mit Formvorderschinken, Peperoniwurst und Mozzarella", it: "prosciutto, peperoniwurst e mozzarella", en: "ham, pepperoni and mozzarella" }, price: "11,00 € / 12,50 €" },
      { nr: "35", name: { de: "Pizza Fresca", it: "Pizza Fresca", en: "Pizza Fresca" }, desc: { de: "Margherita mit frischen Tomaten, Mozzarella und Rucola", it: "margherita con pomodori freschi, mozzarella e rucola", en: "margherita with fresh tomatoes, mozzarella and rocket" }, price: "12,50 € / 14,00 €" },
      { nr: "36", name: { de: "Pizza Speckfladen mit Zwiebeln", it: "Pizza Speck e Cipolle", en: "Pizza Speck & Onion" }, desc: { de: "mit Speck, Zwiebeln und Käse", it: "con pancetta, cipolle e formaggio", en: "with bacon, onions and cheese" }, price: "11,50 € / 13,00 €" },
      { nr: "37", name: { de: "Pizza Sapri", it: "Pizza Sapri", en: "Pizza Sapri" }, desc: { de: "mit frischem, gegrilltem Gemüse", it: "con verdure fresche grigliate", en: "with fresh grilled vegetables" }, price: "13,50 € / 15,00 €" },
      { nr: "38", name: { de: "Pizza Vanessa", it: "Pizza Vanessa", en: "Pizza Vanessa" }, desc: { de: "mit Formvorderschinken, Peperoniwurst, Paprika, Champignons und Zwiebeln", it: "prosciutto, peperoniwurst, peperoni, funghi e cipolle", en: "ham, pepperoni, peppers, mushrooms and onions" }, price: "12,50 € / 14,00 €" },
    ],
  },

  // ─── VOM SCHWEIN ──────────────────────────────────────────────────────────
  {
    id: "schwein",
    title: { de: "Vom Schwein", it: "Carne di Maiale", en: "Pork dishes" },
    items: [
      { nr: "181", name: { de: "Schnitzel Wiener Art", it: "Cotoletta alla Viennese", en: "Wiener Schnitzel" }, desc: { de: "mit Pommes Frites und Salat", it: "con patatine fritte e insalata", en: "with french fries and salad" }, price: "15,50 €" },
      { nr: "182", name: { de: "Jägerschnitzel", it: "Schnitzel alla Cacciatora", en: "Hunter's Schnitzel" }, desc: { de: "mit Pommes Frites und Salat", it: "con patatine fritte e insalata", en: "with french fries and salad" }, price: "16,50 €" },
      { nr: "183", name: { de: "Zigeuner Schnitzel", it: "Schnitzel alla Zingara", en: "Gypsy Schnitzel" }, desc: { de: "mit Pommes Frites und Salat", it: "con patatine fritte e insalata", en: "with french fries and salad" }, price: "17,50 €" },
      { nr: "184", name: { de: "Rahmschnitzel", it: "Schnitzel alla Panna", en: "Cream Schnitzel" }, desc: { de: "mit Pommes Frites und Salat", it: "con patatine fritte e insalata", en: "with french fries and salad" }, price: "16,50 €" },
      { nr: "185", name: { de: "Parmesanschnitzel", it: "Cotoletta alla Parmigiana", en: "Parmesan Schnitzel" }, desc: { de: "in Tomatensoße und mit Käse überbacken, dazu Pommes Frites und Salat", it: "in salsa di pomodoro e gratinato al formaggio, con patatine fritte e insalata", en: "in tomato sauce gratinated with cheese, with french fries and salad" }, price: "17,50 €" },
      { nr: "186", name: { de: "Cordon Bleu", it: "Cordon Bleu", en: "Cordon Bleu" }, desc: { de: "mit Pommes Frites und Salat", it: "con patatine fritte e insalata", en: "with french fries and salad" }, price: "18,50 €" },
      { nr: "187", name: { de: "Scaloppina alla Bolognese", it: "Scaloppina alla Bolognese", en: "Scaloppina alla Bolognese" }, desc: { de: "Schnitzel Natur in Hackfleisch-Soße, mit Spaghetti und Salat", it: "cotoletta naturale in ragù di carne, con spaghetti e insalata", en: "natural schnitzel in meat sauce, with spaghetti and salad" }, price: "18,50 €" },
      { nr: "188", name: { de: "Scaloppina al Vino Bianco", it: "Scaloppina al Vino Bianco", en: "Scaloppina al Vino Bianco" }, desc: { de: "Schnitzel Natur in Weißweinsoße, mit Pommes Frites und Salat", it: "cotoletta naturale in salsa al vino bianco, con patatine fritte e insalata", en: "natural schnitzel in white wine sauce, with french fries and salad" }, price: "18,50 €" },
    ],
  },

  // ─── VOM RIND ─────────────────────────────────────────────────────────────
  {
    id: "rind",
    title: { de: "Vom Rind", it: "Carne di Manzo", en: "Beef dishes" },
    items: [
      { nr: "206", name: { de: "Rumpsteak mit Champignons und Zwiebeln", it: "Rumpsteak con funghi e cipolle", en: "Rump steak with mushrooms and onions" }, desc: { de: "mit Pommes Frites und Salat", it: "con patatine fritte e insalata", en: "with french fries and salad" }, price: "26,00 €" },
      { nr: "207", name: { de: "Rumpsteak mit Kräuterbutter", it: "Rumpsteak con burro alle erbe", en: "Rump steak with herb butter" }, desc: { de: "mit Pommes Frites und Salat", it: "con patatine fritte e insalata", en: "with french fries and salad" }, price: "25,00 €" },
      { nr: "208", name: { de: "Zartes Pfeffersteak", it: "Tenero Bistecca al Pepe", en: "Tender Pepper Steak" }, desc: { de: "mit grünem Pfeffer in feiner Soße, dazu Pommes Frites und Salat", it: "con pepe verde in salsa fine, con patatine fritte e insalata", en: "with green pepper in fine sauce, with french fries and salad" }, price: "26,00 €" },
    ],
  },

  // ─── FISCH-SPEZIALITÄTEN ──────────────────────────────────────────────────
  {
    id: "fisch",
    title: { de: "Fisch-Spezialitäten", it: "Specialità di Pesce", en: "Fish Specialities" },
    items: [
      { nr: "251", name: { de: "Calamari Fritti", it: "Calamari Fritti", en: "Fried Calamari" }, desc: { de: "frittiert, mit Salat und Toastbrot", it: "fritti, con insalata e pane tostato", en: "fried, with salad and toast" }, price: "19,50 €" },
      { nr: "252", name: { de: "Calamari alla Griglia", it: "Calamari alla Griglia", en: "Grilled Calamari" }, desc: { de: "am Grill, mit Salat und Pizzabrot", it: "alla griglia, con insalata e pane", en: "grilled, with salad and bread" }, price: "20,50 €" },
      { nr: "253", name: { de: "Filetto di Salmone al Vino Bianco", it: "Filetto di Salmone al Vino Bianco", en: "Salmon Fillet in White Wine" }, desc: { de: "Lachsfilet in Weißweinsoße, dazu Bandnudeln mit Spinat, Sahnesoße und Salat", it: "filetto di salmone al vino bianco, con tagliatelle agli spinaci, panna e insalata", en: "salmon fillet in white wine sauce, with tagliatelle with spinach, cream and salad" }, price: "24,50 €" },
      { nr: "257", name: { de: "Filetto di Salmone al Vino Bianco", it: "Filetto di Salmone al Vino Bianco", en: "Salmon Fillet in White Wine" }, desc: { de: "Lachsfilet in Weißweinsoße, dazu Bandnudeln mit Spinat und Sahnesoße", it: "filetto di salmone al vino bianco, con tagliatelle agli spinaci e panna", en: "salmon fillet in white wine sauce, with tagliatelle with spinach and cream" }, price: "21,00 €" },
    ],
  },

  // ─── MUSCHELN ─────────────────────────────────────────────────────────────
  {
    id: "muscheln",
    title: { de: "Muscheln", it: "Cozze", en: "Mussels" },
    items: [
      { nr: "101", name: { de: "Muscheln in Weißweinsoße", it: "Cozze al Vino Bianco", en: "Mussels in white wine sauce" }, desc: { de: "mit Pizzabrot", it: "con pane", en: "with bread" }, price: "18,50 €" },
      { nr: "102", name: { de: "Muscheln in Tomatensoße", it: "Cozze al Pomodoro", en: "Mussels in tomato sauce" }, desc: { de: "mit Pizzabrot", it: "con pane", en: "with bread" }, price: "18,50 €" },
    ],
  },
];
