import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_kvzd81h",
				"template_0hkc0pf",
				form.current,
				"yc9EDnZIlelh6XRF8"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};

	return (
		<section id="contact">
			<h5>Get In Touch</h5>
			<h2>Contact</h2>
			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<HiOutlineMail className="contact__option-icon" />
						<h4>Email</h4>
						<h5>claudiuszidelo@yahoo.ro</h5>
						<a
							href="mailto:claudiuszidelo@yahoo.ro"
							target="_blank"
							rel="noopener noreferrer"
						>
							Send a messege
						</a>
					</article>
					<article className="contact__option">
						<RiMessengerLine className="contact__option-icon" />
						<h4>Messenger</h4>
						<h5>Szidelo Claudiu</h5>
						<a
							href="https://m.me/szidelo"
							target="_blank"
							rel="noopener noreferrer"
						>
							Send a messege
						</a>
					</article>
					<article className="contact__option">
						<BsWhatsapp className="contact__option-icon" />
						<h4>Whatsapp</h4>
						<h5>+40758870906</h5>
						<a
							href="https://wa.me/+40758870906"
							target="_blank"
							rel="noopener noreferrer"
						>
							Send a messege
						</a>
					</article>
				</div>

				<form ref={form} onSubmit={sendEmail}>
					<input
						type="text"
						name="name"
						placeholder="Your Full Name..."
						required
					/>
					<input
						type="email"
						name="email"
						placeholder="Your Email..."
						required
					/>
					<textarea
						name="message"
						rows="7"
						placeholder="Your Message"
						required
					></textarea>
					<button type="submit" className="btn btn-primary">
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
