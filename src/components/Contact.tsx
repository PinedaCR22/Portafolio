import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>

        <form className="max-w-xl mx-auto space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <textarea
            placeholder="Write Message Here..."
            className="w-full p-3 bg-gray-800 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <button
            type="submit"
            className="block mx-auto bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-500 transition-colors w-full md:w-auto"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
