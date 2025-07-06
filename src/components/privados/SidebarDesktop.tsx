import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Brain,
    ChevronLeft,
} from "lucide-react";
import Logo from '../../assets/ui/Logo';
import BtnLogout from '../../assets/ui/BtnLogout';
import navItems from './navigationConfig';


interface SidebarDesktopProps {
    isSidebarCollapsed: boolean;
    toggleSidebar: () => void;
}

const SidebarDesktop: React.FC<SidebarDesktopProps> = ({ isSidebarCollapsed, toggleSidebar }) => {
    const location = useLocation();

    return (
        <aside className={`hidden md:flex fixed z-40 ${isSidebarCollapsed ? 'w-16' : 'w-72 bg-slate-800/90 backdrop-blur-md'}  text-white transition-all duration-300 h-screen`}>
            <div className="flex flex-col h-full w-full">
                {/* Logo y botón de toggle */}
                <div className={`flex ${isSidebarCollapsed ? 'justify-center' : 'justify-between'} items-center p-4`}>
                    {!isSidebarCollapsed && (
                        <div className="flex items-center space-x-3 group">
                            <div className="relative">
                                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-xl flex items-center justify-center transform transition-all duration-300 shadow-lg">
                                    <Brain className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                                </div>
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                            </div>
                            <Logo />
                        </div>
                    )}

                    <button
                        onClick={toggleSidebar}
                        className={`hidden lg:flex items-center justify-center w-8 h-8 rounded-full bg-slate-700/50 hover:bg-slate-700 transition-all ${isSidebarCollapsed ? 'rotate-180' : ''}`}
                    >
                        <ChevronLeft className="w-5 h-5 text-slate-300" />
                    </button>
                </div>

                {/* Menú de navegación */}
                <nav className="flex-1 overflow-y-auto py-4">
                    <ul className="space-y-1 px-2">
                        {navItems.map(({ path, icon: Icon, label }) => {
                            const isActive = location.pathname === path;
                            return (
                                <li key={path}>
                                    <Link
                                        to={path}
                                        className={`flex items-center ${isSidebarCollapsed ? 'justify-center' : 'px-4'} py-3 rounded-lg group transition-all ${isActive ? 'bg-blue-900/30 text-white' : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'}`}
                                    >
                                        <div className="relative">
                                            <Icon className="w-5 h-5" />
                                            {isActive && (
                                                <span className="absolute -right-1 -top-1 w-2 h-2 bg-blue-400 rounded-full"></span>
                                            )}
                                        </div>
                                        {!isSidebarCollapsed && (
                                            <span className="ml-3">{label}</span>
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Botón de Logout */}
                <div className={`p-4 border-t border-slate-700/50 ${isSidebarCollapsed ? 'text-center' : ''}`}>
                    <BtnLogout isSidebarCollapsed={isSidebarCollapsed} />
                </div>
            </div>
        </aside>
    );
};

export default SidebarDesktop;