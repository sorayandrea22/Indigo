export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16"
      style={{
        backgroundImage: "url('/images/IMG_6190-Mejorado-NR.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-purple/85 via-indigo-lavender/75 to-indigo-cyan/65"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-40 w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-white/25 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-10 w-4 h-4 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/3 right-10 w-2 h-2 bg-white/35 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="w-64 h-64 md:w-80 md:h-80 mx-auto mb-6 relative group">
            <div className="absolute inset-0 rounded-full animate-pulse"></div>
            <div className="relative w-full h-full overflow-hidden transition-all duration-500 group-hover:scale-110">
              <img 
                src="/images/LogoIndigo.png" 
                alt="Índigo Yoga Holístico"
                className="w-full h-full p-2"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-white/10 animate-ping" style={{ animationDelay: '2s', animationDuration: '3s' }}></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-light text-white mb-6 animate-slide-up drop-shadow-lg">
            Índigo Yoga Holístico
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up drop-shadow-md" style={{ animationDelay: "0.2s" }}>
            Tu espacio de bienestar, conocimiento y amor
          </p>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto animate-slide-up drop-shadow-md" style={{ animationDelay: "0.4s" }}>
            Servimos al despertar de la consciencia a través de clases, talleres y experiencias que integran diversas herramientas de transformación.
          </p>
          <a
            href="https://wa.me/573196425067?text=Hola,%20quiero%20unirme%20a%20la%20comunidad%20Índigo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-indigo-purple to-indigo-lavender text-white px-8 py-4 rounded-full font-medium text-lg hover:scale-105 hover:shadow-xl transition-all duration-300 animate-slide-up backdrop-blur-sm border border-white/20"
            style={{ animationDelay: "0.6s" }}
          >
            Unirse a la comunidad
          </a>
        </div>
      </div>
    </section>
  );
}
