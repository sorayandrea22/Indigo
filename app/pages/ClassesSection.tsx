import AnimatedSection from "~/components/AnimatedSection";
import AnimatedElement from "~/components/AnimatedElement";

// Data for classes with updated descriptions
const classes = [
	{
		title: "Yoga para todos los niveles",
		description:
			"Experiencia que integra cuerpo, respiración y mente. Sesiones multinivel que se adaptan a tu proceso único.",
		image: "/images/IMG_6096-Mejorado-NR.jpg",
		icon: (
			<svg
				className="w-8 h-8"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M13 10V3L4 14h7v7l9-11h-7z"
				/>
			</svg>
		),
	},
	{
		title: "Pilates Mat",
		description:
			"Fortalecimiento del cuerpo completo a través de movimientos conscientes, mejorando la calidad de vida y de la postura.",
		image: "/images/IMG_6190-Mejorado-NR.jpg",
		icon: (
			<svg
				className="w-8 h-8"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
				/>
			</svg>
		),
	},
	{
		title: "Meditación",
		description:
			"Cultiva la paz interior y la consciencia plena a través de técnicas milenarias.",
		image: "/images/IMG_6082-Mejorado-NR.jpg",
		icon: (
			<svg
				className="w-8 h-8"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
				/>
			</svg>
		),
	},
	{
		title: "Biodanza",
		description:
			"Danza de la vida que integra movimiento, música y expresión para la liberación sentimental.",
		image: "/images/29-biodanza.jpg",
		icon: (
			<svg
				className="w-8 h-8"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
				/>
			</svg>
		),
	},
	{
		title: "Acroyoga",
		description:
			"Fusión de yoga, acrobacias y masaje tailandés que fomenta la confianza y conexión.",
		image: "/images/acroyoga.jpg",
		icon: (
			<svg
				className="w-8 h-8"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
				/>
			</svg>
		),
	},
	{
		title: "Yoga para niños",
		description:
			"Prácticas adaptadas y lúdicas para sembrar bienestar en los más pequeños.",
		image: "/images/_MG_8389.jpg	",
		icon: (
			<svg
				className="w-8 h-8"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
				/>
			</svg>
		),
	},
];

// Benefits data
const benefits = [
	{
		title: "Atención personalizada",
		description: "Cuidado individual en cada práctica",
		icon: (
			<svg
				className="w-8 h-8 mx-auto"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
				/>
			</svg>
		),
	},
	{
		title: "Profesores certificados",
		description: "Instructores con formación profesional",
		icon: (
			<svg
				className="w-8 h-8 mx-auto"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
				/>
			</svg>
		),
	},
	{
		title: "Ambiente cálido",
		description: "Espacio acogedor e inclusivo",
		icon: (
			<svg
				className="w-8 h-8 mx-auto"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
				/>
			</svg>
		),
	},
	{
		title: "Crecimiento personal",
		description: "Enfoque en el desarrollo integral",
		icon: (
			<svg
				className="w-8 h-8 mx-auto"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M13 10V3L4 14h7v7l9-11h-7z"
				/>
			</svg>
		),
	},
];

