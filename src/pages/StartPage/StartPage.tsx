import { useState } from "react";
import { useLocale } from "../../loc/useLocale";
import "./StartPage.css";

import weddingPhoto from "../../assets/JustMarried.jpg";

function StartPage() {
  const t = useLocale();
  const [date] = useState<Date>(new Date("2027-03-11"));
  const today = new Date();

  const calculateDaysBetween = () => {
    const diffMs = date.getTime() - today.getTime();
    return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  };

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

      <div>
        {calculateDaysBetween()} {t.mainCountdownDaysToGo}
      </div>

      <img src={weddingPhoto} alt="Adam and Amy" className="mainPhoto" />

      <div>
        <h2>{t.mainAgendaTitle}</h2>
        <div className="agenda">
          <span>17:30</span>
          <span>{t.mainAgendaGuestArrive}</span>
          <span>18:00</span>
          <span>{t.mainAgendaDinner}</span>
          <span>~21:00</span>
          <span>{t.mainAgendaAfterparty}</span>
        </div>
      </div>
    </div>
  );
}

export default StartPage;
