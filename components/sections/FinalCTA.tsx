import React from 'react';
import { Starfield } from '../Starfield';

export const FinalCTA = () => (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center pt-40 pb-40 px-4 md:px-8 lg:px-12 overflow-hidden bg-[#020408] animate-fade-in text-center">
        <Starfield />

        <div className="w-[90%] md:w-full max-w-5xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tighter max-w-4xl mx-auto">
                Experimente o CP Agenda <br /><span className="gradient-text">sem compromisso</span>
            </h2>

            <p className="text-lg md:text-xl text-brand-gray font-light leading-relaxed max-w-3xl mx-auto mb-12">
                Conheça o sistema na prática, receba ajuda na configuração e teste gratuitamente por 30 dias.
            </p>

            <div className="flex justify-center items-center">
                <a
                    href="https://cpagendapro.creativeprintjp.com/?p=41"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative bg-brand-pink hover:bg-brand-pink/90 text-white font-black text-xs h-12 px-10 rounded-lg flex items-center justify-center gap-3 transition-all btn-glow-pink hover:scale-105 active:scale-95 uppercase tracking-wider group overflow-hidden"
                >
                    <span className="relative z-10">INICIAR TESTE GRÁTIS</span>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </a>
            </div>
        </div>

        {/* Global Atmosphere (Total dark with subtle transition) */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#020408] to-transparent -z-10"></div>
    </section>
);
