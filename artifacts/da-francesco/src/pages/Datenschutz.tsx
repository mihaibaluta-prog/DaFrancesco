const RESTAURANT = "Da Francesco Ristorante & Pizzeria";
const ADDRESS = "Oberes Tor 14, 97237 Altertheim-Oberaltertheim";
const EMAIL = "rambocaputo79@gmail.com";
const PHONE = "09307 440";
const TODAY = new Date().toLocaleDateString("de-DE", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function Datenschutz() {
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
            className="text-sm text-cream/80 hover:text-gold transition-colors flex items-center gap-1"
          >
            ← Zurück zur Startseite
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-forest mb-3">
          Datenschutzerklärung
        </h1>

        <p className="text-muted-foreground text-sm mb-12">
          Stand: {TODAY}
        </p>

        <div className="prose prose-stone max-w-none space-y-10 text-stone-800">
          <section>
            <h2 className="font-display text-2xl font-bold text-forest mb-4">
              1. Verantwortlicher
            </h2>

            <p>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung
              (DSGVO) ist:
            </p>

            <address className="not-italic mt-3 bg-stone-100 rounded-lg p-4 text-sm leading-7">
              <strong>{RESTAURANT}</strong>
              <br />
              {ADDRESS}
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
    2. Erhobene Daten über das Reservierungsformular
  </h2>

  <p>
    Wenn Sie über unser Online-Formular einen Tisch reservieren,
    erheben und verarbeiten wir die von Ihnen freiwillig angegebenen
    personenbezogenen Daten, um Ihre Reservierungsanfrage zu bearbeiten.
  </p>

  <ul className="list-disc list-inside mt-3 space-y-1 ml-4">
    <li>Vorname und Nachname</li>
    <li>E-Mail-Adresse</li>
    <li>Telefonnummer</li>
    <li>Gewünschtes Reservierungsdatum und Uhrzeit</li>
    <li>Anzahl der Personen</li>
    <li>Kommentare und Sonderwünsche optional</li>
  </ul>

  <p className="mt-3">
    Die technische Übermittlung der Daten erfolgt über den Dienst{" "}
    <strong>Web3Forms</strong>. Die eingegebenen Daten werden über Web3Forms
    an unsere hinterlegte E-Mail-Adresse weitergeleitet.
  </p>

  <p className="mt-3">
    Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
    soweit dies zur Bearbeitung Ihrer Reservierungsanfrage erforderlich ist.
    Darüber hinaus erfolgt die Verarbeitung auf Grundlage unseres berechtigten
    Interesses gemäß Art. 6 Abs. 1 lit. f DSGVO an einer zuverlässigen
    Kommunikation mit unseren Gästen.
  </p>
           <p className="mt-3">
  Mit dem Anbieter wurde – soweit gesetzlich erforderlich – ein Vertrag zur
  Auftragsverarbeitung geschlossen beziehungsweise es werden ausschließlich
  datenschutzkonforme Dienste eingesetzt.
</p>

  <p className="mt-3">
    Weitere Informationen zum Datenschutz bei Web3Forms finden Sie unter:{" "}
    <a
      href="https://web3forms.com/privacy"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gold hover:underline"
    >
      https://web3forms.com/privacy
    </a>
  </p>
</section>

          <section>
            <h2 className="font-display text-2xl font-bold text-forest mb-4">
              3. Zweck der Datenverarbeitung
            </h2>

            <p>
              Ihre Daten werden ausschließlich zur{" "}
              <strong>Bearbeitung und Bestätigung Ihrer Tischreservierung</strong>{" "}
              verwendet. Wir kontaktieren Sie telefonisch oder per E-Mail, um
              Ihre Reservierung zu bestätigen oder bei Bedarf Rückfragen zu
              klären.
            </p>

            <p className="mt-3">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO
              (Vertragsanbahnung / Erfüllung eines Vertrags).
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-forest mb-4">
              4. Speicherdauer
            </h2>

            <p>
              Ihre Reservierungsdaten werden nur so lange gespeichert, wie dies
              zur Bearbeitung Ihrer Anfrage erforderlich ist oder gesetzliche
              Aufbewahrungspflichten bestehen.
            </p>

            <p className="mt-3">
              Sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen,
              werden Reservierungsanfragen nach angemessener Zeit gelöscht.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-forest mb-4">
              5. Weitergabe von Daten
            </h2>

            <p>
              Ihre personenbezogenen Daten werden nicht verkauft oder zu
              Werbezwecken genutzt. Eine Weitergabe erfolgt nur, soweit dies zur
              Bearbeitung Ihrer Reservierungsanfrage erforderlich ist oder wir
              gesetzlich dazu verpflichtet sind.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-forest mb-4">
              6. Technische Infrastruktur und Hosting
            </h2>

            <h3 className="font-semibold text-lg text-forest mt-4 mb-2">
  6.1 Website-Hosting über GitHub Pages
</h3>

<p>
  Diese Website wird über <strong>GitHub Pages</strong> bereitgestellt,
  einen Dienst der GitHub, Inc., 88 Colin P. Kelly Jr. Street,
  San Francisco, CA 94107, USA. GitHub ist ein Unternehmen der
  Microsoft Corporation.
</p>

<p className="mt-3">
  Beim Aufruf dieser Website können durch GitHub automatisch technische
  Zugriffsdaten verarbeitet werden, insbesondere IP-Adresse, Datum und
  Uhrzeit des Zugriffs, Browsertyp, Betriebssystem und Referrer-URL.
</p>

<p className="mt-3">
  Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
  Unser berechtigtes Interesse liegt in der sicheren und zuverlässigen
  Bereitstellung unserer Website.
</p>

<p className="mt-3">
  Da GitHub beziehungsweise Microsoft Dienste mit Sitz in den USA einsetzt,
  kann nicht ausgeschlossen werden, dass personenbezogene Daten in die USA
  übermittelt werden. Die Übermittlung erfolgt, soweit anwendbar, auf
  Grundlage geeigneter Garantien gemäß Art. 44 ff. DSGVO, soweit eine Übermittlung
personenbezogener Daten in Drittländer erfolgt.
</p>

<h3 className="font-semibold text-lg text-forest mt-8 mb-2">
  6.2 Lokale Einbindung von Schriftarten
</h3>

<p>
  Auf dieser Website werden Schriftarten lokal eingebunden. Eine Verbindung
  zu Servern von Google Fonts, insbesondere zu fonts.googleapis.com oder
  fonts.gstatic.com, findet beim Laden der Schriftarten nicht statt.
</p>

            <p className="mt-3">
              Weitere Informationen finden Sie in der{" "}
              <a
                href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
                target="_blank"
                rel="noopener noreferrer"
                className="text-burgundy underline"
              >
                Datenschutzerklärung von GitHub
              </a>
              .
            </p>

            <p className="mt-2 text-sm text-stone-600">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse am sicheren und effizienten Betrieb der
              Website).
            </p>

            <p className="mt-2 text-sm text-stone-600">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO
              (Vertragsanbahnung).
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-forest mb-4">
              7. E-Mail-Weiterleitung
            </h2>

            <p>
              Reservierungsanfragen werden per E-Mail an den Restaurantbetreiber
              weitergeleitet. Die Verarbeitung erfolgt ausschließlich zur
              Bearbeitung Ihrer Anfrage.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-forest mb-4">
              8. Google Maps
            </h2>

            <p>
              Diese Website verwendet Google Maps zur Darstellung unseres
              Standorts. Beim Laden der Karte können personenbezogene Daten,
              insbesondere Ihre IP-Adresse, an Google übertragen werden.
            </p>

            <p className="mt-3">
              Anbieter: Google Ireland Limited, Gordon House, Barrow Street,
              Dublin 4, Irland.
            </p>
            <p className="mt-3">
  Die Nutzung von Google Maps erfolgt auf Grundlage unseres berechtigten
  Interesses gemäß Art. 6 Abs. 1 lit. f DSGVO, unseren Gästen eine einfache
  Auffindbarkeit unseres Restaurants zu ermöglichen.
</p>

            <p className="mt-3">
              Weitere Informationen finden Sie in der{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-burgundy underline"
              >
                Datenschutzerklärung von Google
              </a>
              .
            </p>
          </section>

          <section>
            <section>
  <h2 className="font-display text-2xl font-bold text-forest mb-4">
    9. SSL- bzw. TLS-Verschlüsselung
  </h2>

  <p>
    Diese Website verwendet aus Sicherheitsgründen eine SSL- bzw.
    TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an dem
    Schlosssymbol in der Adresszeile Ihres Browsers sowie daran, dass die
    Adresse mit <strong>https://</strong> beginnt.
  </p>

  <p className="mt-3">
    Dadurch können Daten, die Sie über unser Reservierungsformular an uns
    übermitteln, nicht von unbefugten Dritten mitgelesen werden.
  </p>
</section>
            <h2 className="font-display text-2xl font-bold text-forest mb-4">
              10. Ihre Rechte nach DSGVO
            </h2>

            <p>
              Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
            </p>

            <ul className="mt-3 space-y-3 ml-4">
              <li className="flex gap-3">
                <span className="text-burgundy font-bold min-w-[24px]">►</span>
                <span>
                  <strong>Auskunftsrecht Art. 15 DSGVO:</strong> Sie haben das
                  Recht zu erfahren, welche Daten wir über Sie gespeichert haben.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-burgundy font-bold min-w-[24px]">►</span>
                <span>
                  <strong>Berichtigungsrecht Art. 16 DSGVO:</strong> Sie können
                  die Berichtigung unrichtiger Daten verlangen.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-burgundy font-bold min-w-[24px]">►</span>
                <span>
                  <strong>Recht auf Löschung Art. 17 DSGVO:</strong> Sie können
                  die Löschung Ihrer personenbezogenen Daten verlangen, sofern
                  keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-burgundy font-bold min-w-[24px]">►</span>
                <span>
                  <strong>
                    Recht auf Einschränkung der Verarbeitung Art. 18 DSGVO:
                  </strong>{" "}
                  Sie können die Einschränkung der Verarbeitung Ihrer Daten
                  verlangen.
                </span>
              </li>
              <li className="flex gap-3">
  <span className="text-burgundy font-bold min-w-[24px]">►</span>
  <span>
    <strong>Widerruf einer Einwilligung:</strong>
    Eine bereits erteilte Einwilligung können Sie jederzeit mit Wirkung für
    die Zukunft widerrufen.
  </span>
</li>

              <li className="flex gap-3">
                <span className="text-burgundy font-bold min-w-[24px]">►</span>
                <span>
                  <strong>Widerspruchsrecht Art. 21 DSGVO:</strong> Sie haben
                  das Recht, der Verarbeitung Ihrer Daten zu widersprechen.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-burgundy font-bold min-w-[24px]">►</span>
                <span>
                  <strong>Recht auf Datenübertragbarkeit Art. 20 DSGVO:</strong>{" "}
                  Sie haben das Recht, Ihre Daten in einem strukturierten,
                  gängigen Format zu erhalten.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-burgundy font-bold min-w-[24px]">►</span>
                <span>
                  <strong>Beschwerderecht:</strong> Sie haben das Recht, sich
                  bei der zuständigen Datenschutzaufsichtsbehörde zu beschweren.
                  In Bayern ist dies das{" "}
                  <a
                    href="https://www.lda.bayern.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-burgundy underline"
                  >
                    Bayerische Landesamt für Datenschutzaufsicht BayLDA
                  </a>
                  .
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-forest mb-4">
              11. Kontakt für Datenschutzanfragen
            </h2>

            <p>
              Für alle Anfragen zum Datenschutz wenden Sie sich bitte an:
            </p>

            <address className="not-italic mt-3 bg-stone-100 rounded-lg p-4 text-sm leading-7">
              <strong>{RESTAURANT}</strong>
              <br />
              {ADDRESS}
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
              12. Keine Cookies, kein Tracking
            </h2>

            <p>
              Diese Website verwendet <strong>keine Cookies</strong>, kein
              Tracking, kein Google Analytics und keine sonstigen Analysetools.
              Es werden keine Nutzerdaten für Werbezwecke erfasst oder
              ausgewertet.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-forest mb-4">
              13. Aktualität dieser Datenschutzerklärung
            </h2>

            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand{" "}
              {TODAY}. Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn dies aufgrund
gesetzlicher Änderungen oder technischer Weiterentwicklungen unserer Website
erforderlich wird.
            </p>
          </section>
        </div>
      </main>

      <footer className="bg-[oklch(0.15_0.02_60)] text-cream/80 py-8 text-center mt-16">
        <p className="text-sm">
          © {new Date().getFullYear()} {RESTAURANT} · {ADDRESS}
        </p>

        <button
          onClick={() => {
            window.location.hash = "";
            window.scrollTo(0, 0);
          }}
          className="text-xs text-gold hover:underline mt-2 block mx-auto"
        >
          ← Zurück zur Startseite
        </button>
      </footer>
    </div>
  );
}
