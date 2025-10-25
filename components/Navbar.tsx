import React from 'react';

const Navbar: React.FC = () => {
  const logoSvg = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="#8B5CF6" stroke-width="2"/>
      <path d="M12 2C8.13401 2 5 8.95431 5 12C5 15.0457 8.13401 22 12 22C15.866 22 19 15.0457 19 12C19 8.95431 15.866 2 12 2Z" fill="#6366F1" fill-opacity="0.3"/>
      <path d="M12 2V22" stroke="#6366F1" stroke-width="1.5"/>
      <path d="M2.5 12H21.5" stroke="#6366F1" stroke-width="1.5"/>
      <path d="M4.5 8H19.5" stroke="#6366F1" stroke-width="1.5" stroke-dasharray="2 2"/>
      <path d="M4.5 16H19.5" stroke="#6366F1" stroke-width="1.5" stroke-dasharray="2 2"/>
      <path d="M7 11C7.88219 9.87327 9.81434 9 12 9C14.1857 9 16.1178 9.87327 17 11" stroke="#8B5CF6" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M7.5 13.5C8.07727 12.7238 9.39053 12.25 12 12.25C14.6095 12.25 15.9227 12.7238 16.5 13.5" stroke="#8B5CF6" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );

  return (
    <nav className="bg-gradient-to-r from-indigo-700 to-purple-600 p-4 shadow-lg fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-2xl font-bold tracking-wide hover:text-indigo-100 transition-colors duration-300 flex items-center space-x-2">
          {logoSvg}
          <span>Nomad Hub</span>
        </a>
        <div className="hidden md:flex space-x-6">
          <a href="#destinations" className="text-white hover:text-indigo-200 transition-colors duration-300">Destynacje</a>
          <a href="#remote-work" className="text-white hover:text-indigo-200 transition-colors duration-300">Praca Zdalna</a>
          <a href="#nomad-projects" className="text-white hover:text-indigo-200 transition-colors duration-300">Moje Projekty</a>
          <a href="#finance" className="text-white hover:text-indigo-200 transition-colors duration-300">Finanse</a>
        </div>
        <button className="md:hidden text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;