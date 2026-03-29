import { useState } from "react";
import { useLocale } from "../../loc/useLocale";

function CountDown() {
  const [date] = useState<Date>(new Date("2027-03-11"));
  const today = new Date();

  const t = useLocale();

  const calculateDaysBetween = () => {
    const diffMs = date.getTime() - today.getTime();
    return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  };

  return (
    <div>
      <p>
        {calculateDaysBetween()} {t.countdownDaysToGo}
      </p>
    </div>
  );
}

export default CountDown;
