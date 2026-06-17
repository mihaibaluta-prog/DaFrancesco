const RESTAURANT = "Da Francesco Ristorante & Pizzeria";
const OWNER = "Francesco Caputo";
const ADDRESS = "Oberes Tor 14, 97237 Altertheim";
const EMAIL = "rambocaputo79@gmail.com";
const PHONE = "09307 440";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-cream">
      <header className="bg-forest text-cream py-6 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = "";
            }}
            className="font-display text-2xl font-bold tracking-wide hover:text-gold transition-colors"
          >
            Da <span className="text-gold">Francesco</span>
          </a>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = "";
            }}
            className="text-sm text-cream/80 hover:text-gold transition-colors"
          >
            ← Zurück zur Startseite
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-forest mb-3">
          Impressum
        </h1>

        <div className="prose prose-stone max-w-none space-y-10 text-stone-800">

          <section>
            <h2 className="font-display text-2xl font-bold text-forest mb-4">
              Angaben gemäß § 5 DDG
            </h2>

            <address className="not-italic mt-3 bg-stone-100 rounded-lg p-4 text-sm leading-7">
              <strong>{RESTAURANT}</strong>
              <br />
              Inhaber: {OWNER}
              <br />
              Oberes Tor 14
              <br />
              97237 Altertheim
              <br />
              Deutschland
              <br />
              Telefon: {PHONE}
              <br />
              E-Mail:{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="text-burgundy underline"
              >
                {EMAIL}
              </a>
            </address>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-forest mb-4">
              Vertreten durch
            </h2>

            <p>
              {OWNER}
              <br />
              Inhaber von {RESTAURANT}
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-forest mb-4">
              Kontakt
            </h2>

            <p>
              Telefon: {PHONE}
              <br />
              E-Mail:{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="text-burgundy underline"
              >
                {EMAIL}
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-forest mb-4">
              Umsatzsteuer-ID
            </h2>

            <p>
              Eine Umsatzsteuer-Identifikationsnummer ist derzeit nicht angegeben.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-forest mb-4">
              Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV
            </h2>

            <p>
              {OWNER}
              <br />
              Oberes Tor 14
              <br />
              97237 Altertheim
              <br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-forest mb-4">
              Haftung für Inhalte
            </h2>

            <p>
              Die Inhalte unserer Website wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              übernehmen wir jedoch keine Gewähr.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-forest mb-4">
              Haftung für Links
            </h2>

            <p>
              Unsere Website enthält Links zu externen Websites Dritter.
              Auf deren Inhalte haben wir keinen Einfluss. Deshalb können wir
              für diese fremden Inhalte keine Gewähr übernehmen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-forest mb-4">
              Urheberrecht
            </h2>

            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht.
              Jede Art der Verwertung außerhalb der Grenzen des Urheberrechts
              bedarf der schriftlichen Zustimmung des jeweiligen Autors bzw.
              Erstellers.
            </p>
          </section>

        </div>
      </main>

      <footer className="bg-[oklch(0.15_0.02_60)] text-cream/80 py-8 text-center mt-16">
        <p className="text-sm">
          © {new Date().getFullYear()} {RESTAURANT}
        </p>

        <p className="text-xs mt-2 text-cream/50">
          {ADDRESS}
        </p>

        <button
          onClick={() => {
            window.location.hash = "";
            window.scrollTo(0, 0);
          }}
          className="text-xs text-gold hover:underline mt-3 block mx-auto"
        >
          ← Zurück zur Startseite
        </button>
      </footer>
    </div>
  );
}
