
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

const AIChatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Cześć! Jestem Twoim Asystentem AI. Pytaj o destynacje, pracę zdalną, finanse lub cokolwiek, co pomoże Ci w życiu cyfrowego nomady!' },
  ]);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasApiKey, setHasApiKey] = useState<boolean | null>(null); // null: sprawdzanie, false: niedostępny, true: dostępny
  const chatRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeChat = async () => {
      // Zgodnie z wytycznymi: "Klucz API musi być uzyskany wyłącznie ze zmiennej środowiskowej process.env.API_KEY. Załóż, że ta zmienna jest prekonfigurowana, ważna i dostępna"
      // Jednakże, jeśli środowisko jej nie dostarcza, potrzebujemy solidnego rozwiązania awaryjnego dla interfejsu użytkownika.
      const apiKey = (typeof process !== 'undefined' && process.env && typeof process.env.API_KEY === 'string' && process.env.API_KEY.trim() !== '')
        ? process.env.API_KEY
        : undefined;

      if (!apiKey) {
        console.error("API_KEY jest niezdefiniowany lub pusty. Upewnij się, że process.env.API_KEY jest skonfigurowany w Twoim środowisku wykonawczym.");
        setHasApiKey(false); // Oznacz klucz API jako niedostępny
        setMessages((prev) => [
          { role: 'model', text: 'Przepraszam, klucz API dla asystenta AI nie został skonfigurowany. Proszę upewnić się, że zmienna środowiskowa `process.env.API_KEY` jest ustawiona i dostępna.' }
        ]);
        setIsLoading(false);
        return;
      }

      setHasApiKey(true); // Oznacz klucz API jako dostępny, kontynuuj inicjalizację

      try {
        const ai = new GoogleGenAI({ apiKey });
        chatRef.current = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: 'Jesteś pomocnym asystentem AI, specjalizującym się w tematyce cyfrowego nomadismu, pracy zdalnej, podróży i finansów dla nomadów. Używaj języka polskiego i bądź przyjazny.',
          },
        });
      } catch (error) {
        console.error("Nie udało się zainicjalizować GoogleGenAI lub czatu:", error);
        setHasApiKey(false); // Jeśli inicjalizacja zakończy się niepowodzeniem, traktuj to jako brak klucza API lub zły klucz
        setMessages((prev) => [
          { role: 'model', text: 'Przepraszam, wystąpił problem z inicjalizacją asystenta AI. Proszę sprawdzić konsolę przeglądarki pod kątem szczegółów błędu i spróbować ponownie.' }
        ]);
        setIsLoading(false);
      }
    };
    initializeChat();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !chatRef.current || !hasApiKey) return; // Sprawdź również hasApiKey

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      const responseStream = await chatRef.current.sendMessageStream({ message: userMessage });
      let fullResponse = '';
      for await (const chunk of responseStream) {
        if (chunk.text) {
          fullResponse += chunk.text;
        }
      }
      setMessages((prev) => [...prev, { role: 'model', text: fullResponse }]);
    } catch (error) {
      console.error("Błąd wysyłania wiadomości do AI:", error);
      // Jeśli wywołanie API zakończy się niepowodzeniem (np. zły klucz API, przekroczony limit, błąd sieci), wyświetl błąd przyjazny dla użytkownika
      setMessages((prev) => [...prev, { role: 'model', text: 'Ups! Coś poszło nie tak podczas komunikacji z AI. Spróbuj zadać pytanie jeszcze raz.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (hasApiKey === null) {
    // Początkowy stan ładowania podczas sprawdzania klucza API
    return (
      <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 max-w-3xl mx-auto flex flex-col h-[600px] sm:h-[700px] items-center justify-center">
        <div className="text-gray-600 text-lg">Ładowanie Asystenta AI...</div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 max-w-3xl mx-auto flex flex-col h-[600px] sm:h-[700px]">
      <div className="flex-grow overflow-y-auto mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50 scrollbar-thin scrollbar-thumb-indigo-300 scrollbar-track-indigo-50">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex mb-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            aria-live="polite"
          >
            <div
              className={`max-w-[70%] px-4 py-2 rounded-lg shadow-md ${
                msg.role === 'user'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="max-w-[70%] px-4 py-2 rounded-lg shadow-md bg-gray-200 text-gray-800 animate-pulse">
              Piszę...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="flex space-x-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={hasApiKey ? "Zapytaj coś o życie nomada..." : "Asystent AI jest niedostępny (brak klucza API)"}
          className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
          disabled={isLoading || !hasApiKey}
          aria-label="Wpisz wiadomość do asystenta AI"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading || !hasApiKey}
          aria-label="Wyślij wiadomość"
        >
          {isLoading ? 'Wysyłam...' : 'Wyślij'}
        </button>
      </form>
    </div>
  );
};

export default AIChatbot;
