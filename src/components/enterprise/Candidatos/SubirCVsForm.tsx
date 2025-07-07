// src/components/privados/Candidatos/SubirCVsForm.tsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SubirCVsForm: React.FC = () => {
    const { cargoId } = useParams<{ cargoId: string }>(); // Obtiene el ID del cargo de la URL
    const navigate = useNavigate();
    const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedFiles(e.target.files);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedFiles || selectedFiles.length === 0) {
            return Swal.fire({
                icon: 'warning',
                title: 'Archivos requeridos',
                text: 'Por favor, selecciona al menos un archivo CV para subir.',
                confirmButtonColor: "#2563eb",
                background: "#1e293b",
                color: "#e2e8f0"
            });
        }

        setIsLoading(true);

        const formData = new FormData();
        // Asocia los archivos al ID del cargo
        formData.append('cargoId', cargoId || ''); // Asegura que cargoId no sea undefined
        for (let i = 0; i < selectedFiles.length; i++) {
            formData.append('cvs', selectedFiles[i]); // 'cvs' será el nombre del campo en el backend
        }

        // Aquí iría la llamada a tu API para subir CVs
        // (ej. api.uploadCVs(cargoId, formData))
        console.log(`Subiendo ${selectedFiles.length} CVs para el cargo ID: ${cargoId}`);
        // Simulación de llamada a la API
        try {
            // const result = await api.uploadCVs(cargoId, formData);
            const result = { success: true, message: "CVs subidos y en proceso de evaluación." }; // Simulación

            if (result.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Subida Exitosa',
                    text: result.message,
                    confirmButtonColor: "#2563eb",
                    background: "#1e293b",
                    color: "#e2e8f0"
                }).then(() => {
                    navigate(`/privados/candidatos`); // Redirige a la lista de candidatos
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error al subir CVs',
                    text: result.message || 'Ocurrió un error al subir los archivos.',
                    confirmButtonColor: "#2563eb",
                    background: "#1e293b",
                    color: "#e2e8f0"
                });
            }
        } catch (error) {
            console.error("Error al subir CVs:", error);
            Swal.fire({
                icon: 'error',
                title: 'Error de Conexión',
                text: 'Hubo un problema de conexión al subir los archivos. Intenta de nuevo.',
                confirmButtonColor: "#2563eb",
                background: "#1e293b",
                color: "#e2e8f0"
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-6 bg-gray-50 min-h-full">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Subir Hojas de Vida para Cargo: <span className="text-blue-600">{cargoId}</span></h1>
            <p className="text-gray-700 mb-8">Selecciona los archivos PDF o DOCX de las hojas de vida para que TalentAI los procese.</p>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="cv_files" className="block text-sm font-medium text-gray-700 mb-2">Seleccionar Archivos CV</label>
                        <input
                            type="file"
                            id="cv_files"
                            name="cv_files"
                            accept=".pdf,.doc,.docx" // Acepta PDF y documentos de Word
                            multiple // Permite seleccionar múltiples archivos
                            onChange={handleFileChange}
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                        {selectedFiles && selectedFiles.length > 0 && (
                            <p className="mt-2 text-sm text-gray-500">Archivos seleccionados: {selectedFiles.length}</p>
                        )}
                    </div>

                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            onClick={() => navigate(`/privados/cargos`)} // Regresar a la lista de cargos
                            className="px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            disabled={isLoading || !selectedFiles || selectedFiles.length === 0}
                            className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                        >
                            {isLoading ? 'Subiendo...' : 'Subir CVs'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SubirCVsForm;