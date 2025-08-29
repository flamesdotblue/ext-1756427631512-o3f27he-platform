import React from 'react';
import { Scale, Phone, Menu } from 'lucide-react';

const Header = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-emerald-600 text-white">
            <Scale className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="font-semibold">Studio Legale Stradale</div>
            <div className="text-xs text-gray-500">Risarcimento sinistri</div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <a href="#servizi" className="text-gray-700 transition-colors hover:text-gray-900">Servizi</a>
          <a href="#vantaggi" className="text-gray-700 transition-colors hover:text-gray-900">Perché noi</a>
          <a href="#contatti" className="text-gray-700 transition-colors hover:text-gray-900">Contatti</a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="tel:+390000000000" className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
            <Phone className="h-4 w-4" />
            0 000 000 000
          </a>
          <a href="#contatti" className="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-500">Valuta il tuo sinistro</a>
        </div>

        <button aria-label="Apri menu" className="inline-flex items-center rounded-md border p-2 md:hidden" onClick={() => setOpen(!open)}>
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="border-t bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm">
            <a onClick={() => setOpen(false)} href="#servizi" className="text-gray-700">Servizi</a>
            <a onClick={() => setOpen(false)} href="#vantaggi" className="text-gray-700">Perché noi</a>
            <a onClick={() => setOpen(false)} href="#contatti" className="text-gray-700">Contatti</a>
            <a onClick={() => setOpen(false)} href="tel:+390000000000" className="inline-flex items-center gap-2 rounded-md border px-3 py-2">
              <Phone className="h-4 w-4" />
              Chiama ora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
