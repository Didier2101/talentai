import { Brain, Sparkles, Users, Rocket, ShieldCheck, BarChart2, BookOpen, Sparkle, X, Check, Code, Briefcase, Linkedin, Github, Phone, Cpu } from "lucide-react";
import { Link } from 'react-router-dom';

const Nosotros = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center">
                    <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg mb-6">
                        <Brain className="h-10 w-10 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Revolucionando el reclutamiento con <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Inteligencia Artificial</span>
                    </h1>
                    <p className="text-xl text-blue-300 max-w-3xl mx-auto">
                        En TalentAI combinamos tecnología avanzada con conocimiento en recursos humanos para transformar la manera en que las empresas encuentran su talento ideal.
                    </p>
                </div>
            </section>

            {/* Nuestra Propuesta */}
            <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">
                        <Sparkles className="inline-block mr-3 text-amber-400" />
                        Nuestra Propuesta Innovadora
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-white mb-4">El Problema Actual</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 text-red-400 mr-3 mt-0.5">•</div>
                                    <p className="text-slate-300">Procesos manuales que consumen tiempo y recursos</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 text-red-400 mr-3 mt-0.5">•</div>
                                    <p className="text-slate-300">Sesgos inconscientes en la selección de candidatos</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 text-red-400 mr-3 mt-0.5">•</div>
                                    <p className="text-slate-300">Dificultad para manejar grandes volúmenes de aplicaciones</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 text-red-400 mr-3 mt-0.5">•</div>
                                    <p className="text-slate-300">Pérdida de candidatos calificados por filtros rígidos</p>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-white mb-4">Nuestra Solución</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 text-green-400 mr-3 mt-0.5">•</div>
                                    <p className="text-slate-300">Sistema de preselección inteligente con LLM y Agentes de IA</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 text-green-400 mr-3 mt-0.5">•</div>
                                    <p className="text-slate-300">Análisis semántico profundo de currículums</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 text-green-400 mr-3 mt-0.5">•</div>
                                    <p className="text-slate-300">Evaluación adaptativa y personalizable</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 text-green-400 mr-3 mt-0.5">•</div>
                                    <p className="text-slate-300">Resultados explicables y transparentes</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cómo Funciona */}
            <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">
                    <Rocket className="inline-block mr-3 text-blue-400" />
                    ¿Cómo funciona nuestro sistema?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        {
                            icon: <BookOpen className="h-8 w-8 text-blue-400" />,
                            title: "1. Definición del puesto",
                            description: "El reclutador carga los requisitos detallados del cargo y nuestras IA analizan tanto los requerimientos explícitos como los implícitos."
                        },
                        {
                            icon: <Users className="h-8 w-8 text-blue-400" />,
                            title: "2. Carga de candidatos",
                            description: "Sube cientos o miles de CVs en diversos formatos. Nuestro sistema procesa y estructura toda la información automáticamente."
                        },
                        {
                            icon: <BarChart2 className="h-8 w-8 text-blue-400" />,
                            title: "3. Evaluación inteligente",
                            description: "Nuestros agentes de IA comparan cada candidato con el perfil requerido, asignando puntajes basados en múltiples factores."
                        },
                        {
                            icon: <ShieldCheck className="h-8 w-8 text-blue-400" />,
                            title: "4. Resultados clasificados",
                            description: "Recibe una lista priorizada de los mejores candidatos con explicaciones detalladas de su idoneidad para el puesto."
                        }
                    ].map((step, index) => (
                        <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                            <div className="h-12 w-12 rounded-full bg-blue-900/50 flex items-center justify-center mb-4">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                            <p className="text-slate-300">{step.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className=" ">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
                        <Sparkle className="inline-block mr-3 text-amber-400 w-10 h-10" /> {/* Usa Sparkle de Lucide */}
                        TalentAI: La Evolución de la Contratación
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Columna: Sistemas Tradicionales */}
                        <div className="space-y-6 bg-blue-800/20 p-6 rounded-lg border border-blue-700">
                            <h3 className="text-2xl font-semibold text-white mb-4">Sistemas Tradicionales</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <X size={20} className="flex-shrink-0 text-red-400 mr-3 mt-0.5" /> {/* Icono X de Lucide */}
                                    <p className="text-slate-300">Coincidencia básica de palabras clave.</p>
                                </li>
                                <li className="flex items-start">
                                    <X size={20} className="flex-shrink-0 text-red-400 mr-3 mt-0.5" />
                                    <p className="text-slate-300">Algoritmos rígidos, sin aprendizaje ni adaptación.</p>
                                </li>
                                <li className="flex items-start">
                                    <X size={20} className="flex-shrink-0 text-red-400 mr-3 mt-0.5" />
                                    <p className="text-slate-300">Revisión manual intensiva de CVs.</p>
                                </li>
                                <li className="flex items-start">
                                    <X size={20} className="flex-shrink-0 text-red-400 mr-3 mt-0.5" />
                                    <p className="text-slate-300">Susceptible a sesgos humanos.</p>
                                </li>
                                <li className="flex items-start">
                                    <X size={20} className="flex-shrink-0 text-red-400 mr-3 mt-0.5" />
                                    <p className="text-slate-300">Altos tiempos de contratación.</p>
                                </li>
                            </ul>
                        </div>

                        {/* Columna: Sistemas ATS Actuales */}
                        <div className="space-y-6 bg-blue-800/20 p-6 rounded-lg border border-blue-700">
                            <h3 className="text-2xl font-semibold text-white mb-4">Sistemas ATS (Actuales)</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <X size={20} className="flex-shrink-0 text-red-400 mr-3 mt-0.5" />
                                    <p className="text-slate-300">Filtrado basado en plantillas y formularios rígidos.</p>
                                </li>
                                <li className="flex items-start">
                                    <X size={20} className="flex-shrink-0 text-red-400 mr-3 mt-0.5" />
                                    <p className="text-slate-300">A menudo, solo buscan palabras clave exactas.</p>
                                </li>
                                <li className="flex items-start">
                                    <X size={20} className="flex-shrink-0 text-red-400 mr-3 mt-0.5" />
                                    <p className="text-slate-300">Excluyen candidatos calificados por formatos no estándar.</p>
                                </li>
                                <li className="flex items-start">
                                    <X size={20} className="flex-shrink-0 text-red-400 mr-3 mt-0.5" />
                                    <p className="text-slate-300">Gestión de candidatos, no preselección inteligente.</p>
                                </li>
                                <li className="flex items-start">
                                    <X size={20} className="flex-shrink-0 text-red-400 mr-3 mt-0.5" />
                                    <p className="text-slate-300">Requiere ajustes manuales constantes de criterios.</p>
                                </li>
                            </ul>
                        </div>

                        {/* Columna: TalentAI */}
                        <div className="space-y-6 bg-blue-800/20 p-6 rounded-lg border border-blue-700">
                            <h3 className="text-2xl font-semibold text-white mb-4">TalentAI</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <Check size={20} className="flex-shrink-0 text-green-400 mr-3 mt-0.5" /> {/* Icono Check de Lucide */}
                                    <p className="text-slate-300 font-semibold">Comprensión semántica profunda con LLMs.</p>
                                </li>
                                <li className="flex items-start">
                                    <Check size={20} className="flex-shrink-0 text-green-400 mr-3 mt-0.5" />
                                    <p className="text-slate-300 font-semibold">Agentes de IA que razonan como reclutadores expertos.</p>
                                </li>
                                <li className="flex items-start">
                                    <Check size={20} className="flex-shrink-0 text-green-400 mr-3 mt-0.5" />
                                    <p className="text-slate-300 font-semibold">Resultados transparentes y explicables.</p>
                                </li>
                                <li className="flex items-start">
                                    <Check size={20} className="flex-shrink-0 text-green-400 mr-3 mt-0.5" />
                                    <p className="text-slate-300 font-semibold">Manejo de ambigüedad e información implícita en CVs.</p>
                                </li>
                                <li className="flex items-start">
                                    <Check size={20} className="flex-shrink-0 text-green-400 mr-3 mt-0.5" />
                                    <p className="text-slate-300 font-semibold">Procesamiento masivo sin almacenamiento permanente de CVs (¡Privacidad!).</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* CTA */}
            <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-6">
                    ¿Listo para transformar tu proceso de reclutamiento?
                </h2>
                <p className="text-xl text-blue-300 mb-8 max-w-2xl mx-auto">
                    Descubre cómo TalentAI puede ayudarte a encontrar al mejor talento en minutos, no en semanas.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        to="/contacto"
                        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                    >
                        Contáctanos
                    </Link>
                    <Link
                        to="/register"
                        className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 font-semibold rounded-full hover:from-amber-400 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-amber-500/25"
                    >
                        Comenzar Gratis
                    </Link>
                </div>
            </section>
            {/* Sección de Socios */}
            <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        <Users className="inline-block mr-3 text-blue-400" />
                        Nuestro Equipo Fundador
                    </h2>
                    <p className="text-xl text-blue-300 max-w-2xl mx-auto">
                        Conoce a los expertos detrás de TalentAI que están transformando el reclutamiento con IA
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Socio 1: Didier Chávez */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-center mb-4">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mr-4">
                                <Code className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Didier Chávez</h3>
                                <p className="text-blue-300">Desarrollador de Software</p>
                            </div>
                        </div>
                        <p className="text-blue-100 mb-4">
                            Más de 10 años de experiencia en desarrollo de software empresarial y arquitecturas escalables.
                        </p>
                        <div className="flex items-center text-sm text-blue-300 mb-4">
                            <Briefcase className="w-4 h-4 mr-2" />
                            <span>Expertise: Backend, Cloud, Arquitectura</span>
                        </div>

                        {/* Redes sociales */}
                        <div className="flex space-x-3 pt-2 border-t border-white/10">
                            <a href="#" className="w-8 h-8 bg-blue-600/30 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                                <Linkedin className="w-4 h-4 text-white" />
                            </a>
                            <a href="#" className="w-8 h-8 bg-slate-600/30 hover:bg-slate-600 rounded-full flex items-center justify-center transition-colors">
                                <Github className="w-4 h-4 text-white" />
                            </a>
                            <a href="#" className="w-8 h-8 bg-green-600/30 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">
                                <Phone className="w-4 h-4 text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Socio 2: Jhonathan Puertas */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-center mb-4">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center mr-4">
                                <Brain className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Jhonathan Puertas</h3>
                                <p className="text-blue-300">Desarrollador de Software</p>
                            </div>
                        </div>
                        <p className="text-blue-100 mb-4">
                            Especialista en inteligencia artificial con 8 años de experiencia en NLP y modelos predictivos.
                        </p>
                        <div className="flex items-center text-sm text-blue-300 mb-4">
                            <Briefcase className="w-4 h-4 mr-2" />
                            <span>Expertise: IA, Machine Learning, Algoritmos</span>
                        </div>

                        {/* Redes sociales */}
                        <div className="flex space-x-3 pt-2 border-t border-white/10">
                            <a href="#" className="w-8 h-8 bg-blue-600/30 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                                <Linkedin className="w-4 h-4 text-white" />
                            </a>
                            <a href="#" className="w-8 h-8 bg-slate-600/30 hover:bg-slate-600 rounded-full flex items-center justify-center transition-colors">
                                <Github className="w-4 h-4 text-white" />
                            </a>
                            <a href="#" className="w-8 h-8 bg-green-600/30 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">
                                <Phone className="w-4 h-4 text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Socio 3: Germán González */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-center mb-4">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center mr-4">
                                <Cpu className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Germán González</h3>
                                <p className="text-blue-300">Ingeniero Electrónico</p>
                            </div>
                        </div>
                        <p className="text-blue-100 mb-4">
                            12 años de experiencia en sistemas embebidos y optimización de hardware para procesamiento de datos.
                        </p>
                        <div className="flex items-center text-sm text-blue-300 mb-4">
                            <Briefcase className="w-4 h-4 mr-2" />
                            <span>Expertise: IoT, Hardware, Optimización</span>
                        </div>

                        {/* Redes sociales */}
                        <div className="flex space-x-3 pt-2 border-t border-white/10">
                            <a href="#" className="w-8 h-8 bg-blue-600/30 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                                <Linkedin className="w-4 h-4 text-white" />
                            </a>
                            <a href="#" className="w-8 h-8 bg-slate-600/30 hover:bg-slate-600 rounded-full flex items-center justify-center transition-colors">
                                <Github className="w-4 h-4 text-white" />
                            </a>
                            <a href="#" className="w-8 h-8 bg-green-600/30 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">
                                <Phone className="w-4 h-4 text-white" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Nota sobre el equipo */}
                <div className="text-center mt-12 bg-blue-900/20 rounded-lg p-4 max-w-2xl mx-auto border border-blue-700/50">
                    <p className="text-blue-300">
                        <span className="text-white font-medium">¿Quieres saber más sobre nuestro equipo?</span>
                        <br />Contáctanos directamente a través de nuestras redes sociales o al correo: equipo@talentai.com
                    </p>
                </div>
            </section>
        </>
    );
};

export default Nosotros;