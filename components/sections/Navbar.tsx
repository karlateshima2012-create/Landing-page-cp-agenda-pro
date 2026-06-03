import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900/50 animate-fade-in">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <img 
                    src="/nova-logo-cp.png" 
                    alt="Creative Print Logo" 
                    className="h-10 md:h-12 w-auto object-contain flex-shrink-0" 
                />


                {/* Desktop Menu */}
                <div className="hidden lg:flex gap-10 items-center text-[11px] font-black uppercase tracking-[0.15em] text-white/70">
                    <a href="#features" className="hover:text-brand-pink transition-colors">FUNCIONALIDADES</a>
                    <a href="#pricing" className="hover:text-brand-pink transition-colors">INVESTIMENTO</a>
                    <a href="#faq" className="hover:text-brand-pink transition-colors">FAQ</a>
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

                </div>
            )}
        </nav>
    );
};
