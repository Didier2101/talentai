import React from 'react';
import { Link } from 'react-router-dom';
import {
    Briefcase,
    Users,
    CreditCard,
    PlusCircle,
    AlertCircle,
    BarChart2,
    FileText,
    Clock,
    ChevronRight,
    Zap,
    Target,
    Sparkles,
} from 'lucide-react';

const DashboardEmpresa: React.FC = () => {
    return (
        <div className="min-h-full  text-white max-w-8xl mx-auto">
            {/* Header */}
            <div className="">
                <div >
                    <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                            <Sparkles className="w-6 h-6 text-amber-300" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500">
                                Panel de Control Empresarial
                            </h1>
                            <p className="text-blue-200">Bienvenido a tu centro de gestión de TalentAI</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 mt-6">
                        <div className="flex items-center space-x-2 text-blue-200 text-sm bg-blue-900/30 px-3 py-1 rounded-full">
                            <Target className="w-4 h-4 text-green-400" />
                            <span>99% de precisión en evaluaciones</span>
                        </div>
                        <div className="flex items-center space-x-2 text-blue-200 text-sm bg-blue-900/30 px-3 py-1 rounded-full">
                            <Zap className="w-4 h-4 text-amber-300" />
                            <span>IA Avanzada</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="mt-4">
                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {/* Cargos Activos */}
                    <div className="bg-gradient-to-b from-slate-800/70 to-slate-900/70 p-6 rounded-xl shadow-lg border border-blue-700/30 hover:shadow-xl transition-all">
                        <div className="flex items-center space-x-3 mb-3">
                            <div className="p-2 bg-blue-600/20 rounded-lg border border-blue-500/30">
                                <Briefcase className="w-5 h-5 text-blue-300" />
                            </div>
                            <h2 className="text-lg font-semibold">Cargos Activos</h2>
                        </div>
                        <p className="text-4xl font-bold text-blue-300 mb-2">5</p>
                        <p className="text-blue-200 mb-4">Cargos con procesos de selección en curso.</p>
                        <Link
                            to="/privados/cargos"
                            className="text-blue-300 hover:text-white font-medium flex items-center group"
                        >
                            Ver todos los cargos
                            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Candidatos Evaluados */}
                    <div className="bg-gradient-to-b from-slate-800/70 to-slate-900/70 p-6 rounded-xl shadow-lg border border-blue-700/30 hover:shadow-xl transition-all">
                        <div className="flex items-center space-x-3 mb-3">
                            <div className="p-2 bg-green-600/20 rounded-lg border border-green-500/30">
                                <Users className="w-5 h-5 text-green-300" />
                            </div>
                            <h2 className="text-lg font-semibold">Candidatos Evaluados</h2>
                        </div>
                        <p className="text-4xl font-bold text-green-300 mb-2">87</p>
                        <p className="text-blue-200 mb-4">CVs y evaluaciones completadas.</p>
                        <Link
                            to="/privados/candidatos"
                            className="text-green-300 hover:text-white font-medium flex items-center group"
                        >
                            Explorar candidatos
                            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Créditos Disponibles */}
                    <div className="bg-gradient-to-b from-slate-800/70 to-slate-900/70 p-6 rounded-xl shadow-lg border border-blue-700/30 hover:shadow-xl transition-all">
                        <div className="flex items-center space-x-3 mb-3">
                            <div className="p-2 bg-purple-600/20 rounded-lg border border-purple-500/30">
                                <CreditCard className="w-5 h-5 text-purple-300" />
                            </div>
                            <h2 className="text-lg font-semibold">Créditos Disponibles</h2>
                        </div>
                        <p className="text-4xl font-bold text-purple-300 mb-2">10</p>
                        <p className="text-blue-200 mb-4">Restantes para evaluaciones de CVs.</p>
                        <Link
                            to="#"
                            className="text-purple-300 hover:text-white font-medium flex items-center group"
                        >
                            Comprar más créditos
                            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Acciones Rápidas */}
                    <div className="bg-gradient-to-b from-amber-800/20 to-amber-900/10 p-6 rounded-xl shadow-lg border border-amber-600/30 hover:shadow-xl transition-all">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="p-2 bg-amber-600/20 rounded-lg border border-amber-500/30">
                                <PlusCircle className="w-5 h-5 text-amber-300" />
                            </div>
                            <h2 className="text-lg font-semibold">Acciones Rápidas</h2>
                        </div>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    to="/privados/cargos/crear"
                                    className="text-blue-100 hover:text-white flex items-center p-3 rounded-lg hover:bg-blue-800/30 transition-colors group"
                                >
                                    <FileText className="w-5 h-5 mr-3 text-blue-300 group-hover:text-amber-300" />
                                    Publicar un nuevo cargo
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/privados/candidatos?status=pending"
                                    className="text-blue-100 hover:text-white flex items-center p-3 rounded-lg hover:bg-blue-800/30 transition-colors group"
                                >
                                    <AlertCircle className="w-5 h-5 mr-3 text-amber-300" />
                                    Revisar evaluaciones pendientes
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/privados/reportes"
                                    className="text-blue-100 hover:text-white flex items-center p-3 rounded-lg hover:bg-blue-800/30 transition-colors group"
                                >
                                    <BarChart2 className="w-5 h-5 mr-3 text-purple-300 group-hover:text-amber-300" />
                                    Ver reportes de rendimiento
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Actividad Reciente */}
                <div className="mt-8 bg-gradient-to-b from-slate-800/70 to-slate-900/70 p-6 rounded-xl shadow-lg border border-blue-700/30">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="p-2 bg-blue-600/20 rounded-lg border border-blue-500/30">
                            <Clock className="w-5 h-5 text-blue-300" />
                        </div>
                        <h2 className="text-xl font-semibold">Actividad Reciente</h2>
                    </div>
                    <ul className="space-y-3">
                        <li className="p-4 bg-blue-900/30 rounded-lg border border-blue-800/50 flex justify-between items-center hover:bg-blue-800/40 transition-colors group">
                            <div className="flex items-center">
                                <div className="p-1.5 bg-green-600/20 rounded-full mr-3 border border-green-500/30">
                                    <Users className="w-4 h-4 text-green-300" />
                                </div>
                                <span className="text-blue-100 group-hover:text-white">
                                    Nuevo candidato evaluado para "Desarrollador Fullstack"
                                </span>
                            </div>
                            <span className="text-sm text-blue-300">Hace 2 horas</span>
                        </li>
                        <li className="p-4 bg-blue-900/30 rounded-lg border border-blue-800/50 flex justify-between items-center hover:bg-blue-800/40 transition-colors group">
                            <div className="flex items-center">
                                <div className="p-1.5 bg-blue-600/20 rounded-full mr-3 border border-blue-500/30">
                                    <Briefcase className="w-4 h-4 text-blue-300" />
                                </div>
                                <span className="text-blue-100 group-hover:text-white">
                                    Cargo "Especialista en Marketing Digital" publicado
                                </span>
                            </div>
                            <span className="text-sm text-blue-300">Ayer</span>
                        </li>
                    </ul>
                </div>



            </div>
        </div>
    );
};

export default DashboardEmpresa;