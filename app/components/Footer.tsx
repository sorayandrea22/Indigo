export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-indigo-purple to-indigo-lavender text-white py-16 relative overflow-hidden">
      {/* Floating background animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full animate-spin" style={{ animationDuration: '30s' }}></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/5 rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-white/5 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4 group">
              <div className="w-16 h-16 flex items-center justify-center overflow-hidden  group-hover:scale-110 transition-transform duration-300">
                <img
                  src="/images/LogoIndigo.png" 
                  alt="Índigo Yoga Holístico"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-semibold text-lg group-hover:text-indigo-cyan transition-colors duration-300">
                Índigo Yoga Holístico
              </span>
            </div>
            <p className="text-white/80 mb-4">
              Tu espacio de bienestar, conocimiento y amor
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a
                  href="#home"
                  className="hover:text-white transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#proposito"
                  className="hover:text-white transition-colors"
                >
                  Propósito
                </a>
              </li>
              <li>
                <a
                  href="#clases"
                  className="hover:text-white transition-colors"
                >
                  Clases
                </a>
              </li>
              <li>
                <a
                  href="#empresarial"
                  className="hover:text-white transition-colors"
                >
                  Empresarial
                </a>
              </li>
              <li>
                <a
                  href="#holistico"
                  className="hover:text-white transition-colors"
                >
                  Holístico
                </a>
              </li>
              <li>
                <a
                  href="#formacion"
                  className="hover:text-white transition-colors"
                >
                  Formación
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="hover:text-white transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-white/80">
              <li>WhatsApp: 319 642 5067</li>
              <li>@indigo.yogaholistico</li>
              <li>Centro Comercial Córdoba</li>
              <li>Bloque 5, Local 301 - Rionegro</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/573196425067?text=Hola,%20quiero%20recibir%20toda%20la%20información%20de%20la%20comunidad%20índigo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.309" />
                </svg>
              </a>
              <a
                href="https://instagram.com/indigo.yogaholistico"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5a4.25 4.25 0 004.25 4.25h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-2.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80 italic text-lg mb-4">
            "Te invitamos a hacer parte de esta comunidad que vibra en armonía,
            amor y consciencia."
          </p>
          <p className="text-white/60">
            © 2024 Índigo Yoga Holístico. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
