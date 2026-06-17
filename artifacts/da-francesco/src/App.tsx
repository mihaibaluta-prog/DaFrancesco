import { useEffect, useState } from "react";
import { I18nProvider } from "@/lib/i18n";
import Home from "@/pages/Home";
import Datenschutz from "@/pages/Datenschutz";
import Impressum from "@/pages/Impressum";

function useHash() {
  const [hash, setHash] = useState(() => window.location.hash.replace("#", ""));
  useEffect(() => {
    const handler = () => setHash(window.location.hash.replace("#", ""));
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);
  return hash;
}

function App() {
  const hash = useHash();
  return (
    <I18nProvider>
      {hash === "datenschutz" ? (
  <Datenschutz />
) : hash === "impressum" ? (
  <Impressum />
) : (
  <Home />
)}
    </I18nProvider>
  );
}

export default App;
