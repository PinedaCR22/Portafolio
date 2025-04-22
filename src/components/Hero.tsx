import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full h-[600px] overflow-hidden">
      {/* Imagen de fondo */}
      <img
        src="/images/PORTADA.jpg"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Capa borrosa + oscura encima de la imagen */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10" />

      {/* Contenido centrado y por encima de todo */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Emmanuel Pineda</h1>
        <p className="text-lg md:text-xl mb-6">Frontend Developer &amp; UI/UX Enthusiast</p>

        {/* Botones */}
        <div className="flex space-x-4 flex-wrap justify-center">
          <button
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded transition-colors"
          >
            About Me
          </button>

          <a
            href="#cv"
            className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors"
          >
            Download CV
          </a>
        </div>

        {/* Redes sociales */}
        <div className="mt-8 flex space-x-4">
          <a
            href="https://github.com/PinedaCR22"
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
