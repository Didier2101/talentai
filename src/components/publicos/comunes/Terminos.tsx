// components/publicos/Terminos.tsx
import { Download, ShieldCheck } from 'lucide-react';

const Terminos = () => {
    return (
        <>
            <section className="relative z-10 py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg mb-6">
                        <ShieldCheck className="h-10 w-10 text-white" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Términos y <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Condiciones</span>
                    </h1>
                    <p className="text-xl text-blue-300">
                        Última actualización: {new Date().toLocaleDateString()}
                    </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10">
                    {/* Contenido editable */}
                    <article className="prose prose-invert max-w-none">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Aceptación de los Términos</h2>
                        <p className="text-blue-100 mb-6">
                            Al utilizar TalentAI, aceptas cumplir con estos términos y condiciones...
                        </p>

                        <h2 className="text-2xl font-bold text-white mb-4">2. Uso del Servicio</h2>
                        <p className="text-blue-100 mb-6">
                            TalentAI es una plataforma de reclutamiento asistido por IA diseñada para...
                        </p>

                        {/* Más secciones según necesites */}

                        <h2 className="text-2xl font-bold text-white mb-4">10. Contacto</h2>
                        <p className="text-blue-100">
                            Para preguntas sobre estos términos: legal@talentai.com
                        </p>
                    </article>
                </div>
                <div className="mt-6 bg-blue-900/30 rounded-lg p-3 border border-blue-700/50">
                    <a
                        href="/terminos.pdf"
                        download="Terminos-y-Condiciones-TalentAI.pdf"
                        className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 group w-full"
                    >
                        <Download className="w-5 h-5 mr-2 text-blue-400 group-hover:text-blue-300" />
                        <span>Descargar Términos (PDF)</span>
                    </a>
                </div>
            </section>
        </>
    );
};

export default Terminos;