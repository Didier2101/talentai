import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Briefcase,
    PlusCircle,
    Edit,
    Upload,
    CheckCircle,
    XCircle,
    Search,
    Frown,
    Users,
    FileText,
    Activity
} from 'lucide-react';
import Swal from 'sweetalert2';

interface Cargo {
    id: string;
    titulo: string;
    area: string;
    estado: 'Activo' | 'Cerrado' | 'En Evaluación';
    fechaPublicacion: string;
    candidatosAplicados: number;
    urgencia: 'Alta' | 'Media' | 'Baja';
}

const GestionCargos: React.FC = () => {
    const navigate = useNavigate();
    const [cargos] = useState<Cargo[]>([
        {
            id: '1',
            titulo: 'Desarrollador Frontend Senior',
            area: 'Tecnología',
            estado: 'En Evaluación',
            fechaPublicacion: '2025-06-01',
            candidatosAplicados: 15,
            urgencia: 'Alta'
        },
        {
            id: '2',
            titulo: 'Especialista en Marketing Digital',
            area: 'Marketing',
            estado: 'Activo',
            fechaPublicacion: '2025-06-10',
            candidatosAplicados: 8,
            urgencia: 'Media'
        },
        {
            id: '3',
            titulo: 'Analista de Datos Jr.',
            area: 'Analítica',
            estado: 'Activo',
            fechaPublicacion: '2025-05-15',
            candidatosAplicados: 22,
            urgencia: 'Baja'
        },
    ]);
    const [searchTerm, setSearchTerm] = useState('');
    // const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
    const [selectedArea, setSelectedArea] = useState<string | null>(null);

    const handleEdit = (id: string) => {
        navigate(`/privados/cargos/editar/${id}`);
    };

    // const handleDelete = (id: string) => {
    //     setCargos(cargos.filter(cargo => cargo.id !== id));
    // };

    const handleEvaluate = (id: string) => {
        const cargo = cargos.find(c => c.id === id);
        if (!cargo) return;

        Swal.fire({
            title: '¿Evaluar candidatos?',
            html: `Vas a evaluar <b>${cargo.candidatosAplicados} candidatos</b> para el puesto de <b>${cargo.titulo}</b>`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#2563eb',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, evaluar',
            cancelButtonText: 'Cancelar',
            background: '#1e293b',
            color: '#e2e8f0'
        }).then((result) => {
            if (result.isConfirmed) {
                navigate(`/privados/candidatos/${id}`);
            }
        });
    };

    const filteredCargos = cargos.filter(cargo => {
        const matchesSearch = cargo.titulo.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = selectedStatus ? cargo.estado === selectedStatus : true;
        const matchesArea = selectedArea ? cargo.area === selectedArea : true;
        return matchesSearch && matchesStatus && matchesArea;
    });

    const statusOptions = [
        { value: 'Activo', label: 'Activos', color: 'green' },
        { value: 'En Evaluación', label: 'En Evaluación', color: 'amber' },
        { value: 'Cerrado', label: 'Cerrados', color: 'red' }
    ];

    const areaOptions = ['Tecnología', 'Marketing', 'Analítica', 'Recursos Humanos', 'Operaciones'];

    return (
        <div className="">
            {/* Header */}
            <div className=" pb-4 md:pb-6 px-4 sm:px-6">
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
                                <p className="text-sm md:text-base text-blue-200">Administra y evalúa los puestos en tu organización</p>
                            </div>
                        </div>

                        <button
                            onClick={() => navigate('/enterprise/cargos/crear')}
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
                                onClick={() => {
                                    setSelectedStatus(null);
                                    setSelectedArea(null);
                                }}
                                className={`px-4 py-2 text-sm rounded-lg border ${!selectedStatus && !selectedArea
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

                    {/* Área Filters */}
                    <div className="mt-3 flex flex-wrap gap-2">
                        {areaOptions.map((area) => (
                            <button
                                key={area}
                                onClick={() => setSelectedArea(selectedArea === area ? null : area)}
                                className={`px-3 py-1 text-xs rounded-lg border ${selectedArea === area
                                    ? 'bg-blue-700/30 text-white border-blue-600/50'
                                    : 'border-blue-700/30 bg-blue-800/20 text-blue-200'
                                    }`}
                            >
                                {area}
                            </button>
                        ))}
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
                                                Área
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">
                                                Estado
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">
                                                Postulantes
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">
                                                Urgencia
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
                                                    <div className="text-xs text-blue-300">{cargo.fechaPublicacion}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-blue-200">{cargo.area}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        {cargo.estado === 'Activo' ? (
                                                            <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                                                        ) : cargo.estado === 'En Evaluación' ? (
                                                            <Activity className="w-4 h-4 mr-2 text-amber-400" />
                                                        ) : (
                                                            <XCircle className="w-4 h-4 mr-2 text-red-400" />
                                                        )}
                                                        <span className={`text-sm ${cargo.estado === 'Activo' ? 'text-green-400' :
                                                            cargo.estado === 'En Evaluación' ? 'text-amber-400' :
                                                                'text-red-400'
                                                            }`}>
                                                            {cargo.estado}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <Users className="w-4 h-4 mr-2 text-blue-300" />
                                                        <span className="text-sm text-white">
                                                            {cargo.candidatosAplicados}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${cargo.urgencia === 'Alta' ? 'bg-red-900/50 text-red-300' :
                                                        cargo.urgencia === 'Media' ? 'bg-amber-900/50 text-amber-300' :
                                                            'bg-green-900/50 text-green-300'
                                                        }`}>
                                                        {cargo.urgencia}
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
                                                        onClick={() => handleEvaluate(cargo.id)}
                                                        className="text-purple-300 hover:text-white inline-flex items-center group"
                                                    >
                                                        <FileText className="w-4 h-4 mr-1" />
                                                        Evaluar
                                                    </button>
                                                    <Link
                                                        to={`/privados/cargos/${cargo.id}/subir-cv`}
                                                        className="text-amber-300 hover:text-white inline-flex items-center group"
                                                    >
                                                        <Upload className="w-4 h-4 mr-1" />
                                                        Subir CVs
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
                                            <div>
                                                <h3 className="text-sm font-medium text-white">{cargo.titulo}</h3>
                                                <p className="text-xs text-blue-300">{cargo.area}</p>
                                            </div>
                                            <div className="flex items-center">
                                                {cargo.estado === 'Activo' ? (
                                                    <CheckCircle className="w-3 h-3 mr-1 text-green-400" />
                                                ) : cargo.estado === 'En Evaluación' ? (
                                                    <Activity className="w-3 h-3 mr-1 text-amber-400" />
                                                ) : (
                                                    <XCircle className="w-3 h-3 mr-1 text-red-400" />
                                                )}
                                                <span className={`text-xs ${cargo.estado === 'Activo' ? 'text-green-400' :
                                                    cargo.estado === 'En Evaluación' ? 'text-amber-400' :
                                                        'text-red-400'
                                                    }`}>
                                                    {cargo.estado}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center text-xs text-blue-200 mb-3">
                                            <div className="flex items-center">
                                                <Users className="w-3 h-3 mr-1" />
                                                <span>{cargo.candidatosAplicados} postulantes</span>
                                            </div>
                                            <span className={`px-2 py-0.5 rounded-full text-xs ${cargo.urgencia === 'Alta' ? 'bg-red-900/50 text-red-300' :
                                                cargo.urgencia === 'Media' ? 'bg-amber-900/50 text-amber-300' :
                                                    'bg-green-900/50 text-green-300'
                                                }`}>
                                                {cargo.urgencia}
                                            </span>
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
                                                onClick={() => handleEvaluate(cargo.id)}
                                                className="flex-1 bg-purple-800/30 text-purple-300 text-xs py-1.5 px-2 rounded flex items-center justify-center"
                                            >
                                                <FileText className="w-3 h-3 mr-1" />
                                                Evaluar
                                            </button>
                                            <Link
                                                to={`/privados/cargos/${cargo.id}/subir-cv`}
                                                className="flex-1 bg-amber-800/30 text-amber-300 text-xs py-1.5 px-2 rounded flex items-center justify-center"
                                            >
                                                <Upload className="w-3 h-3 mr-1" />
                                                CVs
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