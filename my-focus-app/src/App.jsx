import React, { useEffect, useState } from "react";
import QuoteBox from "./components/QuoteBox/QuoteBox";
import PomodoroTimer from "./components/PomodoroTimer/PomodoroTimer";
import SoundControl from "./components/SoundControl/SoundControl";

const sounds = [
  { label: "Rain", file: "rain.mp3" },
  { label: "Forest", file: "forest.mp3" },
  { label: "Droplets", file: "droplets.mp3" },
  { label: "Light Switch", file: "light-switch.mp3" },
  { label: "Lo-Fi", file: "lo-fi.mp3" },
  { label: "Meditating", file: "meditating.mp3" },
  { label: "Ocean Waves", file: "ocean-waves.mp3" },
  { label: "Pink Noise", file: "pink-noise.mp3" },
  { label: "Soft Piano", file: "soft-piano.mp3" },
  { label: "Thunderstorm", file: "thunderstorm.mp3" },
];

const App = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-title">StillSpace</div>
        <button
          className="theme-toggle"
          onClick={() => setDarkMode((d) => !d)}
          aria-label="Toggle Dark/Light theme"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </nav>
      <QuoteBox />
      <PomodoroTimer />
      <main className="app-container">
        {sounds.map(({ label, file }) => (
          <SoundControl key={file} label={label} file={file} />
        ))}
      </main>
    </>
  );
};

export default App;
