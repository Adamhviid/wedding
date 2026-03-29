import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LocaleContext, type Locale } from "./loc/useLocale";

import Header from "./pages/Header/Header";
import StartPage from "./pages/StartPage/StartPage";
import Photos from "./pages/Photos/Photos";

function App() {
  const [locale, setLocale] = useState<Locale>("en");

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </BrowserRouter>
    </LocaleContext.Provider>
  );
}

export default App;
