import { useState, useEffect } from 'react';
import {
    Brain,
    Menu,
    X,
    ArrowRight,
    Sparkles,
} from "lucide-react";
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/ui/Logo';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className={`py-4 fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
            ? 'bg-slate-900/95 backdrop-blur-md shadow-xl '
            : 'bg-transparent'
            }`}>

            {/* Fondo con patrón de puntos */}
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

                    {/* Navegación Desktop con puntos */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {['Inicio', 'Contacto', 'Nosotros'].map((item) => {
                            const path = item === 'Inicio' ? '/' : `/${item.toLowerCase()}`;
                            const isActive = location.pathname === path;

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
                        <Link
                            to="/register"
                            className="relative px-6 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 font-semibold rounded-full hover:from-amber-400 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/25 transform hover:-translate-y-0.5 overflow-hidden group flex items-center"
                        >
                            <span className="relative z-10 flex items-center space-x-2">
                                <span className="w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                <span>Comenzar Gratis</span>
                                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-400/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                        </Link>
                    </div>

                    {/* Botón de Menú Mobile */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-slate-300 hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-indigo-900/30 transition-all duration-300"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Menú Mobile con puntos */}
                <div className={`lg:hidden transition-all duration-500 ease-out bg-slate-900/95 backdrop-blur-md ${isMenuOpen
                    ? 'max-h-96 opacity-100 translate-y-0'
                    : 'max-h-0 opacity-0 -translate-y-4 overflow-hidden'
                    }`}>
                    <div className="py-4 space-y-2 bg border-t border-slate-700">
                        {['Inicio', 'Contacto', 'Nosotros'].map((item, index) => {
                            const path = item === 'Inicio' ? '/' : `/${item.toLowerCase()}`;
                            const isActive = location.pathname === path;

                            return (
                                <Link
                                    key={item}
                                    to={path}
                                    className={`block px-4 py-3 ${isActive ? 'text-white' : 'text-slate-300'} hover:text-white rounded-lg transition-all duration-300 flex items-center group`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                    onClick={toggleMenu} // Cerrar menú al hacer clic
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
                                className="block w-full text-center px-4 py-2.5 text-slate-300 hover:text-white font-semibold border border-slate-600 rounded-full hover:border-blue-400 transition-all duration-300 hover:shadow-lg flex items-center justify-center"
                                onClick={toggleMenu}
                            >
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>
                                Ingresar
                            </Link>
                            <Link
                                to="/register"
                                className="block w-full text-center px-4 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 font-semibold rounded-full hover:from-amber-400 hover:to-orange-400 transition-all duration-300 shadow-lg flex items-center justify-center"
                                onClick={toggleMenu}
                            >
                                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>
                                Comenzar Gratis
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;