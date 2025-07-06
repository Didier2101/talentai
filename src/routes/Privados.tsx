
import { Route, Routes } from "react-router-dom";
import DashboardEmpresa from "../components/privados/DashboardEmpresa/DashboardEmpresa";
import GestionCargos from "../components/privados/Cargos/GestionCargos";
import CrearCargoForm from "../components/privados/Cargos/CrearCargoForm";
import ListaCandidatosEvaluados from "../components/privados/Candidatos/ListaCandidatosEvaluados";
import LayoutPrivado from "../components/privados/LayoutPrivado";
import SubirCVsForm from "../components/privados/Candidatos/SubirCVsForm";
import EvaluacionCandidatos from "../components/privados/Candidatos/EvaluacionCandidatos";

const Privados = () => {
  return (
    <LayoutPrivado>
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
    </LayoutPrivado>
  );
};

export default Privados;