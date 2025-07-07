// components/Header.tsx
import { useState, useEffect, useRef } from 'react';
import { Brain, Menu, X, ArrowRight } from "lucide-react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../assets/ui/Logo';
import RegisterSelectionCard from './RegisterSelectionCard';
import Swal from 'sweetalert2';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showRegisterCard, setShowRegisterCard] = useState(false);
    const location = useLocation();
    const registerCardRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleRegisterCard = () => setShowRegisterCard(!showRegisterCard);

    // Cerrar el card cuando se hace clic fuera o se desplaza
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                registerCardRef.current &&
                event.target &&
                !(registerCardRef.current as unknown as HTMLElement).contains(event.target as Node)
            ) {
                setShowRegisterCard(false);
            }
        };

        const handleScrollClose = () => {
            setShowRegisterCard(false);
        };

        if (showRegisterCard) {
            document.addEventListener('mousedown', handleClickOutside);
            window.addEventListener('scroll', handleScrollClose);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScrollClose);
        };
    }, [showRegisterCard]);

    const handleEmpleosClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        Swal.fire({
            title: 'Acceso Requerido',
            text: 'Para ver los empleos disponibles debes registrarte. ¡Es completamente gratis!',
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Registrarme ahora',
            cancelButtonText: 'Quizás más tarde',
            background: '#1e293b',
            color: '#ffffff',
            confirmButtonColor: '#f59e0b',
            cancelButtonColor: '#334155',
            customClass: {
                popup: 'border border-slate-600 rounded-xl',
                title: 'text-white',
                htmlContainer: 'text-slate-300'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/register');
            }
        });
    };

    return (
        <header className={`py-4 w-full z-50 transition-all duration-500 ${isScrolled
            ? 'bg-slate-900/95 backdrop-blur-md shadow-xl'
            : 'bg-transparent'
            }`}>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 lg:h-20">
                    {/* Logo y Nombre */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="relative">
                            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/25">
                                <Brain className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                        </div>
                        <Logo />
                    </Link>

                    {/* Navegación Desktop */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {['Inicio', 'Empleos', 'Contacto', 'Nosotros'].map((item) => {
                            const path = item === 'Inicio' ? '/' : `/${item.toLowerCase()}`;
                            const isActive = location.pathname === path;

                            if (item === 'Empleos') {
                                return (
                                    <button
                                        key={item}
                                        onClick={handleEmpleosClick}
                                        className={`relative px-4 py-2 ${isActive ? 'text-white' : 'text-slate-300'} hover:text-white font-medium transition-all duration-300 rounded-lg group flex items-center cursor-pointer`}
                                    >
                                        <span className={`w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 ${isActive ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 transition-opacity`}></span>
                                        {item}
                                    </button>
                                );
                            }

                            return (
                                <Link
                                    key={item}
                                    to={path}
                                    className={`relative px-4 py-2 ${isActive ? 'text-white' : 'text-slate-300'} hover:text-white font-medium transition-all duration-300 rounded-lg group flex items-center`}
                                >
                                    <span className={`w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 ${isActive ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 transition-opacity`}></span>
                                    {item}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Botones de Acción Desktop */}
                    <div className="hidden lg:flex items-center space-x-3">
                        <Link
                            to="/login"
                            className="px-6 py-2.5 text-slate-300 hover:text-white font-semibold transition-all duration-300 border border-slate-600 rounded-full hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-0.5 flex items-center"
                        >
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>
                            Ingresar
                        </Link>
                        <div className="relative" ref={registerCardRef}>
                            <button
                                onClick={toggleRegisterCard}
                                className={`relative px-6 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/25 transform hover:-translate-y-0.5 overflow-hidden group flex items-center ${showRegisterCard ? 'ring-2 ring-amber-400/50' : ''}`}
                            >
                                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                Registrarse
                            </button>

                            {/* Tarjeta de selección de registro - Desktop */}
                            {showRegisterCard && (
                                <div className="absolute right-0 top-full mt-2 w-96 z-50 animate-fade-in-up">
                                    <div className="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl overflow-hidden">
                                        <RegisterSelectionCard onClose={() => setShowRegisterCard(false)} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Botón de Menú Mobile */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-slate-300 hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-indigo-900/30 transition-all duration-300"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Menú Mobile */}
                <div className={`lg:hidden transition-all duration-500 ease-out bg-slate-900/95 backdrop-blur-md ${isMenuOpen
                    ? 'max-h-96 opacity-100 translate-y-0'
                    : 'max-h-0 opacity-0 -translate-y-4 overflow-hidden'
                    }`}>
                    <div className="py-4 space-y-2 border-t border-slate-700">
                        {['Inicio', 'Empleos', 'Contacto', 'Nosotros'].map((item) => {
                            const path = item === 'Inicio' ? '/' : `/${item.toLowerCase()}`;
                            const isActive = location.pathname === path;

                            if (item === 'Empleos') {
                                return (
                                    <button
                                        key={item}
                                        onClick={(e) => {
                                            handleEmpleosClick(e);
                                            toggleMenu();
                                        }}
                                        className={`block px-4 py-3 ${isActive ? 'text-white' : 'text-slate-300'} hover:text-white rounded-lg transition-all duration-300 flex items-center group w-full text-left`}
                                    >
                                        <span className={`w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 ${isActive ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 transition-opacity`}></span>
                                        <div className="flex items-center justify-between flex-1">
                                            {item}
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                    </button>
                                );
                            }

                            return (
                                <Link
                                    key={item}
                                    to={path}
                                    className={`block px-4 py-3 ${isActive ? 'text-white' : 'text-slate-300'} hover:text-white rounded-lg transition-all duration-300 flex items-center group`}
                                    onClick={toggleMenu}
                                >
                                    <span className={`w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 ${isActive ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 transition-opacity`}></span>
                                    <div className="flex items-center justify-between flex-1">
                                        {item}
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </Link>
                            );
                        })}
                        <div className="pt-4 space-y-3 border-t border-slate-700">
                            <Link
                                to="/login"
                                className="w-full text-center px-4 py-2.5 text-slate-300 hover:text-white font-semibold border border-slate-600 rounded-full hover:border-blue-400 transition-all duration-300 hover:shadow-lg flex items-center justify-center"
                                onClick={toggleMenu}
                            >
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>
                                Ingresar
                            </Link>
                            <button
                                onClick={() => {
                                    setShowRegisterCard(true);
                                    setIsMenuOpen(false);
                                }}
                                className="w-full text-center px-4 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 font-semibold rounded-full hover:from-amber-400 hover:to-orange-400 transition-all duration-300 shadow-lg flex items-center justify-center"
                            >
                                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>
                                Registrarse
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal para RegisterSelectionCard en móvil */}
            {showRegisterCard && (
                <div className="lg:hidden fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade-in">
                    <div className="w-full max-w-md bg-slate-900 rounded-xl border border-slate-700 shadow-2xl overflow-hidden animate-scale-in">
                        <RegisterSelectionCard onClose={() => setShowRegisterCard(false)} />
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;