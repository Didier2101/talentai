import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, BookOpen, Mail, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqItems = [
        {
            question: "¿Cómo funciona el sistema de preselección de TalentAI?",
            answer: "Nuestro sistema utiliza modelos de lenguaje avanzados (LLMs) y agentes de IA para analizar tanto los requisitos del puesto como los currículums de los candidatos. El sistema comprende el contexto, las habilidades implícitas y realiza una evaluación semántica profunda para identificar los candidatos más adecuados."
        },
        {
            question: "¿Qué tipos de archivos de currículum soporta el sistema?",
            answer: "TalentAI puede procesar los formatos más comunes: PDF, Nuestro sistema extrae y normaliza la información independientemente del formato original."
        },
        {
            question: "¿Cómo garantizan la privacidad de los datos de los candidatos?",
            answer: "En TalentAI tomamos la privacidad muy en serio. Los CVs son procesados de forma temporal y no los almacenamos permanentemente. Cumplimos con todas las regulaciones de protección de datos aplicables y ofrecemos opciones para configurar los períodos de retención de información."
        },
        {
            question: "¿Puedo personalizar los criterios de selección?",
            answer: "Sí, nuestro sistema permite ponderar diferentes criterios según la importancia para cada puesto. Puedes indicar qué habilidades, experiencias o cualificaciones son esenciales, deseables o secundarias, y el sistema ajustará su evaluación en consecuencia."
        },
        {
            question: "¿Qué diferencia a TalentAI de otros ATS tradicionales?",
            answer: "A diferencia de los sistemas basados en palabras clave, TalentAI entiende el significado contextual de la información. Puede identificar habilidades implícitas, correlaciones no obvias y evaluar candidatos de forma más similar a como lo haría un reclutador humano experto, pero con la consistencia y velocidad de la IA."
        },
        {
            question: "¿Qué tipo de soporte técnico ofrecen?",
            answer: "Ofrecemos soporte prioritario por correo electrónico y chat, con un tiempo de respuesta garantizado de menos de 4 horas durante el horario comercial. También proporcionamos sesiones de capacitación y documentación detallada para ayudarte a sacar el máximo provecho del sistema."
        },
        {
            question: "¿Hay un límite en la cantidad de CVs que puedo procesar?",
            answer: "Depende de tu plan. El plan de Pago por Uso incluye 10 CVs de cortesía y luego se cobra por cada CV adicional. El plan Anual Ilimitado no tiene restricciones en el número de CVs procesados."
        },
        {
            question: "¿Cómo manejan los sesgos inconscientes en la selección?",
            answer: "Nuestro sistema está diseñado para enfocarse en las habilidades y experiencias relevantes, ignorando información demográfica. Además, ofrecemos herramientas para auditar las decisiones de la IA y garantizar la equidad en el proceso."
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center">
                    <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg mb-6">
                        <HelpCircle className="h-10 w-10 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Preguntas <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Frecuentes</span>
                    </h1>
                    <p className="text-xl text-blue-300 max-w-3xl mx-auto">
                        Encuentra respuestas a las preguntas más comunes sobre TalentAI y nuestro sistema de preselección inteligente.
                    </p>
                </div>
            </section>

            {/* Contenido principal */}
            <section className="relative z-10 py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex-1">
                {/* FAQ Accordion */}
                <div className="space-y-4 mb-16">
                    {faqItems.map((item, index) => (
                        <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
                            <button
                                className="w-full flex justify-between items-center p-6 text-left"
                                onClick={() => toggleAccordion(index)}
                            >
                                <h3 className="text-lg font-medium text-white">
                                    {item.question}
                                </h3>
                                {activeIndex === index ? (
                                    <ChevronUp className="h-5 w-5 text-blue-400" />
                                ) : (
                                    <ChevronDown className="h-5 w-5 text-blue-400" />
                                )}
                            </button>
                            <div
                                className={`px-6 pb-6 pt-0 transition-all duration-300 ease-in-out ${activeIndex === index ? 'block' : 'hidden'
                                    }`}
                            >
                                <p className="text-blue-100">{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Help Section */}
                <div className="bg-gradient-to-br from-blue-900/50 to-slate-800/50 border border-white/10 rounded-2xl p-8 mb-16 backdrop-blur-sm">
                    <h2 className="text-2xl font-bold text-white mb-6 text-center">
                        ¿No encontraste lo que buscabas?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white/5 rounded-xl p-6 flex flex-col items-center text-center">
                            <div className="bg-blue-600/20 p-3 rounded-full mb-4">
                                <BookOpen className="h-6 w-6 text-blue-400" />
                            </div>
                            <h3 className="text-lg font-medium text-white mb-2">Documentación</h3>
                            <p className="text-blue-200 mb-4">Explora nuestra documentación detallada</p>
                            <Link
                                to="/documentation"
                                className="text-blue-400 hover:text-blue-300 font-medium text-sm inline-flex items-center"
                            >
                                Ver documentación
                            </Link>
                        </div>
                        <div className="bg-white/5 rounded-xl p-6 flex flex-col items-center text-center">
                            <div className="bg-amber-600/20 p-3 rounded-full mb-4">
                                <MessageSquare className="h-6 w-6 text-amber-400" />
                            </div>
                            <h3 className="text-lg font-medium text-white mb-2">Chat en vivo</h3>
                            <p className="text-blue-200 mb-4">Habla con nuestro equipo de soporte</p>
                            <Link
                                to="/support"
                                className="text-amber-400 hover:text-amber-300 font-medium text-sm inline-flex items-center"
                            >
                                Iniciar chat
                            </Link>
                        </div>
                        <div className="bg-white/5 rounded-xl p-6 flex flex-col items-center text-center">
                            <div className="bg-purple-600/20 p-3 rounded-full mb-4">
                                <Mail className="h-6 w-6 text-purple-400" />
                            </div>
                            <h3 className="text-lg font-medium text-white mb-2">Correo electrónico</h3>
                            <p className="text-blue-200 mb-4">Envíanos tus preguntas directamente</p>
                            <a
                                href="/contacto"
                                className="text-purple-400 hover:text-purple-300 font-medium text-sm inline-flex items-center"
                            >
                                Contactar por email
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FAQ;