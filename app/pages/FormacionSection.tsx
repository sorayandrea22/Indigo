import AnimatedSection from "~/components/AnimatedSection";
import AnimatedElement from "~/components/AnimatedElement";

const BROCHURE_PDF = "/Indigo_Teacher_Training_2027.pdf";

export default function FormacionSection() {
	return (
		<AnimatedSection
			id="formacion"
			className="py-20 bg-gradient-to-br from-indigo-purple/10 via-indigo-lavender/15 to-indigo-cyan/15 relative overflow-hidden"
		>
			{/* Floating background elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-20 left-20 w-24 h-24 bg-indigo-purple/5 rounded-full animate-pulse" style={{ animationDelay: "0s", animationDuration: "4s" }}></div>
				<div className="absolute bottom-32 right-32 w-32 h-32 bg-indigo-cyan/5 rounded-full animate-pulse" style={{ animationDelay: "2s", animationDuration: "5s" }}></div>
				<div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-lavender/5 rounded-full animate-pulse" style={{ animationDelay: "1s", animationDuration: "3s" }}></div>
				<div className="absolute top-1/4 right-1/4 w-20 h-20 border border-indigo-purple/10 rounded-full animate-spin" style={{ animationDuration: "20s" }}></div>
				<div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-indigo-lavender/8 rounded-full animate-bounce" style={{ animationDelay: "1.5s" }}></div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<AnimatedElement className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-semibold text-indigo-purple mb-6">
						Formación
					</h2>
					<p className="text-xl text-indigo-dark/80 max-w-3xl mx-auto leading-relaxed">
						Programa de formación para instructores 2027. Profundiza en el yoga
						y prepárate para acompañar procesos de transformación.
					</p>
				</AnimatedElement>

				<div className="max-w-5xl mx-auto">
					<AnimatedElement animationType="slideUp" delay={200} className="mt-20">
						<div className="bg-gradient-to-br from-indigo-purple/15 via-indigo-lavender/20 to-indigo-cyan/15 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-lg border border-indigo-lavender/20">
							<div className="text-center mb-8">
								<h3 className="text-2xl font-semibold text-indigo-purple mb-3">
									Brochure de Formación 2027
								</h3>
								<p className="text-indigo-dark/70 max-w-2xl mx-auto">
									Explora el brochure del programa de instructores 2027
									directamente aquí, o descárgalo para consultarlo cuando
									quieras.
								</p>
							</div>

							{/* PDF viewer */}
							<div className="rounded-xl overflow-hidden border border-indigo-lavender/30 bg-white/60 shadow-inner">
								<iframe
									src={BROCHURE_PDF}
									title="Brochure de Formación 2027 - Índigo Yoga Holístico"
									className="w-full h-[60vh] md:h-[75vh]"
								>
									<p className="p-6 text-indigo-dark/70">
										Tu navegador no puede mostrar el PDF aquí.{" "}
										<a
											href={BROCHURE_PDF}
											target="_blank"
											rel="noopener noreferrer"
											className="text-indigo-purple underline"
										>
											Ábrelo en una página nueva
										</a>
										.
									</p>
								</iframe>
							</div>
							<p className="mt-3 text-sm text-indigo-dark/60 text-center">
								¿No visualizas el documento? Ábrelo o descárgalo con los botones
								de abajo.
							</p>

							{/* Actions */}
							<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
								<a
									href={BROCHURE_PDF}
									download="Indigo_Teacher_Training_2027.pdf"
									className="inline-flex items-center space-x-3 bg-gradient-to-r from-indigo-purple to-indigo-lavender text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 hover:shadow-lg transition-all duration-300 group"
								>
									<svg
										className="w-6 h-6 group-hover:animate-bounce"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
										/>
									</svg>
									<span>Descargar Brochure</span>
								</a>
								<a
									href={BROCHURE_PDF}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm text-indigo-purple px-8 py-4 rounded-full text-lg font-medium border border-indigo-purple/20 hover:bg-indigo-purple hover:text-white transition-all duration-300 hover:scale-105 group"
								>
									<svg
										className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
										/>
									</svg>
									<span>Ver en página completa</span>
								</a>
							</div>
						</div>
					</AnimatedElement>

					<AnimatedElement animationType="fade" delay={600} className="mt-12 text-center">
						<p className="text-lg text-indigo-dark/70 mb-6">
							¿Quieres más información sobre la formación?
						</p>
						<a
							href="https://wa.me/573196425067?text=Hola,%20quiero%20información%20sobre%20la%20formación%20de%20instructores%202027"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block bg-white/80 backdrop-blur-sm text-indigo-purple px-8 py-3 rounded-full font-medium border border-indigo-purple/20 hover:bg-indigo-purple hover:text-white transition-all duration-300 hover:scale-105"
						>
							Solicitar Información
						</a>
					</AnimatedElement>

					<AnimatedElement animationType="fade" delay={800} className="mt-16 text-center">
						<div className="w-24 h-1 bg-gradient-to-r from-indigo-purple via-indigo-lavender to-indigo-cyan mx-auto rounded-full opacity-60"></div>
					</AnimatedElement>
				</div>
			</div>
		</AnimatedSection>
	);
}
