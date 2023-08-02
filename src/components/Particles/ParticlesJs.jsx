import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "./particles.css";

const ParticlesJs = () => {
	const particlesInit = useCallback(async (engine) => {
		console.log(engine);
		await loadSlim(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {
		await console.log(container);
	}, []);

	return (
		<div className="particles-container">
			<Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					fpsLimit: 144,
					interactivity: {
						events: {
							onClick: {
								enable: true,
								mode: "repulse",
							},
							onHover: {
								enable: true,
								mode: "grab",
								distance: 800,
							},
							resize: true,
						},
						modes: {
							push: {
								quantity: 4,
							},
							repulse: {
								distance: 200,
								duration: 0.4,
							},
							grab: {
								distance: 200,
								links: {
									opacity: 0.3,
								},
							},
						},
					},
					particles: {
						color: {
							value: "#FC4747",
						},
						links: {
							color: "#FC4747",
							distance: 180,
							enable: true,
							opacity: 0.35,
							width: 1,
						},
						move: {
							direction: "none",
							enable: true,
							outModes: {
								default: "bounce",
							},
							random: false,
							speed: 0.75,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								area: 800,
							},
							value: 40,
						},
						opacity: {
							value: 0.3,
						},
						shape: {
							type: "circle",
						},
						size: {
							value: { min: 1, max: 3 },
						},
					},
					detectRetina: true,
				}}
			/>
		</div>
	);
};

export default ParticlesJs;
