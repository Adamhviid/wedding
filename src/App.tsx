import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LocaleContext, type Locale } from "./loc/useLocale";
import "./App.css";

import Header from "./pages/Header/Header";
import StartPage from "./pages/StartPage/StartPage";
// import Photos from "./pages/Photos/Photos";
import Information from "./pages/Information/Information";
import Rsvp from "./pages/Rsvp/Rsvp";

function App() {
  const [locale, setLocale] = useState<Locale>("en");

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <BrowserRouter>
        <Header />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<StartPage />} />
            {/* <Route path="/photos" element={<Photos />} /> */}
            <Route path="/information" element={<Information />} />
            <Route path="/rsvp" element={<Rsvp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </LocaleContext.Provider>
  );
}

export default App;
