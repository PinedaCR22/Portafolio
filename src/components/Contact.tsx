import React, { useState } from 'react';

interface ContactProps {
  isLightMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ isLightMode }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(formData.name.trim())
        ? ''
        : 'Name must not contain numbers or symbols',
      email: formData.email.includes('@') ? '' : 'Email must include @',
      message:
        formData.message.trim().length >= 50 ? '' : 'Message must be at least 50 characters long',
    };

    setErrors(newErrors);

    const isValid = Object.values(newErrors).every((err) => err === '');

    if (isValid) {
      setShowModal(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section
      id="contact"
      className={`py-16 relative transition-colors duration-500 ${
        isLightMode ? 'bg-white text-black' : 'bg-gray-900 text-white'
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={`font-['Press_Start_2P'] text-xs w-full p-3 bg-gray-800 rounded border-2 ${
                errors.name ? 'border-red-500' : 'focus:border-blue-400'
              } focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                formData.name ? 'text-blue-400' : ''
              }`}
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className={`font-['Press_Start_2P'] text-xs w-full p-3 bg-gray-800 rounded border-2 ${
                errors.email ? 'border-red-500' : 'focus:border-blue-400'
              } focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                formData.email ? 'text-blue-400' : ''
              }`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              placeholder="Write Message Here..."
              value={formData.message}
              onChange={handleChange}
              className={`font-['Press_Start_2P'] text-xs w-full p-3 bg-gray-800 rounded h-32 resize-none border-2 ${
                errors.message ? 'border-red-500' : 'focus:border-blue-400'
              } focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                formData.message ? 'text-blue-400' : ''
              }`}
            />
            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="block mx-auto bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-500 transition-colors w-full md:w-auto"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white/90 text-black rounded-lg p-8 max-w-sm text-center shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Message sent successfully!</h3>
            <p className="mb-6">Thank you for reaching out. I'll get back to you soon. ✅</p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-500 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
