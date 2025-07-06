import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { Mail, MessageSquare, User, Phone, Check, Loader2, MessageCircle, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';



// Esquema de validación con Zod
const contactSchema = z.object({
    nombre: z.string().min(3, 'Nombre debe tener al menos 3 caracteres'),
    email: z.string().email('Email inválido'),
    telefono: z.string().min(6, 'Teléfono debe tener al menos 6 caracteres').optional(),
    asunto: z.string().min(5, 'Asunto debe tener al menos 5 caracteres'),
    mensaje: z.string().min(10, 'Mensaje debe tener al menos 10 caracteres'),
    terms: z.literal(true, {
        errorMap: () => ({ message: 'Debes aceptar la política de privacidad' }),
    })
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema)
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsLoading(true);
        setError('');

        try {
            // Simulación de envío del formulario
            console.log('Datos de contacto enviados:', data);

            // Simular retraso de red
            await new Promise(resolve => setTimeout(resolve, 1500));

            setIsSubmitted(true);
            reset();
        } catch (err) {
            setError('Error al enviar el mensaje. Por favor intenta nuevamente.');
        } finally {
            setIsLoading(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="pt-0 md:pt-24 flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
                <div className="relative z-10 flex flex-1 items-center justify-center p-6">
                    <div className="w-full max-w-2xl">
                        <div className="bg-slate-800/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl p-8 text-center">
                            <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center shadow-lg mb-4">
                                <Check className="h-7 w-7 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-4">¡Mensaje enviado con éxito!</h2>
                            <p className="text-blue-300 mb-6">
                                Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.
                            </p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                            >
                                Enviar otro mensaje
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Hero Section */}
            <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center">
                    <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg mb-6">
                        <MessageCircle className="h-10 w-10 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Estamos aquí para <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">ayudarte</span>
                    </h1>
                    <p className="text-xl text-blue-300 max-w-3xl mx-auto">
                        ¿Tienes preguntas sobre nuestros servicios o quieres saber cómo TalentAI puede transformar tu proceso de reclutamiento? Escríbenos.
                    </p>
                </div>
            </section>

            {/* Contenido principal */}
            <div className="relative z-10 flex flex-1 items-start justify-center p-6">
                <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Información de contacto */}
                    <div className="space-y-8">
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl">
                            <h2 className="text-2xl font-bold text-white mb-6">
                                Información de contacto
                            </h2>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-900/50 flex items-center justify-center mr-4">
                                        <Mail className="h-5 w-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-white mb-1">Correo electrónico</h3>
                                        <p className="text-blue-300">contacto@talentai.com</p>
                                        <p className="text-blue-300">soporte@talentai.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-900/50 flex items-center justify-center mr-4">
                                        <Phone className="h-5 w-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-white mb-1">Teléfono</h3>
                                        <p className="text-blue-300">+57 1 234 5678</p>
                                        <p className="text-blue-300">+57 300 123 4567</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-900/50 flex items-center justify-center mr-4">
                                        <MapPin className="h-5 w-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-white mb-1">Oficina principal</h3>
                                        <p className="text-blue-300">Calle 123 #45-67</p>
                                        <p className="text-blue-300">Bogotá, Colombia</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-900/50 flex items-center justify-center mr-4">
                                        <Clock className="h-5 w-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-white mb-1">Horario de atención</h3>
                                        <p className="text-blue-300">Lunes a Viernes</p>
                                        <p className="text-blue-300">8:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 rounded-2xl p-8 border border-slate-700/50 shadow-xl">
                            <h2 className="text-2xl font-bold text-white mb-4">¿Necesitas ayuda rápida?</h2>
                            <p className="text-blue-300 mb-6">
                                Revisa nuestras preguntas frecuentes o agenda una demostración de nuestro producto.
                            </p>
                            <div className="space-y-3">
                                <Link
                                    to="/faq"
                                    className="block w-full text-center px-4 py-2.5 text-slate-300 hover:text-white font-semibold border border-slate-600 rounded-full hover:border-blue-400 transition-all duration-300 hover:shadow-lg"
                                >
                                    Preguntas Frecuentes
                                </Link>
                                <Link
                                    to="/demo"
                                    className="block w-full text-center px-4 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 font-semibold rounded-full hover:from-amber-400 hover:to-orange-400 transition-all duration-300 shadow-lg"
                                >
                                    Solicitar Demo
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Formulario de contacto */}
                    <div className="lg:col-span-2">
                        <div className="bg-slate-800/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl">
                            <div className="bg-gradient-to-r from-blue-800/50 to-blue-900/50 p-8 text-center border-b border-slate-700/50">
                                <h2 className="text-3xl font-bold text-white mb-2">Envíanos un mensaje</h2>
                                <p className="text-blue-300">
                                    Completa el formulario y te responderemos en menos de 24 horas.
                                </p>
                            </div>

                            <div className="p-8">
                                {error && (
                                    <div className="mb-6 p-3 bg-red-900/50 border border-red-700/50 rounded-lg text-red-200 text-sm">
                                        {error}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Columna izquierda */}
                                        <div className="space-y-6">
                                            <div>
                                                <label className="block text-sm font-medium text-blue-200 mb-2">
                                                    Nombre completo
                                                </label>
                                                <div className="relative group">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-400 group-hover:text-blue-300 transition-colors">
                                                        <User className="h-5 w-5" />
                                                    </div>
                                                    <input
                                                        {...register('nombre')}
                                                        className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all group-hover:border-blue-400/50"
                                                        placeholder="Ej: Juan Pérez"
                                                    />
                                                </div>
                                                {errors.nombre && (
                                                    <p className="mt-2 text-sm text-amber-400">{errors.nombre.message}</p>
                                                )}
                                            </div>

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
                                                        type="email"
                                                    />
                                                </div>
                                                {errors.email && (
                                                    <p className="mt-2 text-sm text-amber-400">{errors.email.message}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-blue-200 mb-2">
                                                    Teléfono (Opcional)
                                                </label>
                                                <div className="relative group">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-400 group-hover:text-blue-300 transition-colors">
                                                        <Phone className="h-5 w-5" />
                                                    </div>
                                                    <input
                                                        {...register('telefono')}
                                                        className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all group-hover:border-blue-400/50"
                                                        placeholder="+57 123 456 7890"
                                                    />
                                                </div>
                                                {errors.telefono && (
                                                    <p className="mt-2 text-sm text-amber-400">{errors.telefono.message}</p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Columna derecha */}
                                        <div className="space-y-6">
                                            <div>
                                                <label className="block text-sm font-medium text-blue-200 mb-2">
                                                    Asunto
                                                </label>
                                                <div className="relative group">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-400 group-hover:text-blue-300 transition-colors">
                                                        <MessageSquare className="h-5 w-5" />
                                                    </div>
                                                    <input
                                                        {...register('asunto')}
                                                        className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all group-hover:border-blue-400/50"
                                                        placeholder="Ej: Consulta sobre planes"
                                                    />
                                                </div>
                                                {errors.asunto && (
                                                    <p className="mt-2 text-sm text-amber-400">{errors.asunto.message}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-blue-200 mb-2">
                                                    Mensaje
                                                </label>
                                                <div className="relative group">
                                                    <textarea
                                                        {...register('mensaje')}
                                                        rows={5}
                                                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all group-hover:border-blue-400/50"
                                                        placeholder="Escribe tu mensaje aquí..."
                                                    />
                                                </div>
                                                {errors.mensaje && (
                                                    <p className="mt-2 text-sm text-amber-400">{errors.mensaje.message}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Términos y condiciones */}
                                    <div className="flex items-start mt-6">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="contact-terms"
                                                type="checkbox"
                                                {...register('terms')}
                                                className="w-4 h-4 rounded bg-slate-700 border-slate-600 text-blue-600 focus:ring-blue-500"
                                            />
                                        </div>
                                        <label htmlFor="contact-terms" className="ml-3 text-sm text-blue-200">
                                            Acepto la <Link to="/privacy" className="text-amber-400 hover:text-amber-300">Política de Privacidad</Link> y el tratamiento de mis datos
                                        </label>
                                    </div>
                                    {errors.terms && (
                                        <p className="mt-1 text-sm text-amber-400">{errors.terms.message}</p>
                                    )}

                                    {/* Botón de envío */}
                                    <div className="flex justify-end pt-6">
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/20 disabled:opacity-70"
                                        >
                                            {isLoading ? (
                                                <>
                                                    <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                                                    Enviando...
                                                </>
                                            ) : (
                                                <>
                                                    Enviar Mensaje
                                                    <MessageSquare className="ml-2 -mr-1 w-5 h-5" />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;