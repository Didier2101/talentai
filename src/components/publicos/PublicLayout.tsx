// 2. components/comunes/layouts/PublicLayout.tsx
import { Outlet } from 'react-router-dom';
import Header from '../comunes/Header';
import Footer from '../comunes/Footer';


const PublicLayout = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default PublicLayout;
