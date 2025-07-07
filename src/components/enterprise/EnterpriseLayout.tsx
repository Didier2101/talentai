import { Outlet } from "react-router-dom";
import SidebarEnterprise from "./SidebarEnterprise";

const EnterpriseLayout = () => {
    return (
        <div className="min-h-screen text-white">
            <SidebarEnterprise />
            <main className="px-4 py-8 max-w-7xl mx-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default EnterpriseLayout;
