import { Briefcase, CheckCircle, XCircle, Clock4, Search, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Postulaciones() {
    // Datos simulados de postulaciones basados en las ofertas
    const postulaciones = [
        {
            id: "3",
            titulo: "Ingeniero Civil Residente",
            empresa: "Constructora Andes",
            ubicacion: "Barranquilla",
            fechaPostulacion: "2024-07-10",
            estado: "En revisión",
            match: 85,
            salario: "$5.000.000 - $6.500.000",
            tipoContrato: "Por obra o labor",
            destacado: true
        },
        {
            id: "6",
            titulo: "Médico General",
            empresa: "Clínica Vida Nueva",
            ubicacion: "Pereira",
            fechaPostulacion: "2024-07-08",
            estado: "Entrevista programada",
            match: 78,
            salario: "$6.000.000 - $7.500.000",
            tipoContrato: "Prestación de servicios",
            destacado: true
        },
        {
            id: "11",
            titulo: "Chef Ejecutivo",
            empresa: "Hotel Boutique Aroma",
            ubicacion: "Cartagena",
            fechaPostulacion: "2024-07-05",
            estado: "Rechazado",
            match: 65,
            salario: "$4.500.000 - $5.500.000",
            tipoContrato: "Término indefinido",
            destacado: true
        },
        {
            id: "19",
            titulo: "Recepcionista Bilingüe",
            empresa: "Consultorio Internacional VIP",
            ubicacion: "Bogotá",
            fechaPostulacion: "2024-07-03",
            estado: "En proceso de selección",
            match: 88,
            salario: "$2.800.000 - $3.200.000",
            tipoContrato: "Término indefinido",
            destacado: true
        }
    ];

    // Contar postulaciones por estado
    const estadisticas = {
        total: postulaciones.length,
        entrevistas: postulaciones.filter(p => p.estado.includes("Entrevista")).length,
        rechazados: postulaciones.filter(p => p.estado === "Rechazado").length,
        enProceso: postulaciones.filter(p => p.estado.includes("revisión") || p.estado.includes("proceso")).length
    };

    return (
        <div className="min-h-full text-white">
            {/* Encabezado */}
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500 mb-2">
                    Mis Postulaciones
                </h1>
                <p className="text-blue-200">Revisa el estado de todas tus aplicaciones a ofertas laborales</p>

                {/* Estadísticas rápidas */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <div className="bg-slate-800/50 p-4 rounded-lg border border-blue-800/30">
                        <div className="text-2xl font-bold text-blue-300">{estadisticas.total}</div>
                        <div className="text-sm text-blue-200">Total postulaciones</div>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-lg border border-green-800/30">
                        <div className="text-2xl font-bold text-green-300">{estadisticas.entrevistas}</div>
                        <div className="text-sm text-green-200">Entrevistas</div>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-lg border border-amber-800/30">
                        <div className="text-2xl font-bold text-amber-300">{estadisticas.enProceso}</div>
                        <div className="text-sm text-amber-200">En proceso</div>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-lg border border-red-800/30">
                        <div className="text-2xl font-bold text-red-300">{estadisticas.rechazados}</div>
                        <div className="text-sm text-red-200">Rechazados</div>
                    </div>
                </div>
            </div>

            {/* Filtros */}
            <div className="mb-6 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                <div className="flex space-x-2">
                    <button className="px-4 py-2 bg-blue-600/30 text-blue-200 rounded-full border border-blue-500/30 text-sm hover:bg-blue-700/40 transition-colors">
                        Todas
                    </button>
                    <button className="px-4 py-2 bg-slate-700/50 text-slate-200 rounded-full border border-slate-600/30 text-sm hover:bg-slate-600/40 transition-colors">
                        En proceso
                    </button>
                    <button className="px-4 py-2 bg-slate-700/50 text-slate-200 rounded-full border border-slate-600/30 text-sm hover:bg-slate-600/40 transition-colors">
                        Entrevistas
                    </button>
                    <button className="px-4 py-2 bg-slate-700/50 text-slate-200 rounded-full border border-slate-600/30 text-sm hover:bg-slate-600/40 transition-colors">
                        Finalizadas
                    </button>
                </div>
                <div className="relative w-full md:w-64">
                    <input
                        type="text"
                        placeholder="Buscar en postulaciones..."
                        className="w-full bg-slate-800/50 border border-slate-600/30 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                    />
                    <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                </div>
            </div>

            {/* Lista de postulaciones */}
            <div className="space-y-4">
                {postulaciones.map((postulacion) => (
                    <div key={postulacion.id} className={`p-5 rounded-xl border ${postulacion.destacado ? 'bg-gradient-to-b from-slate-800/50 to-slate-900/30 border-amber-500/30' : 'bg-slate-800/30 border-slate-700/30'} hover:shadow-lg transition-all`}>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            {/* Información principal */}
                            <div className="flex-1">
                                <div className="flex items-start space-x-3">
                                    <div className="p-2 bg-blue-600/20 rounded-lg border border-blue-500/30">
                                        <Briefcase className="w-5 h-5 text-blue-300" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-white">{postulacion.titulo}</h3>
                                        <p className="text-blue-200">{postulacion.empresa} • {postulacion.ubicacion}</p>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <span className="text-xs bg-slate-700/50 text-slate-200 px-2 py-1 rounded-full">
                                                {postulacion.salario}
                                            </span>
                                            <span className="text-xs bg-slate-700/50 text-slate-200 px-2 py-1 rounded-full">
                                                {postulacion.tipoContrato}
                                            </span>
                                            {postulacion.destacado && (
                                                <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-1 rounded-full">
                                                    Destacado
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Estado y acciones */}
                            <div className="flex flex-col items-end space-y-3">
                                <div className="flex items-center space-x-2">
                                    <span className={`text-sm px-3 py-1 rounded-full ${postulacion.estado === "Rechazado" ? 'bg-red-500/20 text-red-300' :
                                        postulacion.estado.includes("Entrevista") ? 'bg-green-500/20 text-green-300' :
                                            'bg-blue-500/20 text-blue-300'
                                        }`}>
                                        {postulacion.estado === "En revisión" && <Clock4 className="inline w-4 h-4 mr-1" />}
                                        {postulacion.estado.includes("Entrevista") && <CheckCircle className="inline w-4 h-4 mr-1" />}
                                        {postulacion.estado === "Rechazado" && <XCircle className="inline w-4 h-4 mr-1" />}
                                        {postulacion.estado}
                                    </span>
                                    <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                                        {postulacion.match}% match
                                    </span>
                                </div>
                                <div className="text-xs text-slate-400">
                                    Postulado el {postulacion.fechaPostulacion}
                                </div>
                                <div className="flex space-x-2">
                                    <Link
                                        to={`/empleo/${postulacion.id}`}
                                        className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-full transition-colors flex items-center"
                                    >
                                        <FileText className="w-3 h-3 mr-1" />
                                        Ver oferta
                                    </Link>
                                    <button className="text-xs bg-slate-700 hover:bg-slate-600 text-white px-3 py-1.5 rounded-full transition-colors">
                                        Seguimiento
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mensaje si no hay postulaciones */}
            {postulaciones.length === 0 && (
                <div className="text-center py-12">
                    <div className="mx-auto w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mb-4 border border-dashed border-slate-600/50">
                        <Search className="w-8 h-8 text-slate-500" />
                    </div>
                    <h3 className="text-lg font-medium text-slate-300 mb-1">No tienes postulaciones</h3>
                    <p className="text-slate-500 mb-4">Aplica a ofertas laborales para verlas aquí</p>
                    <Link
                        to="/empleos"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 font-medium rounded-full hover:shadow-lg transition-all"
                    >
                        Buscar empleos
                    </Link>
                </div>
            )}
        </div>
    );
}