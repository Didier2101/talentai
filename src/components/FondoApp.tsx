// components/FondoApp.tsx
const FondoApp = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="fixed min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-800 relative">
            {/* Fondo con patrón de puntos */}
            <div
                className="fixed inset-0 pointer-events-none"
                style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
                }}
            />
            {/* Contenido */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default FondoApp;