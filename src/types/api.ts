export interface ApiResponse<T = any> {
    success: boolean;
    message?: string;
    data?: T;
    errors?: Record<string, string[]>;
}

export interface RegisterCompanyResponse {
    id: string;
    nombre_empresa: string;
    email_empresa: string;
    created_at: string;
}