import z from "zod";

// Esquemas de validación con Zo

export const empresaSchema = z.object({
    nombre: z.string().min(3, 'Nombre de empresa es requerido'),
    nit: z.string().optional(),
    email_contacto: z.string().email('Email de contacto inválido'),
    plan_seleccionado: z.enum(['PAGO_POR_USO', 'ANUAL_ILIMITADO']),
    password: z.string()
        .min(6, 'La contraseña debe tener al menos 8 caracteres'),
    // .regex(/[A-Z]/, 'Debe contener al menos una mayúscula')
    // .regex(/[0-9]/, 'Debe contener al menos un número'),
    password_hash: z.string(),
    terms: z.literal(true, {
        errorMap: () => ({ message: 'Debes aceptar los términos' }),
    })
}).refine((data) => data.password === data.password_hash, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"]
});

export type EmpresaData = z.infer<typeof empresaSchema>;