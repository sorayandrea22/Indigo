import AnimatedSection from "~/components/AnimatedSection";
import AnimatedElement from "~/components/AnimatedElement";

// Therapies data
const therapies = [
  {
    title: "Metamorfosis Índigo",
    description: "Acompañamiento 1 a 1 para el despertar de la conciencia.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Constelaciones",
    description: "Terapia sistémica que sana patrones familiares y ancestrales.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Medicina Tradicional China",
    description: "Medicina alternativa derivada de las prácticas médicas tradicionales de la antigua China.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Reiki",
    description: "Terapia energética que equilibra y armoniza el sistema energético.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Baños de Gong",
    description: "Inmersión sonora sanadora que purifica y eleva tu frecuencia vibracional.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
  },
  {
    title: "Masajes terapéuticos",
    description: "Técnicas manuales para la liberación de tensiones físicas.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      </svg>
    ),
  },
];

// Holistic celebrations data
const celebrations = [
  {
    title: "✨ Solsticios y equinoccios",
    description: "Marcas sagradas del tiempo, momentos para alinear nuestra energía con los ciclos de la Tierra.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "☕ Cacao ceremonial",
    description: "Un viaje al corazón con la planta sagrada del cacao, que abre puertas al amor, la sanación y la introspección profunda.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "🌿 Retiros de fin de semana",
    description: "Encuentros en entornos naturales que permiten soltar el ritmo acelerado, reconectar con el ser y recargar cuerpo, mente y alma.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "🎂 Cumpleaños holístico",
    description: "Una celebración consciente para honrar tu vida, agradecer tu camino y abrir nuevas puertas desde la intención y la energía sagrada.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
  },
  {
    title: "💍 Ritual de boda espiritual",
    description: "Una unión que trasciende lo convencional, una ceremonia que honra el amor auténtico, la conexión profunda y la consciencia compartida.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Encuentros de danza sagrada",
    description: "Celebraciones de la vida a través del cuerpo y la expresión libre.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
  },
];

export default function HolisticoSection() {
  return (
    <AnimatedSection
      id="holistico"
      className="py-20 bg-gradient-to-br from-indigo-gray/20 via-indigo-lavender/10 to-indigo-cyan/15 relative overflow-hidden"
    >
      {/* Enhanced floating animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-purple/5 rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-indigo-cyan/5 rounded-full animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-indigo-lavender/5 rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/4 right-1/3 w-20 h-20 border border-indigo-purple/10 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-indigo-lavender/8 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedElement className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-indigo-purple mb-6">
            Holístico
          </h2>
          <p className="text-xl text-indigo-dark/70 max-w-3xl mx-auto">
            Experiencias que integran cuerpo, mente y espíritu para tu bienestar integral
          </p>
        </AnimatedElement>

        {/* Therapies Section */}
        <div className="mb-20">
          <AnimatedElement className="text-center mb-12">
            <h3 className="text-3xl font-semibold text-indigo-purple mb-4">
              Terapias
            </h3>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {therapies.map((therapy, index) => (
              <AnimatedElement
                key={index}
                animationType="slideUp"
                delay={index * 100}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 border border-indigo-purple/10 group"
              >
                <div className="text-indigo-lavender mb-6 group-hover:scale-110 transition-transform duration-300">
                  {therapy.icon}
                </div>
                <h4 className="text-xl font-semibold text-indigo-purple mb-4 group-hover:text-indigo-lavender transition-colors duration-300">
                  {therapy.title}
                </h4>
                <p className="text-indigo-dark/80 leading-relaxed">{therapy.description}</p>
              </AnimatedElement>
            ))}
          </div>
        </div>

        {/* Holistic Celebrations Section */}
        <div className="mb-16">
          <AnimatedElement className="text-center mb-12" delay={600}>
            <h3 className="text-3xl font-semibold text-indigo-purple mb-4">
              Celebraciones Holísticas
            </h3>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {celebrations.map((celebration, index) => (
              <AnimatedElement
                key={index}
                animationType="slideUp"
                delay={700 + (index * 100)}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 border border-indigo-purple/10 group"
              >
                <div className="text-indigo-lavender mb-6 group-hover:scale-110 transition-transform duration-300">
                  {celebration.icon}
                </div>
                <h4 className="text-xl font-semibold text-indigo-purple mb-4 group-hover:text-indigo-lavender transition-colors duration-300">
                  {celebration.title}
                </h4>
                <p className="text-indigo-dark/80 leading-relaxed">{celebration.description}</p>
              </AnimatedElement>
            ))}
          </div>
        </div>

        {/* Call to Action Button */}
        <AnimatedElement animationType="slideUp" delay={1400} className="text-center">
          <a
            href="https://wa.me/573196425067?text=Hola,%20me%20interesa%20saber%20sobre%20las%20terapias%20y%20los%20eventos%20holisticos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-indigo-purple to-indigo-lavender text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 hover:shadow-lg transition-all duration-300 group"
          >
            <svg className="w-6 h-6 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.309" />
            </svg>
            <span>Me interesa</span>
          </a>
        </AnimatedElement>

        {/* Decorative bottom element */}
        <AnimatedElement animationType="fade" delay={1600} className="mt-16 text-center">
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-purple via-indigo-lavender to-indigo-cyan mx-auto rounded-full opacity-60"></div>
        </AnimatedElement>
      </div>
    </AnimatedSection>
  );
}
