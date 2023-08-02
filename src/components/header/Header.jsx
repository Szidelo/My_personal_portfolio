import React, { useState, useEffect } from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderScocials from "./HeaderScocials";

import backgroundAudio from "../../assets/audio/audio1.mp3";

const activities = [
  'Coding', 'Web Development', 'Sound Design', 'Personal Growth', 'New Technologies', 'JavaScript', 'Art'
]

const Header = () => {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [currentName, setCurrentName] = useState(activities[0]);

  function setRandomName() {
    const index = Math.floor(Math.random() * activities.length);
    let newName = activities[index]
    if (newName === currentName) { setRandomName() }
    else { setCurrentName(newName) }
    return
  }

  useEffect(() => {
    setTimeout(() => {
      setRandomName()
    }, 4000);
  }, [currentName])

  // Documentation: https://stackoverflow.com/questions/64916779/change-text-at-every-time-interval-react

  useEffect(() => {
    const audio = new Audio(backgroundAudio);
    audio.volume = audioEnabled ? 0.3 : 0;
    audio.loop = true;
    if (audioEnabled) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => audio.pause();
  }, [audioEnabled]);

  const toggleAudio = () => {
    setAudioEnabled((prevAudioEnabled) => !prevAudioEnabled);
  };

  return (
    <header>
      <div className="container header__container">
        {/* Toggle Audio Button */}
        <button className="audio__toggle" onClick={toggleAudio}>
          {audioEnabled ? "Turn Off Audio" : "Turn On Audio"}
        </button>

        <h5>Hello I am</h5>
        <h1>Claudiu Szidelo</h1>
        <h2 className="text-light">Passionate About: <span className="text-red">{currentName}</span></h2>
        <CTA />
        <HeaderScocials />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
