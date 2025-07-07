import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Building2, CreditCard, Mail, Lock, Check } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { empresaSchema, type EmpresaData } from '../../../schemas/userSchema';
import Swal from 'sweetalert2';

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<EmpresaData>({
    resolver: zodResolver(empresaSchema),
    defaultValues: {
      plan_seleccionado: 'PAGO_POR_USO'
    }
  });

  const onSubmit = async (data: EmpresaData) => {
    try {
      setIsLoading(true);

      // Enviar datos al json-server
      const response = await fetch('http://localhost:3000/empresas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          fecha_registro: new Date().toISOString(),
          activa: true
        })
      });

      if (!response.ok) {
        throw new Error('Error al registrar la empresa');
      }

      const empresaRegistrada = await response.json();

      // Mostrar confirmación
      Swal.fire({
        icon: "success",
        title: "Registro exitoso",
        text: `Empresa ${empresaRegistrada.nombre} registrada correctamente`,
        confirmButtonColor: "#2563eb",
        background: "#1e293b",
        color: "#e2e8f0"
      });

      // Redirigir al dashboard
      navigate('/dashboard');

    } catch (error) {
      console.error("Registration error:", error);
      Swal.fire({
        icon: "error",
        title: "Error en el registro",
        text: error instanceof Error ? error.message : "Ocurrió un problema durante el registro",
        confirmButtonColor: "#2563eb",
        background: "#1e293b",
        color: "#e2e8f0"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative z-10 flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-4xl">
          <div className="bg-slate-800/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl">
            <div className="bg-gradient-to-r from-blue-800/50 to-blue-900/50 p-8 text-center border-b border-slate-700/50">
              <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg mb-4">
                <Building2 className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Registra tu empresa
              </h2>
              <p className="text-blue-300">
                Completa los datos de tu organización
              </p>
            </div>

            <div className="p-8">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-blue-200 mb-2">
                        Nombre de la empresa
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-400 group-hover:text-blue-300 transition-colors">
                          <Building2 className="h-5 w-5" />
                        </div>
                        <input
                          {...register('nombre')}
                          className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all group-hover:border-blue-400/50"
                          placeholder="Ej: Mi Empresa S.A."
                        />
                      </div>
                      {errors.nombre && (
                        <p className="mt-2 text-sm text-amber-400">{errors.nombre.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-blue-200 mb-2">
                        NIT (Opcional)
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-400 group-hover:text-blue-300 transition-colors">
                          <CreditCard className="h-5 w-5" />
                        </div>
                        <input
                          {...register('nit')}
                          className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all group-hover:border-blue-400/50"
                          placeholder="Ej: 123456789-0"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-blue-200 mb-2">
                        Email de contacto
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-400 group-hover:text-blue-300 transition-colors">
                          <Mail className="h-5 w-5" />
                        </div>
                        <input
                          {...register('email_contacto')}
                          className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all group-hover:border-blue-400/50"
                          placeholder="contacto@empresa.com"
                          type="email"
                        />
                      </div>
                      {errors.email_contacto && (
                        <p className="mt-2 text-sm text-amber-400">{errors.email_contacto.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-blue-200 mb-2">
                        Contraseña
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-400 group-hover:text-blue-300 transition-colors">
                          <Lock className="h-5 w-5" />
                        </div>
                        <input
                          {...register('password')}
                          className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all group-hover:border-blue-400/50"
                          placeholder="••••••••"
                          type="password"
                        />
                      </div>
                      {errors.password && (
                        <p className="mt-2 text-sm text-amber-400">{errors.password.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-blue-200 mb-2">
                        Confirmar contraseña
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-400 group-hover:text-blue-300 transition-colors">
                          <Lock className="h-5 w-5" />
                        </div>
                        <input
                          {...register('password_hash')}
                          className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all group-hover:border-blue-400/50"
                          placeholder="••••••••"
                          type="password"
                        />
                      </div>
                      {errors.password_hash && (
                        <p className="mt-2 text-sm text-amber-400">{errors.password_hash.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-blue-200 mb-3">
                      Selecciona tu plan
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setValue('plan_seleccionado', 'PAGO_POR_USO')}
                        className={`p-4 rounded-lg border transition-all ${watch('plan_seleccionado') === 'PAGO_POR_USO'
                          ? 'border-blue-500 bg-blue-900/30 shadow-lg'
                          : 'border-slate-700 bg-slate-800/50 hover:bg-slate-800/70'
                          }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-white">Pago por Uso</span>
                          {watch('plan_seleccionado') === 'PAGO_POR_USO' ? (
                            <Check className="w-5 h-5 text-green-400" />
                          ) : null}
                        </div>
                        <div className="text-left text-sm text-blue-200">
                          <p className="flex items-center mb-1">
                            <span className="text-white font-semibold mr-1">$2.99</span> por CV
                          </p>
                          <p className="text-xs">10 CVs de cortesía</p>
                          <p className="text-xs">Sin compromisos</p>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setValue('plan_seleccionado', 'ANUAL_ILIMITADO')}
                        className={`p-4 rounded-lg border transition-all ${watch('plan_seleccionado') === 'ANUAL_ILIMITADO'
                          ? 'border-amber-500 bg-amber-900/30 shadow-lg'
                          : 'border-slate-700 bg-slate-800/50 hover:bg-slate-800/70'
                          }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-white">Anual Ilimitado</span>
                          {watch('plan_seleccionado') === 'ANUAL_ILIMITADO' ? (
                            <Check className="w-5 h-5 text-green-400" />
                          ) : null}
                        </div>
                        <div className="text-left text-sm text-blue-200">
                          <p className="flex items-center mb-1">
                            <span className="text-white font-semibold mr-1">$1,499</span> anual
                          </p>
                          <p className="text-xs">CVs ilimitados</p>
                          <p className="text-xs">Soporte prioritario</p>
                        </div>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <input
                      id="terms"
                      type="checkbox"
                      {...register('terms')}
                      className="w-4 h-4 rounded bg-slate-700 border-slate-600 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="terms" className="ml-3 text-sm text-blue-200">
                      Acepto los <Link to="/terms" className="text-amber-400 hover:text-amber-300">Términos</Link>
                    </label>
                  </div>
                  {errors.terms && <p className="mt-1 text-sm text-amber-400">{errors.terms.message}</p>}

                  <div className="flex justify-end pt-6">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-blue-500/20"
                    >
                      {isLoading ? 'Registrando...' : 'Completar Registro'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-blue-300">
            ¿Ya tienes una cuenta?{' '}
            <Link to="/login" className="text-amber-400 hover:text-amber-300 font-medium">
              Inicia sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;