export default function ClassesSection() {
	return (
		<AnimatedSection
			id="clases"
			className="py-20 bg-gradient-to-br from-indigo-gray/30 via-indigo-lavender/20 to-indigo-cyan/25 relative overflow-hidden"
		>
			{/* Enhanced floating animations */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-20 left-10 w-20 h-20 bg-indigo-purple/10 rounded-full animate-pulse"></div>
				<div
					className="absolute top-40 right-20 w-16 h-16 bg-indigo-cyan/15 rounded-full animate-bounce"
					style={{ animationDelay: "1s" }}
				></div>
				<div
					className="absolute bottom-32 left-20 w-12 h-12 bg-indigo-lavender/20 rounded-full animate-ping"
					style={{ animationDelay: "2s" }}
				></div>
				<div
					className="absolute bottom-20 right-10 w-24 h-24 bg-indigo-purple/5 rounded-full animate-pulse"
					style={{ animationDelay: "0.5s" }}
				></div>

				{/* New floating shapes */}
				<div
					className="absolute top-1/4 left-1/3 w-8 h-8 border-2 border-indigo-purple/20 rounded-full animate-spin"
					style={{ animationDuration: "10s" }}
				></div>
				<div
					className="absolute bottom-1/4 right-1/3 w-6 h-6 border-2 border-indigo-cyan/25 rotate-45 animate-pulse"
					style={{ animationDelay: "1.5s" }}
				></div>
				<div
					className="absolute top-1/2 right-1/4 w-4 h-4 bg-indigo-lavender/30 rotate-45 animate-bounce"
					style={{ animationDelay: "2.5s" }}
				></div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Nuestras Clases Section */}
				<AnimatedElement className="mb-20">
					<h3 className="text-3xl md:text-4xl font-semibold text-indigo-purple mb-8 text-center">
						Nuestras Clases
					</h3>
					<p className="text-lg text-indigo-dark/70 max-w-2xl mx-auto text-center mb-12">
						Programación variada y enfocada en el crecimiento personal con
						profesores certificados
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
						{classes.map((item, index) => (
							<AnimatedElement
								key={index}
								animationType="slideUp"
								delay={index * 150}
								className="bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 border border-indigo-lavender/20 group"
							>
								<div className="h-64 overflow-hidden relative">
									<img
										src={item.image}
										alt={item.title}
										className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-indigo-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
								</div>
								<div className="p-6 relative">
									<div className="text-indigo-purple mb-4 transform group-hover:scale-110 transition-transform duration-300">
										{item.icon}
									</div>
									<h4 className="text-xl font-semibold text-indigo-purple mb-3">
										{item.title}
									</h4>
									<p className="text-indigo-dark/70 mb-4">
										{item.description}
									</p>
								</div>
							</AnimatedElement>
						))}
					</div>
					<div className="text-center">
						<a
							href="https://wa.me/573196425067?text=Hola,%20quiero%20información%20sobre%20las%20clases%20regulares"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block bg-gradient-to-r from-indigo-purple to-indigo-lavender text-white px-10 py-4 rounded-full text-lg font-medium hover:scale-105 hover:shadow-lg transition-all duration-300"
						>
							Inscripción
						</a>
					</div>
				</AnimatedElement>

				{/* Nuestro Espacio Section */}
				<AnimatedElement className="mb-20" delay={800}>
					<h3 className="text-3xl md:text-4xl font-semibold text-indigo-purple mb-8 text-center">
						Nuestro Espacio
					</h3>
					<p className="text-xl text-indigo-dark/70 text-center mb-8 max-w-2xl mx-auto">
						Un ambiente cálido y acogedor diseñado para tu bienestar integral
					</p>
					<div className="bg-white/40 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg border border-indigo-lavender/20 max-w-4xl mx-auto">
						<div className="h-96 overflow-hidden">
							<img
								src="/images/IMG_6001-Mejorado-NR.jpg"
								alt="Nuestro Espacio - Índigo Yoga Holístico"
								className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
							/>
						</div>
					</div>
				</AnimatedElement>

				{/* Horarios y Valores Section */}
				<AnimatedElement className="mb-20" delay={1000}>
					<h3 className="text-3xl md:text-4xl font-semibold text-indigo-purple mb-8 text-center">
						Horarios y Valores
					</h3>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
						<div className="bg-white/40 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg border border-indigo-lavender/20">
							<div className="h-96 md:h-[70vh] lg:h-[90vh] overflow-hidden">
								<img
									src="/images/indigo_1.png"
									alt="Horarios - Índigo Yoga Holístico"
									className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
								/>
							</div>
						</div>
						<div className="bg-white/40 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg border border-indigo-lavender/20">
							<div className="h-96 md:h-[70vh] lg:h-[90vh] overflow-hidden">
								<img
									src="/images/indigo_2.png"
									alt="Valores - Índigo Yoga Holístico"
									className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
								/>
							</div>
						</div>
					</div>
				</AnimatedElement>

				{/* ¿Por qué elegirnos? Section */}
				<AnimatedElement animationType="scale" delay={1200}>
					<div className="bg-gradient-to-r from-indigo-cyan/20 to-indigo-lavender/20 rounded-3xl p-8 md:p-12">
						<h3 className="text-3xl md:text-4xl font-semibold text-indigo-purple mb-8 text-center animate-fade-in-down">
							¿Por qué elegirnos?
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							{benefits.map((benefit, index) => (
								<div
									key={index}
									className="text-center animate-fade-in-up"
									style={{ animationDelay: `${index * 0.2}s` }}
								>
									<div className="text-indigo-purple mb-4 hover:animate-bounce-soft">
										{benefit.icon}
									</div>
									<h4 className="font-semibold text-indigo-purple mb-3 text-xl">
										{benefit.title}
									</h4>
									<p className="text-indigo-dark text-lg">
										{benefit.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</AnimatedElement>
			</div>
		</AnimatedSection>
	);
}
