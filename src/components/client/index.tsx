"use client";

import { useState } from "react";

export default function Tagline() {
  const weather = ["☀️", "☔️", "🌨"];
  const [forecastId] = useState(
    weather[Math.floor(Math.random() * weather.length)]
  );

  return <>Made in Sunny Lancashire {weather[forecastId]}</>;
}
