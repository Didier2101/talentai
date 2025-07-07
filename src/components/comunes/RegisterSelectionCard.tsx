// components/RegisterSelectionCard.tsx
import { Link } from 'react-router-dom';
import { Briefcase, User, ArrowRight, X } from 'lucide-react';

interface RegisterSelectionCardProps {
    onClose?: () => void;
}

export default function RegisterSelectionCard({ onClose }: RegisterSelectionCardProps) {
    return (
        <div className="relative">
            {/* Botón de cerrar para mobile */}
            <button
                onClick={onClose}
                className="lg:hidden absolute top-4 right-4 p-1 text-slate-400 hover:text-white rounded-full transition-colors"
            >
                <X className="w-5 h-5" />
            </button>

            <div className="max-w-md mx-auto py-8 px-6 sm:px-8">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-white mb-1">Únete a nuestra plataforma</h2>
                    <p className="text-blue-200">Selecciona tu tipo de perfil para comenzar</p>
                </div>

                <div className="grid gap-4">
                    {/* Tarjeta para Candidatos */}
                    <Link
                        to="/candidates/dashboard"
                        className="group relative bg-gradient-to-br from-blue-800/50 to-blue-900/70 p-5 rounded-lg border border-blue-700/30 hover:border-blue-400/50 transition-all shadow-lg hover:shadow-xl overflow-hidden"
                        onClick={onClose}
                    >
                        <div className="relative z-10">
                            <div className="flex items-center mb-3">
                                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                                    <User className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-white">Soy Candidato</h3>
                            </div>
                            <p className="text-blue-200 mb-4 text-sm">Busco oportunidades laborales y quiero que las empresas me encuentren</p>
                            <div className="flex items-center text-blue-300 group-hover:text-blue-100 transition-colors text-sm">
                                <span>Registrarme como candidato</span>
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/10 to-blue-800/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                    </Link>

                    {/* Tarjeta para Empresas */}
                    <Link
                        to="/enterprise/dashboard"
                        className="group relative bg-gradient-to-br from-amber-800/50 to-amber-900/70 p-5 rounded-lg border border-amber-700/30 hover:border-amber-400/50 transition-all shadow-lg hover:shadow-xl overflow-hidden"
                        onClick={onClose}
                    >
                        <div className="relative z-10">
                            <div className="flex items-center mb-3">
                                <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center mr-3">
                                    <Briefcase className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-white">Soy Empresa</h3>
                            </div>
                            <p className="text-amber-200 mb-4 text-sm">Quiero encontrar el mejor talento para mi organización</p>
                            <div className="flex items-center text-amber-300 group-hover:text-amber-100 transition-colors text-sm">
                                <span>Registrar mi empresa</span>
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-700/10 to-amber-800/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                    </Link>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-blue-300 text-sm">
                        ¿Ya tienes una cuenta?{' '}
                        <Link
                            to="/login"
                            className="text-amber-400 hover:text-amber-300 underline transition-colors"
                            onClick={onClose}
                        >
                            Inicia sesión aquí
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}