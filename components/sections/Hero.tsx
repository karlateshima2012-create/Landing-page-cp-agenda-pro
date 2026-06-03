
import React from 'react';
import { Badge } from '../Badge';
import { Starfield } from '../Starfield';

export const Hero = () => (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-40 pb-20 px-4 md:px-8 lg:px-12 overflow-hidden bg-slate-950 animate-fade-in text-center">
        <Starfield />

        <div className="w-[90%] md:w-full max-w-5xl mx-auto relative z-10">


            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tighter max-w-4xl mx-auto">
                Com o CP Agenda seus clientes podem <span className="gradient-text">agendar online a qualquer hora.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-3xl mx-auto mb-12">
                Tenha uma página de agendamento profissional e acompanhe horários, serviços e atendimentos em um único lugar.
            </p>

            <div className="flex justify-center items-center">
                <a
                    href="https://wa.me/8109011886491?text=Olá! Gostaria de ver uma demonstração do CP Agenda."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative bg-brand-pink hover:bg-brand-pink/90 text-white font-black text-xs h-12 px-10 rounded-lg flex items-center justify-center gap-3 transition-all btn-glow-pink hover:scale-105 active:scale-95 uppercase tracking-wider group overflow-hidden"
                >
                    <span className="relative z-10">VER DEMONSTRAÇÃO</span>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </a>
            </div>
        </div>

        {/* Efeito de Luz Pulsante - Top Left (Exact Specs from Guide) */}
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#38b6ff] rounded-full blur-[120px] opacity-25 animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite] -z-10 pointer-events-none"></div>

        {/* Global Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950 -z-10"></div>
        <div className="absolute top-[20%] left-[5%] w-[400px] h-[400px] bg-brand-pink/5 rounded-full blur-[120px] -z-10"></div>
    </section>
);
