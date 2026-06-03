import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useGeo } from '../GeoContext';

const BR_WA_URL = `https://wa.me/8109011886491?text=${encodeURIComponent("Estou falando do Brasil quero saber mais sobre o CP Agenda")}`;
const JP_URL = "https://cpagendapro.creativeprintjp.com/?p=41";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isBrazil } = useGeo();
    const ctaUrl = isBrazil ? BR_WA_URL : JP_URL;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900/50 animate-fade-in">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
                <img
                    src="/nova-logo-cp.png"
                    alt="Creative Print Logo"
                    className="h-12 md:h-14 w-auto object-contain flex-shrink-0 relative z-10"
                />

                {/* Desktop Menu - Centered */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-10 items-center text-[11px] font-black uppercase tracking-[0.15em] text-white/70">
                    <a href="#features" className="hover:text-brand-pink transition-colors">FUNCIONALIDADES</a>
                    <a href="#pricing" className="hover:text-brand-pink transition-colors">INVESTIMENTO</a>
                    <a href="#faq" className="hover:text-brand-pink transition-colors">FAQ</a>
                </div>

                {/* Desktop CTA */}
                <div className="hidden lg:block relative z-10">
                    <a
                        href={ctaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-white/80 hover:bg-white text-slate-950 text-[10px] font-black uppercase tracking-wider px-6 h-10 rounded-lg transition-all active:scale-95 shadow-lg shadow-white/5"
                    >
                        INICIAR TESTE GRÁTIS
                    </a>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    className="lg:hidden text-white p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-20 left-0 right-0 bg-slate-950 border-b border-white/10 p-8 flex flex-col gap-6 items-center text-center animate-fade-in">
                    <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-sm font-black uppercase tracking-widest text-white/70 hover:text-brand-pink">FUNCIONALIDADES</a>
                    <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="text-sm font-black uppercase tracking-widest text-white/70 hover:text-brand-pink">INVESTIMENTO</a>
                    <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-sm font-black uppercase tracking-widest text-white/70 hover:text-brand-pink">FAQ</a>

                    <a
                        href={ctaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMenuOpen(false)}
                        className="w-full bg-white/80 text-slate-950 text-xs font-black uppercase tracking-wider h-14 rounded-xl flex items-center justify-center active:scale-95 mt-4"
                    >
                        INICIAR TESTE GRÁTIS
                    </a>
                </div>
            )}
        </nav>
    );
};
