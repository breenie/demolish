"use client";

import { useState } from "react";

export default function Tagline() {
  const weather = ["☀️", "☔️", "🌨"];

  const [forecast] = useState(
    weather[Math.floor(Math.random() * weather.length)]
  );

  return <>Made in Sunny Lancashire {forecast}</>;
}
