"use client";

import { useState, useEffect } from "react";

export default function Tagline() {
  const weather = ["☀️", "☔️", "🌨"];
  const [forecastId, setForecastId] = useState(0);

  useEffect(() => {
    setForecastId(Math.floor(Math.random() * weather.length));
  }, []);

  return (
    <>
      Made in Sunny Lancashire {forecastId != null ? weather[forecastId] : ""}
    </>
  );
}
