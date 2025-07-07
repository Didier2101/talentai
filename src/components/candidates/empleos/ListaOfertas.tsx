import { MapPin, Search, Star } from "lucide-react";
import type { Oferta } from "../../../types/ofertasService";

interface ListaOfertasProps {
    ofertaSeleccionada: Oferta | undefined;
    ofertasFiltradas: Oferta[];
    setSelectedOferta: (id: string) => void;
    selectedOferta: string | null;
    setIsMobileDetailView: (val: boolean) => void;
}
export default function ListaOfertas({
    ofertaSeleccionada,
    ofertasFiltradas,
    setSelectedOferta,
    selectedOferta,
    setIsMobileDetailView,
}: ListaOfertasProps) {
    return (
        <div className={`${ofertaSeleccionada ? '' : 'w-full'}`}>
            {ofertasFiltradas.length === 0 ? (
                <div className="text-center py-12 bg-slate-800/50 rounded-xl border border-blue-700/30">
                    <Search className="w-12 h-12 mx-auto text-blue-300 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No se encontraron ofertas</h3>
                </div>
            ) : (
                <div className="space-y-4">
                    {ofertasFiltradas.map(oferta => (
                        <div
                            key={oferta.id}
                            onClick={() => {
                                setSelectedOferta(oferta.id);
                                if (window.innerWidth < 1024) {
                                    setIsMobileDetailView(true);
                                }
                            }}
                            className={`bg-gradient-to-br from-slate-800/70 to-slate-900/70 rounded-xl shadow-lg border ${oferta.destacado ? 'border-amber-500/50' : 'border-blue-700/30'} p-6 transition-all hover:shadow-xl cursor-pointer ${selectedOferta === oferta.id ? 'ring-2 ring-amber-500/50' : ''}`}
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                <div className="flex-1">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h2 className="text-xl font-bold mb-1">{oferta.titulo}</h2>
                                        </div>
                                        {oferta.destacado && (
                                            <span className="flex items-center bg-amber-900/50 text-amber-300 px-2 py-1 rounded-full text-xs">
                                                <Star className="w-3 h-3 mr-1" />
                                                Destacado
                                            </span>
                                        )}
                                    </div>

                                    <p className="text-sm mb-4">{oferta.descripcionCorta}</p>


                                    <div className="flex flex-wrap gap-4 text-sm">
                                        <div className="flex items-center text-blue-300">
                                            <MapPin className="w-4 h-4 mr-1" />
                                            {oferta.ubicacion}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
