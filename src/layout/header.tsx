import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para desplazarse a cada sección con scroll suave
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      // Cerrar el menú en móvil al hacer clic
      setIsOpen(false);
    }
  };

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo o nombre */}
        <div className="text-2xl font-bold text-gray-800">
          DeveloperX
        </div>

        {/* Menú en pantallas medianas/grandes */}
        <ul className="hidden md:flex items-center space-x-6 text-gray-600">
          <li>
            <button onClick={() => handleScroll('home')} className="hover:text-blue-500 transition-colors">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll('about')} className="hover:text-blue-500 transition-colors">
              About
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll('services')} className="hover:text-blue-500 transition-colors">
              Services
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll('portfolio')} className="hover:text-blue-500 transition-colors">
              Portfolio
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll('contact')} className="hover:text-blue-500 transition-colors">
              Contact
            </button>
          </li>
        </ul>

        {/* Botón "hamburguesa" en pantallas pequeñas */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 hover:text-blue-500 transition-colors"
          >
            {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Menú desplegable en móvil */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-start space-y-2 py-4 px-4 text-gray-600">
            <li>
              <button onClick={() => handleScroll('home')} className="block w-full text-left hover:text-blue-500 transition-colors">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll('about')} className="block w-full text-left hover:text-blue-500 transition-colors">
                About
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll('services')} className="block w-full text-left hover:text-blue-500 transition-colors">
                Services
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll('portfolio')} className="block w-full text-left hover:text-blue-500 transition-colors">
                Portfolio
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll('contact')} className="block w-full text-left hover:text-blue-500 transition-colors">
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
