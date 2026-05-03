import { useLocale } from "../../loc/useLocale";

const SURVEY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf0ZrLBQ3ksuQ5KnqnubixKlNN7h_VGcGARBh_wQpwnq-ertA/viewform?usp=publish-editor"; // Replace with your Google Survey embed URL

function Survey() {
  const t = useLocale();

  return (
    <div className="container">
      {SURVEY_URL ? (
        <iframe
          src={SURVEY_URL}
          title="Survey"
          style={{ width: "100%", height: "80vh", border: "none", margin: 0 }}
        >
          Loading…
        </iframe>
      ) : (
        <p style={{ color: "#888", padding: "2rem 0", textAlign: "center" }}>
          {t.registrySurveyPlaceholder}
        </p>
      )}
    </div>
  );
}

export default Survey;
