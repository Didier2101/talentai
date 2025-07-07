import {
    Brain,
    // Award,
    Target,
    Zap,
    Linkedin,
    Twitter,
    Github,
    Globe,
    Users,
    Shield,
    Mail,
    Phone,
    MapPin,
    ChevronUp,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const companyLinks = [
    { text: "Acerca de Nosotros", href: "/nosotros" },
    // { text: "Blog", href: "/blog" },
    { text: "FAQ", href: "/faq" },
];

const supportLinks = [
    // { text: "Centro de Ayuda", href: "/help" },
    { text: "Contacto", href: "/contacto" },
    // { text: "Privacidad", href: "/privacy" },
    { text: "Términos y Condiciones", href: "/terms" },
    // { text: "Seguridad", href: "/security" },
];

const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-blue-400" },
    { icon: Github, href: "#", label: "GitHub", color: "hover:bg-slate-600" },
    { icon: Globe, href: "#", label: "Sitio Web", color: "hover:bg-green-600" },
];

type ScrollToTopButtonProps = {
    show: boolean;
    onClick: () => void;
};

const ScrollToTopButton = ({ show, onClick }: ScrollToTopButtonProps) => {
    if (!show) return null;
    return (
        <button
            onClick={onClick}
            aria-label="Subir al inicio"
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group hover:-translate-y-1 z-40"
        >
            <ChevronUp className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
        </button>
    );
};

const Footer = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowScrollTop(window.scrollY > 200);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative text-white border-t border-slate-700">
            {/* Fondo con patrón */}

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Columna 1: Info principal */}
                    <section className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                                <Brain className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">TalentAI</h3>
                                <p className="text-slate-300 text-sm">Reclutamiento del Futuro</p>
                            </div>
                        </div>

                        <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-md">
                            Revolucionamos el reclutamiento con inteligencia artificial, ayudando a las empresas a encontrar el talento perfecto de manera rápida, eficiente y precisa.
                        </p>

                        <div className="flex items-center space-x-4 mb-8">
                            {/* <div className="flex items-center space-x-2 text-slate-300">
                                <Award className="w-5 h-5 text-amber-400" />
                                <span className="text-sm">Premiado 2024</span>
                            </div> */}
                            <div className="flex items-center space-x-2 text-slate-300">
                                <Target className="w-5 h-5 text-green-400" />
                                <span className="text-sm">99% Precisión</span>
                            </div>
                            <div className="flex items-center space-x-2 text-slate-300">
                                <Zap className="w-5 h-5 text-blue-400" />
                                <span className="text-sm">IA Avanzada</span>
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            {socialLinks.map(({ icon: Icon, href, label, color }) => (
                                <Link
                                    key={label}
                                    to={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className={`w-10 h-10 bg-slate-700 ${color} rounded-lg flex items-center justify-center group transition-colors`}
                                >
                                    <Icon className="w-5 h-5 text-slate-300 group-hover:text-white" />
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* Columna 2: Empresa */}
                    <section>
                        <h4 className="text-white font-semibold text-lg mb-6 flex items-center">
                            <Users className="w-5 h-5 mr-2 text-blue-400" />
                            Empresa
                        </h4>
                        <ul className="space-y-3">
                            {companyLinks.map(({ text, href }) => (
                                <li key={href}>
                                    <Link
                                        to={href}
                                        className="text-slate-300 hover:text-white flex items-center group transition-colors"
                                    >
                                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Columna 3: Soporte y contacto */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-6 flex items-center">
                            <Shield className="w-5 h-5 mr-2 text-green-400" />
                            Soporte
                        </h4>
                        <ul className="space-y-3">
                            {supportLinks.map(({ text, href }) => (
                                <li key={href}>
                                    <Link
                                        to={href}
                                        className="text-slate-300 hover:text-white flex items-center group transition-colors"
                                    >
                                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 space-y-3">
                            <div className="flex items-center text-slate-300">
                                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                                <span className="text-sm">hola@talentai.com</span>
                            </div>
                            <div className="flex items-center text-slate-300">
                                <Phone className="w-4 h-4 mr-3 text-green-400" />
                                <span className="text-sm">+57 (1) 234-5678</span>
                            </div>
                            <div className="flex items-center text-slate-300">
                                <MapPin className="w-4 h-4 mr-3 text-amber-400" />
                                <span className="text-sm">Bogotá, Colombia</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Línea inferior */}
            <div className="border-t border-slate-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-slate-400 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} TalentAI. Todos los derechos reservados.
                            <span className="hidden sm:inline"> | Hecho con ❤️ en Colombia</span>
                        </p>
                        <div className="flex items-center space-x-6 text-sm text-slate-400">
                            <span>Versión 1.0</span>
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <span>Sistema Operativo</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Botón Scroll Up */}
            <ScrollToTopButton show={showScrollTop} onClick={scrollToTop} />
        </footer>
    );
};

export default Footer;
