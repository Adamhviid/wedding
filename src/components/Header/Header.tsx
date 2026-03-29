import { useContext, useState } from "react";
import { LocaleContext, useLocale } from "../../loc/useLocale";
import "./Header.css";

function Header() {
  const [open, setOpen] = useState(false);
  const { locale, setLocale } = useContext(LocaleContext);
  const t = useLocale();

  const toggleLocale = () => setLocale(locale === "en" ? "tw" : "en");

  return (
    <header>
      <div className="title-row">
        <h1>Adam & Amy</h1>
        <button className="locale-toggle" onClick={toggleLocale}>
          {locale === "en" ? "中文" : "EN"}
        </button>
      </div>
      <button className="hamburger" onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </button>
      <nav className={open ? "open" : ""}>
        <a href="#">{t.headerPhotos}</a>
        <a href="#">{t.headerThingsToDo}</a>
        <a href="#">{t.headerRegistry}</a>
      </nav>
    </header>
  );
}

export default Header;
