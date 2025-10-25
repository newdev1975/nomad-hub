import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center text-center px-4"
      style={{ backgroundImage: `url('https://picsum.photos/seed/nomadhero/1920/1080?blur=5')`, paddingTop: '64px' }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-white p-6 md:p-10 rounded-lg max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-4 drop-shadow-lg animate-fade-in-down">
          Odkryj Świat, Pracuj Zdalnie, Żyj Pełnią!
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-light mb-8 drop-shadow-md animate-fade-in-up">
          Łącz podróże z karierą. Znajdź idealne miejsca do pracy i życia, a także inspiracje finansowe dla cyfrowych nomadów.
        </p>
        <a
          href="#destinations"
          className="inline-block bg-indigo-600 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Rozpocznij Przygodę
        </a>
      </div>
    </div>
  );
};

export default HeroSection;