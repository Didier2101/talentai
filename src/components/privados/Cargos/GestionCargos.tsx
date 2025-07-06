import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Briefcase,
    PlusCircle,
    Edit,
    Trash2,
    Upload,
    CheckCircle,
    Clock,
    XCircle,
    ChevronRight,
    Search,
    Frown,
    Filter,
    Menu,
    X
} from 'lucide-react';

interface Cargo {
    id: string;
    titulo: string;
    estado: 'Activo' | 'Inactivo' | 'En Proceso';
    fechaPublicacion: string;
    candidatosAplicados: number;
}

const GestionCargos: React.FC = () => {
    const navigate = useNavigate();
    const [cargos, setCargos] = useState<Cargo[]>([
        { id: '1', titulo: 'Desarrollador Frontend Senior', estado: 'Activo', fechaPublicacion: '2025-06-01', candidatosAplicados: 15 },
        { id: '2', titulo: 'Especialista en Marketing Digital', estado: 'En Proceso', fechaPublicacion: '2025-06-10', candidatosAplicados: 8 },
        { id: '3', titulo: 'Analista de Datos Jr.', estado: 'Inactivo', fechaPublicacion: '2025-05-15', candidatosAplicados: 22 },
    ]);
    const [searchTerm, setSearchTerm] = useState('');
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

    const handleEdit = (id: string) => {
        navigate(`/privados/cargos/editar/${id}`);
    };

    const handleDelete = (id: string) => {
        setCargos(cargos.filter(cargo => cargo.id !== id));
    };

    const filteredCargos = cargos.filter(cargo => {
        const matchesSearch = cargo.titulo.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = selectedStatus ? cargo.estado === selectedStatus : true;
        return matchesSearch && matchesStatus;
    });

    const statusOptions = [
        { value: 'Activo', label: 'Activos', color: 'green' },
        { value: 'En Proceso', label: 'En Proceso', color: 'amber' },
        { value: 'Inactivo', label: 'Inactivos', color: 'red' }
    ];

    return (
        <div className="min-h-full text-white max-w-8xl mx-auto">
            {/* Header */}
            <div className="pt-6 md:pt-8 pb-4 md:pb-6 px-4 sm:px-6">
                <div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex items-center space-x-3 md:space-x-4">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg md:rounded-xl flex items-center justify-center shadow-lg">
                                <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-amber-300" />
                            </div>
                            <div>
                                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500">
                                    Gestión de Cargos
                                </h1>
                                <p className="text-sm md:text-base text-blue-200">Administra y crea nuevos puestos en tu organización</p>
                            </div>
                        </div>

                        <button
                            onClick={() => navigate('/privados/cargos/crear')}
                            className="bg-gradient-to-r from-amber-400 to-amber-500 text-blue-900 font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center group w-full md:w-auto"
                        >
                            <PlusCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                            <span className="text-sm md:text-base">Crear Nuevo Cargo</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className=" px-3 sm:px-4 lg:px-6 pb-8 md:pb-12">
                {/* Mobile Filters */}
                <div className="md:hidden mb-4">
                    <button
                        onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                        className="flex items-center justify-between w-full bg-gradient-to-b from-slate-800/70 to-slate-900/70 p-3 rounded-lg shadow border border-blue-700/30"
                    >
                        <div className="flex items-center">
                            <Filter className="w-4 h-4 mr-2 text-blue-300" />
                            <span className="text-sm font-medium">Filtrar cargos</span>
                        </div>
                        {mobileFiltersOpen ? (
                            <X className="w-4 h-4 text-blue-300" />
                        ) : (
                            <Menu className="w-4 h-4 text-blue-300" />
                        )}
                    </button>

                    {mobileFiltersOpen && (
                        <div className="mt-2 bg-gradient-to-b from-slate-800/70 to-slate-900/70 p-4 rounded-lg shadow border border-blue-700/30">
                            <div className="grid grid-cols-2 gap-2">
                                {statusOptions.map((option) => (
                                    <button
                                        key={option.value}
                                        onClick={() => {
                                            setSelectedStatus(selectedStatus === option.value ? null : option.value);
                                            setMobileFiltersOpen(false);
                                        }}
                                        className={`px-3 py-2 text-xs rounded-lg border ${selectedStatus === option.value
                                            ? `bg-${option.color}-800/30 text-${option.color}-300 border-${option.color}-600/50`
                                            : 'border-blue-700/30 bg-blue-800/20 text-blue-200'
                                            }`}
                                    >
                                        {option.label}
                                    </button>
                                ))}
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
                            </div>
                        </div>
                    )}
                </div>

                {/* Search and Filters */}
                <div className="mb-4 md:mb-6 bg-gradient-to-b from-slate-800/70 to-slate-900/70 p-3 md:p-4 rounded-xl shadow-lg border border-blue-700/30">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
                        <div className="relative flex-1">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="w-4 h-4 md:w-5 md:h-5 text-blue-300" />
                            </div>
                            <input
                                type="text"
                                placeholder="Buscar cargos..."
                                className="bg-slate-800/50 border border-blue-700/30 text-white text-sm md:text-base pl-10 pr-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
                    </div>
                </div>

                {/* Cargos Table */}
                <div className="bg-gradient-to-b from-slate-800/70 to-slate-900/70 rounded-xl shadow-lg border border-blue-700/30 overflow-hidden">
                    {filteredCargos.length === 0 ? (
                        <div className="p-8 md:p-12 text-center">
                            <Frown className="w-10 h-10 md:w-12 md:h-12 mx-auto text-blue-300 mb-3 md:mb-4" />
                            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">No se encontraron cargos</h3>
                            <p className="text-sm md:text-base text-blue-200 mb-4 md:mb-6">No hay cargos que coincidan con tu búsqueda</p>
                            <button
                                onClick={() => navigate('/privados/cargos/crear')}
                                className="bg-gradient-to-r from-amber-400 to-amber-500 text-blue-900 font-bold py-2 px-4 md:py-2 md:px-6 rounded-lg hover:shadow-lg transition-all duration-300 inline-flex items-center text-sm md:text-base"
                            >
                                <PlusCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                                Crear Primer Cargo
                            </button>
                        </div>
                    ) : (
                        <>
                            {/* Desktop Table */}
                            <div className="hidden md:block">
                                <table className="min-w-full divide-y divide-blue-800/50">
                                    <thead className="bg-blue-900/20">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">
                                                Título del Cargo
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">
                                                Estado
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">
                                                Publicación
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">
                                                Candidatos
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-blue-300 uppercase tracking-wider">
                                                Acciones
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-blue-800/50">
                                        {filteredCargos.map((cargo) => (
                                            <tr key={cargo.id} className="hover:bg-blue-800/10 transition-colors">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-white">{cargo.titulo}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        {cargo.estado === 'Activo' ? (
                                                            <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                                                        ) : cargo.estado === 'En Proceso' ? (
                                                            <Clock className="w-4 h-4 mr-2 text-amber-400" />
                                                        ) : (
                                                            <XCircle className="w-4 h-4 mr-2 text-red-400" />
                                                        )}
                                                        <span className={`text-sm ${cargo.estado === 'Activo' ? 'text-green-400' :
                                                            cargo.estado === 'En Proceso' ? 'text-amber-400' :
                                                                'text-red-400'
                                                            }`}>
                                                            {cargo.estado}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-200">
                                                    {cargo.fechaPublicacion}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-900/50 text-blue-200">
                                                        {cargo.candidatosAplicados} candidatos
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                                                    <button
                                                        onClick={() => handleEdit(cargo.id)}
                                                        className="text-blue-300 hover:text-white inline-flex items-center group"
                                                    >
                                                        <Edit className="w-4 h-4 mr-1" />
                                                        Editar
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(cargo.id)}
                                                        className="text-red-300 hover:text-white inline-flex items-center group"
                                                    >
                                                        <Trash2 className="w-4 h-4 mr-1" />
                                                        Eliminar
                                                    </button>
                                                    <Link
                                                        to={`/privados/cargos/${cargo.id}/subir-cv`}
                                                        className="text-amber-300 hover:text-white inline-flex items-center group"
                                                    >
                                                        <Upload className="w-4 h-4 mr-1" />
                                                        Subir CVs
                                                    </Link>
                                                    <Link
                                                        to={`/privados/cargos/${cargo.id}`}
                                                        className="text-green-300 hover:text-white inline-flex items-center group"
                                                    >
                                                        Ver detalles
                                                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Mobile Cards */}
                            <div className="md:hidden space-y-3 p-3">
                                {filteredCargos.map((cargo) => (
                                    <div key={cargo.id} className="bg-gradient-to-b from-slate-800/70 to-slate-900/70 p-4 rounded-lg shadow border border-blue-700/30">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-sm font-medium text-white">{cargo.titulo}</h3>
                                            <div className="flex items-center">
                                                {cargo.estado === 'Activo' ? (
                                                    <CheckCircle className="w-3 h-3 mr-1 text-green-400" />
                                                ) : cargo.estado === 'En Proceso' ? (
                                                    <Clock className="w-3 h-3 mr-1 text-amber-400" />
                                                ) : (
                                                    <XCircle className="w-3 h-3 mr-1 text-red-400" />
                                                )}
                                                <span className={`text-xs ${cargo.estado === 'Activo' ? 'text-green-400' :
                                                    cargo.estado === 'En Proceso' ? 'text-amber-400' :
                                                        'text-red-400'
                                                    }`}>
                                                    {cargo.estado}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center text-xs text-blue-200 mb-3">
                                            <span>Publicado: {cargo.fechaPublicacion}</span>
                                            <span>{cargo.candidatosAplicados} candidatos</span>
                                        </div>
                                        <div className="flex justify-between space-x-2">
                                            <button
                                                onClick={() => handleEdit(cargo.id)}
                                                className="flex-1 bg-blue-800/30 text-blue-300 text-xs py-1.5 px-2 rounded flex items-center justify-center"
                                            >
                                                <Edit className="w-3 h-3 mr-1" />
                                                Editar
                                            </button>
                                            <button
                                                onClick={() => handleDelete(cargo.id)}
                                                className="flex-1 bg-red-800/30 text-red-300 text-xs py-1.5 px-2 rounded flex items-center justify-center"
                                            >
                                                <Trash2 className="w-3 h-3 mr-1" />
                                                Eliminar
                                            </button>
                                            <Link
                                                to={`/privados/cargos/${cargo.id}/subir-cv`}
                                                className="flex-1 bg-amber-800/30 text-amber-300 text-xs py-1.5 px-2 rounded flex items-center justify-center"
                                            >
                                                <Upload className="w-3 h-3 mr-1" />
                                                CVs
                                            </Link>
                                            <Link
                                                to={`/privados/cargos/${cargo.id}`}
                                                className="flex-1 bg-green-800/30 text-green-300 text-xs py-1.5 px-2 rounded flex items-center justify-center"
                                            >
                                                <ChevronRight className="w-3 h-3" />
                                            </Link>
                                        </div>
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

export default GestionCargos;