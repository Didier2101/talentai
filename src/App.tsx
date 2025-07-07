import { Routes, Route } from 'react-router-dom';

// Layouts
import PublicLayout from './components/publicos/PublicLayout';
// import PrivateLayout from './components/privados/PrivateLayout';

// Rutas
import PublicRoutes from './routes/PublicRoutes';
// import PrivateRoutes from './routes/PrivadosRoutes';

// Páginas individuales
import Login from './components/publicos/auth/Login';
import Register from './components/publicos/auth/Register';
import NotFoundPage from './components/comunes/NotFoundPage';
import EnterpriseLayout from './components/enterprise/EnterpriseLayout';
import EnterpriseRoutes from './routes/EnterpriseRoutes';
import CandidatesRoutes from './routes/candidatesRoutes';
import CandidatesLayout from './components/candidates/CandidatesLayout';

function App() {
  return (
    <Routes>
      {/* Rutas de autenticación sin layout */}

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Rutas públicas con layout */}
      <Route path="/*" element={<PublicLayout />}>
        <Route path="*" element={<PublicRoutes />} />
      </Route>

      {/* Rutas Privadas con Layout Privado */}
      <Route path="/enterprise/*" element={<EnterpriseLayout />}>
        <Route path="*" element={<EnterpriseRoutes />} />
      </Route>

      {/* Rutas Privadas con Layout Privado */}
      <Route path="/candidates/*" element={<CandidatesLayout />}>
        <Route path="*" element={<CandidatesRoutes />} />
      </Route>
      {/* Ruta catch-all global solo si ninguna coincide (por fuera de layouts) */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
