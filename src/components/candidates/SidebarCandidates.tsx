// components/SidebarEnterprise.tsx
import { useState, useEffect } from 'react';
import { Brain, Menu, X, LogOut, LayoutDashboard, Briefcase, Users, User } from 'lucide-react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import Logo from '../../assets/ui/Logo';

export default function SidebarCandidates() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const links = [
        { name: "Dashboard", to: "/candidates", icon: <LayoutDashboard className="w-4 h-4" /> },
        { name: "Empleos", to: "/candidates/empleos", icon: <Users className="w-4 h-4" /> },
        { name: "Postulaciones", to: "/candidates/postulaciones", icon: <Briefcase className="w-4 h-4" /> },
        { name: "Perfil", to: "/candidates/perfil", icon: <User className="w-4 h-4" /> },
    ];
    return (
        <header className={`py-4  w-full z-50 transition-all duration-500 ${isScrolled
            ? 'bg-slate-900/95 backdrop-blur-md shadow-xl'
            : 'bg-transparent '
            }`}>
            <div className="relative  px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 lg:h-20">
                    {/* Logo */}
                    <div className="flex items-center space-x-3 group">
                        <div className="relative">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/25">
                                <Brain className="w-6 h-6 text-white" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse"></div>
                        </div>
                        <Logo />

                    </div>

                    {/* Navegación Desktop */}
                    <nav className="hidden lg:flex items-center space-x-3">
                        {links.map(link => {
                            const isActive = location.pathname === link.to;
                            return (
                                <NavLink
                                    key={link.name}
                                    to={link.to}
                                    className={`relative px-4 py-2 ${isActive ? 'text-white' : 'text-slate-300'} hover:text-white font-medium transition-all duration-300 rounded-lg group flex items-center`}
                                >
                                    <span className={`w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 ${isActive ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 transition-opacity`}></span>
                                    {link.icon}
                                    <span className="ml-2">{link.name}</span>
                                </NavLink>
                            );
                        })}
                    </nav>

                    {/* Botón salir Desktop */}
                    <div className="hidden lg:flex">
                        <button
                            onClick={() => navigate('/login')}
                            className="flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm transition-all"
                        >
                            <LogOut className="w-4 h-4 mr-2" />
                            Salir
                        </button>
                    </div>

                    {/* Menú Mobile */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-slate-300 hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-indigo-900/30 transition-all duration-300"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Nav */}
                <div className={`lg:hidden transition-all duration-500 ease-out bg-slate-900/95 backdrop-blur-md rounded-b-xl mt-2 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'}`}>
                    <div className="py-4 space-y-2 border-t border-slate-700">
                        {links.map(link => {
                            const isActive = location.pathname === link.to;
                            return (
                                <NavLink
                                    key={link.name}
                                    to={link.to}
                                    onClick={toggleMenu}
                                    className={`block px-4 py-3 ${isActive ? 'text-white' : 'text-slate-300'} hover:text-white rounded-lg transition-all duration-300 flex items-center group`}
                                >
                                    <span className={`w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 ${isActive ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 transition-opacity`}></span>
                                    <div className="flex items-center justify-between flex-1">
                                        <div className="flex items-center gap-2">{link.icon} {link.name}</div>
                                    </div>
                                </NavLink>
                            );
                        })}
                        <div className="pt-4 border-t border-slate-700">
                            <button
                                onClick={() => {
                                    navigate("/");
                                    setIsMenuOpen(false);
                                }}
                                className="w-full text-center px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center"
                            >
                                <LogOut className="w-4 h-4 mr-2" />
                                Salir
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
