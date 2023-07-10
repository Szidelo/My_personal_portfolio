import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaFreeCodeCamp } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

	return (
		<footer>
      <p>&copy; {currentYear} Szidelo Claudiu. All rights reserved.</p>
			<div className="footer__socials">
				<a
					href="https://www.linkedin.com/in/claudiu-szidelo-671b1324a/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<BsLinkedin />
				</a>
				<a
					href="https://github.com/Szidelo"
					target="_blank"
					rel="noopener noreferrer"
				>
					<BsGithub />
				</a>
				<a
					href="https://www.freecodecamp.org/Szidelo"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaFreeCodeCamp />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
