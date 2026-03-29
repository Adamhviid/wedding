import { useState } from "react";
import "./App.css";
import weddingPhoto from "./assets/JustMarried.jpg";
import Header from "./components/Header/Header";
import CountDown from "./components/CountDown/CountDown";
import { LocaleContext, useLocale, type Locale } from "./loc/useLocale";

function AppContent() {
  const t = useLocale();

  return (
    <div className="container">
      <div>
        <h1>{t.mainTitle}</h1>
        <h3>{t.mainDate}</h3>
      </div>

      <hr />

      <div>
        <h3>{t.mainHotel}</h3>
        <p>{t.mainLocation}</p>
      </div>

      <hr />

      <CountDown />

      <img src={weddingPhoto} alt="Adam and Amy" className="mainPhoto" />
    </div>
  );
}

function App() {
  const [locale, setLocale] = useState<Locale>("en");

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <Header />
      <AppContent />
    </LocaleContext.Provider>
  );
}

export default App;
