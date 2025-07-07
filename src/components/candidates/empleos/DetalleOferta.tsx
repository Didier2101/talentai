import React, { useState } from 'react';

import {
    Briefcase,
    MapPin,
    DollarSign,
    Clock,
    Users,
    FileText,

    Upload,
    Check,
    X,
    Star,
} from 'lucide-react';
import Swal from 'sweetalert2';

interface Oferta {
    id: string;
    titulo: string;
    empresa: string;
    ubicacion: string;
    salario: string;
    tipoContrato: string;
    fechaPublicacion: string;
    descripcion: string;
    requisitos: string[];
    beneficios: string[];
    habilidades: string[];
    experiencia: string;
    modalidad: string;
    vacantes: number;
    destacado?: boolean;
}

interface DetalleOfertaProps {
    oferta: Oferta;
}

const DetalleOferta: React.FC<DetalleOfertaProps> = ({ oferta }) => {
    const [cvFile, setCvFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            if (e.target.files[0].size > 5 * 1024 * 1024) {
                Swal.fire({
                    title: 'Archivo demasiado grande',
                    text: 'El tamaño máximo permitido es 5MB',
                    icon: 'error',
                    confirmButtonColor: '#2563eb',
                    background: '#1e293b',
                    color: '#e2e8f0'
                });
                return;
            }
            setCvFile(e.target.files[0]);
        }
    };

    const handleSubmitCV = async () => {
        if (!cvFile) return;

        setIsUploading(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));

            Swal.fire({
                title: '¡Postulación exitosa!',
                html: `
                    <div class="text-center">
                        <div class="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <p class="mb-2">Tu postulación para</p>
                        <h3 class="text-lg font-bold">${oferta.titulo}</h3>
                        <p class="text-blue-300">en ${oferta.empresa}</p>
                        <p class="mt-4">ha sido recibida exitosamente.</p>
                    </div>
                `,
                showConfirmButton: false,
                timer: 3000,
                background: '#1e293b',
                color: '#e2e8f0'
            });

            setCvFile(null);
        } catch {
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al subir tu hoja de vida. Por favor intenta nuevamente.',
                icon: 'error',
                confirmButtonColor: '#2563eb',
                background: '#1e293b',
                color: '#e2e8f0'
            });
        } finally {
            setIsUploading(false);
        }
    };



    return (
        <div className=" min-h-screen text-white w-full h-full overflow-auto">

            {/* Card principal */}
            <div className="bg-gradient-to-b from-slate-800/70 to-slate-900/70 rounded-xl shadow-lg border border-blue-700/30 p-6 mb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold mb-2">{oferta.titulo}</h1>
                        <div className="flex items-center flex-wrap gap-2">
                            <h2 className="text-xl text-amber-300">{oferta.empresa}</h2>
                            {oferta.destacado && (
                                <span className="flex items-center bg-amber-900/50 text-amber-300 px-2 py-1 rounded-full text-xs">
                                    <Star className="w-3 h-3 mr-1" />
                                    Destacado
                                </span>
                            )}
                        </div>
                        <p className="text-blue-300 mt-1">{oferta.fechaPublicacion}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {oferta.ubicacion}
                        </span>
                        <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-sm flex items-center">
                            <DollarSign className="w-4 h-4 mr-1" />
                            {oferta.salario}
                        </span>
                        <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {oferta.tipoContrato}
                        </span>
                    </div>
                </div>

                {/* Detalles rápidos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-slate-800/50 p-4 rounded-lg border border-blue-700/30">
                        <h3 className="font-medium text-blue-300 mb-2 flex items-center">
                            <Users className="w-5 h-5 mr-2" />
                            Experiencia requerida
                        </h3>
                        <p>{oferta.experiencia}</p>
                    </div>

                    <div className="bg-slate-800/50 p-4 rounded-lg border border-blue-700/30">
                        <h3 className="font-medium text-blue-300 mb-2 flex items-center">
                            <Briefcase className="w-5 h-5 mr-2" />
                            Modalidad
                        </h3>
                        <p>{oferta.modalidad}</p>
                    </div>

                    <div className="bg-slate-800/50 p-4 rounded-lg border border-blue-700/30">
                        <h3 className="font-medium text-blue-300 mb-2 flex items-center">
                            <Users className="w-5 h-5 mr-2" />
                            Vacantes disponibles
                        </h3>
                        <p>{oferta.vacantes}</p>
                    </div>
                </div>

                {/* Descripción */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 border-b border-blue-700/30 pb-2">Descripción del puesto</h3>
                    <p className="whitespace-pre-line text-slate-300">{oferta.descripcion}</p>
                </div>

                {/* Requisitos */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 border-b border-blue-700/30 pb-2">Requisitos</h3>
                    <ul className="space-y-3">
                        {oferta.requisitos.map((req, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-amber-300 mr-2 mt-1">•</span>
                                <span className="text-slate-300">{req}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Beneficios */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 border-b border-blue-700/30 pb-2">Beneficios</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {oferta.beneficios.map((beneficio, index) => (
                            <div key={index} className="flex items-start bg-slate-800/30 p-3 rounded-lg">
                                <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-300">{beneficio}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Habilidades */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4 border-b border-blue-700/30 pb-2">Habilidades requeridas</h3>
                    <div className="flex flex-wrap gap-2">
                        {oferta.habilidades.map((habilidad, index) => (
                            <span
                                key={index}
                                className={`px-3 py-1.5 rounded-full text-sm ${index < 3 ? 'bg-blue-900/50 text-blue-300' : 'bg-slate-700/50 text-slate-300'}`}
                            >
                                {habilidad}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sección de aplicación */}
            <div className="bg-gradient-to-b from-slate-800/70 to-slate-900/70 rounded-xl shadow-lg border border-blue-700/30 p-6">
                <h3 className="text-xl font-semibold mb-4">Postularme a esta oferta</h3>

                {!cvFile ? (
                    <div className="border-2 border-dashed border-blue-700/50 rounded-lg p-6 text-center transition-all hover:border-blue-500/50">
                        <div className="max-w-md mx-auto">
                            <Upload className="w-10 h-10 mx-auto text-blue-300 mb-4" />
                            <h4 className="text-lg font-medium mb-2">Sube tu hoja de vida</h4>
                            <p className="text-blue-300 mb-4">Formato PDF (máximo 5MB)</p>

                            <label className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium py-2.5 px-6 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer hover:from-amber-400 hover:to-amber-500">
                                <input
                                    type="file"
                                    className="hidden"
                                    accept=".pdf"
                                    onChange={handleFileChange}
                                />
                                Seleccionar archivo
                            </label>
                        </div>
                    </div>
                ) : (
                    <div className="bg-slate-800/50 rounded-lg p-4 border border-green-700/30">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <FileText className="w-5 h-5 text-green-400 mr-3" />
                                <div>
                                    <p className="font-medium">{cvFile.name}</p>
                                    <p className="text-sm text-blue-300">{(cvFile.size / 1024 / 1024).toFixed(2)} MB</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setCvFile(null)}
                                className="p-1 rounded-full hover:bg-slate-700/50 transition-colors"
                                aria-label="Eliminar archivo"
                            >
                                <X className="w-5 h-5 text-red-400" />
                            </button>
                        </div>

                        <button
                            onClick={handleSubmitCV}
                            disabled={isUploading}
                            className={`mt-4 w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center ${isUploading ? 'opacity-80' : 'hover:shadow-lg hover:from-green-600 hover:to-green-700'}`}
                        >
                            {isUploading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Enviando...
                                </>
                            ) : (
                                <>
                                    <Upload className="w-5 h-5 mr-2" />
                                    Enviar postulación
                                </>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DetalleOferta;