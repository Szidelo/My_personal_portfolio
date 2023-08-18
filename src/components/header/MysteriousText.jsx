import React from "react";
import { animated, useSpring } from "react-spring";

// Documentation for fading animation: https://www.youtube.com/watch?v=T1jHxdJi1zw; https://codesandbox.io/s/mysterious-text-animation-with-react-spring-vhj66 https://github.com/pmndrs/react-spring/issues/1111

const MysteriousText = ({ children }) => {
	const chars = children.split("");

	const transitions = useSpring({
		from: { opacity: 0 },
		to: async (next) => {
			await next({ opacity: 1, config: { duration: 1000 } });

			await new Promise((resolve) => setTimeout(resolve, 2000));

			await next({ opacity: 0, config: { duration: 1000 } });
		},
        config: { tension: 200, friction: 200 },
	});

	return (
		<span>
			<animated.span style={transitions}>
				{chars.map((item, index) => (
					<span key={index}>{item}</span>
				))}
			</animated.span>
		</span>
	);
};

export default MysteriousText;
