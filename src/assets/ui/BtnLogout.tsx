import { LogOut } from 'lucide-react';

const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/login';
};

interface BtnLogoutProps {
    isSidebarCollapsed?: boolean;
    isMobile?: boolean;
}

export default function BtnLogout({ isSidebarCollapsed = false, isMobile = false }: BtnLogoutProps) {
    if (isMobile) {
        return (
            <button
                onClick={handleLogout}
                className="flex flex-col items-center py-2 px-3 rounded-lg text-red-400 hover:text-red-300 transition-all duration-300"
            >
                <LogOut className="w-6 h-6" />
                {/* <span className="text-xs mt-1 font-medium">Salir</span> */}
            </button>
        );
    }

    return (
        <button
            onClick={handleLogout}
            className={`flex items-center ${isSidebarCollapsed ? 'justify-center' : 'px-4'} py-3 w-full rounded-lg text-slate-300 hover:bg-red-900/30 hover:text-white transition-all group`}
        >
            <LogOut className="w-5 h-5" />
            {!isSidebarCollapsed && (
                <span className="ml-3">Cerrar Sesión</span>
            )}
        </button>
    );
}