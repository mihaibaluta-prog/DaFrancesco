import { useEffect, useState } from "react";
import { useI18n, type Lang } from "@/lib/i18n";
import { menuCategories } from "@/lib/menu-data";

import heroPizza from "@/assets/photos/hero-pizza.jpg";
import exterior from "@/assets/photos/exterior.jpeg";
import interior from "@/assets/photos/interior.jpg";
import snitzel from "@/assets/photos/snitzel.jpeg";
import wine from "@/assets/photos/wine.jpg";
import salat from "@/assets/photos/salat.jpeg";
import vegetables from "@/assets/photos/vegetables.png";
import antipasto from "@/assets/photos/antipasto.png";
import pizza from "@/assets/photos/pizza.jpeg";


const PHONE = "09307440";
const PHONE_HUMAN = "09307440";
const ADDRESS = "Oberes Tor 14, 97237 Altertheim-Oberaltertheim";
const MAPS_LINK = "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(ADDRESS);
const MAPS_EMBED = "https://www.google.com/maps?q=" + encodeURIComponent(ADDRESS) + "&output=embed";
const GOOGLE_REVIEWS_LINK = "https://maps.google.com/?q=Da+Francesco+Ristorante+%26+Pizzeria+Altertheim";

// Hours: 0=Sun ... 6=Sat. null = closed.
const HOURS: Record<number, [number, number] | null> = {
  0: [11, 22], // Sun
  1: null,     // Mon
  2: null,     // Tue
  3: [16, 22], // Wed
  4: [16, 22], // Thu
  5: [16, 22], // Fri
  6: [14, 22], // Sat
};

function useIsOpen() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const h = now.getHours() + now.getMinutes() / 60;
      const slot = HOURS[now.getDay()];
      setOpen(!!slot && h >= slot[0] && h < slot[1]);
    };
    tick();
    const id = setInterval(tick, 60000);
    return () => clearInterval(id);
  }, []);
  return open;
}

