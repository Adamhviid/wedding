import { useState } from "react";
import "./Header.css";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <h1>Adam & Amy</h1>
      <button className="hamburger" onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </button>
      <nav className={open ? "open" : ""}>
        <a href="#">Photos</a>
        <a href="#">Things to Do</a>
        <a href="#">Registry</a>
      </nav>
    </header>
  );
}

export default Header;
