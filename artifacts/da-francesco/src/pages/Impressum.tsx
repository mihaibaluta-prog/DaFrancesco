import React from "react";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Impressum</h1>

      <h2 className="text-2xl font-semibold mb-4">
        Angaben gemäß § 5 TMG
      </h2>

      <p className="mb-6">
        <strong>Restaurant Da Francesco</strong>
        <br />
        Oberes Tor 14
        <br />
        97237 Altertheim
        <br />
        Deutschland
      </p>

      <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>

      <p className="mb-6">
        Telefon: 09307 440
        <br />
        E-Mail: rambocaputo79@gmail.com
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Umsatzsteuer-ID
      </h2>

      <p className="mb-6">
        Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:
        <br />
        Wird nachgereicht.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Verantwortlich für den Inhalt
      </h2>

      <p className="mb-6">
        Restaurant Da Francesco
        <br />
        Oberes Tor 14
        <br />
        97237 Altertheim
      </p>

      <h2 className="text-2xl font-semibold mb-4">Haftungsausschluss</h2>

      <p className="mb-4">
        Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
        Haftung für die Inhalte externer Links. Für den Inhalt der
        verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
      </p>

      <a
        href="/DaFrancesco/"
        className="inline-block mt-8 text-blue-600 hover:underline"
      >
        ← Zurück zur Startseite
      </a>
    </div>
  );
}
