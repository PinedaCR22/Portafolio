import React from 'react';

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Título */}
        <h2 className="text-3xl font-bold mb-8 text-center">My Portfolio</h2>

        {/* Contenedor de tarjetas */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Tarjeta 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="mb-4">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Project 1"
                className="w-full h-auto rounded"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Landing page Pineda Photography</h3>
            <p className="text-gray-400 mb-4">
              Website Development For ...
            </p>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-400 underline"
            >
              View Project
            </a>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="mb-4">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Project 2"
                className="w-full h-auto rounded"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Software CACPJ</h3>
            <p className="text-gray-400 mb-4">
              Website Development For ...
            </p>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-400 underline"
            >
              View Project
            </a>
          </div>

          {/* Tarjeta 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="mb-4">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Project 3"
                className="w-full h-auto rounded"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">BMO.IA an intelligent chat</h3>
            <p className="text-gray-400 mb-4">
              Website Development For ...
            </p>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-400 underline"
            >
              View Project
            </a>
          </div>

          {/* Agrega más tarjetas si lo requieres */}
        </div>
      </div>
    </section>
  );
};
