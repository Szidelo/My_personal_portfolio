import React from "react";
import "./experience.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import EXPIMG from "../../assets/exp1.jpg";

const Experience = () => {
	return (
		<section id="experience">
			<h5>What I Can Offer</h5>
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
							<BsFillCheckCircleFill className="experience__details-icon"/>
							<div>
								<h4>React</h4>
								<small className="text-light">Beginner</small>
							</div>
						</article>
					</div>
				</div>

				<div className="experience__other">
					<div className="experience__image">
						<img src={EXPIMG} alt="" id="exp-img" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
