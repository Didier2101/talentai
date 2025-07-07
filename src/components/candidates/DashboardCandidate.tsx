import React from 'react';
import { Link } from 'react-router-dom';
import {
    FileText,
    Bell,
    UserCheck,
    BarChart2,
    Clock,
    ChevronRight,
    Zap,
    Target,
    Sparkles,
    Bookmark,
    Send,
    Search
} from 'lucide-react';

const DashboardCandidate: React.FC = () => {
    // Datos simulados basados en el JSON de ofertas
    const stats = {
        applications: 5,
        savedJobs: 3,
        matches: 12,
        newJobs: 8
    };

    const recentJobs = [
        {
            id: "3",
            title: "Ingeniero Civil Residente",
            company: "Constructora Andes",
            location: "Barranquilla",
            status: "Aplicado",
            date: "2024-07-10",
            match: "85%"
        },
        {
            id: "6",
            title: "Médico General",
            company: "Clínica Vida Nueva",
            location: "Pereira",
            status: "Guardado",
            date: "2024-07-09",
            match: "78%"
        },
        {
            id: "11",
            title: "Chef Ejecutivo",
            company: "Hotel Boutique Aroma",
            location: "Cartagena",
            status: "Rechazado",
            date: "2024-07-05",
            match: "65%"
        }
    ];

    const recommendedJobs = [
        {
            id: "7",
            title: "Analista de Datos",
            company: "BigData Colombia",
            location: "Medellín",
            salary: "$4.500.000 - $6.000.000",
            match: "92%"
        },
        {
            id: "19",
            title: "Recepcionista Bilingüe",
            company: "Consultorio Internacional VIP",
            location: "Bogotá",
            salary: "$2.800.000 - $3.200.000",
            match: "88%"
        },
        {
            id: "2",
            title: "Contador Público",
            company: "Finanzas Integrales SAS",
            location: "Medellín",
            salary: "$3.000.000 - $4.000.000",
            match: "81%"
        }
    ];

    return (
        <div className="min-h-full text-white">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                        <Sparkles className="w-6 h-6 text-amber-300" />
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500">
                            Panel del Candidato
                        </h1>
                        <p className="text-blue-200">Bienvenido a tu centro de búsqueda de empleo</p>
                    </div>
                </div>

                <div className="flex items-center space-x-4 mt-6">
                    <div className="flex items-center space-x-2 text-blue-200 text-sm bg-blue-900/30 px-3 py-1 rounded-full">
                        <Target className="w-4 h-4 text-green-400" />
                        <span>95% de precisión en recomendaciones</span>
                    </div>
                    <div className="flex items-center space-x-2 text-blue-200 text-sm bg-blue-900/30 px-3 py-1 rounded-full">
                        <Zap className="w-4 h-4 text-amber-300" />
                        <span>8 nuevas ofertas hoy</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="mt-8">
                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {/* Aplicaciones Activas */}
                    <div className="bg-gradient-to-b from-slate-800/70 to-slate-900/70 p-6 rounded-xl shadow-lg border border-blue-700/30 hover:shadow-xl transition-all">
                        <div className="flex items-center space-x-3 mb-3">
                            <div className="p-2 bg-blue-600/20 rounded-lg border border-blue-500/30">
                                <Send className="w-5 h-5 text-blue-300" />
                            </div>
                            <h2 className="text-lg font-semibold">Aplicaciones Activas</h2>
                        </div>
                        <p className="text-4xl font-bold text-blue-300 mb-2">{stats.applications}</p>
                        <p className="text-blue-200 mb-4">Postulaciones en proceso.</p>
                        <Link
                            to="/candidato/aplicaciones"
                            className="text-blue-300 hover:text-white font-medium flex items-center group"
                        >
                            Ver mis aplicaciones
                            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Trabajos Guardados */}
                    <div className="bg-gradient-to-b from-slate-800/70 to-slate-900/70 p-6 rounded-xl shadow-lg border border-green-700/30 hover:shadow-xl transition-all">
                        <div className="flex items-center space-x-3 mb-3">
                            <div className="p-2 bg-green-600/20 rounded-lg border border-green-500/30">
                                <Bookmark className="w-5 h-5 text-green-300" />
                            </div>
                            <h2 className="text-lg font-semibold">Trabajos Guardados</h2>
                        </div>
                        <p className="text-4xl font-bold text-green-300 mb-2">{stats.savedJobs}</p>
                        <p className="text-blue-200 mb-4">Oportunidades interesantes.</p>
                        <Link
                            to="/candidato/guardados"
                            className="text-green-300 hover:text-white font-medium flex items-center group"
                        >
                            Ver trabajos guardados
                            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Coincidencias */}
                    <div className="bg-gradient-to-b from-slate-800/70 to-slate-900/70 p-6 rounded-xl shadow-lg border border-purple-700/30 hover:shadow-xl transition-all">
                        <div className="flex items-center space-x-3 mb-3">
                            <div className="p-2 bg-purple-600/20 rounded-lg border border-purple-500/30">
                                <UserCheck className="w-5 h-5 text-purple-300" />
                            </div>
                            <h2 className="text-lg font-semibold">Coincidencias</h2>
                        </div>
                        <p className="text-4xl font-bold text-purple-300 mb-2">{stats.matches}</p>
                        <p className="text-blue-200 mb-4">Ofertas que coinciden con tu perfil.</p>
                        <Link
                            to="/candidato/coincidencias"
                            className="text-purple-300 hover:text-white font-medium flex items-center group"
                        >
                            Ver coincidencias
                            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Acciones Rápidas */}
                    <div className="bg-gradient-to-b from-amber-800/20 to-amber-900/10 p-6 rounded-xl shadow-lg border border-amber-600/30 hover:shadow-xl transition-all">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="p-2 bg-amber-600/20 rounded-lg border border-amber-500/30">
                                <Zap className="w-5 h-5 text-amber-300" />
                            </div>
                            <h2 className="text-lg font-semibold">Acciones Rápidas</h2>
                        </div>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    to="/empleos"
                                    className="text-blue-100 hover:text-white flex items-center p-3 rounded-lg hover:bg-blue-800/30 transition-colors group"
                                >
                                    <Search className="w-5 h-5 mr-3 text-blue-300 group-hover:text-amber-300" />
                                    Buscar empleos
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/candidato/perfil"
                                    className="text-blue-100 hover:text-white flex items-center p-3 rounded-lg hover:bg-blue-800/30 transition-colors group"
                                >
                                    <FileText className="w-5 h-5 mr-3 text-amber-300" />
                                    Completar mi perfil
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/candidato/notificaciones"
                                    className="text-blue-100 hover:text-white flex items-center p-3 rounded-lg hover:bg-blue-800/30 transition-colors group"
                                >
                                    <Bell className="w-5 h-5 mr-3 text-purple-300 group-hover:text-amber-300" />
                                    Ver notificaciones
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Sección de Ofertas Recientes */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Actividad Reciente */}
                    <div className="bg-gradient-to-b from-slate-800/70 to-slate-900/70 p-6 rounded-xl shadow-lg border border-blue-700/30">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-blue-600/20 rounded-lg border border-blue-500/30">
                                    <Clock className="w-5 h-5 text-blue-300" />
                                </div>
                                <h2 className="text-xl font-semibold">Tus Postulaciones</h2>
                            </div>
                            <Link to="/candidato/aplicaciones" className="text-sm text-blue-300 hover:text-white">
                                Ver todas
                            </Link>
                        </div>
                        <ul className="space-y-3">
                            {recentJobs.map((job) => (
                                <li key={job.id} className="p-4 bg-blue-900/30 rounded-lg border border-blue-800/50 hover:bg-blue-800/40 transition-colors">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-medium text-white">{job.title}</h3>
                                            <p className="text-sm text-blue-200">{job.company} • {job.location}</p>
                                        </div>
                                        <span className={`text-xs px-2 py-1 rounded-full ${job.status === "Aplicado" ? "bg-blue-500/20 text-blue-300" :
                                            job.status === "Guardado" ? "bg-green-500/20 text-green-300" :
                                                "bg-red-500/20 text-red-300"
                                            }`}>
                                            {job.status}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center mt-3">
                                        <span className="text-xs text-blue-300">Coincidencia: {job.match}</span>
                                        <span className="text-xs text-blue-400">{job.date}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Ofertas Recomendadas */}
                    <div className="bg-gradient-to-b from-slate-800/70 to-slate-900/70 p-6 rounded-xl shadow-lg border border-green-700/30">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-green-600/20 rounded-lg border border-green-500/30">
                                    <Target className="w-5 h-5 text-green-300" />
                                </div>
                                <h2 className="text-xl font-semibold">Recomendadas para ti</h2>
                            </div>
                            <Link to="/empleos" className="text-sm text-green-300 hover:text-white">
                                Ver más
                            </Link>
                        </div>
                        <ul className="space-y-3">
                            {recommendedJobs.map((job) => (
                                <li key={job.id} className="p-4 bg-green-900/10 rounded-lg border border-green-800/30 hover:bg-green-800/20 transition-colors">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-medium text-white">{job.title}</h3>
                                            <p className="text-sm text-green-200">{job.company} • {job.location}</p>
                                        </div>
                                        <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">
                                            {job.match} match
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center mt-3">
                                        <span className="text-sm text-green-300">{job.salary}</span>
                                        <div className="flex space-x-2">
                                            <button className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-full transition-colors">
                                                Aplicar
                                            </button>
                                            <button className="text-xs bg-slate-700 hover:bg-slate-600 text-white px-3 py-1 rounded-full transition-colors">
                                                Guardar
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Estadísticas */}
                <div className="bg-gradient-to-b from-slate-800/70 to-slate-900/70 p-6 rounded-xl shadow-lg border border-purple-700/30">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="p-2 bg-purple-600/20 rounded-lg border border-purple-500/30">
                            <BarChart2 className="w-5 h-5 text-purple-300" />
                        </div>
                        <h2 className="text-xl font-semibold">Tus Estadísticas</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center p-4 bg-purple-900/20 rounded-lg border border-purple-800/30">
                            <div className="text-3xl font-bold text-purple-300 mb-2">3</div>
                            <div className="text-sm text-purple-200">Entrevistas programadas</div>
                        </div>
                        <div className="text-center p-4 bg-blue-900/20 rounded-lg border border-blue-800/30">
                            <div className="text-3xl font-bold text-blue-300 mb-2">78%</div>
                            <div className="text-sm text-blue-200">Tasa de respuesta</div>
                        </div>
                        <div className="text-center p-4 bg-green-900/20 rounded-lg border border-green-800/30">
                            <div className="text-3xl font-bold text-green-300 mb-2">12</div>
                            <div className="text-sm text-green-200">Empresas interesadas</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardCandidate;