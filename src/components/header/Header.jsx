import React, { useState, useEffect } from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderScocials from "./HeaderScocials";
import backgroundAudio from "../../assets/audio/audio1.mp3";
import MysteriousText from "./MysteriousText";

const activities = [
	"Coding",
	"Coding",
	"Coding",
	"Problem Solving",
	"Frontend",
	"Web Development",
	"Sound Design",
	"Personal Growth",
	"Ableton",
	"JavaScript",
  'Electronic Music'
];

const Header = () => {

	const [currentActivity, setCurrentActivity] = useState(activities[0]);

	function setRandomActivity() {
		const index = Math.floor(Math.random() * activities.length);
		let newActivity = activities[index];
		if (newActivity === currentActivity) {
			setRandomActivity();
		} else {
			setCurrentActivity(newActivity);
		}
		return;
	}

	useEffect(() => {
		setTimeout(() => {
			setRandomActivity();
		}, 4000);
	});

	// Documentation for random words on interval of time: https://stackoverflow.com/questions/64916779/change-text-at-every-time-interval-react

  const [audioEnabled, setAudioEnabled] = useState(false);

	useEffect(() => {
		const audio = new Audio(backgroundAudio);
		audio.loop = true;
		audio.volume = 0.4;
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

	// Documentation for Audio: https://dev.to/daveguz97/adding-sound-to-a-react-project-51m3

	return (
		<header>
			<div className="container header__container">
				{/* Toggle Audio Button */}
				<button className="audio__toggle" onClick={toggleAudio}>
					{audioEnabled ? "Turn Off Audio" : "Turn On Audio"}
				</button>

				<h5>Hello I am</h5>
				<h1 className="text-red">Claudiu Szidelo</h1>
				<h2 className="text-light">
					Passionate About
				</h2>
        <h2 className="text-red">
          <MysteriousText>{currentActivity}</MysteriousText>  
          </h2>
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
