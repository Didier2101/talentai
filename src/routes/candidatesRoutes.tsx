import { Route, Routes } from "react-router-dom";
import DashboardCandidate from "../components/candidates/DashboardCandidate";
import OfertasTrabajo from "../components/candidates/empleos/OfertasTrabajo";
import Postulaciones from "../components/candidates/Postulaciones";

const CandidatesRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<DashboardCandidate />} />
            <Route path="/empleos" element={<OfertasTrabajo />} />
            <Route path="/postulaciones" element={<Postulaciones />} />
            <Route path="/perfil" element={<p>Perfil</p>} />
        </Routes>
    );
};

export default CandidatesRoutes;