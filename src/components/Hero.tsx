import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[600px]">
      {/* Imagen de fondo */}
      <img
        src="C:\Users\emman\Desktop\UNA\Fundamentos progra web\Portafolio\proyecto1\src\images\que-hace-programador.jpg" // Reemplaza con tu imagen real
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Capa oscura semitransparente para mejor contraste */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Contenido superpuesto */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Emmanuel Pineda</h1>
        <p className="text-lg md:text-xl mb-6">
          Frontend Developer &amp; UI/UX Enthusiast
        </p>

        {/* Botones o links de ejemplo */}
        <div className="flex space-x-4">
          <a
            href="#contratar"
            className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded transition-colors"
          >
            Here Me
          </a>
          <a
            href="#cv"
            className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors"
          >
            Download CV
          </a>
        </div>

        {/* Sección de "contactos" o íconos de redes, si lo deseas */}
        <div className="mt-8 flex space-x-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://github.com/PinedaCR10"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/emmanuel-pineda-9058a1354/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-200 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};
