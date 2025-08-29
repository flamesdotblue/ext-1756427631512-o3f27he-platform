import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section id="contatti" className="relative overflow-hidden bg-gray-50">
      <div className="absolute inset-0 -z-0" aria-hidden>
        <div className="pointer-events-none absolute right-[-10%] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-emerald-200/60 blur-3xl" />
        <div className="pointer-events-none absolute left-[-10%] top-1/3 h-72 w-72 -translate-y-1/2 rounded-full bg-emerald-100/60 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Parla con un avvocato oggi</h2>
          <p className="mt-3 text-gray-700">Una prima valutazione è gratuita e senza impegno. Raccontaci il tuo incidente, ti diremo subito come procedere e cosa puoi ottenere.</p>
        </div>

        <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-3">
          <a href="tel:+390000000000" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white p-4 text-gray-800 shadow-sm ring-1 ring-gray-200 transition hover:shadow-md">
            <Phone className="h-5 w-5 text-emerald-600" />
            Chiama
          </a>
          <a href="mailto:info@studiolegalestradale.it" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white p-4 text-gray-800 shadow-sm ring-1 ring-gray-200 transition hover:shadow-md">
            <Mail className="h-5 w-5 text-emerald-600" />
            Email
          </a>
          <a href="https://wa.me/390000000000" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white p-4 text-gray-800 shadow-sm ring-1 ring-gray-200 transition hover:shadow-md">
            <MessageCircle className="h-5 w-5 text-emerald-600" />
            WhatsApp
          </a>
        </div>

        <form className="mx-auto mt-10 max-w-3xl rounded-2xl border bg-white p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-gray-700">Nome e cognome</label>
              <input type="text" placeholder="Mario Rossi" className="mt-1 w-full rounded-md border px-3 py-2 text-sm outline-none ring-emerald-500 focus:ring-2" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input type="email" placeholder="mario@email.it" className="mt-1 w-full rounded-md border px-3 py-2 text-sm outline-none ring-emerald-500 focus:ring-2" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-gray-700">Telefono</label>
              <input type="tel" placeholder="000 000 000" className="mt-1 w-full rounded-md border px-3 py-2 text-sm outline-none ring-emerald-500 focus:ring-2" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-gray-700">Descrivi l'incidente</label>
              <textarea rows={4} placeholder="Data, luogo, dinamica, eventuali feriti e danni..." className="mt-1 w-full rounded-md border px-3 py-2 text-sm outline-none ring-emerald-500 focus:ring-2"></textarea>
            </div>
          </div>
          <div className="mt-4 flex items-start gap-2 text-sm text-gray-600">
            <input id="privacy" type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
            <label htmlFor="privacy">Acconsento al trattamento dei dati per essere ricontattato.</label>
          </div>
          <div className="mt-6 flex items-center justify-between gap-4">
            <p className="text-xs text-gray-500">Risposta entro 24h. In urgenza chiamaci subito.</p>
            <button type="button" className="inline-flex items-center rounded-md bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-500">Invia richiesta</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactCTA;
