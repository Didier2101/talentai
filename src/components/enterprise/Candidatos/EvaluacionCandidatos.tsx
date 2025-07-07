import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    Download,
    ChevronLeft,
    Users,
    Award,
    Star,
    FileText,
    Filter,
    ThumbsUp,
    ThumbsDown,
    Clock,
    ChevronDown,
    ChevronUp,
    Frown
} from 'lucide-react';
import Swal from 'sweetalert2';

interface Candidato {
    id: string;
    nombre: string;
    email: string;
    puntaje: number;
    habilidades: string[];
    experiencia: string;
    educacion: string;
    cvUrl: string;
    recomendacion: 'recomendado' | 'evaluar' | 'no-recomendado';
    fechaPostulacion: string;
    compatibilidad: number;
}

const EvaluacionCandidatos: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [candidatos, setCandidatos] = useState<Candidato[]>([]);
    const [cargo, setCargo] = useState<{ titulo: string, totalCandidatos: number } | null>(null);
    const [mostrar, setMostrar] = useState<number>(10);
    const [filtroPorcentaje, setFiltroPorcentaje] = useState<number | null>(null);
    const [filtroRecomendacion, setFiltroRecomendacion] = useState<string | null>(null);
    const [expandedCandidato, setExpandedCandidato] = useState<string | null>(null);

    // Simulación de datos del cargo
    useEffect(() => {
        const cargosSimulados = [
            {
                id: '1',
                titulo: 'Desarrollador Frontend Senior',
                totalCandidatos: 15
            },
            {
                id: '2',
                titulo: 'Especialista en Marketing Digital',
                totalCandidatos: 8
            },
            {
                id: '3',
                titulo: 'Analista de Datos Jr.',
                totalCandidatos: 22
            }
        ];

        const cargoEncontrado = cargosSimulados.find(c => c.id === id);
        if (cargoEncontrado) {
            setCargo(cargoEncontrado);
        } else {
            navigate('/privados/cargos');
        }
    }, [id, navigate]);

    // Simulación de datos de candidatos
    useEffect(() => {
        if (!id) return;

        const nombres = [
            'Juan Pérez', 'María García', 'Carlos Rodríguez', 'Ana Martínez',
            'Luis González', 'Sofía López', 'Diego Hernández', 'Valentina Díaz',
            'Andrés Morales', 'Camila Rojas', 'Jorge Silva', 'Daniela Vargas',
            'Ricardo Castro', 'Laura Méndez', 'Fernando Romero', 'Gabriela Soto',
            'Miguel Torres', 'Isabel Flores', 'José Navarro', 'Adriana Jiménez'
        ];

        const candidatosSimulados: Candidato[] = nombres.map((nombre, i) => {
            const puntaje = Math.floor(Math.random() * 40) + 60;
            let recomendacion: 'recomendado' | 'evaluar' | 'no-recomendado' = 'evaluar';
            if (puntaje > 85) recomendacion = 'recomendado';
            else if (puntaje < 65) recomendacion = 'no-recomendado';

            return {
                id: `cand-${i + 1}`,
                nombre,
                email: `${nombre.split(' ')[0].toLowerCase()}@email.com`,
                puntaje,
                habilidades: [
                    'React', 'JavaScript', 'TypeScript', 'CSS', 'HTML',
                    'Node.js', 'Python', 'SQL', 'Comunicación', 'Liderazgo'
                ].sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 5) + 3),
                experiencia: `${Math.floor(Math.random() * 5) + 1} años`,
                educacion: ['Técnico', 'Tecnólogo', 'Profesional', 'Maestría'][Math.floor(Math.random() * 4)],
                cvUrl: `/cvs/candidato-${i + 1}.pdf`,
                recomendacion,
                compatibilidad: Math.floor(Math.random() * 30) + 70, // 70-99%
                fechaPostulacion: new Date(Date.now() - Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0]
            };
        });

        setCandidatos(candidatosSimulados.sort((a, b) => b.puntaje - a.puntaje));
    }, [id]);

    const handleDescargarCvs = () => {
        if (!cargo) return;

        Swal.fire({
            title: 'Preparando descarga',
            html: `Se están comprimiendo <b>${candidatosFiltrados.length}</b> hojas de vida para <b>${cargo.titulo}</b>`,
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => Swal.showLoading(),
            background: '#1e293b',
            color: '#e2e8f0'
        }).then(() => {
            const fecha = new Date().toISOString().split('T')[0];
            const nombreArchivo = `${cargo.titulo.replace(/\s+/g, '_')}_top_${candidatosFiltrados.length}_${fecha}.zip`;

            Swal.fire({
                title: 'Descarga lista',
                html: `Archivo: <b>${nombreArchivo}</b><br>Contiene los CVs de los candidatos filtrados`,
                icon: 'success',
                confirmButtonColor: '#2563eb',
                background: '#1e293b',
                color: '#e2e8f0'
            });
        });
    };

    const toggleExpandCandidato = (id: string) => {
        setExpandedCandidato(expandedCandidato === id ? null : id);
    };

    // Filtrar candidatos
    const candidatosFiltrados = candidatos.filter(candidato => {
        const cumplePorcentaje = filtroPorcentaje ? candidato.puntaje >= filtroPorcentaje : true;
        const cumpleRecomendacion = filtroRecomendacion ? candidato.recomendacion === filtroRecomendacion : true;
        return cumplePorcentaje && cumpleRecomendacion;
    }).slice(0, mostrar);

    if (!cargo) return <div className="min-h-screen bg-slate-900"></div>;

    return (
        <div className="min-h-full text-white max-w-7xl mx-auto">
            {/* Header */}
            <div className="pt-6 md:pt-8 pb-4 md:pb-6 px-4 sm:px-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <button
                        onClick={() => navigate('/privados/cargos')}
                        className="flex items-center text-blue-300 hover:text-white transition-colors w-fit"
                    >
                        <ChevronLeft className="w-5 h-5 mr-1" />
                        Volver a cargos
                    </button>

                    <h2 className="text-2xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500">
                        {cargo.titulo}
                    </h2>

                    <button
                        onClick={handleDescargarCvs}
                        className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center w-fit"
                    >
                        <Download className="w-4 h-4 mr-2" />
                        Descargar CVs
                    </button>
                </div>
                <p className="text-center text-blue-300 mt-2">{cargo.totalCandidatos} candidatos evaluados • {candidatosFiltrados.length} mostrados</p>
            </div>

            {/* Main Content */}
            <div className="px-4 sm:px-6 lg:px-8 pb-12">
                <div className="bg-gradient-to-b from-slate-800/70 to-slate-900/70 p-6 md:p-8 rounded-xl shadow-lg border border-blue-700/30">
                    {/* Filtros */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        <div>
                            <label className=" text-sm font-medium text-blue-300 mb-1 flex items-center">
                                <Filter className="w-4 h-4 mr-2" />
                                Mostrar candidatos
                            </label>
                            <select
                                value={mostrar}
                                onChange={(e) => setMostrar(Number(e.target.value))}
                                className="w-full bg-slate-800/50 border border-blue-700/30 text-white rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent p-2"
                            >
                                <option value="10">Top 10</option>
                                <option value="20">Top 20</option>
                                <option value="50">Top 50</option>
                                <option value="100">Top 100</option>
                                <option value="200">Top 200</option>
                                <option value="1000">Todos</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-blue-300 mb-1">
                                Puntaje mínimo (%)
                            </label>
                            <select
                                value={filtroPorcentaje || ''}
                                onChange={(e) => setFiltroPorcentaje(e.target.value ? Number(e.target.value) : null)}
                                className="w-full bg-slate-800/50 border border-blue-700/30 text-white rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent p-2"
                            >
                                <option value="">Todos los puntajes</option>
                                <option value="95">95% o más</option>
                                <option value="90">90% o más</option>
                                <option value="85">85% o más</option>
                                <option value="80">80% o más</option>
                                <option value="70">70% o más</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-blue-300 mb-1">
                                Recomendación IA
                            </label>
                            <select
                                value={filtroRecomendacion || ''}
                                onChange={(e) => setFiltroRecomendacion(e.target.value || null)}
                                className="w-full bg-slate-800/50 border border-blue-700/30 text-white rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent p-2"
                            >
                                <option value="">Todas las recomendaciones</option>
                                <option value="recomendado">Recomendados</option>
                                <option value="evaluar">Por evaluar</option>
                                <option value="no-recomendado">No recomendados</option>
                            </select>
                        </div>
                    </div>

                    {/* Lista de candidatos */}
                    <div className="space-y-4">
                        {candidatosFiltrados.length === 0 ? (
                            <div className="text-center py-8">
                                <Frown className="w-12 h-12 mx-auto text-blue-300 mb-4" />
                                <h3 className="text-xl font-semibold text-white mb-2">No hay candidatos que coincidan</h3>
                                <p className="text-blue-300">Prueba ajustando los filtros de búsqueda</p>
                            </div>
                        ) : (
                            candidatosFiltrados.map((candidato) => (
                                <div
                                    key={candidato.id}
                                    className={`bg-gradient-to-br rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${candidato.recomendacion === 'recomendado' ? 'from-green-900/20 to-green-900/10 border-green-700/30' :
                                        candidato.recomendacion === 'no-recomendado' ? 'from-red-900/20 to-red-900/10 border-red-700/30' :
                                            'from-amber-900/20 to-amber-900/10 border-amber-700/30'
                                        } border`}
                                >
                                    <div
                                        className="p-4 cursor-pointer"
                                        onClick={() => toggleExpandCandidato(candidato.id)}
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-start space-x-4">
                                                <div className={`rounded-lg p-3 ${candidato.recomendacion === 'recomendado' ? 'bg-green-800/50' :
                                                    candidato.recomendacion === 'no-recomendado' ? 'bg-red-800/50' :
                                                        'bg-amber-800/50'
                                                    }`}>
                                                    {candidato.recomendacion === 'recomendado' ? (
                                                        <ThumbsUp className="w-6 h-6 text-green-300" />
                                                    ) : candidato.recomendacion === 'no-recomendado' ? (
                                                        <ThumbsDown className="w-6 h-6 text-red-300" />
                                                    ) : (
                                                        <Clock className="w-6 h-6 text-amber-300" />
                                                    )}
                                                </div>

                                                <div>
                                                    <h3 className="text-lg font-semibold">{candidato.nombre}</h3>
                                                    <p className="text-blue-300 text-sm">{candidato.email}</p>

                                                    <div className="flex items-center mt-2 space-x-4">
                                                        <div className="flex items-center">
                                                            <Star className="w-4 h-4 mr-1 text-amber-400" />
                                                            <span className="font-bold">{candidato.puntaje}/100</span>
                                                        </div>

                                                        <div className="flex items-center">
                                                            <Users className="w-4 h-4 mr-1 text-blue-300" />
                                                            <span>{candidato.experiencia}</span>
                                                        </div>

                                                        <div className="flex items-center">
                                                            <Award className="w-4 h-4 mr-1 text-purple-300" />
                                                            <span>{candidato.educacion}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <button className="text-blue-300 hover:text-white">
                                                {expandedCandidato === candidato.id ? (
                                                    <ChevronUp className="w-5 h-5" />
                                                ) : (
                                                    <ChevronDown className="w-5 h-5" />
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    {expandedCandidato === candidato.id && (
                                        <div className="px-4 pb-4 pt-2 border-t border-blue-800/30 bg-slate-800/20">
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                <div>
                                                    <h4 className="font-medium text-blue-300 mb-2">Habilidades principales</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {candidato.habilidades.map((habilidad, i) => (
                                                            <span
                                                                key={i}
                                                                className={`px-2 py-1 rounded-full text-xs ${i < 2 ? 'bg-blue-900/50 text-blue-300' :
                                                                    i < 4 ? 'bg-purple-900/50 text-purple-300' :
                                                                        'bg-slate-700/50 text-slate-300'
                                                                    }`}
                                                            >
                                                                {habilidad}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div>
                                                    <h4 className="font-medium text-blue-300 mb-2">Detalles</h4>
                                                    <ul className="space-y-1 text-sm">
                                                        <li>Compatibilidad: <span className="font-semibold">{candidato.compatibilidad}%</span></li>
                                                        <li>Postulación: <span className="font-semibold">{candidato.fechaPostulacion}</span></li>
                                                        <li>Estado: <span className={`
                              ${candidato.recomendacion === 'recomendado' ? 'text-green-400' :
                                                                candidato.recomendacion === 'no-recomendado' ? 'text-red-400' :
                                                                    'text-amber-400'
                                                            } font-semibold`
                                                        }>
                                                            {candidato.recomendacion === 'recomendado' ? 'Recomendado' :
                                                                candidato.recomendacion === 'no-recomendado' ? 'No recomendado' : 'Por evaluar'}
                                                        </span></li>
                                                    </ul>
                                                </div>

                                                <div className="flex items-end justify-end space-x-3">
                                                    <a
                                                        href={candidato.cvUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center text-amber-300 hover:text-amber-200 transition-colors"
                                                    >
                                                        <FileText className="w-4 h-4 mr-1" />
                                                        Ver CV
                                                    </a>
                                                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm">
                                                        Contactar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EvaluacionCandidatos;