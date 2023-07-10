# Personal Portfolio Webpage

This is my personal portfolio webpage built with React. It showcases my projects, provides information about me, and includes a contact form.

## Table of contents

- [Technologies Used](#Technologies)
- [Project Structure](#Project-Structure)
- [Project Section](#Project-Section)
- [Links](#links)
- [Contact Form](#Contact-Form)
- [Author](#author)
- [Usage](#Usage)


## Technologies 

-React: A JavaScript library for building user interfaces.
-CSS: Used for styling the components.
-emailJS: Used for the contact form functionality.
-SwiperJS: A modern JavaScript slider library for creating interactive carousels and sliders.

## Project Structure

The project follows a modular structure with each section of the webpage implemented as a separate React component. The components are imported and compiled in the App.jsx file.

-src/
-assets/: Contains project images.
-components/
 -about: Provides information about me.
 -contact: Renders a contact form using emailJS for sending emails.
 -experience: Displays my skills and experience.
 -footer: Displays the footer section of the webpage.
 -header: Displays the header section of the webpage.
 -nav: Displays the navigation section of the webpage.
 -portfolio: Displays my projects dynamically using data from the data constant.
 -testomonials: Displays a simulated testimonails section with swiperJs.

-App.jsx: Compiles all the components to create the webpage.
-index.jsx: Renders the App component and mounts it to the DOM.

## Project Section

The project section in the portfolio webpage displays multiple projects dynamically using the map() function. The project details are stored in the data constant in the Portfolio.jsx file. Each project is rendered as an article element with an image, title, and buttons for GitHub and live demo links. The URLs for GitHub and live demos are fetched from the data constant.

See below:

```javascript

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
		title: "Actor List",
		github: "https://github.com/Szidelo/actor_list",
		demo: "https://szidelo.github.io/actor_list/",
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
```

## Links

- Live Site URL: [Add live site URL here](https://szidelo.github.io/Frontend_mentor_interactiv/)

## Contact Form

The contact form in the portfolio webpage uses the emailJS library for sending emails. When the form is submitted, it sends the form data to the specified email address using an emailJS template. The form component is implemented in ContactForm.jsx and can be customized by modifying the emailJS configuration.

## Author

- Github - [Szidelo](https://github.com/Szidelo)
- LinkedIn - [Szidelo Claudiu](https://www.linkedin.com/in/claudiu-szidelo-671b1324a/)

## Usage

-Modify the content of the components to personalize your portfolio webpage.
-Update the project details in the data constant of the Portfolio.jsx file.
-Customize the styles in the CSS files to match your design preferences.
-Test the webpage locally: npm start
-Build the production-ready version: npm run build