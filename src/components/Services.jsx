import React from 'react';
import { Car, FileText, Users, Clock, Award, CheckCircle } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, desc }) => (
  <div className="group rounded-xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
      <Icon className="h-5 w-5" />
    </div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-sm text-gray-600">{desc}</p>
  </div>
);

const Services = () => {
  return (
    <section id="servizi" className="relative border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Cosa facciamo per te</h2>
          <p className="mt-3 text-gray-700">Gestiamo l'intero iter del risarcimento per sinistri stradali, coordinando perizie e trattative con le compagnie assicurative.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard icon={Car} title="Valutazione del sinistro" desc="Analisi gratuita della dinamica e dei danni per stimare il potenziale risarcitorio." />
          <ServiceCard icon={FileText} title="Gestione pratiche" desc="Raccolta documenti, denunce e richieste danni. Ci occupiamo noi di tutto." />
          <ServiceCard icon={Users} title="Rete di specialisti" desc="Perizie medico-legali, ricostruzioni cinematiche e consulenti tecnici dedicati." />
          <ServiceCard icon={Clock} title="Tempi ridotti" desc="Procedure snelle, aggiornamenti costanti e soluzioni stragiudiziali rapide quando possibile." />
        </div>

        <div id="vantaggi" className="mt-16 grid items-start gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border bg-gradient-to-br from-emerald-600 to-emerald-500 p-8 text-white">
            <h3 className="text-2xl font-semibold">Perché scegliere il nostro studio</h3>
            <ul className="mt-5 space-y-3 text-emerald-50">
              <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-5 w-5 text-white" /> Compenso solo a risultato: nessun anticipo o sorprese.</li>
              <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-5 w-5 text-white" /> Trattativa decisa con le assicurazioni per ottenere il massimo.</li>
              <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-5 w-5 text-white" /> Assistenza medica e legale coordinate da un unico referente.</li>
              <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-5 w-5 text-white" /> Presenza su tutto il territorio con consulenze anche da remoto.</li>
            </ul>
          </div>

          <div className="rounded-2xl border bg-white p-8">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100 text-yellow-700">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Massimizzazione del risarcimento</h3>
                <p className="text-sm text-gray-600">Danni patrimoniali, biologici, morali e da fermo tecnico: valutiamo ogni voce risarcibile.</p>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border p-4">
                <div className="text-sm font-semibold">Infortuni lievi e gravi</div>
                <p className="mt-1 text-sm text-gray-600">Colpo di frusta, fratture, invalidità permanenti, morte.</p>
              </div>
              <div className="rounded-lg border p-4">
                <div className="text-sm font-semibold">Tutti i veicoli e ruoli</div>
                <p className="mt-1 text-sm text-gray-600">Conducente, passeggero, pedone, ciclista, motociclista.</p>
              </div>
              <div className="rounded-lg border p-4">
                <div className="text-sm font-semibold">Responsabile ignoto o senza RCA</div>
                <p className="mt-1 text-sm text-gray-600">Fondo di Garanzia Vittime della Strada e tutele dedicate.</p>
              </div>
              <div className="rounded-lg border p-4">
                <div className="text-sm font-semibold">Danni materiali e spese</div>
                <p className="mt-1 text-sm text-gray-600">Riparazioni, noleggi, spese mediche, perdita di reddito.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
