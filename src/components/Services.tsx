import React, { useState } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';

// Íconos de frontend y backend
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaLanguage } from 'react-icons/fa';
import { SiTypescript, SiDotnet, SiNestjs } from 'react-icons/si';

export const Services: React.FC = () => {
  // Estados para controlar el flip de cada tarjeta
  const [flipped, setFlipped] = useState<{ [key: string]: boolean }>({});

  const toggleFlip = (key: string) => {
    setFlipped((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section id="services" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        <Flipper flipKey={JSON.stringify(flipped)} className="grid gap-8 md:grid-cols-3">
          {/* TARJETA 1: BACKEND TOOLS */}
          <Flipped flipId="backend-tools">
            <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center">
              {flipped['backend-tools'] ? (
                <>
                  <h3 className="text-xl font-semibold mb-4 text-center">More About Backend</h3>
                  <p className="text-gray-400 text-center mb-4">
                    Skilled in creating RESTful APIs, microservices, and real-time applications using .NET and Nest.js.
                  </p>
                </>
              ) : (
                <>
                  <div className="flex justify-center gap-4 mb-4 text-4xl text-blue-500">
                    <SiDotnet />
                    <SiNestjs />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">Backend Tools</h3>
                  <p className="text-gray-400 text-center mb-4">
                    Developing server-side applications with robust APIs.
                  </p>
                </>
              )}
              <button
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
                onClick={() => toggleFlip('backend-tools')}
              >
                {flipped['backend-tools'] ? 'Back' : 'See More'}
              </button>
            </div>
          </Flipped>

          {/* TARJETA 2: WEB DEVELOPER */}
          <Flipped flipId="web-developer">
            <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center">
              {flipped['web-developer'] ? (
                <>
                  <h3 className="text-xl font-semibold mb-4 text-center">More About Web Dev</h3>
                  <p className="text-gray-400 text-center mb-4">
                    Experienced in creating SEO-friendly, responsive, and high-performance websites using the latest frameworks and libraries.
                  </p>
                </>
              ) : (
                <>
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
                </>
              )}
              <button
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
                onClick={() => toggleFlip('web-developer')}
              >
                {flipped['web-developer'] ? 'Back' : 'See More'}
              </button>
            </div>
          </Flipped>

          {/* TARJETA 3: LANGUAGES */}
          <Flipped flipId="languages">
            <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center">
              {flipped['languages'] ? (
                <>
                  <h3 className="text-xl font-semibold mb-4 text-center">More About My Language Skills</h3>
                  <p className="text-gray-400 text-center mb-4">
                    Experienced in communicating with international teams and clients. B2 level certified, aiming to reach C1 in the near future.
                  </p>
                </>
              ) : (
                <>
                  <div className="flex justify-center mb-4 text-6xl text-blue-500">
                    <FaLanguage />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">Languages</h3>
                  <p className="text-gray-400 text-center mb-4">
                    I have a B2 level in English and keep improving.
                  </p>
                </>
              )}
              <button
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
                onClick={() => toggleFlip('languages')}
              >
                {flipped['languages'] ? 'Back' : 'See More'}
              </button>
            </div>
          </Flipped>
        </Flipper>
      </div>
    </section>
  );
};
