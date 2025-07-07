import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

const NotFoundPage = () => {
    return (
        <div className="pt-24 flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
            {/* Fondo con patrón de puntos */}
            <div
                className="fixed inset-0 pointer-events-none"
                style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
                }}
            />

            {/* Contenido principal */}
            <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center flex flex-col items-center justify-center flex-1">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
                    <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
                        <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">404</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Página no encontrada
                    </h2>
                    <p className="text-xl text-blue-300 mb-8">
                        Lo sentimos, no pudimos encontrar la página que estás buscando.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={() => window.history.back()}
                            className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Volver atrás
                        </button>

                        <Link
                            to="/"
                            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
                        >
                            <Home className="w-5 h-5" />
                            Ir al inicio
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFoundPage;