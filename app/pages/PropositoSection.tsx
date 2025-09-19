import AnimatedSection from '~/components/AnimatedSection';
import AnimatedElement from '~/components/AnimatedElement';

const aboutBlocks = [
    {
        title: '¿Qué es Índigo?',
        content:
            'Somos un estudio de yoga comprometido con el bienestar integral de nuestros alumnos. A través de prácticas conscientes, ofrecemos un espacio seguro y acogedor donde se promueve el equilibrio entre cuerpo, mente y espíritu.',
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
        title: 'Misión',
        content:
            'Fomentar el bienestar físico, mental y emocional de nuestros alumnos a través de clases, talleres y experiencias que integren el yoga como una herramienta de transformación personal.',
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
        title: 'Visión',
        content:
            'Convertirnos en un referente local de yoga y bienestar integral, expandiendo nuestra comunidad y promoviendo un estilo de vida más consciente y saludable.',
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
];

const teamMembers = [
    {
        name: 'Juan David',
        role: 'Cofundador',
        description:
            'Licenciado en Educación Física con enfoque humanista y transformador. Director académico del programa "Yoga para la Vida" y transmisor de palabra y consciencia a través del programa "Metamorfosis Índigo".',
        avatar: 'images/JuanDavid.png',
    },
    {
        name: 'Yesenia Alzate',
        role: 'Cofundadora',
        description:
            'Administradora de empresas, encontró en el yoga y el pilates su verdadero propósito. Integra cuerpo, mente y energía desde el movimiento consciente con presencia amorosa y compromiso profundo, empatía y vocación.',
        avatar: 'images/YeseniaAlzate.png',
    },
];

export default function PropositoSection() {
    return (
        <AnimatedSection
            id="proposito"
            className="py-20 bg-gradient-to-br from-indigo-gray/15 via-indigo-lavender/8 to-indigo-cyan/12 relative overflow-hidden"
        >
            {/* Logo decorations in background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Center background logo */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.08]">
                    <img
                        src="/images/LogoIndigo.png"
                        alt=""
                        className="w-[500px] h-[500px] object-contain"
                    />
                </div>

                {/* Top left half logo */}
                <div className="absolute -left-[200px] -top-[200px] opacity-[0.1]">
                    <img
                        src="/images/LogoIndigo.png"
                        alt=""
                        className="w-[500px] h-[500px] object-contain"
                    />
                </div>

                {/* Bottom right half logo */}
                <div className="absolute -right-[200px] -bottom-[200px] opacity-[0.1]">
                    <img
                        src="/images/LogoIndigo.png"
                        alt=""
                        className="w-[500px] h-[500px] object-contain"
                    />
                </div>

                {/* Enhanced floating background elements */}
                <div
                    className="absolute bottom-20 right-20 w-12 h-12 bg-indigo-cyan/10 rounded-full animate-pulse"
                    style={{
                        animationDelay: '2s',
                        animationDuration: '5s',
                    }}
                ></div>
                <div
                    className="absolute top-1/2 right-10 w-8 h-8 bg-indigo-lavender/10 rounded-full animate-pulse"
                    style={{
                        animationDelay: '1s',
                        animationDuration: '3s',
                    }}
                ></div>
                <div
                    className="absolute top-1/4 right-1/3 w-20 h-20 border border-indigo-purple/15 rounded-full animate-spin"
                    style={{
                        animationDuration: '20s',
                    }}
                ></div>
                <div
                    className="absolute bottom-1/4 left-1/4 w-6 h-6 bg-indigo-lavender/15 rounded-full animate-bounce"
                    style={{
                        animationDelay: '1.5s',
                    }}
                ></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Propósito Section */}
                <AnimatedElement className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-semibold text-indigo-purple mb-4">
                        Nuestro Propósito
                    </h2>
                    <p className="text-xl text-indigo-dark/70 italic">
                        Conectamos cuerpo, mente y espíritu desde el amor
                    </p>
                </AnimatedElement>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                    {aboutBlocks.map((block, index) => (
                        <AnimatedElement
                            key={index}
                            animationType="slideUp"
                            delay={index * 200}
                            className="group"
                        >
                            <div className="bg-white/40 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-indigo-lavender/20 hover:shadow-xl hover:scale-105 transition-all duration-500 h-full flex flex-col">
                                <div className="text-center mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-purple/20 to-indigo-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <div className="text-indigo-purple group-hover:text-indigo-lavender transition-colors duration-300">
                                            {block.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-indigo-purple mb-4 group-hover:text-indigo-lavender transition-colors duration-300">
                                        {block.title}
                                    </h3>
                                </div>
                                <p className="text-indigo-dark/80 leading-relaxed text-center flex-grow">
                                    {block.content}
                                </p>
                            </div>
                        </AnimatedElement>
                    ))}
                </div>

                {/* Team Section */}
                <AnimatedElement className="text-center mb-16" delay={800}>
                    <h2 className="text-4xl font-semibold text-indigo-purple mb-4">
                        Detrás de Índigo
                    </h2>
                    <p className="text-xl text-indigo-dark/70 italic">
                        Dos almas al servicio del bienestar
                    </p>
                </AnimatedElement>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <AnimatedElement
                            key={index}
                            animationType="scale"
                            delay={1000 + index * 200}
                            className="bg-white/40 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-indigo-lavender/20 hover:scale-105 transition-all duration-500"
                        >
                            <div className="text-center mb-6">
                                <div className="w-72 h-72 mx-auto mb-4 rounded-full overflow-hidden border-4 border-indigo-lavender/30 shadow-lg">
                                    <img
                                        src={member.avatar}
                                        alt={member.name}
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                                <h3 className="text-2xl font-semibold text-indigo-purple mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-indigo-lavender font-medium mb-4">
                                    {member.role}
                                </p>
                            </div>
                            <p className="text-indigo-dark/70 leading-relaxed text-center">
                                {member.description}
                            </p>
                        </AnimatedElement>
                    ))}
                </div>

                {/* Final decorative element */}
                <AnimatedElement
                    animationType="fade"
                    delay={1400}
                    className="mt-16 text-center"
                >
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-purple via-indigo-lavender to-indigo-cyan mx-auto rounded-full opacity-60"></div>
                </AnimatedElement>
            </div>
        </AnimatedSection>
    )
}