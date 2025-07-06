import React from 'react';
import { Brain, Bell } from "lucide-react";
import Logo from '../../../assets/ui/Logo';

const MobileHeader: React.FC = () => {
    return (
        <header className="md:hidden fixed top-0 left-0 right-0 z-50 py-4 px-6  backdrop-blur-md border-b border-slate-700/50 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
                    <Brain className="w-5 h-5 text-white" />
                </div>
                <Logo />
            </div>

            {/* Botón de alertas */}
            <button className="relative w-10 h-10 flex items-center justify-center rounded-lg text-slate-300 hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-indigo-900/30 transition-all duration-300">
                <Bell className="w-6 h-6" />
                {/* Indicador de notificaciones */}
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
            </button>
        </header>
    );
};

export default MobileHeader;