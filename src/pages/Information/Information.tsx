import { useLocale } from "../../loc/useLocale";
import "./Information.css";

import verticalLookingPhoto from "../../assets/verticalLooking.jpg";

function Information() {
  const t = useLocale();

  return (
    <div className="container">
      <h1>{t.infoTitle}</h1>
      <div className="info-layout">
        <div className="info-text">
          <h2>{t.infoFromAirportTitle}</h2>

          <div className="info-section">
            <h3>{t.infoMrtTitle}</h3>
            <p>{t.infoMrtBody}</p>
          </div>

          <div className="info-section">
            <h3>{t.infoUberTitle}</h3>
            <p>{t.infoUberBody}</p>
          </div>
        </div>

        <img
          src={verticalLookingPhoto}
          alt="Adam and Amy"
          className="infoPhoto"
        />
      </div>

      <div>
        <h2>{t.infoTabGoodToKnow}</h2>
        <div className="info-section">
          <h3>{t.infoLinksTitle}</h3>
          <ul className="info-links">
            <li>
              <a
                href="https://www.taiwanobsessed.com/things-to-do-in-taipei/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.infoLinkThingsTodoLabel}
              </a>{" "}
              {t.infoLinkThingsTodoDesc}
            </li>
            <li>
              <a
                href="https://www.travel.taipei/en/must-visit/halal"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.infoLinkHalalLabel}
              </a>{" "}
              {t.infoLinkHalalDesc}
            </li>
            <li>
              <a
                href="https://taiwantrailsandtales.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.infoLinkTrailsLabel}
              </a>{" "}
              {t.infoLinkTrailsDesc}
            </li>
          </ul>
        </div>

        <div className="info-section">
          <h3>{t.infoWeatherTitle}</h3>
          <p>{t.infoWeatherBody}</p>
        </div>

        <div className="info-section">
          <h3>{t.infoCurrencyTitle}</h3>
          <p>{t.infoCurrencyBody}</p>
        </div>

        <div className="info-section">
          <h3>{t.infoEasyCardTitle}</h3>
          <p>{t.infoEasyCardBody}</p>
        </div>

        <div className="info-section">
          <h3>{t.infoPlugsTitle}</h3>
          <p>{t.infoPlugsBody}</p>
        </div>

        <div className="info-section">
          <h3>{t.infoTapWaterTitle}</h3>
          <p>{t.infoTapWaterBody}</p>
        </div>

        <div className="info-section">
          <h3>{t.infoConvenienceTitle}</h3>
          <p>{t.infoConvenienceBody}</p>
        </div>

        <div className="info-section">
          <h3>{t.infoSimTitle}</h3>
          <p>{t.infoSimBody}</p>
        </div>

        <div className="info-section">
          <h3>{t.infoMuslimTitle}</h3>
          <p>{t.infoMuslimBody}</p>
        </div>
      </div>
    </div>
  );
}

export default Information;
