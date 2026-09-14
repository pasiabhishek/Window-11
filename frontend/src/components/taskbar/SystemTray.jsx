import { useEffect, useState } from "react";

export default function SystemTray() {
  const [date, setDate] = useState(new Date());

  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="system-tray" aria-label="System tray">
      <div className="lang">
        ENG
      </div>
      <div className="device-config-icons">
        <i className="fa-solid fa-wifi"></i>
        <i className="fa-solid fa-volume"></i>
        <i className="fa-solid fa-battery-half"></i>
      </div>
      <div className="dateTime">
        <p>{date.toLocaleTimeString([], timeOptions)}</p>
        <p>{date.toLocaleDateString()}</p>
      </div>
    </section>
  );
}