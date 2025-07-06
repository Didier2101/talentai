import { Route, Routes } from "react-router-dom";

import LandingPage from "../components/LandingPage";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Login from "../components/publicos/auth/Login";
import Contact from "../components/publicos/Contact";
import Nosotros from "../components/publicos/Nosotros";
import FAQ from "../components/publicos/Faq";
import NotFoundPage from "../components/publicos/NotFoundPage";
import Terminos from "../components/publicos/Terminos";
import Register from "../components/publicos/auth/Register";

const Publicos = () => {
  return (
    <>
      <Header />
      <div className="pt-20 md:p-32">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<Terminos />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default Publicos;
