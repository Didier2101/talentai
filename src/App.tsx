import { Navigate, Route, Routes } from "react-router-dom"
import Publicos from "./routes/Publicos"
import Privados from "./routes/Privados"



function App() {

  return (
    <>
      {/* Aquí puedes agregar un componente de encabezado si lo necesitas */}

      {/* Definición de las rutas de la aplicación */}
      <Routes>
        {/* Ruta raíz "/" redirige a la vista pública principal */}
        <Route path="/*" element={<Publicos />} />

        {/* Rutas privadas accesibles solo si el usuario está autenticado */}
        <Route path="/privados/*" element={<Privados />} />

        {/* Ruta por defecto si no coincide ninguna (fallback) */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {/* Aquí puedes agregar un componente de pie de página si lo necesitas */}
    </>
  )
}

export default App
