import AnimatedSection from '~/components/AnimatedSection';
import AnimatedElement from '~/components/AnimatedElement';

export default function CorporateSection() {
  return (
    <AnimatedSection
      id="empresarial"
      className="py-20 bg-gradient-to-br from-indigo-gray/20 via-indigo-lavender/10 to-indigo-cyan/15 relative overflow-hidden"
    >
      {/* Enhanced floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-24 h-24 bg-indigo-purple/5 rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-32 right-32 w-32 h-32 bg-indigo-cyan/5 rounded-full animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-lavender/5 rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
        
        {/* Additional floating elements for consistency */}
        <div className="absolute top-1/4 right-1/4 w-20 h-20 border border-indigo-purple/10 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-indigo-lavender/8 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-10 right-10 w-28 h-28 border border-indigo-cyan/8 rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
        <div className="absolute bottom-10 left-10 w-14 h-14 bg-indigo-purple/6 rounded-full animate-pulse" style={{ animationDelay: '3s', animationDuration: '6s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedElement className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-indigo-purple mb-6">
            Empresarial
          </h2>
          <p className="text-xl text-indigo-dark/80 max-w-4xl mx-auto leading-relaxed">
            Acompañamos a organizaciones en su camino hacia el equilibrio, la consciencia y el bienestar corporativo.
          </p>
        </AnimatedElement>

        <div className="max-w-5xl mx-auto">
          {/* Corporate Services Image */}
          <AnimatedElement animationType="slideUp" delay={200} className="mb-12">
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg border border-indigo-lavender/20 group hover:shadow-xl transition-all duration-500">
              <div className="h-96 md:h-[500px] overflow-hidden relative">
                <img
                  src="/images/empresarial Caralz.jpeg"
                  alt="Servicios Empresariales - Índigo Yoga Holístico"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </AnimatedElement>

          {/* Call to Action */}
          <AnimatedElement animationType="fade" delay={600} className="mt-12 text-center">
            <p className="text-lg text-indigo-dark/70 mb-6">
              ¿Interesado en nuestros servicios empresariales?
            </p>
            <a
              href="https://wa.me/573196425067?text=Hola,%20quiero%20información%20sobre%20los%20servicios%20empresariales"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white/80 backdrop-blur-sm text-indigo-purple px-8 py-3 rounded-full font-medium border border-indigo-purple/20 hover:bg-indigo-purple hover:text-white transition-all duration-300 hover:scale-105"
            >
              Solicitar Información
            </a>
          </AnimatedElement>

          {/* Download Brochure Section */}
          <AnimatedElement animationType="slideUp" delay={400} className="text-center">
            <div className="bg-gradient-to-br from-indigo-purple/15 via-indigo-lavender/20 to-indigo-cyan/15 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-indigo-lavender/20">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-purple to-indigo-lavender rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-indigo-purple mb-3">
                  Brochure de Servicios
                </h3>
                <p className="text-indigo-dark/70 mb-6 max-w-2xl mx-auto">
                  Descarga nuestro catálogo completo de servicios empresariales y descubre cómo podemos transformar el bienestar en tu organización.
                </p>
              </div>
              
              <a
                href="https://drive.google.com/drive/folders/1t-p8yqBKyNWeFMEiNeM-7AWmEuqkVFEX?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-indigo-purple to-indigo-lavender text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 hover:shadow-lg transition-all duration-300 group"
              >
                <svg className="w-6 h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Descargar Brochure</span>
              </a>
            </div>
          </AnimatedElement>

          {/* Decorative bottom element */}
          <AnimatedElement animationType="fade" delay={800} className="mt-16 text-center">
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-purple via-indigo-lavender to-indigo-cyan mx-auto rounded-full opacity-60"></div>
          </AnimatedElement>
        </div>
      </div>
    </AnimatedSection>
  );
}
