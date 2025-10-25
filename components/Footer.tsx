
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-semibold">Nomad Hub</p>
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Nomad Hub. Wszelkie prawa zastrzeżone.</p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Polityka prywatności</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Kontakt</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;