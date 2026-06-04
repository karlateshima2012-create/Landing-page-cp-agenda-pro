import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Starfield } from '../Starfield';
import { useGeo } from '../GeoContext';

const BR_WA_URL = `https://wa.me/8109011886491?text=${encodeURIComponent("Estou falando do Brasil quero saber mais sobre o CP Agenda")}`;
const JP_URL = "https://cpagendapro.creativeprintjp.com/?p=41";

export const FinalCTA = () => {
    const { isBrazil } = useGeo();
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const ctaUrl = isBrazil ? BR_WA_URL : JP_URL;

    return (
        <section className="relative min-h-[60vh] flex flex-col items-center justify-center pt-20 pb-24 md:pt-24 md:pb-32 px-4 md:px-8 lg:px-12 overflow-hidden bg-[#020408] animate-fade-in text-center">

            <Starfield />

            <div className="w-[90%] md:w-full max-w-5xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tighter max-w-4xl mx-auto">
                    Experimente o CP Agenda <br /><span className="gradient-text">sem compromisso</span>
                </h2>

                <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto mb-12">
                    Conheça o sistema na prática, receba ajuda na configuração e teste gratuitamente por 30 dias.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <a
                        href={ctaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-[260px] relative bg-brand-pink hover:bg-brand-pink/90 text-white font-black text-xs h-12 px-6 rounded-lg flex items-center justify-center gap-3 transition-all btn-glow-pink hover:scale-105 active:scale-95 uppercase tracking-wider group overflow-hidden"
                    >
                        <span className="relative z-10">INICIAR TESTE GRÁTIS</span>
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </a>

                    <button
                        onClick={() => setIsVideoOpen(true)}
                        className="w-full sm:w-[260px] relative bg-white hover:bg-gray-200 text-slate-900 font-black text-xs h-12 px-6 rounded-lg flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 uppercase tracking-wider group overflow-hidden shadow-lg"
                    >
                        <span className="relative z-10">VER DEMONSTRAÇÃO</span>
                    </button>
                </div>
            </div>

            {/* Global Atmosphere (Total dark with subtle transition) */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#020408] to-transparent -z-10"></div>

            {/* Video Modal */}
            {isVideoOpen && typeof document !== 'undefined' && createPortal(
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={() => setIsVideoOpen(false)}>
                    <div className="relative w-full max-w-sm md:max-w-md aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20 animate-fade-in" onClick={e => e.stopPropagation()}>
                        <button 
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all backdrop-blur-md"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                        <iframe 
                            src="https://www.youtube.com/embed/JuYQ73RbXv4?autoplay=1" 
                            title="Demonstração CP Agenda" 
                            className="absolute inset-0 w-full h-full border-0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>,
                document.body
            )}
        </section>
    );
};
