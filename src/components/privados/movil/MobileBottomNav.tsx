import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import navItems from '../navigationConfig';
import BtnLogout from '../../../assets/ui/BtnLogout';


const MobileBottomNav: React.FC = () => {
    const location = useLocation();

    return (
        <div className="md:hidden bg-slate-800/80 backdrop-blur-md  fixed bottom-0 left-0 right-0 z-50 ">
            <div className="flex justify-around items-center py-2">
                {navItems.map(({ path, icon: Icon }) => {
                    const isActive = location.pathname === path;
                    return (
                        <Link
                            key={path}
                            to={path}
                            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-300 ${isActive
                                ? 'text-blue-400'
                                : 'text-slate-400 hover:text-white'
                                }`}
                        >
                            <div className="relative">
                                <Icon className="w-6 h-6" />
                                {isActive && (
                                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full"></span>
                                )}
                            </div>

                        </Link>
                    );
                })}

                {/* Botón de logout en navegación móvil */}
                <BtnLogout isMobile={true} />
            </div>
        </div>
    );
};

export default MobileBottomNav;