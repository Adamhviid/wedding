import { useContext } from "react";
import { LocaleContext, useLocale } from "../../loc/useLocale";
import "./Rsvp.css";

const SURVEY_URLS = {
  en: "https://docs.google.com/forms/d/e/1FAIpQLSf0ZrLBQ3ksuQ5KnqnubixKlNN7h_VGcGARBh_wQpwnq-ertA/viewform?usp=publish-editor",
  tw: "https://docs.google.com/forms/d/e/1FAIpQLSeHIAFVTOE1onlEtBxOv26GKekdsQFf-YunhcM4FwPA4S8fMg/viewform?usp=publish-editor",
} as const;

function Rsvp() {
  const { locale } = useContext(LocaleContext);
  const t = useLocale();
  const surveyUrl = SURVEY_URLS[locale];

  return (
    <div className="container">
      <h1>{t.rsvpTitle}</h1>
      <p>{t.rsvpIntro}</p>
      <br />

      <iframe src={surveyUrl} title="Survey" className="rsvp-survey-frame">
        Loading…
      </iframe>
    </div>
  );
}

export default Rsvp;
