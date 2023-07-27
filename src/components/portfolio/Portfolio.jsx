import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/project1.1.png";
import IMG2 from "../../assets/project2.png";
import IMG3 from "../../assets/project3.png";
import IMG4 from "../../assets/project4.png";
import IMG5 from "../../assets/project5.png";
import IMG6 from "../../assets/project6.png";
import IMG7 from "../../assets/project7.png";

const data = [
	{
		id: 1,
		image: IMG1,
		title: "Age Calculator",
		github: "https://github.com/Szidelo/age_calculator_app",
		demo: "https://szidelo.github.io/age_calculator_app/",
	},
	{
		id: 2,
		image: IMG2,
		title: "Interactive Card Form",
		github: "https://github.com/Szidelo/Frontend_mentor_interactiv",
		demo: "https://szidelo.github.io/Frontend_mentor_interactiv/",
	},
	{
		id: 3,
		image: IMG3,
		title: "Blogr Landing Page",
		github: "https://github.com/Szidelo/Blogr_frontend_mentor_challenge",
		demo: "https://szidelo.github.io/Blogr_frontend_mentor_challenge/",
	},
	{
		id: 4,
		image: IMG4,
		title: "Weather App",
		github: "https://github.com/Szidelo/weather-appv1",
		demo: "https://szidelo.github.io/weather-appv1/",
	},
	{
		id: 5,
		image: IMG5,
		title: "Shopping List",
		github: "https://github.com/Szidelo/Shopping-list",
		demo: "https://szidelo.github.io/Shopping-list/",
	},
	{
		id: 6,
		image: IMG6,
		title: "To Do List",
		github: "https://github.com/Szidelo/Task_list",
		demo: "https://szidelo.github.io/Task_list/",
	},
	{
		id: 7,
		image: IMG7,
		title: "Travel Agency Landing Page",
		github: "https://github.com/Szidelo/Travel-Landing-page",
		demo: "https://szidelo.github.io/Travel-Landing-page/",
	},
];

const Portfolio = () => {


	return (
		<section id="portfolio">
			<h5>My Projects</h5>
			<h2>Portfolio</h2>

			<div className="container portfolio__container">
				{data.map(({ id, image, github, demo, title }) => {
					return (
						<article key={id} className="portfolio__item">
							<div className="portfolio__item-image">
								<img src={image} alt={title} />
							</div>
							<h3>{title}</h3>
							<div className="portfolio__item-cta">
								<a
									href={github}
									className="btn"
									target="_blank"
									rel="noopener noreferrer"
								>
									{'{code}'}
								</a>
								<a
									href={demo}
									className="btn btn-primary"
									target="_blank"
									rel="noopener noreferrer"
								>
									
									{'{liveDemo}'}
								</a>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
