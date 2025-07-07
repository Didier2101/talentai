import ofertasData from '../components/candidates/empleos/ofertas.json';

export interface Oferta {
    id: string;
    titulo: string;
    empresa: string;
    ubicacion: string;
    salario: string;
    tipoContrato: string;
    fechaPublicacion: string;
    destacado: boolean;
    descripcionCorta: string;
    categoria: string;
    nivelSenioridad: string;
    // Propiedades opcionales (si no están presentes en todos los objetos)
    descripcion: string;
    habilidades: string[];
    requisitos: string[];
    beneficios: string[];
    experiencia: string;
    modalidad: string;
    vacantes: number;
}

export const getOfertas = (): Oferta[] => {
    return ofertasData.ofertas;
};