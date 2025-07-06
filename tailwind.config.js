// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Asegúrate de que estas rutas sean correctas para tu proyecto Vite
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tus colores de marca personalizados
        'primary': '#005B96',       // Azul Zafiro Profundo
        'secondary': '#6497B1',      // Azul Cielo
        'accent': '#FFC107',        // Amarillo Ámbar
        'neutral-bg': '#F8F8F8',    // Gris Claro/Blanco Roto para fondos
      },
    },
  },
  plugins: [],
}