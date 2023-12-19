"use client";

import { useState, useEffect } from "react";

export default function Tagline() {
  const weather = ["☀️", "☔️", "🌨"];
  const [forecast, setForecast] = useState("");

  useEffect(() => {
    setForecast(weather[Math.floor(Math.random() * weather.length)]);
  }, []);

  return <>Made in Sunny Lancashire {forecast}</>;
}
