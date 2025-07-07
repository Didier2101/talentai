
import { Route, Routes } from "react-router-dom";
import DashboardEmpresa from "../components/enterprise/DashboardEmpresa/DashboardEmpresa";
import GestionCargos from "../components/enterprise/Cargos/GestionCargos";
import CrearCargoForm from "../components/enterprise/Cargos/CrearCargoForm";
import ListaCandidatosEvaluados from "../components/enterprise/Candidatos/ListaCandidatosEvaluados";
import SubirCVsForm from "../components/enterprise/Candidatos/SubirCVsForm";
import EvaluacionCandidatos from "../components/enterprise/Candidatos/EvaluacionCandidatos";


const EnterpriseRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardEmpresa />} />
      <Route path="/cargos" element={<GestionCargos />} />
      <Route path="/cargos/crear" element={<CrearCargoForm />} />
      <Route path="/cargos/editar/:id" element={<CrearCargoForm />} />
      <Route path="/cargos/:cargoId/subir-cv" element={<SubirCVsForm />} />
      <Route path="/candidatos" element={<ListaCandidatosEvaluados />} />
      <Route path="/candidatos/:id" element={<EvaluacionCandidatos />} />
      <Route path="/*" element={<DashboardEmpresa />} />
    </Routes>
  );
};

export default EnterpriseRoutes;