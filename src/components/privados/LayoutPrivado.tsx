import React, { useState } from 'react';
import SidebarDesktop from './SidebarDesktop';
import MobileHeader from './movil/MobileHeader';
import MobileBottomNav from './movil/MobileBottomNav';


interface LayoutPrivadoProps {
    children: React.ReactNode;
}

const LayoutPrivado: React.FC<LayoutPrivadoProps> = ({ children }) => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

    const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar Desktop */}
            <SidebarDesktop
                isSidebarCollapsed={isSidebarCollapsed}
                toggleSidebar={toggleSidebar}
            />

            {/* Header Móvil */}
            <MobileHeader />

            {/* Contenido principal */}
            <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarCollapsed ? 'md:ml-20' : 'md:ml-96'}`}>
                {/* Contenido con scroll */}
                <main className="flex-1 overflow-y-auto pt-20 md:pt-0 pb-20 md:pb-0">
                    <div className="py-6 min-h-full">
                        {children}
                    </div>
                </main>
            </div>

            {/* Navegación móvil inferior */}
            <MobileBottomNav />
        </div>
    );
};

export default LayoutPrivado;