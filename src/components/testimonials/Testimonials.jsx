import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
	{
		id: 1,
		avatar: AVTR1,
		name: "Tina Snow",
		review:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices rutrum aliquam. Sed lobortis erat vitae sapien elementum, et scelerisque justo vestibulum. Suspendisse sed turpis a purus consequat lobortis.",
	},
	{
		id: 2,
		avatar: AVTR2,
		name: "John Doe",
		review:
			"Praesent semper, urna in rhoncus consequat, urna mauris rutrum lectus, ac auctor nisi risus id leo. Mauris id hendrerit lorem. Ut in mauris posuere, vestibulum risus nec, finibus est.",
	},
	{
		id: 3,
		avatar: AVTR3,
		name: "Jane Smith",
		review:
			"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec convallis tortor vel ipsum tempus scelerisque. Quisque fringilla felis id metus bibendum feugiat.",
	},
	{
		id: 4,
		avatar: AVTR4,
		name: "Alex Johnson",
		review:
			"Nulla lacinia lorem sit amet commodo placerat. Morbi elementum augue vitae massa iaculis commodo. Sed gravida, lectus eu bibendum pretium, orci mauris suscipit turpis, id eleifend est ligula non lorem.",
	},
];

const Testimonials = () => {
	return (
		<section id="testimonials">
			<h5>Review From Clients</h5>
			<h2>Testimonials</h2>

			<Swiper
				modules={[Pagination]}
				spaceBetween={50}
				slidesPerView={1}
				pagination={{ clickable: true }}

				className="container testimonials__container"
			>
				{data.map(({ avatar, name, review }, index) => {
					console.log({index})
					return (
						<SwiperSlide key={index} className="testimonial">
							<div className="clients__avatar">
								<img src={avatar} alt={avatar} className="client__avatar" />
								<div>
									<h5 className="client__name">{name}</h5>
									<small className="client__review">{review}</small>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Testimonials;
