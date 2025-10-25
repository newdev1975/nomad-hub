import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ContentCard from './components/ContentCard';
import GoogleAdsense from './components/GoogleAdsense';
import Footer from './components/Footer';
import { NOMAD_DESTINATIONS, REMOTE_WORK_OPPORTUNITIES, OUR_PRODUCTS_AND_RESOURCES } from './constants';
import { ContentItem } from './types';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />

        <section id="destinations" className="container mx-auto px-4 py-12">
          <h2 className="text-4xl font-extrabold text-center text-indigo-800 mb-6 sm:text-5xl lg:text-6xl leading-tight">
            Top Destynacje dla Cyfrowych Nomadów
          </h2>
          <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Oto wybrane miejsca, które łączą inspirujące widoki z doskonałymi warunkami do pracy zdalnej.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {NOMAD_DESTINATIONS.map((place: ContentItem, index: number) => (
              <ContentCard key={index} {...place} />
            ))}
          </div>
        </section>

        {/* Google AdSense Placeholder 1 */}
        {/* Replace with your actual AdSense slot ID and client ID */}
        <GoogleAdsense
          client="ca-pub-YOUR_ADSENSE_CLIENT_ID"
          slot="YOUR_ADS_SLOT_ID_1"
          className="my-16"
        />

        <section id="remote-work" className="container mx-auto px-4 py-12 bg-gray-100 rounded-lg shadow-inner">
          <h2 className="text-4xl font-extrabold text-center text-purple-800 mb-6 sm:text-5xl lg:text-6xl leading-tight">
            Praca Zdalna i Możliwości Zarabiania
          </h2>
          <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Odkryj platformy i narzędzia, które pomogą Ci zarabiać z dowolnego miejsca na świecie.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {REMOTE_WORK_OPPORTUNITIES.map((item: ContentItem, index: number) => (
              <ContentCard key={index} {...item} />
            ))}
          </div>
        </section>

        {/* Google AdSense Placeholder 2 */}
        {/* Replace with your actual AdSense slot ID and client ID */}
        <GoogleAdsense
          client="ca-pub-YOUR_ADSENSE_CLIENT_ID"
          slot="YOUR_ADS_SLOT_ID_2"
          className="my-16"
        />

        <section id="nomad-projects" className="container mx-auto px-4 py-12 bg-indigo-100 rounded-lg shadow-inner">
          <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-6 sm:text-5xl lg:text-6xl leading-tight">
            Projekty i Zasoby Nomadów
          </h2>
          <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Inspiruj się! Odkryj innowacyjne narzędzia i projekty stworzone przez cyfrowych nomadów, w tym moje własne.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {OUR_PRODUCTS_AND_RESOURCES.map((item: ContentItem, index: number) => (
              <ContentCard key={index} {...item} />
            ))}
          </div>
        </section>

        {/* Google AdSense Placeholder 3 */}
        <GoogleAdsense
          client="ca-pub-YOUR_ADSENSE_CLIENT_ID"
          slot="YOUR_ADS_SLOT_ID_3"
          className="my-16"
        />

        <section id="finance" className="container mx-auto px-4 py-12 bg-indigo-50 rounded-lg shadow-inner">
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8 sm:text-4xl">
            Finansowe Wskazówki dla Cyfrowych Nomadów
          </h2>
          <p className="text-center text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            Planujesz życie w drodze? Zadbaj o swoje finanse! Sprawdź oferty, które pomogą Ci zarządzać pieniędzmi globalnie.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Konta Wielowalutowe (Wise / Revolut)</h3>
              <p className="text-gray-700 mb-4">
                Zarządzaj swoimi finansami w różnych walutach bez wysokich opłat. Idealne dla cyfrowych nomadów i przelewów międzynarodowych.
              </p>
              <a
                href="https://example.com/wise-revolut-affiliate-link" // Placeholder for Wise/Revolut affiliate link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300"
              >
                Sprawdź Oferty
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ubezpieczenia Podróżne (SafetyWing / World Nomads)</h3>
              <p className="text-gray-700 mb-4">
                Nie ryzykuj! Znajdź najlepsze ubezpieczenie, które ochroni Cię w każdej podróży i podczas pracy zdalnej.
              </p>
              <a
                href="https://example.com/safetywing-worldnomads-affiliate-link" // Placeholder for SafetyWing/World Nomads affiliate link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300"
              >
                Znajdź Ubezpieczenie
              </a>
            </div>
          </div>
        </section>

        {/* Google AdSense Placeholder 4 (optional) */}
        <GoogleAdsense
          client="ca-pub-YOUR_ADSENSE_CLIENT_ID"
          slot="YOUR_ADS_SLOT_ID_4"
          className="my-16"
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;