import React, { useState } from 'react';
import {
    Users,
    Mail,
    Briefcase,
    Calendar,
    BarChart2,
    CheckCircle,
    Clock,
    XCircle,
    Eye,
    Search,
    Frown,
    ChevronRight,
    Filter,
} from 'lucide-react';

interface Candidato {
    id: string;
    nombre: string;
    email: string;
    cargoAplicado: string;
    fechaEvaluacion: string;
    puntajeAI: number;
    estado: 'Aprobado' | 'Pendiente' | 'Rechazado';
}

const ListaCandidatosEvaluados: React.FC = () => {
    const [candidatos] = useState<Candidato[]>([
        { id: 'c1', nombre: 'Juan Pérez', email: 'juan.p@example.com', cargoAplicado: 'Desarrollador Frontend Senior', fechaEvaluacion: '2025-07-01', puntajeAI: 85, estado: 'Aprobado' },
        { id: 'c2', nombre: 'María García', email: 'maria.g@example.com', cargoAplicado: 'Especialista en Marketing Digital', fechaEvaluacion: '2025-07-02', puntajeAI: 70, estado: 'Pendiente' },
        { id: 'c3', nombre: 'Pedro López', email: 'pedro.l@example.com', cargoAplicado: 'Desarrollador Frontend Senior', fechaEvaluacion: '2025-06-28', puntajeAI: 45, estado: 'Rechazado' },
        { id: 'c4', nombre: 'Ana Díaz', email: 'ana.d@example.com', cargoAplicado: 'Analista de Datos Jr.', fechaEvaluacion: '2025-07-03', puntajeAI: 92, estado: 'Aprobado' },
    ]);
    const [searchTerm, setSearchTerm] = useState('');
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

    const handleViewDetails = (id: string) => {
        console.log(`Ver detalles del candidato con ID: ${id}`);
    };

    const filteredCandidatos = candidatos.filter(candidato => {
        const matchesSearch = candidato.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            candidato.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            candidato.cargoAplicado.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = selectedStatus ? candidato.estado === selectedStatus : true;
        return matchesSearch && matchesStatus;
    });

    const statusOptions = [
        { value: 'Aprobado', label: 'Aprobados', color: 'green' },
        { value: 'Pendiente', label: 'Pendientes', color: 'amber' },
        { value: 'Rechazado', label: 'Rechazados', color: 'red' }
    ];

    return (
        <div className="min-h-full text-white max-w-8xl mx-auto ">
            {/* Header */}
            <div className="pt-8 pb-6 px-6">
                <div>
                    <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                            <Users className="w-6 h-6 text-amber-300" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500">
                                Candidatos Evaluados
                            </h1>
                            <p className="text-blue-200">Todos los candidatos procesados por TalentAI para tus cargos</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="px-4 sm:px-6 lg:px-8 pb-12">
                {/* Search and Filters */}
                <div className="mb-6 bg-gradient-to-b from-slate-800/70 to-slate-900/70 p-4 rounded-xl shadow-lg border border-blue-700/30">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="relative flex-1">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="w-5 h-5 text-blue-300" />
                            </div>
                            <input
                                type="text"
                                placeholder="Buscar candidatos..."
                                className="bg-slate-800/50 border border-blue-700/30 text-white pl-10 pr-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="hidden md:flex space-x-2">
                            <button
                                onClick={() => setSelectedStatus(null)}
                                className={`px-4 py-2 text-sm rounded-lg border ${!selectedStatus
                                    ? 'bg-blue-700/30 text-white border-blue-600/50'
                                    : 'border-blue-700/30 bg-blue-800/20 text-blue-200'
                                    }`}
                            >
                                Todos
                            </button>
                            {statusOptions.map((option) => (
                                <button
                                    key={option.value}
                                    onClick={() => setSelectedStatus(selectedStatus === option.value ? null : option.value)}
                                    className={`px-4 py-2 text-sm rounded-lg border ${selectedStatus === option.value
                                        ? `bg-${option.color}-800/30 text-${option.color}-300 border-${option.color}-600/50`
                                        : `border-${option.color}-700/30 bg-${option.color}-800/20 text-${option.color}-200`
                                        }`}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                        <div className="md:hidden">
                            <button
                                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                                className="flex items-center justify-center w-full bg-blue-800/30 border border-blue-700/30 text-blue-300 px-4 py-2 rounded-lg"
                            >
                                <Filter className="w-4 h-4 mr-2" />
                                Filtros
                            </button>
                        </div>
                    </div>

                    {/* Mobile Filters */}
                    {mobileFiltersOpen && (
                        <div className="mt-4 grid grid-cols-2 gap-2 md:hidden">
                            <button
                                onClick={() => {
                                    setSelectedStatus(null);
                                    setMobileFiltersOpen(false);
                                }}
                                className={`px-3 py-2 text-xs rounded-lg border ${!selectedStatus
                                    ? 'bg-blue-700/30 text-white border-blue-600/50'
                                    : 'border-blue-700/30 bg-blue-800/20 text-blue-200'
                                    }`}
                            >
                                Todos
                            </button>
                            {statusOptions.map((option) => (
                                <button
                                    key={option.value}
                                    onClick={() => {
                                        setSelectedStatus(selectedStatus === option.value ? null : option.value);
                                        setMobileFiltersOpen(false);
                                    }}
                                    className={`px-3 py-2 text-xs rounded-lg border ${selectedStatus === option.value
                                        ? `bg-${option.color}-800/30 text-${option.color}-300 border-${option.color}-600/50`
                                        : `border-${option.color}-700/30 bg-${option.color}-800/20 text-${option.color}-200`
                                        }`}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Candidatos Table */}
                <div className="bg-gradient-to-b from-slate-800/70 to-slate-900/70 rounded-xl shadow-lg border border-blue-700/30 overflow-hidden">
                    {filteredCandidatos.length === 0 ? (
                        <div className="p-12 text-center">
                            <Frown className="w-12 h-12 mx-auto text-blue-300 mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-2">No se encontraron candidatos</h3>
                            <p className="text-blue-200 mb-6">No hay candidatos que coincidan con tu búsqueda</p>
                        </div>
                    ) : (
                        <>
                            {/* Desktop Table */}
                            <div className="hidden md:block">
                                <table className="min-w-full divide-y divide-blue-800/50">
                                    <thead className="bg-blue-900/20">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">
                                                <div className="flex items-center">
                                                    <Users className="w-4 h-4 mr-2" />
                                                    Nombre
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">
                                                <div className="flex items-center">
                                                    <Mail className="w-4 h-4 mr-2" />
                                                    Email
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">
                                                <div className="flex items-center">
                                                    <Briefcase className="w-4 h-4 mr-2" />
                                                    Cargo
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">
                                                <div className="flex items-center">
                                                    <Calendar className="w-4 h-4 mr-2" />
                                                    Fecha
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">
                                                <div className="flex items-center">
                                                    <BarChart2 className="w-4 h-4 mr-2" />
                                                    Puntaje
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">
                                                Estado
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-blue-300 uppercase tracking-wider">
                                                Acciones
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-blue-800/50">
                                        {filteredCandidatos.map((candidato) => (
                                            <tr key={candidato.id} className="hover:bg-blue-800/10 transition-colors">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-white">{candidato.nombre}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-200">
                                                    {candidato.email}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-200">
                                                    {candidato.cargoAplicado}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-200">
                                                    {candidato.fechaEvaluacion}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="w-full bg-blue-900/50 rounded-full h-2.5 mr-2">
                                                            <div
                                                                className={`h-2.5 rounded-full ${candidato.puntajeAI > 70 ? 'bg-green-500' :
                                                                    candidato.puntajeAI > 40 ? 'bg-amber-500' : 'bg-red-500'
                                                                    }`}
                                                                style={{ width: `${candidato.puntajeAI}%` }}
                                                            ></div>
                                                        </div>
                                                        <span className="text-sm font-medium">{candidato.puntajeAI}%</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        {candidato.estado === 'Aprobado' ? (
                                                            <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                                                        ) : candidato.estado === 'Pendiente' ? (
                                                            <Clock className="w-4 h-4 mr-2 text-amber-400" />
                                                        ) : (
                                                            <XCircle className="w-4 h-4 mr-2 text-red-400" />
                                                        )}
                                                        <span className={`text-sm ${candidato.estado === 'Aprobado' ? 'text-green-400' :
                                                            candidato.estado === 'Pendiente' ? 'text-amber-400' : 'text-red-400'
                                                            }`}>
                                                            {candidato.estado}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <button
                                                        onClick={() => handleViewDetails(candidato.id)}
                                                        className="text-blue-300 hover:text-white inline-flex items-center group"
                                                    >
                                                        <Eye className="w-4 h-4 mr-1" />
                                                        Ver detalles
                                                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Mobile Cards */}
                            <div className="md:hidden space-y-3 p-4">
                                {filteredCandidatos.map((candidato) => (
                                    <div key={candidato.id} className="bg-gradient-to-b from-slate-800/70 to-slate-900/70 p-4 rounded-lg shadow border border-blue-700/30">
                                        <div className="flex justify-between items-start mb-3">
                                            <h3 className="text-sm font-medium text-white">{candidato.nombre}</h3>
                                            <div className="flex items-center">
                                                {candidato.estado === 'Aprobado' ? (
                                                    <CheckCircle className="w-3 h-3 mr-1 text-green-400" />
                                                ) : candidato.estado === 'Pendiente' ? (
                                                    <Clock className="w-3 h-3 mr-1 text-amber-400" />
                                                ) : (
                                                    <XCircle className="w-3 h-3 mr-1 text-red-400" />
                                                )}
                                                <span className={`text-xs ${candidato.estado === 'Aprobado' ? 'text-green-400' :
                                                    candidato.estado === 'Pendiente' ? 'text-amber-400' : 'text-red-400'
                                                    }`}>
                                                    {candidato.estado}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="text-xs text-blue-200 mb-2 flex items-center">
                                            <Mail className="w-3 h-3 mr-1" />
                                            {candidato.email}
                                        </div>

                                        <div className="text-xs text-blue-200 mb-2 flex items-center">
                                            <Briefcase className="w-3 h-3 mr-1" />
                                            {candidato.cargoAplicado}
                                        </div>

                                        <div className="flex justify-between items-center text-xs text-blue-200 mb-3">
                                            <span className="flex items-center">
                                                <Calendar className="w-3 h-3 mr-1" />
                                                {candidato.fechaEvaluacion}
                                            </span>
                                            <span className="flex items-center">
                                                <BarChart2 className="w-3 h-3 mr-1" />
                                                {candidato.puntajeAI}%
                                            </span>
                                        </div>

                                        <div className="w-full bg-blue-900/50 rounded-full h-1.5 mb-2">
                                            <div
                                                className={`h-1.5 rounded-full ${candidato.puntajeAI > 70 ? 'bg-green-500' :
                                                    candidato.puntajeAI > 40 ? 'bg-amber-500' : 'bg-red-500'
                                                    }`}
                                                style={{ width: `${candidato.puntajeAI}%` }}
                                            ></div>
                                        </div>

                                        <button
                                            onClick={() => handleViewDetails(candidato.id)}
                                            className="w-full mt-2 bg-blue-800/30 text-blue-300 text-xs py-2 px-3 rounded flex items-center justify-center"
                                        >
                                            <Eye className="w-3 h-3 mr-1" />
                                            Ver detalles
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ListaCandidatosEvaluados;