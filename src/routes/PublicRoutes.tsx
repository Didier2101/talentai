import { Routes, Route } from 'react-router-dom';
import OfertasTrabajo from '../components/candidates/empleos/OfertasTrabajo';
import LandingPage from '../components/comunes/LandingPage';
import Nosotros from '../components/publicos/comunes/Nosotros';
import Contact from '../components/publicos/comunes/Contact';

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/empleos" element={<OfertasTrabajo />} />
    </Routes>
  );
};

export default PublicRoutes;