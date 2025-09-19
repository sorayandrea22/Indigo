import { useState } from 'react';

export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        // Close mobile menu after clicking a link
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-indigo-lavender/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <button
                        onClick={() => scrollToSection('home')}
                        className="flex items-center space-x-3 group cursor-pointer"
                    >
                        <div className="w-16 h-16 overflow-hidden hover:scale-110 transition-transform duration-300">
                            <img
                                src="/images/LogoIndigo.png"
                                alt="Índigo Yoga Holístico"
                                className="w-full h-full"
                            />
                        </div>
                        <span className="text-indigo-purple font-semibold text-lg hover:text-indigo-lavender transition-colors duration-300 group-hover:text-indigo-lavender">
                            Índigo Yoga Holístico
                        </span>
                    </button>

                    <div className="hidden lg:flex space-x-6 animate-fade-in">
                        <button
                            onClick={() => scrollToSection('home')}
                            className="text-indigo-dark hover:text-indigo-purple transition-all duration-300 hover:scale-105 text-base font-medium"
                        >
                            Inicio
                        </button>
                        <button
                            onClick={() => scrollToSection('proposito')}
                            className="text-indigo-dark hover:text-indigo-purple transition-all duration-300 hover:scale-105 text-base font-medium"
                        >
                            Propósito
                        </button>
                        <button
                            onClick={() => scrollToSection('clases')}
                            className="text-indigo-dark hover:text-indigo-purple transition-all duration-300 hover:scale-105 text-base font-medium"
                        >
                            Clases
                        </button>
                        <button
                            onClick={() => scrollToSection('empresarial')}
                            className="text-indigo-dark hover:text-indigo-purple transition-all duration-300 hover:scale-105 text-base font-medium"
                        >
                            Empresarial
                        </button>
                        <button
                            onClick={() => scrollToSection('holistico')}
                            className="text-indigo-dark hover:text-indigo-purple transition-all duration-300 hover:scale-105 text-base font-medium"
                        >
                            Holístico
                        </button>
                        <button
                            onClick={() => scrollToSection('contacto')}
                            className="text-indigo-dark hover:text-indigo-purple transition-all duration-300 hover:scale-105 text-base font-medium"
                        >
                            Contacto
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-indigo-purple hover:text-indigo-lavender transition-colors duration-300"
                        >
                            {isMobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>

                    <div className="hidden lg:flex items-center space-x-3">
                        <a
                            href="https://wa.me/573196425067?text=Hola,%20quiero%20recibir%20toda%20la%20información%20de%20la%20comunidad%20índigo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-purple hover:text-indigo-lavender transition-colors duration-300 hover:scale-110"
                        >
                            <svg
                                className="w-6 h-6"
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
                            className="text-indigo-purple hover:text-indigo-lavender transition-colors duration-300 hover:scale-110"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5a4.25 4.25 0 004.25 4.25h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-2.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-indigo-lavender/20 py-4">
                    <div className="flex flex-col space-y-4 px-4">
                        <button
                            onClick={() => scrollToSection('home')}
                            className="text-indigo-dark hover:text-indigo-purple transition-colors duration-300 text-left font-medium"
                        >
                            Inicio
                        </button>
                        <button
                            onClick={() => scrollToSection('proposito')}
                            className="text-indigo-dark hover:text-indigo-purple transition-colors duration-300 text-left font-medium"
                        >
                            Propósito
                        </button>
                        <button
                            onClick={() => scrollToSection('clases')}
                            className="text-indigo-dark hover:text-indigo-purple transition-colors duration-300 text-left font-medium"
                        >
                            Clases
                        </button>
                        <button
                            onClick={() => scrollToSection('empresarial')}
                            className="text-indigo-dark hover:text-indigo-purple transition-colors duration-300 text-left font-medium"
                        >
                            Empresarial
                        </button>
                        <button
                            onClick={() => scrollToSection('holistico')}
                            className="text-indigo-dark hover:text-indigo-purple transition-colors duration-300 text-left font-medium"
                        >
                            Holístico
                        </button>
                        <button
                            onClick={() => scrollToSection('formacion')}
                            className="text-indigo-dark hover:text-indigo-purple transition-colors duration-300 text-left font-medium"
                        >
                            Formación
                        </button>
                        <button
                            onClick={() => scrollToSection('contacto')}
                            className="text-indigo-dark hover:text-indigo-purple transition-colors duration-300 text-left font-medium"
                        >
                            Contacto
                        </button>

                        {/* Mobile social links */}
                        <div className="flex space-x-4 pt-4 border-t border-indigo-lavender/20">
                            <a
                                href="https://wa.me/573196425067?text=Hola,%20quiero%20recibir%20toda%20la%20información%20de%20la%20comunidad%20índigo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-purple hover:text-indigo-lavender transition-colors duration-300"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.309" />
                                </svg>
                            </a>
                            <a
                                href="https://instagram.com/indigo.yogaholistico"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-purple hover:text-indigo-lavender transition-colors duration-300"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5a4.25 4.25 0 004.25 4.25h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-2.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
