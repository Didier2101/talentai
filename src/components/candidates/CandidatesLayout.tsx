import { Outlet } from "react-router-dom";
import SidebarCandidates from "./SidebarCandidates";

const CandidatesLayout = () => {
    return (
        <div className="min-h-screen text-white">
            <SidebarCandidates />
            <main className="px-4 py-8 max-w-7xl mx-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default CandidatesLayout;
