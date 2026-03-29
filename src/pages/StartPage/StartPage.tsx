import "./App.css";
import { useLocale } from "../../loc/useLocale";

import weddingPhoto from "../../assets/JustMarried.jpg";

import CountDown from "../../components/CountDown/CountDown";

function StartPage() {
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

export default StartPage;
