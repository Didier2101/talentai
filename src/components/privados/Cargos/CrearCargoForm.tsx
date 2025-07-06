import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Briefcase,
    MapPin,
    FileText,
    List,
    CheckCircle,
    Award,
    DollarSign,
    Clock,
    X,
    Save,
    ArrowLeft
} from 'lucide-react';
import Swal from 'sweetalert2';

interface CargoFormData {
    id?: string;
    titulo: string;
    descripcion: string;
    requisitos_principales: string;
    responsabilidades: string;
    habilidades_clave: string;
    experiencia_minima: string;
    ubicacion: string;
    tipo_contrato: 'Indefinido' | 'Fijo' | 'Obra y Labor' | 'Servicios';
    salario_rango_min?: number;
    salario_rango_max?: number;
}

interface CrearCargoFormProps {
    initialData?: CargoFormData;
}

const CrearCargoForm: React.FC<CrearCargoFormProps> = ({ initialData }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<CargoFormData>(initialData || {
        titulo: '',
        descripcion: '',
        requisitos_principales: '',
        responsabilidades: '',
        habilidades_clave: '',
        experiencia_minima: '',
        ubicacion: '',
        tipo_contrato: 'Indefinido',
        salario_rango_min: undefined,
        salario_rango_max: undefined,
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Simulación de llamada a la API
            const result = { success: true, message: initialData ? "Cargo actualizado exitosamente." : "Cargo creado exitosamente." };

            if (result.success) {
                await Swal.fire({
                    icon: 'success',
                    title: 'Éxito',
                    text: result.message,
                    confirmButtonColor: "#2563eb",
                    background: "#1e293b",
                    color: "#e2e8f0"
                });
                navigate('/privados/cargos');
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un problema al guardar el cargo. Intenta de nuevo.',
                confirmButtonColor: "#2563eb",
                background: "#1e293b",
                color: "#e2e8f0"
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-full text-white max-w-8xl mx-auto">
            {/* Header */}
            <div className="pt-8 pb-6 px-6">
                <div>
                    <div className="flex items-center space-x-4 mb-4">
                        <button
                            onClick={() => navigate('/privados/cargos')}
                            className="p-2 rounded-lg bg-blue-800/30 hover:bg-blue-700/30 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5 text-blue-300" />
                        </button>
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                            <Briefcase className="w-6 h-6 text-amber-300" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500">
                                {initialData ? 'Editar Cargo' : 'Crear Nuevo Cargo'}
                            </h1>
                            <p className="text-blue-200">Completa los detalles del puesto</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="px-4 sm:px-6 lg:px-8 pb-12">
                <div className="bg-gradient-to-b from-slate-800/70 to-slate-900/70 p-6 md:p-8 rounded-xl shadow-lg border border-blue-700/30">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {/* Título del Cargo */}
                            <div>
                                <label htmlFor="titulo" className="block text-sm font-medium text-blue-300 mb-2 flex items-center">
                                    <Briefcase className="w-4 h-4 mr-2 text-amber-300" />
                                    Título del Cargo
                                </label>
                                <input
                                    type="text"
                                    name="titulo"
                                    id="titulo"
                                    value={formData.titulo}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full bg-slate-800/50 border border-blue-700/30 text-white rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent p-3"
                                />
                            </div>

                            {/* Ubicación */}
                            <div>
                                <label htmlFor="ubicacion" className="block text-sm font-medium text-blue-300 mb-2 flex items-center">
                                    <MapPin className="w-4 h-4 mr-2 text-green-300" />
                                    Ubicación
                                </label>
                                <input
                                    type="text"
                                    name="ubicacion"
                                    id="ubicacion"
                                    value={formData.ubicacion}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full bg-slate-800/50 border border-blue-700/30 text-white rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent p-3"
                                />
                            </div>

                            {/* Tipo de Contrato */}
                            <div>
                                <label htmlFor="tipo_contrato" className="block text-sm font-medium text-blue-300 mb-2 flex items-center">
                                    <FileText className="w-4 h-4 mr-2 text-purple-300" />
                                    Tipo de Contrato
                                </label>
                                <select
                                    name="tipo_contrato"
                                    id="tipo_contrato"
                                    value={formData.tipo_contrato}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full bg-slate-800/50 border border-blue-700/30 text-white rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent p-3"
                                >
                                    <option value="Indefinido">Indefinido</option>
                                    <option value="Fijo">Fijo</option>
                                    <option value="Obra y Labor">Obra y Labor</option>
                                    <option value="Servicios">Servicios</option>
                                </select>
                            </div>

                            {/* Experiencia Mínima */}
                            <div>
                                <label htmlFor="experiencia_minima" className="block text-sm font-medium text-blue-300 mb-2 flex items-center">
                                    <Clock className="w-4 h-4 mr-2 text-amber-300" />
                                    Experiencia Mínima
                                </label>
                                <input
                                    type="text"
                                    name="experiencia_minima"
                                    id="experiencia_minima"
                                    value={formData.experiencia_minima}
                                    onChange={handleChange}
                                    required
                                    placeholder="Ej: 3 años, Junior, Senior"
                                    className="mt-1 block w-full bg-slate-800/50 border border-blue-700/30 text-white rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent p-3"
                                />
                            </div>

                            {/* Rango Salarial */}
                            <div>
                                <label htmlFor="salario_rango_min" className="block text-sm font-medium text-blue-300 mb-2 flex items-center">
                                    <DollarSign className="w-4 h-4 mr-2 text-green-300" />
                                    Salario Mínimo (Opcional)
                                </label>
                                <input
                                    type="number"
                                    name="salario_rango_min"
                                    id="salario_rango_min"
                                    value={formData.salario_rango_min || ''}
                                    onChange={handleChange}
                                    placeholder="Ej: 2000000"
                                    className="mt-1 block w-full bg-slate-800/50 border border-blue-700/30 text-white rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent p-3"
                                />
                            </div>

                            <div>
                                <label htmlFor="salario_rango_max" className="block text-sm font-medium text-blue-300 mb-2 flex items-center">
                                    <DollarSign className="w-4 h-4 mr-2 text-green-300" />
                                    Salario Máximo (Opcional)
                                </label>
                                <input
                                    type="number"
                                    name="salario_rango_max"
                                    id="salario_rango_max"
                                    value={formData.salario_rango_max || ''}
                                    onChange={handleChange}
                                    placeholder="Ej: 3500000"
                                    className="mt-1 block w-full bg-slate-800/50 border border-blue-700/30 text-white rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent p-3"
                                />
                            </div>
                        </div>

                        {/* Descripción del Cargo */}
                        <div className="mb-8">
                            <label htmlFor="descripcion" className="block text-sm font-medium text-blue-300 mb-2 flex items-center">
                                <FileText className="w-4 h-4 mr-2 text-blue-300" />
                                Descripción del Cargo
                            </label>
                            <textarea
                                name="descripcion"
                                id="descripcion"
                                rows={4}
                                value={formData.descripcion}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full bg-slate-800/50 border border-blue-700/30 text-white rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent p-3"
                                placeholder="Describe el rol, el equipo, la cultura, etc."
                            />
                        </div>

                        {/* Requisitos Principales */}
                        <div className="mb-8">
                            <label htmlFor="requisitos_principales" className="block text-sm font-medium text-blue-300 mb-2 flex items-center">
                                <List className="w-4 h-4 mr-2 text-amber-300" />
                                Requisitos Principales (para la IA)
                            </label>
                            <textarea
                                name="requisitos_principales"
                                id="requisitos_principales"
                                rows={4}
                                value={formData.requisitos_principales}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full bg-slate-800/50 border border-blue-700/30 text-white rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent p-3"
                                placeholder="Enumera los requisitos técnicos y blandos clave..."
                            />
                            <p className="mt-2 text-sm text-blue-300">
                                Esta es la sección más importante para la IA. Sé específico con las palabras clave.
                            </p>
                        </div>

                        {/* Responsabilidades */}
                        <div className="mb-8">
                            <label htmlFor="responsabilidades" className="block text-sm font-medium text-blue-300 mb-2 flex items-center">
                                <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                                Responsabilidades Clave
                            </label>
                            <textarea
                                name="responsabilidades"
                                id="responsabilidades"
                                rows={3}
                                value={formData.responsabilidades}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full bg-slate-800/50 border border-blue-700/30 text-white rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent p-3"
                                placeholder="Describe las principales responsabilidades del puesto..."
                            />
                        </div>

                        {/* Habilidades Clave */}
                        <div className="mb-8">
                            <label htmlFor="habilidades_clave" className="block text-sm font-medium text-blue-300 mb-2 flex items-center">
                                <Award className="w-4 h-4 mr-2 text-purple-300" />
                                Habilidades Clave (Separadas por Coma)
                            </label>
                            <input
                                type="text"
                                name="habilidades_clave"
                                id="habilidades_clave"
                                value={formData.habilidades_clave}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full bg-slate-800/50 border border-blue-700/30 text-white rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent p-3"
                                placeholder="Ej: React, JavaScript, Python, SQL, Comunicación, Liderazgo"
                            />
                            <p className="mt-2 text-sm text-blue-300">
                                Lista las habilidades más importantes para este rol.
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col-reverse sm:flex-row justify-end gap-4 pt-4 border-t border-blue-800/50">
                            <button
                                type="button"
                                onClick={() => navigate('/privados/cargos')}
                                className="px-6 py-3 border border-blue-700/30 rounded-lg shadow-sm text-sm font-medium text-blue-300 bg-blue-900/20 hover:bg-blue-800/30 transition-colors flex items-center justify-center"
                            >
                                <X className="w-4 h-4 mr-2" />
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="px-6 py-3 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50 flex items-center justify-center"
                            >
                                <Save className="w-4 h-4 mr-2" />
                                {isLoading ? 'Guardando...' : (initialData ? 'Actualizar Cargo' : 'Crear Cargo')}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CrearCargoForm;