import React from "react";
import "./experience.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { SiAbletonlive } from "react-icons/si";
import { BsSoundwave } from "react-icons//bs";

const Experience = () => {
	return (
		<section id="experience">
			<h2>Skills</h2>

			<div className="container experience__container">
				<div className="experience__frontend">
					<h3>Frontend Development</h3>
					<div className="experience__content">
						<article className="experience__details">
							<BsFillCheckCircleFill className="experience__details-icon" />
							<div>
								<h4>HTML</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>

						<article className="experience__details">
							<BsFillCheckCircleFill className="experience__details-icon" />
							<div>
								<h4>CSS</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>

						<article className="experience__details">
							<BsFillCheckCircleFill className="experience__details-icon" />
							<div>
								<h4>JavaScript</h4>
								<small className="text-light">Beginner</small>
							</div>
						</article>

						<article className="experience__details">
							<BsFillCheckCircleFill className="experience__details-icon" />
							<div>
								<h4>Jquery</h4>
								<small className="text-light">Beginner</small>
							</div>
						</article>

						<article className="experience__details">
							<BsFillCheckCircleFill className="experience__details-icon" />
							<div>
								<h4>GIT</h4>
								<small className="text-light">Beginner</small>
							</div>
						</article>

						<article className="experience__details">
							<BsFillCheckCircleFill className="experience__details-icon" />
							<div>
								<h4>React</h4>
								<small className="text-light">Beginner</small>
							</div>
						</article>
					</div>
				</div>

				<div className="experience__other">
					<h3>Sound Design</h3>
					<div className="sound">
						
						<SiAbletonlive className="experience__details-icon-sound" />
						<div>
							<h4>Ableton</h4>
							<small className="text-light">Beginner Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, aperiam?</small>
						</div>

						<BsSoundwave className="experience__details-icon-sound" />

						<div>
							<h4>Analog Synthesizers</h4>
							<small className="text-light">Beginner Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, aperiam?</small>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
