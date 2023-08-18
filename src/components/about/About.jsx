import React, { useState } from "react";
import "./about.css";
import { MdOutlinePersonSearch } from "react-icons/md";
import { TbSchool } from "react-icons/tb";
import { BiCodeBlock } from "react-icons/bi";

const contentData = {
	info: "Hi, I am Claudiu, and I love what I do! The desire to find something that I can do with passion led me to discover the beautiful world of web development at the age of 31. From the moment that I printed 'Hello world!' in the browser, I knew that this is what I should do. Sounds funny, right? Well, it is true. The journey is hard and rewarding, and I love that every time I learn something new, there are 10 other things that I need to learn, but at the same time, I enjoy this even more. 'Choose a job you love, and you'll never have to work a day in your life - Confucius'",
	studies:
		"Bachelor's degree in Psychology and Educational Sciences. Currently, I am a trainee in JavaScript at the Software Development Academy, where I am gaining a strong foundation in HTML, CSS, and learning how JavaScript works. In my JavaScript modules, I am gaining an in-depth understanding of structured programming and functional programming, which I love to work with. This understanding leads me to explore Object-Oriented programming in JavaScript and frameworks like React, Angular, and VueJs, while also learning how to work with Agile methodologies like Scrum.",
	skills:
		"Technologies that I know: HTML, CSS, JavaScript, jQuery, Git, React and Bootstrap, I am also training my problem solving skills  by studying algorithms and challenging myself with logical problems from CodeWars and HackerRank.",
};

const About = () => {
	const [content, setContent] = useState(contentData.info);

	const handleCardClick = (cardContent) => {
		setContent(cardContent);
	};

	return (
		<section id="about">
			<h2>About Me</h2>

			<div className="container about__container">
				<div className="about__me">
					<p>{content}</p>
				</div>

				<div className="about__content">
					<div className="about__cards">
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
							onClick={() => handleCardClick(contentData.info)}
						>
							<MdOutlinePersonSearch className="about__icon" />
							<h5>Personal</h5>
							<small>Info</small>
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

					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
