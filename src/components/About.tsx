import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Imagen con efecto circular */}
        <div className="flex justify-center md:justify-start w-full md:w-1/2 mb-8 md:mb-0">
          <div className="relative">
            <div className="absolute inset-0 rounded-full border-4 border-blue-500 animate-pulse opacity-75" />
            <img
              src="https://via.placeholder.com/300x300" // Reemplaza con tu imagen
              alt="Profile"
              className="relative z-10 w-64 h-64 object-cover rounded-full border-4 border-gray-200"
            />
          </div>
        </div>

        {/* Texto descriptivo */}
        <div className="
          w-full md:w-1/2 
          md:pl-16 
          flex flex-col 
          items-center md:items-start 
          text-center md:text-left
        ">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            I am Product Designer &amp; Web Developer
          </h2>
          <ul className="text-gray-600 mb-6 space-y-2">
            <li>
              <strong>Experience:</strong> 3 years
            </li>
            <li>
              <strong>Profession:</strong> Student at National University
            </li>
            <li>
              <strong>Address:</strong> Guanacaste, Costa Rica
            </li>
            <li>
              <strong>Phone:</strong> +506-8504-2171
            </li>
            <li>
              <strong>Email:</strong> emmapr2233@gmail.com
            </li>
          </ul>
          <button className="
            bg-blue-600 text-white py-2 px-6 rounded shadow 
            hover:bg-blue-500 transition-colors
          ">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};
