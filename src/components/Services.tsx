import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

// Íconos de frontend y backend
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaLanguage } from 'react-icons/fa';
import { SiTypescript, SiDotnet, SiNestjs } from 'react-icons/si';

export const Services: React.FC = () => {
  // Estados para controlar el flip de cada tarjeta
  const [isFlipped1, setIsFlipped1] = useState(false); // Backend Tools
  const [isFlipped2, setIsFlipped2] = useState(false); // Web Developer
  const [isFlipped3, setIsFlipped3] = useState(false); // Languages

  return (
    <section id="services" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Título */}
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>

        {/* Contenedor de tarjetas (3 columnas en pantallas md en adelante) */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* ========== TARJETA 1: BACKEND TOOLS ========== */}
          <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal">
            {/* CARA FRONTAL */}
            <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center">
              {/* Íconos de .NET y Nest.js */}
              <div className="flex justify-center gap-4 mb-4 text-4xl text-blue-500">
                <SiDotnet />
                <SiNestjs />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Backend Tools</h3>
              <p className="text-gray-400 text-center mb-4">
                Developing server-side applications with robust APIs.
              </p>
              <button
                onClick={() => setIsFlipped1(!isFlipped1)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors"
              >
                View More
              </button>
            </div>

            {/* CARA TRASERA */}
            <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4 text-center">More About Backend</h3>
              <p className="text-gray-400 text-center mb-4">
                Skilled in creating RESTful APIs, microservices, and real-time 
                applications using .NET and Nest.js.
              </p>
              <button
                onClick={() => setIsFlipped1(!isFlipped1)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors"
              >
                Go Back
              </button>
            </div>
          </ReactCardFlip>

          {/* ========== TARJETA 2: WEB DEVELOPER (EN MEDIO) ========== */}
          <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal">
            {/* CARA FRONTAL */}
            <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center">
              {/* Íconos de HTML, CSS, JS, TS, React */}
              <div className="flex flex-wrap justify-center gap-4 mb-4 text-4xl text-blue-500">
                <FaHtml5 />
                <FaCss3Alt />
                <FaJs />
                <SiTypescript />
                <FaReact />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Web Developer</h3>
              <p className="text-gray-400 text-center mb-4">
                Building responsive and dynamic websites using modern technologies.
              </p>
              <button
                onClick={() => setIsFlipped2(!isFlipped2)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors"
              >
                View More
              </button>
            </div>

            {/* CARA TRASERA */}
            <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4 text-center">More About Web Dev</h3>
              <p className="text-gray-400 text-center mb-4">
                Experienced in creating SEO-friendly, responsive, and 
                high-performance websites using the latest frameworks and libraries.
              </p>
              <button
                onClick={() => setIsFlipped2(!isFlipped2)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors"
              >
                Go Back
              </button>
            </div>
          </ReactCardFlip>

          {/* ========== TARJETA 3: LANGUAGES ========== */}
          <ReactCardFlip isFlipped={isFlipped3} flipDirection="horizontal">
            {/* CARA FRONTAL */}
            <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center">
              {/* Ícono de idioma */}
              <div className="flex justify-center mb-4 text-6xl text-blue-500">
                <FaLanguage />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Languages</h3>
              <p className="text-gray-400 text-center mb-4">
                I have a B2 level in English and keep improving.
              </p>
              <button
                onClick={() => setIsFlipped3(!isFlipped3)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors"
              >
                View More
              </button>
            </div>

            {/* CARA TRASERA */}
            <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4 text-center">More About My Language Skills</h3>
              <p className="text-gray-400 text-center mb-4">
                Experienced in communicating with international teams and clients. 
                B2 level certified, aiming to reach C1 in the near future.
              </p>
              <button
                onClick={() => setIsFlipped3(!isFlipped3)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors"
              >
                Go Back
              </button>
            </div>
          </ReactCardFlip>
        </div>
      </div>
    </section>
  );
};