function Nav() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  const links = [
    ["about", t("nav_about")],
    ["menu", t("nav_menu")],
    ["events", t("nav_events")],
    ["hours", t("nav_hours")],
    ["reviews", t("nav_reviews")],
    ["reservation", t("nav_reservation")],
    ["contact", t("nav_contact")],
  ] as const;
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-cream/95 backdrop-blur shadow-card" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className={`font-display text-xl md:text-2xl font-bold tracking-wide ${scrolled ? "text-forest" : "text-cream"}`}>
          Da <span className="text-gold">Francesco</span>
        </a>
        <nav className="hidden lg:flex items-center gap-7">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={`text-sm font-medium uppercase tracking-widest transition-colors ${scrolled ? "text-forest hover:text-burgundy" : "text-cream/90 hover:text-gold"}`}>
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1 text-xs font-medium">
            {(["de", "it", "en"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-1 rounded uppercase tracking-wider transition-colors ${
                  lang === l
                    ? "bg-burgundy text-cream"
                    : scrolled ? "text-forest hover:bg-forest/10" : "text-cream/80 hover:text-gold"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <a
            href={`tel:${PHONE}`}
            className="hidden md:inline-flex items-center gap-2 bg-burgundy text-cream px-4 py-2 text-sm font-medium rounded hover:bg-burgundy/90 transition-colors"
          >
            ☎ {PHONE_HUMAN}
          </a>
          <button onClick={() => setOpen(!open)} className={`lg:hidden p-2 ${scrolled ? "text-forest" : "text-cream"}`} aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-cream border-t border-border">
          <nav className="px-6 py-4 flex flex-col gap-3">
            {links.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="text-forest font-medium py-2">
                {label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              {(["de", "it", "en"] as Lang[]).map((l) => (
                <button key={l} onClick={() => setLang(l)} className={`px-3 py-1.5 rounded text-xs font-semibold uppercase ${lang === l ? "bg-burgundy text-cream" : "border border-border text-forest"}`}>
                  {l}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroPizza} alt="Authentische italienische Pizza" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(20,20,20,0.55) 0%, rgba(20,20,20,0.45) 50%, rgba(20,20,20,0.8) 100%)" }} />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-cream animate-fade-up">
        <div className="gold-divider text-2xl mb-6 relative top-2">Ristorante & Pizzeria</div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
          {t("hero_title")}
        </h1>
        <p className="text-lg md:text-2xl font-light max-w-2xl mx-auto mb-10 text-cream/120">
          {t("hero_subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="#reservation" onClick={e => { e.preventDefault(); document.getElementById("reservation")?.scrollIntoView({ behavior: "smooth" }); }} className="inline-flex items-center gap-2 bg-burgundy hover:bg-burgundy/90 text-cream px-8 py-4 rounded font-semibold tracking-wide transition-all hover:scale-105 shadow-elegant">
            🍽 {t("cta_reserve")}
          </a>
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-forest px-8 py-4 rounded font-semibold tracking-wide transition-all">
            ☎ {t("cta_call")}
          </a>
        </div>
       <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm md:text-base text-cream/85">
  <a
    href={GOOGLE_REVIEWS_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-x-8 gap-y-3 hover:scale-105 transition-transform"
  >
    <span className="flex items-center gap-1.5">
      <span className="text-gold text-lg">★</span> 4.4 Google
    </span>
    <span>📝 212 Bewertungen</span>
  </a>

  <span className="hidden md:inline">📍 {ADDRESS}</span>

  <a href={`tel:${PHONE}`} className="hover:text-gold transition-colors">
    📞 {PHONE_HUMAN}
  </a>
</div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
      </div>
    </section>
  );
}

function SectionHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="text-center mb-12">
      <div className="gold-divider text-xl mb-3">{kicker}</div>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-forest">{title}</h2>
    </div>
  );
}

function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <img src={interior} alt="Restaurant interior" className="rounded-lg shadow-elegant w-full h-[500px] object-cover" loading="lazy" />
          <div className="absolute -bottom-8 -right-4 md:-right-8 bg-burgundy text-cream p-6 md:p-8 rounded-lg shadow-elegant max-w-[240px]">
            <div className="font-script text-gold text-2xl mb-1">since</div>
            <div className="font-display text-3xl md:text-4xl font-bold">Tradizione</div>
            <div className="text-sm mt-2 text-cream/80">Italiana autentica</div>
          </div>
        </div>
        <div>
          <div className="gold-divider text-xl mb-3">{t("about_kicker")}</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest mb-6">{t("about_title")}</h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-8">{t("about_text")}</p>
          <div className="flex items-center gap-6 border-t border-border pt-6">
            <div>
              <a
                href={GOOGLE_REVIEWS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:scale-105 transition-transform"
              >
                <div className="font-display text-4xl font-bold text-burgundy">4.4<span className="text-gold">★</span></div>
                <div className="text-sm text-muted-foreground underline">Google Rating</div>
              </a>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <div className="font-display text-4xl font-bold text-forest">212</div>
              <div className="text-sm text-muted-foreground">Bewertungen</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const { t } = useI18n();
  const items = [
    { icon: "🍕", t: t("why_1_t"), d: t("why_1_d") },
    { icon: "🌿", t: t("why_2_t"), d: t("why_2_d") },
    { icon: "🍷", t: t("why_3_t"), d: t("why_3_d") },
  ];
  return (
    <section className="py-24 bg-forest text-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${snitzel})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="gold-divider text-xl mb-3">Perché Da Francesco</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">{t("why_title")}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((i, idx) => (
            <div key={idx} className="text-center p-6 border border-gold/30 rounded-lg backdrop-blur-sm bg-forest/40 hover:bg-burgundy/30 transition-colors">
              <div className="text-5xl mb-4">{i.icon}</div>
              <h3 className="font-display text-xl font-semibold text-gold mb-2">{i.t}</h3>
              <p className="text-sm text-cream/80">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Menu() {
  const { t, lang } = useI18n();
  const [active, setActive] = useState(menuCategories[0].id);
  const cat = menuCategories.find((c) => c.id === active)!;
  return (
    <section id="menu" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader kicker={t("menu_kicker")} title={t("menu_title")} />
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">{t("menu_intro")}</p>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {menuCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium uppercase tracking-wider transition-all ${
                active === c.id ? "bg-burgundy text-cream shadow-card" : "bg-white text-forest border border-border hover:border-burgundy"
              }`}
            >
              {c.title[lang]}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl mx-auto">
          {cat.items.map((it, idx) => (
            <div key={idx} className="flex gap-4 group">
              {it.nr && <span className="text-gold font-display text-sm font-semibold pt-1 w-8">{it.nr}</span>}
              <div className="flex-1 border-b border-dashed border-border pb-4">
                <div className="flex justify-between items-baseline gap-3">
                  <p className="font-display text-lg font-semibold text-forest group-hover:text-burgundy transition-colors">{it.name[lang]}</p>
                  <span className="font-display font-bold text-burgundy whitespace-nowrap">{it.price}</span>
                </div>
                {it.desc && it.desc[lang] && (
                  <p className="text-sm text-muted-foreground mt-1">{it.desc[lang]}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Events() {
  const { t } = useI18n();
  const types = ["🥂", "🎂", "💒", "🎉", "👨‍👩‍👧", "💼", "🍽️", "🎄"];
  const labels = {
    de: ["Jubiläen", "Geburtstage", "Taufen", "Private Feiern", "Familientreffen", "Firmenevents", "Festliche Dinner", "Weihnachten & Silvester"],
    it: ["Anniversari", "Compleanni", "Battesimi", "Feste private", "Riunioni di famiglia", "Eventi aziendali", "Cene festive", "Natale e Capodanno"],
    en: ["Anniversaries", "Birthdays", "Baptisms", "Private parties", "Family reunions", "Corporate events", "Festive dinners", "Christmas & New Year"],
  };
  const { lang } = useI18n();
  return (
    <section id="events" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="gold-divider text-xl mb-3">{t("events_kicker")}</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest mb-6">{t("events_title")}</h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-8">{t("events_text")}</p>
          <div className="grid grid-cols-2 gap-3">
            {types.map((icon, i) => (
              <div key={i} className="flex items-center gap-3 bg-cream rounded-lg px-4 py-3">
                <span className="text-2xl">{icon}</span>
                <span className="text-sm font-medium text-forest">{labels[lang][i]}</span>
              </div>
            ))}
          </div>
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 mt-8 bg-burgundy text-cream px-6 py-3 rounded font-semibold hover:bg-burgundy/90 transition-colors">
            ☎ {t("cta_call")}
          </a>
        </div>
        <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
          <img src={antipasto} alt="" className="rounded-lg shadow-card w-full h-64 object-cover" loading="lazy" />
          <img src={wine} alt="" className="rounded-lg shadow-card w-full h-64 object-cover mt-8" loading="lazy" />
          <img src={vegetables} alt="" className="rounded-lg shadow-card w-full h-64 object-cover -mt-8" loading="lazy" />
          <img src={salat} alt="" className="rounded-lg shadow-card w-full h-64 object-cover" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

function Hours() {
  const { t, lang } = useI18n();
  const isOpen = useIsOpen();
  const dayKeys = ["day_wed", "day_thu", "day_fri", "day_sat", "day_sun", "day_mon", "day_tue"];
  const dayHours: Record<string, string> = {
    day_wed: "16:00 – 22:00",
    day_thu: "16:00 – 22:00",
    day_fri: "16:00 – 22:00",
    day_sat: "14:00 – 22:00",
    day_sun: "11:00 – 22:00",
    day_mon: t("closed"),
    day_tue: t("closed"),
  };
  const today = new Date().getDay();
  const dayIndex: Record<string, number> = { day_sun: 0, day_mon: 1, day_tue: 2, day_wed: 3, day_thu: 4, day_fri: 5, day_sat: 6 };
  return (
    <section id="hours" className="py-24 bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader kicker={t("hours_kicker")} title={t("hours_title")} />
        <div className="text-center mb-8">
          <span className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider ${
            isOpen ? "bg-forest text-cream" : "bg-burgundy text-cream"
          }`}>
            <span className={`w-2 h-2 rounded-full ${isOpen ? "bg-gold animate-pulse" : "bg-cream/70"}`} />
            {isOpen ? t("open_now") : t("closed_now")}
          </span>
        </div>
        <div className="bg-white rounded-lg shadow-card overflow-hidden border border-border">
          {dayKeys.map((k) => {
            const isToday = dayIndex[k] === today;
            const isClosedDay = k === "day_mon" || k === "day_tue";
            return (
              <div key={k} className={`flex justify-between items-center px-6 py-4 border-b border-border last:border-b-0 ${isToday ? "bg-cream" : ""}`}>
                <span className={`font-display text-lg ${isToday ? "text-burgundy font-bold" : "text-forest"}`}>
                  {t(k)} {isToday && <span className="text-xs uppercase ml-2 text-gold tracking-widest">●</span>}
                </span>
                <span className={`font-medium ${isClosedDay ? "text-muted-foreground" : "text-forest"} ${isToday ? "font-bold" : ""}`}>
                  {dayHours[k]}
                </span>
              </div>
            );
          })}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-6" lang={lang}>
          📍 {ADDRESS} · 📞 {PHONE_HUMAN}
        </p>
      </div>
    </section>
  );
}

function Reviews() {
  const { t } = useI18n();
  const reviews = [
    { name: "Markus B.", text: "Sehr gute Pizza und freundlicher Service. Authentisch italienisch in Altertheim — wir kommen wieder!", stars: 5 },
    { name: "Sophie L.", text: "Die Pasta ist hausgemacht und schmeckt fantastisch. Sehr nette Bedienung und gemütliches Ambiente.", stars: 5 },
    { name: "Andrea M.", text: "Cucina davvero italiana, prezzi onesti e atmosfera familiare. Consigliato!", stars: 5 },
    { name: "Tobias W.", text: "Tolles Ambiente, perfekt für Familienfeiern. Die Antipasti-Platte ist ein Muss!", stars: 5 },
    { name: "Julia R.", text: "Beste Pizza weit und breit. Knuspriger Boden, frische Zutaten — wirklich wie in Italien.", stars: 4 },
    { name: "Stefan H.", text: "Liebevoll geführtes Restaurant. Der Wein passt hervorragend zu den Speisen. Empfehlenswert!", stars: 5 },
  ];
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader kicker={t("reviews_kicker")} title={t("reviews_title")} />
        <div className="text-center mb-12">
          <a
            href={GOOGLE_REVIEWS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center hover:scale-105 transition-transform"
          >
            <div className="flex items-center gap-2 bg-burgundy text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
              <span className="font-display text-4xl font-bold">4.4</span>
              <span className="text-gold text-2xl">★★★★★</span>
            </div>

            <p className="text-muted-foreground mt-2 underline">
              {t("reviews_based")}
            </p>
          </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-cream p-6 rounded-lg shadow-card border-t-4 border-gold">
              <div className="text-gold mb-3">{"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}</div>
              <p className="text-foreground/85 italic leading-relaxed mb-4">"{r.text}"</p>
              <div className="font-display font-semibold text-forest">— {r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const { t } = useI18n();
  const imgs = [
    { src: exterior, label: "Da Francesco" },
    { src: pizza, label: "Pizza" },
    { src: salat, label: "Salat Pollo" },
    { src: antipasto, label: "Antipasto italiano" },
    { src: vegetables, label: "Antipasto di verdure" },
    { src: snitzel, label: "Spargel Snitzel" },
  ];
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader kicker={t("gallery_kicker")} title={t("gallery_title")} />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {imgs.map((img, i) => (
            <div key={i} className="relative group overflow-hidden rounded-lg shadow-card aspect-square">
              <img src={img.src} alt={img.label} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="font-script text-2xl text-gold">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useI18n();
  return (
    <section id="contact" className="py-24 bg-forest text-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="gold-divider text-xl mb-3">{t("contact_kicker")}</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">{t("contact_title")}</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="bg-cream text-forest rounded-lg p-8 md:p-10 shadow-elegant">
            <h3 className="font-display text-2xl font-bold mb-6 text-burgundy">Da Francesco Ristorante & Pizzeria</h3>
            <div className="space-y-5">
              <div>
                <div className="text-xs uppercase tracking-widest text-gold mb-1">{t("address_label")}</div>
                <div className="text-lg">Oberes Tor 14<br />97237 Altertheim-Oberaltertheim<br />Deutschland</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-gold mb-1">{t("phone_label")}</div>
                <a href={`tel:${PHONE}`} className="text-lg font-display font-semibold hover:text-burgundy">{PHONE_HUMAN}</a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a href={`tel:${PHONE}`} className="flex-1 text-center bg-burgundy text-cream px-5 py-3 rounded font-semibold hover:bg-burgundy/90 transition-colors">
                ☎ {t("cta_call")}
              </a>
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex-1 text-center border-2 border-forest text-forest px-5 py-3 rounded font-semibold hover:bg-forest hover:text-cream transition-colors">
                📍 {t("cta_directions")}
              </a>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-elegant min-h-[400px]">
            <iframe
              src={MAPS_EMBED}
              title="Karte"
              loading="lazy"
              className="w-full h-full min-h-[400px] border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-[oklch(0.15_0.02_60)] text-cream/80 py-10 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-display text-2xl text-cream mb-2">
          Da <span className="text-gold">Francesco</span>
        </p>

        <p className="text-sm">
          {ADDRESS} · {PHONE_HUMAN}
        </p>

        <p className="text-xs mt-4 text-cream/50">
          © {new Date().getFullYear()} Da Francesco Ristorante & Pizzeria.
        </p>

        <div className="mt-3 flex items-center justify-center gap-4 text-xs text-cream/50">
          <a href="#impressum" className="hover:text-gold transition-colors">
            Impressum
          </a>

          <span>|</span>

          <a href="#datenschutz" className="hover:text-gold transition-colors">
            Datenschutzerklärung
          </a>
        </div>
      </div>
    </footer>
  );
}

function Reservation() {
  const { t } = useI18n();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
    comments: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

  const set = (k: string, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/xpqegwwk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      setStatus(res.ok ? "ok" : "err");
    } catch {
      setStatus("err");
    }
  };

  const getTimeLimits = () => {
    if (!form.date) {
      return { min: "11:00", max: "21:30", closed: false };
    }

    const day = new Date(form.date).getDay();

    switch (day) {
      case 1:
      case 2:
        return { min: "", max: "", closed: true };
      case 0:
        return { min: "11:00", max: "21:30", closed: false };
      case 6:
        return { min: "14:00", max: "21:30", closed: false };
      default:
        return { min: "16:00", max: "21:30", closed: false };
    }
  };

  const timeLimits = getTimeLimits();

  const inputCls =
    "w-full border border-border rounded px-4 py-3 text-sm text-stone-900 bg-white focus:outline-none focus:ring-2 focus:ring-burgundy/40 placeholder:text-stone-400";

  return (
    <section id="reservation" className="py-24 bg-forest text-cream relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(/src/assets/photos/interior.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="font-script text-gold text-2xl mb-3 flex items-center justify-center gap-3">
            <span className="flex-1 max-w-[80px] h-px bg-gold opacity-60" />
            {t("res_kicker")}
            <span className="flex-1 max-w-[80px] h-px bg-gold opacity-60" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">
            {t("res_title")}
          </h2>

          <p className="mt-4 text-cream/75 max-w-xl mx-auto">
            {t("res_subtitle")}
          </p>
        </div>

        {status === "ok" ? (
          <div className="bg-green-800/60 border border-green-500/40 rounded-xl p-10 text-center">
            <div className="text-5xl mb-4">✅</div>
            <p className="text-lg font-medium text-cream">{t("res_success")}</p>
          </div>
        ) : (
          <form
            onSubmit={submit}
            className="bg-cream/10 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 md:p-10 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="firstName" className="block text-xs font-semibold uppercase tracking-widest text-gold mb-2">
                  {t("res_firstname")} *
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  required
                  className={inputCls}
                  value={form.firstName}
                  onChange={(e) => set("firstName", e.target.value)}
                  placeholder={t("res_firstname")}
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-xs font-semibold uppercase tracking-widest text-gold mb-2">
                  {t("res_lastname")} *
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  required
                  className={inputCls}
                  value={form.lastName}
                  onChange={(e) => set("lastName", e.target.value)}
                  placeholder={t("res_lastname")}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-widest text-gold mb-2">
                  {t("res_phone")} *
                </label>
                <input
                  id="phone"
                  name="phone"
                  required
                  type="tel"
                  className={inputCls}
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  placeholder="+49 9307 440"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest text-gold mb-2">
                  {t("res_email")} *
                </label>
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  className={inputCls}
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  placeholder="email@example.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              <div>
                <label htmlFor="reservation-date" className="block text-xs font-semibold uppercase tracking-widest text-gold mb-2">
                  {t("res_date")}
                </label>
                <input
                  id="reservation-date"
                  name="date"
                  type="date"
                  className={inputCls}
                  value={form.date}
                  onChange={(e) => set("date", e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="reservation-time" className="block text-xs font-semibold uppercase tracking-widest text-gold mb-2">
                  {t("res_time")}
                </label>
              <select
  id="reservation-time"
  name="time"
  disabled={timeLimits.closed}
  className={inputCls}
  value={form.time}
  onChange={(e) => set("time", e.target.value)}
>
  <option value="">Bitte Uhrzeit wählen</option>

  {(() => {
    if (timeLimits.closed || !timeLimits.min || !timeLimits.max) {
      return null;
    }

    const [minHour, minMinute] = timeLimits.min.split(":").map(Number);
    const [maxHour, maxMinute] = timeLimits.max.split(":").map(Number);

    const start = minHour * 60 + minMinute;
    const end = maxHour * 60 + maxMinute;

    const options = [];

    for (let totalMinutes = start; totalMinutes <= end; totalMinutes += 15) {
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      const time = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;

      options.push(
        <option key={time} value={time}>
          {time}
        </option>
      );
    }

    return options;
  })()}
</select>
                {timeLimits.closed && (
                  <p className="text-red-300 text-xs mt-2">
                    Restaurantul este închis luni și marți.
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="reservation-guests" className="block text-xs font-semibold uppercase tracking-widest text-gold mb-2">
                  {t("res_guests")}
                </label>
                <select
                  id="reservation-guests"
                  name="guests"
                  className={inputCls}
                  value={form.guests}
                  onChange={(e) => set("guests", e.target.value)}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="comments" className="block text-xs font-semibold uppercase tracking-widest text-gold mb-2">
                {t("res_comments")}
              </label>
              <textarea
                id="comments"
                name="comments"
                rows={4}
                className={inputCls}
                value={form.comments}
                onChange={(e) => set("comments", e.target.value)}
                placeholder={t("res_comments")}
              />
            </div>

            {status === "err" && (
              <p className="text-red-300 text-sm text-center">{t("res_error")}</p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-burgundy hover:bg-burgundy/90 disabled:opacity-60 text-cream font-semibold py-4 rounded-lg tracking-wide transition-all hover:scale-[1.02] shadow-elegant text-base"
            >
              {status === "sending" ? t("res_sending") : t("res_submit")}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Nav />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Menu />
        <Events />
        <Hours />
        <Reviews />
        <Gallery />
        <Reservation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
