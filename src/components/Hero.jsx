import React from 'react';
import { Car, CheckCircle, Shield, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
      <div className="absolute inset-0 -z-0 opacity-60" aria-hidden>
        <div className="pointer-events-none absolute left-1/2 top-[-10%] h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-200 blur-3xl"></div>
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
            <Car className="h-4 w-4" />
            Specialisti in sinistri stradali
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Ottieni il massimo risarcimento, senza anticipi.
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Ti assistiamo in ogni fase: dalla denuncia al saldo del risarcimento. Nessun costo iniziale, compenso solo a risultato.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contatti" className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-500">
              Valuta gratuitamente il tuo caso
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#servizi" className="inline-flex items-center justify-center rounded-md border px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50">
              Scopri come lavoriamo
            </a>
          </div>

          <ul className="mt-6 grid gap-2 text-sm text-gray-700 sm:grid-cols-2">
            <li className="inline-flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-600" />
              Nessun anticipo – paghi solo a risarcimento
            </li>
            <li className="inline-flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-600" />
              Gestione completa pratiche assicurative
            </li>
            <li className="inline-flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-600" />
              Perizie medico-legali di fiducia
            </li>
            <li className="inline-flex items-center gap-2">
              <Shield className="h-4 w-4 text-emerald-600" />
              Tutela dei tuoi diritti in sede giudiziale
            </li>
          </ul>
        </div>

        <div className="relative">
          <div className="rounded-2xl border bg-white p-6 shadow-xl">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-400">
              <div className="flex h-full w-full items-center justify-center">
                <Car className="h-24 w-24 text-white/90" />
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Infortuni con auto, moto, bici e pedoni • Sinistri con veicolo non assicurato • Rivalsa del datore di lavoro • Danni a cose e persona
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
