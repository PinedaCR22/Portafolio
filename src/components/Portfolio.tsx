import React from 'react';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNestjs } from 'react-icons/si';

interface PortfolioProps {
  isLightMode: boolean;
}

export const Portfolio: React.FC<PortfolioProps> = ({ isLightMode }) => {
  return (
    <section
      id="portfolio"
      className={`py-16 transition-colors duration-500 ${
        isLightMode ? 'bg-white text-black' : 'bg-gray-900 text-white'
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Portfolio</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Card 1 - Pineda Photography */}
          <div
            data-aos="fade-up"
            className={`p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center text-center ${
              isLightMode ? 'bg-gray-200 text-black' : 'bg-gray-800 text-white'
            }`}
          >
            <h3 className="text-xl font-semibold mb-4">Landing Page: Pineda Photography</h3>
            <img
              src="/images/pineda.png"
              alt="Pineda Photography"
              className="w-full aspect-video object-cover rounded mb-4"
            />
            <div className="flex justify-center gap-4 text-3xl text-blue-500 mb-4">
              <FaHtml5 className="hover:scale-110 hover:drop-shadow-[0_0_6px_currentColor] transition duration-300" />
              <SiTailwindcss className="hover:scale-110 hover:drop-shadow-[0_0_6px_currentColor] transition duration-300" />
              <FaJs className="hover:scale-110 hover:drop-shadow-[0_0_6px_currentColor] transition duration-300" />
            </div>
            <a
              href="https://pineda-photography.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded transition"
            >
              See More
            </a>
          </div>

          {/* Card 2 - Sistema CACPJ */}
          <div
            data-aos="fade-up"
            className={`p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center text-center ${
              isLightMode ? 'bg-gray-200 text-black' : 'bg-gray-800 text-white'
            }`}
          >
            <h3 className="text-xl font-semibold mb-4">Sistema CACPJ</h3>
            <img
              src="/images/cac.png"
              alt="Sistema CACPJ"
              className="w-full aspect-video object-cover rounded mb-4"
            />
            <div className="flex justify-center gap-4 text-3xl text-blue-500 mb-4">
              <FaReact className="hover:scale-110 hover:drop-shadow-[0_0_6px_currentColor] transition duration-300" />
              <SiTypescript className="hover:scale-110 hover:drop-shadow-[0_0_6px_currentColor] transition duration-300" />
              <SiNestjs className="hover:scale-110 hover:drop-shadow-[0_0_6px_currentColor] transition duration-300" />
            </div>
            <a
              href="https://front-end-cacpj.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded transition"
            >
              See More
            </a>
          </div>

          {/* Card 3 - BMO.IA */}
          <div
            data-aos="fade-up"
            className={`p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center text-center ${
              isLightMode ? 'bg-gray-200 text-black' : 'bg-gray-800 text-white'
            }`}
          >
            <h3 className="text-xl font-semibold mb-4">BMO.IA – Intelligent Chat</h3>
            <img
              src="/images/Bmo.jpg"
              alt="BMO.IA"
              className="w-full aspect-video object-cover rounded mb-4"
            />
            <div className="flex justify-center gap-4 text-3xl text-blue-500 mb-4">
              <FaReact className="hover:scale-110 hover:drop-shadow-[0_0_6px_currentColor] transition duration-300" />
              <SiTypescript className="hover:scale-110 hover:drop-shadow-[0_0_6px_currentColor] transition duration-300" />
            </div>
            <a
              href="https://github.com/PinedaCR22/BMO.IA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded transition"
            >
              See More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
