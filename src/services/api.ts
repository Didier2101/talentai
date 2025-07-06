import type { EmpresaData } from "../schemas/userSchema";
import type { ApiResponse, RegisterCompanyResponse } from "../types/api";

// Detectar el entorno correctamente
const isLocalDevelopment = () => {
    return window.location.hostname === 'localhost' ||
        window.location.hostname === '127.0.0.1' ||
        window.location.hostname.startsWith('192.168.') ||
        window.location.hostname.startsWith('10.') ||
        window.location.hostname.startsWith('172.');
};

// Configuración flexible para diferentes endpoints
const getApiBaseUrl = () => {
    if (isLocalDevelopment()) {
        return 'http://192.168.2.56:8000/api/registro';
    }

    // Intentar diferentes rutas para producción
    return 'https://talentai.cloudware.com.co/api';
}

const API_BASE_URL = getApiBaseUrl();

export const registerCompany = async (data: EmpresaData): Promise<ApiResponse<RegisterCompanyResponse>> => {
    try {
        // Validación de campos requeridos
        if (!data.email_contacto || !data.password) {
            throw new Error("Email y contraseña son requeridos");
        }

        console.log('Entorno detectado:', isLocalDevelopment() ? 'Desarrollo' : 'Producción');

        // Lista de endpoints a probar en orden de prioridad
        const endpoints = isLocalDevelopment()
            ? [`${API_BASE_URL}/iniciar`]
            : [
                `${API_BASE_URL}/registro/iniciar`,
                `${API_BASE_URL}/iniciar`,
                'https://talentai.cloudware.com.co/iniciar'
            ];

        let lastError = null;

        for (const endpoint of endpoints) {
            try {
                console.log('Intentando conectar a:', endpoint);

                const response = await fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    body: JSON.stringify({
                        nombre: data.nombre,
                        email_contacto: data.email_contacto,
                        password: data.password,
                        plan_seleccionado: data.plan_seleccionado,
                        nit: data.nit || null
                    }),
                });

                // Si no es 404, procesamos la respuesta
                if (response.status !== 404) {
                    const responseText = await response.text();
                    let result;

                    try {
                        result = JSON.parse(responseText);
                    } catch {
                        return {
                            success: false,
                            message: `El servidor respondió con: ${responseText}`,
                        };
                    }

                    if (!response.ok) {
                        return {
                            success: false,
                            message: result.detail || result.message || 'Error en el registro',
                            errors: result.errors || {},
                        };
                    }

                    return {
                        success: true,
                        data: result,
                        message: result.message || 'Registro exitoso'
                    };
                }
            } catch (error) {
                console.log(`Error en ${endpoint}:`, error);
                lastError = error;
                continue;
            }
        }

        // Si llegamos aquí, ningún endpoint funcionó
        return {
            success: false,
            message: 'No se pudo conectar con el servidor. Todos los endpoints están inaccesibles.',
        };

    } catch (error) {
        console.error('API Error:', error);
        return {
            success: false,
            message: error instanceof Error ? error.message : 'Error de conexión con el servidor',
        };
    }
};
// Función para reenviar email de verificación
export const resendVerificationEmail = async (email: string): Promise<ApiResponse> => {
    try {
        const response = await fetch('http://192.168.2.56:8000/api/registro/verificar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        const result: ApiResponse = await response.json();

        return {
            success: response.ok,
            message: result.message || (response.ok ? 'Email reenviado' : 'Error al reenviar email')
        };
    } catch (error) {
        return {
            success: false,
            message: 'Error de conexión'
        };
    }
};