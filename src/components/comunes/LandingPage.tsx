import { Link } from 'react-router-dom';
import {
    Brain,
    Cpu,
    Zap,
    Upload,
    ListFilter,
    Sparkles,
} from 'lucide-react';

export default function LandingPage() {



    return (
        <div className="">
            {/* Fondo unificado con patrón de puntos */}


            {/* Contenido principal */}
            <div className="relative">
                {/* Hero Section */}
                <section className="pt-32 pb-24 px-6 text-center">
                    <div className="max-w-5xl mx-auto">
                        <div className="inline-flex items-center bg-blue-800 bg-opacity-50 px-4 py-2 rounded-full mb-6 border border-blue-600">
                            <Sparkles className="w-5 h-5 mr-2 text-amber-300" />
                            <span className="text-sm font-medium">Plataforma de IA para Reclutamiento</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500">
                                Reclutamiento Inteligente
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-blue-200">
                            Nuestra IA analiza cientos de CVs en minutos, identificando automáticamente a los mejores candidatos para tus vacantes.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                to="/register"
                                className="bg-gradient-to-r from-amber-400 to-amber-500 text-blue-900 font-bold py-4 px-8 rounded-full text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                Probar Gratis
                            </Link>

                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Tecnología de <span className="text-amber-500">Vanguardia</span>
                            </h2>
                            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
                                Nuestros modelos de IA especializados en recursos humanos ofrecen resultados precisos y accionables.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Cpu className="w-7 h-7" />,
                                    title: "Modelos de IA Especializados",
                                    description: "Entrenados con miles de perfiles para entender habilidades, experiencia y compatibilidad cultural."
                                },
                                {
                                    icon: <Zap className="w-7 h-7" />,
                                    title: "Procesamiento en Tiempo Real",
                                    description: "Analiza cientos de CVs en minutos, no en días. Resultados inmediatos para decisiones rápidas."
                                },
                                {
                                    icon: <Brain className="w-7 h-7" />,
                                    title: "Aprendizaje Continuo",
                                    description: "Mejora constantemente con cada interacción, adaptándose a las necesidades específicas de tu empresa."
                                }
                            ].map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-b from-slate-800/70 to-slate-900/70 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-blue-800/30 backdrop-blur-sm"
                                >
                                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-6 text-white">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                                    <p className="text-blue-200">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="py-20 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Cómo Nuestra <span className="text-amber-500">IA Trabaja</span> para Ti
                            </h2>
                        </div>

                        <div className="relative">
                            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-blue-600 transform -translate-x-1/2"></div>

                            {[
                                {
                                    step: "1",
                                    title: "Carga Inteligente",
                                    description: "Sube tus CVs en formato PDF. Nuestra IA extrae automáticamente toda la información relevante.",
                                    icon: <Upload className="w-8 h-8" />,
                                    position: "left"
                                },
                                {
                                    step: "2",
                                    title: "Análisis Profundo",
                                    description: "Nuestros algoritmos evalúan experiencia, habilidades, educación y compatibilidad cultural con tu empresa.",
                                    icon: <Cpu className="w-8 h-8" />,
                                    position: "right"
                                },
                                {
                                    step: "3",
                                    title: "Resultados Accionables",
                                    description: "Recibe un ranking de candidatos con puntajes detallados y razones para cada selección.",
                                    icon: <ListFilter className="w-8 h-8" />,
                                    position: "left"
                                }
                            ].map((step, index) => (
                                <div key={index} className="relative md:flex items-center mb-16 last:mb-0">
                                    {step.position === "left" ? (
                                        <>
                                            <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 md:text-right">
                                                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                                                <p className="text-blue-200">{step.description}</p>
                                            </div>
                                            <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white mx-auto z-10 shadow-lg">
                                                {step.icon}
                                            </div>
                                            <div className="md:w-1/2 md:pl-16"></div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="md:w-1/2 md:pr-16"></div>
                                            <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white mx-auto z-10 shadow-lg">
                                                {step.icon}
                                            </div>
                                            <div className="md:w-1/2 md:pl-16 mb-8 md:mb-0">
                                                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                                                <p className="text-blue-200">{step.description}</p>
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* Final CTA */}
                <section className="py-20 px-6 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center bg-blue-800 bg-opacity-50 px-4 py-2 rounded-full mb-6 border border-blue-600">
                            <Sparkles className="w-5 h-5 mr-2 text-amber-300" />
                            <span className="text-sm font-medium">¿Listo para transformar tu reclutamiento?</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Empieza a Usar TalentAI <span className="text-amber-300">Hoy Mismo</span>
                        </h2>

                        <p className="text-xl mb-10 max-w-2xl mx-auto text-blue-200">
                            Regístrate ahora y obtén 10 análisis de CVs gratuitos para experimentar el poder de la IA en tu proceso de contratación.
                        </p>

                        <Link
                            to="/register"
                            className="bg-gradient-to-r from-amber-400 to-amber-500 text-blue-900 font-bold py-4 px-10 rounded-full text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Comenzar Gratis
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}