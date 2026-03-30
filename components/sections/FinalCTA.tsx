import React from 'react';
import { Starfield } from '../Starfield';

export const FinalCTA = () => (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center pt-40 pb-40 px-4 md:px-8 lg:px-12 overflow-hidden bg-slate-950 animate-fade-in text-center">
        <Starfield />

        <div className="w-[90%] md:w-full max-w-5xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tighter max-w-4xl mx-auto">
                Chega de perder tempo com mensagens <br /><span className="bg-gradient-to-r from-brand-blue to-brand-pink bg-clip-text text-transparent">indo e voltando pra marcar horário.</span>
            </h2>

            <p className="text-lg md:text-xl text-brand-gray font-light leading-relaxed max-w-3xl mx-auto mb-12">
                Automatize seus agendamentos e foque no que <span className="text-white font-bold">realmente faz sua empresa crescer.</span>
            </p>

            <div className="flex justify-center items-center">
                <a
                    href="https://wa.me/8109011886491?text=Olá! Gostaria de ativar minha agenda com o CP Agenda Pro."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative bg-white hover:bg-slate-100 text-slate-950 font-black text-xs h-12 px-10 rounded-lg flex items-center justify-center gap-3 transition-all shadow-[0_0_25px_rgba(56,182,255,0.35)] hover:scale-105 active:scale-95 uppercase tracking-wider group overflow-hidden"
                >
                    <span className="relative z-10">ATIVAR AGENDA</span>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </a>
            </div>
        </div>

        {/* Global Atmosphere (Total dark with subtle transition) */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950 -z-10"></div>
    </section>
);
