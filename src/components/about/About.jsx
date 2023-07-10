import React, { useState } from "react";
import "./about.css";
import ABOUTIMG from "../../assets/about1v2.png";
import { MdOutlinePersonSearch } from "react-icons/md";
import { TbSchool } from "react-icons/tb";
import { BiCodeBlock } from "react-icons/bi";

const contentData = {
	info: "Hi, I am Claudiu. I have a strong background in management and sales,  who wants to make a professional reconversion, in the field of IT, as a Frontend Web Developer.",
	studies:
		"Bachelor's degree in Psychology and Educational Sciences. Currently, I am a student at Software Development Academy Romania.",
	skills:
		"Technologies that I know: HTML, CSS, JavaScript, jQuery, Git, React, Bootstrap",
};

const About = () => {
	const [content, setContent] = useState(contentData.info);

	const handleCardClick = (cardContent) => {
		setContent(cardContent);
	};

	return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={ABOUTIMG} alt="" id="about-img" />
					</div>
				</div>

				<div className="about__content">
					<div className="about__cards">
						<article
							className="about__card"
							onClick={() => handleCardClick(contentData.info)}
						>
							<MdOutlinePersonSearch className="about__icon" />
							<h5>Personal</h5>
							<small>Info</small>
						</article>

						<article
							className="about__card"
							onClick={() => handleCardClick(contentData.studies)}
						>
							<TbSchool className="about__icon" />
							<h5>Studies</h5>
							<small>IT courses</small>
						</article>

						<article
							className="about__card"
							onClick={() => handleCardClick(contentData.skills)}
						>
							<BiCodeBlock className="about__icon" />
							<h5>Tech</h5>
							<small>Skills</small>
						</article>
					</div>

					<p>{content}</p>

					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
