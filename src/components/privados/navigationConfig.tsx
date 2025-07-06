import {
    Home,
    Briefcase,
    Users,
    User,
} from "lucide-react";

export const navItems = [
    { path: '/privados/dashboard', icon: Home, label: 'Dashboard' },
    { path: '/privados/cargos', icon: Briefcase, label: 'Gestión de Cargos' },
    { path: '/privados/candidatos', icon: Users, label: 'Candidatos Evaluados' },
    { path: '/privados/perfil', icon: User, label: 'Mi Perfil' },
];

export default navItems;