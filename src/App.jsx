import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ContactCTA from './components/ContactCTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <ContactCTA />
      </main>
      <footer className="border-t bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex flex-col gap-4 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Studio Legale Stradale. Tutti i diritti riservati.</p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#servizi" className="hover:text-gray-900 transition-colors">Servizi</a>
              <a href="#vantaggi" className="hover:text-gray-900 transition-colors">Perché noi</a>
              <a href="#contatti" className="hover:text-gray-900 transition-colors">Contatti</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
