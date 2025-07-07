import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, } from 'lucide-react';
import DetalleOferta from './DetalleOferta';
import { getOfertas, type Oferta } from '../../../types/ofertasService';
import ListaOfertas from './ListaOfertas';

const OfertasTrabajo: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filtroUbicacion, setFiltroUbicacion] = useState<string | null>(null);
    const [selectedOferta, setSelectedOferta] = useState<string | null>(null);
    const [ofertas, setOfertas] = useState<Oferta[]>([]);
    const [isMobileDetailView, setIsMobileDetailView] = useState(false);

    // Cargar ofertas al montar el componente
    useEffect(() => {
        const cargarOfertas = async () => {
            const ofertasData = getOfertas();
            setOfertas(ofertasData);

            if (ofertasData.length > 0) {
                setSelectedOferta(ofertasData[0].id);
            }
        };

        cargarOfertas();
    }, []);

    // Filtrar ofertas
    const ofertasFiltradas = ofertas.filter(oferta => {
        const matchesSearch = oferta.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
            oferta.empresa.toLowerCase().includes(searchTerm.toLowerCase()) ||
            oferta.descripcionCorta.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesUbicacion = filtroUbicacion ? oferta.ubicacion === filtroUbicacion : true;

        return matchesSearch && matchesUbicacion;
    });

    // Actualizar oferta seleccionada cuando cambian los filtros
    useEffect(() => {
        if (ofertasFiltradas.length > 0 && !ofertasFiltradas.some(o => o.id === selectedOferta)) {
            setSelectedOferta(ofertasFiltradas[0].id);
        } else if (ofertasFiltradas.length === 0) {
            setSelectedOferta(null);
        }
    }, [ofertasFiltradas, selectedOferta]);

    // Ubicaciones y tipos de contrato para filtros
    const ubicaciones = Array.from(new Set(ofertas.map(oferta => oferta.ubicacion)));

    // Obtener la oferta seleccionada
    const ofertaSeleccionada = ofertas.find(oferta => oferta.id === selectedOferta);

    // Vista para pantallas pequeñas
    // Vista para pantallas pequeñas
    if (isMobileDetailView && ofertaSeleccionada) {
        return (
            <AnimatePresence>
                <motion.div
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '100%', opacity: 0 }}
                    transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                    className="fixed inset-0 z-50 min-h-screen text-white p-4 bg-slate-900 overflow-y-auto"
                >
                    <button
                        onClick={() => setIsMobileDetailView(false)}
                        className="flex items-center text-blue-300 mb-4"
                    >
                        ← Volver a la lista
                    </button>
                    <DetalleOferta oferta={ofertaSeleccionada} />
                </motion.div>
            </AnimatePresence>
        );
    }

    return (
        <div className="min-h-screen text-white p-4 md:p-6">
            {/* Header */}
            <div className="mb-8 text-center">
                <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500 mb-2">
                    Ofertas de Trabajo Disponibles
                </h1>
                <p className="text-blue-300 max-w-2xl mx-auto">
                    Encuentra tu próximo desafío profesional entre las mejores empresas del país
                </p>
            </div>

            {/* Filtros */}
            <div className="bg-gradient-to-b from-slate-800/70 to-slate-900/70 p-4 md:p-6 rounded-xl shadow-lg border border-blue-700/30 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Buscador */}
                    <div className="md:col-span-1">
                        <label className="text-sm font-medium text-blue-300 mb-1 flex items-center">
                            <Search className="w-4 h-4 mr-2" />
                            Buscar ofertas
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Puesto, empresa o palabras clave..."
                                className="w-full bg-slate-800/50 border border-blue-700/30 text-white rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent p-2 pl-10"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <Search className="absolute left-3 top-2.5 w-4 h-4 text-blue-300" />
                        </div>
                    </div>

                    {/* Filtro por ubicación */}
                    <div className="md:col-span-1">
                        <label className="text-sm font-medium text-blue-300 mb-1 flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            Ubicación
                        </label>
                        <select
                            value={filtroUbicacion || ''}
                            onChange={(e) => setFiltroUbicacion(e.target.value || null)}
                            className="w-full bg-slate-800/50 border border-blue-700/30 text-white rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent p-2"
                        >
                            <option value="">Todas las ubicaciones</option>
                            {ubicaciones.map(ubicacion => (
                                <option key={ubicacion} value={ubicacion}>{ubicacion}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Contenido principal */}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Lista de ofertas */}
                <div className=' h-screen overflow-auto'>
                    <ListaOfertas
                        ofertaSeleccionada={ofertaSeleccionada}
                        ofertasFiltradas={ofertasFiltradas}
                        setSelectedOferta={setSelectedOferta}
                        selectedOferta={selectedOferta}
                        setIsMobileDetailView={setIsMobileDetailView}
                    />
                </div>
                {/* Detalle de oferta para desktop */}
                {ofertaSeleccionada && (
                    <DetalleOferta oferta={ofertaSeleccionada} />
                )}
            </div>


        </div>
    );
};

export default OfertasTrabajo;