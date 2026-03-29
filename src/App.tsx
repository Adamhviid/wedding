import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LocaleContext, type Locale } from "./loc/useLocale";
import "./App.css";

import Header from "./pages/Header/Header";
import StartPage from "./pages/StartPage/StartPage";
import Photos from "./pages/Photos/Photos";

function App() {
  const [locale, setLocale] = useState<Locale>("en");

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <BrowserRouter>
        <Header />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/thingsToDo" element={<StartPage />} />
            <Route path="/registry" element={<StartPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </LocaleContext.Provider>
  );
}

export default App;
