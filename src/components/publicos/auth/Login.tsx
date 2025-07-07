import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Mail, Lock, Loader2, ChevronRight } from 'lucide-react';

// Esquema de validación con Zod
const loginSchema = z.object({
    email: z.string().email('Email inválido').min(1, 'Email es requerido'),
    password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres'),
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormData) => {
        setIsLoading(true);
        setError('');

        try {
            // Simulación de llamada a API
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Credenciales inválidas');
            }

            const result = await response.json();
            localStorage.setItem('authToken', result.token);
            navigate('/dashboard');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error al iniciar sesión');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className=" ">

            {/* Contenido del formulario */}
            <div className="relative z-10 flex flex-1 items-center justify-center p-6">
                <div className="w-full max-w-md">
                    {/* Tarjeta del formulario */}
                    <div className="bg-slate-800/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl">
                        {/* Encabezado con degradado */}
                        <div className="bg-gradient-to-r from-blue-800/50 to-blue-900/50 p-8 text-center border-b border-slate-700/50">
                            <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg mb-4">
                                <Lock className="h-7 w-7 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-2">Iniciar Sesión</h2>
                            <p className="text-blue-300">Ingresa a tu cuenta de TalentAI</p>
                        </div>

                        {/* Cuerpo del formulario */}
                        <div className="p-8">
                            {error && (
                                <div className="mb-6 p-3 bg-red-900/50 border border-red-700/50 rounded-lg text-red-200 text-sm">
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                {/* Campo Email */}
                                <div>
                                    <label className="block text-sm font-medium text-blue-200 mb-2">
                                        Correo electrónico
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-400 group-hover:text-blue-300 transition-colors">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                        <input
                                            {...register('email')}
                                            className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all group-hover:border-blue-400/50"
                                            placeholder="ejemplo@empresa.com"
                                            disabled={isLoading}
                                        />
                                    </div>
                                    {errors.email && (
                                        <p className="mt-2 text-sm text-amber-400">{errors.email.message}</p>
                                    )}
                                </div>

                                {/* Campo Contraseña */}
                                <div>
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="block text-sm font-medium text-blue-200">
                                            Contraseña
                                        </label>
                                        <a href="/forgot-password" className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
                                            ¿Olvidaste tu contraseña?
                                        </a>
                                    </div>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-400 group-hover:text-blue-300 transition-colors">
                                            <Lock className="h-5 w-5" />
                                        </div>
                                        <input
                                            type="password"
                                            {...register('password')}
                                            className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all group-hover:border-blue-400/50"
                                            placeholder="••••••••"
                                            disabled={isLoading}
                                        />
                                    </div>
                                    {errors.password && (
                                        <p className="mt-2 text-sm text-amber-400">{errors.password.message}</p>
                                    )}
                                </div>

                                {/* Botón de envío */}
                                <div>

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full flex justify-center items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/20 disabled:opacity-70"
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="animate-spin h-5 w-5" />
                                                <span>Procesando...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Continuar</span>
                                                <ChevronRight className="h-5 w-5" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>

                            {/* Enlace a registro */}
                            <div className="mt-6 text-center text-sm">
                                <span className="text-slate-400">¿No tienes una cuenta? </span>

                                <Link
                                    to="/register"
                                    className="text-amber-400 hover:text-amber-300 font-medium transition-colors"
                                >
                                    Regístrate ahora
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;