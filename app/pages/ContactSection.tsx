import AnimatedSection from '~/components/AnimatedSection';
import AnimatedElement from '~/components/AnimatedElement';

export default function ContactSection() {
  return (
    <AnimatedSection
      id="contacto"
      className="py-20 bg-gradient-to-br from-indigo-gray/25 via-indigo-lavender/15 to-indigo-cyan/20 relative overflow-hidden"
    >
      {/* Enhanced floating animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-20 w-16 h-16 bg-indigo-purple/10 rounded-full animate-ping"
          style={{ animationDelay: '0s' }}
        ></div>
        <div
          className="absolute bottom-32 right-32 w-20 h-20 bg-indigo-cyan/10 rounded-full animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-1/2 right-10 w-8 h-8 bg-indigo-lavender/20 rounded-full animate-bounce"
          style={{ animationDelay: '2s' }}
        ></div>

        {/* New floating elements */}
        <div
          className="absolute top-1/4 left-10 w-12 h-12 border-2 border-indigo-purple/15 rotate-45 animate-spin"
          style={{ animationDuration: '8s' }}
        ></div>
        <div
          className="absolute bottom-1/4 right-10 w-6 h-6 bg-indigo-cyan/25 rotate-45 animate-pulse"
          style={{ animationDelay: '1.5s' }}
        ></div>
        <div
          className="absolute top-1/3 left-1/2 w-4 h-4 bg-indigo-lavender/30 rounded-full animate-bounce"
          style={{ animationDelay: '2.5s' }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-10 h-10 border border-indigo-gray/20 rounded-full animate-spin"
          style={{ animationDuration: '12s', animationDirection: 'reverse' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedElement className="text-center mb-16">
          <h2 className="text-4xl font-light text-indigo-purple mb-6">
            Contacto
          </h2>
          <p className="text-xl text-indigo-dark/70">
            Conecta con nosotros y comienza tu transformación
          </p>
        </AnimatedElement>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <AnimatedElement animationType="slideLeft">
              <div className="bg-gradient-to-br from-indigo-cyan/30 to-indigo-lavender/30 backdrop-blur-lg rounded-2xl p-8 border border-indigo-lavender/20 h-full">
                <h3 className="text-2xl font-semibold text-indigo-purple mb-6 text-center">
                  Información de contacto
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-indigo-purple mt-1">
                      <svg
                        className="w-7 h-7"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-indigo-purple text-lg mb-1">
                        Ubicación
                      </p>
                      <p className="text-indigo-dark/80 font-medium">
                        Centro Comercial Córdoba
                      </p>
                      <p className="text-indigo-dark/80 font-medium">
                        Bloque 5, Local 301 - Rionegro
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-indigo-purple mt-1">
                      <svg
                        className="w-7 h-7"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.309" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-indigo-purple text-lg mb-1">
                        WhatsApp
                      </p>
                      <a
                        href="https://wa.me/573196425067?text=Hola,%20quiero%20recibir%20toda%20la%20información%20de%20la%20comunidad%20índigo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-dark/80 font-medium hover:text-indigo-purple transition-colors"
                      >
                        319 642 5067
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-indigo-purple mt-1">
                      <svg
                        className="w-7 h-7"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5a4.25 4.25 0 004.25 4.25h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-2.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-indigo-purple text-lg mb-1">
                        Instagram
                      </p>
                      <a
                        href="https://instagram.com/indigo.yogaholistico"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-dark/80 font-medium hover:text-indigo-purple transition-colors"
                      >
                        @indigo.yogaholistico
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contact Button */}
                <div className="mt-8 text-center">
                  <a
                    href="https://wa.me/573196425067?text=Hola,%20quiero%20conectar%20con%20Índigo,%20quiero%20más%20información%20sobre..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-indigo-purple to-indigo-lavender text-white px-8 py-4 rounded-full font-medium text-lg hover:scale-105 hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-white/20 group"
                  >
                    <svg
                      className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.309" />
                    </svg>
                    Contáctanos
                  </a>
                </div>
              </div>
            </AnimatedElement>

            {/* Google Maps Section */}
            <AnimatedElement animationType="slideRight" delay={200}>
              <div className="bg-white/40 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg border border-indigo-lavender/20 h-full">
                <div className="p-6 border-b border-indigo-lavender/20">
                  <h4 className="text-xl font-semibold text-indigo-purple mb-2 text-center">
                    Nuestra Ubicación
                  </h4>
                  <p className="text-indigo-dark/70 text-center">
                    Centro Comercial Córdoba - Rionegro
                  </p>
                </div>
                <div className="relative h-80 lg:h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d-75.37431837622656!3d6.150856395590096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e469f102b4d7da9%3A0x3161271e2f2e1ac1!2sCordova%20Mall%2C%20Rionegro%2C%20Antioquia%2C%20Colombia!5e0!3m2!1sen!2sco!4v1635678901234!5m2!1sen!2sco"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-b-2xl"
                  />
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}