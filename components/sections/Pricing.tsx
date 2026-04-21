import React, { useState } from 'react';
import { Badge } from '../Badge';
import { MessageCircle, Check, Box, ShieldCheck, Zap, ArrowRight, Settings, Smartphone, Rocket, Crown } from 'lucide-react';


export const Pricing = () => {
    const whatsappUrl = "https://wa.me/8109011886491?text=";
    const eliteUrl = `${whatsappUrl}${encodeURIComponent("Olá! Gostaria de saber mais sobre o Plano de 12 Meses da CP Agenda Pro.")}`;
    const generalUrl = `${whatsappUrl}${encodeURIComponent("Olá! Gostaria de saber mais sobre os planos da CP Agenda Pro.")}`;

    const monthlyPrice = 1280;

    return (
        <section id="pricing" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-pink/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>

            <div className="max-w-[1440px] mx-auto px-6 md:px-24 w-full">
                {/* 1. Pricing Plans Header */}
                <div className="text-center mb-12 px-4">
                    <Badge variant="outline" className="mb-6 uppercase tracking-[0.3em] font-black text-[10px] py-1 px-4 text-brand-yellow border-brand-yellow/50">INVESTIMENTO</Badge>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[1.1]">
                        Solução completa para seus agendamentos
                    </h2>
                    <p className="text-brand-gray text-base md:text-lg font-light max-w-2xl mx-auto opacity-80">
                        Sem taxa de instalação • Cobrança clara e transparente.
                    </p>
                </div>

                <div className="flex justify-center mb-16 px-4">
                    {/* PLANO 12 MESES - CARD ÚNICO PREMIUM */}
                    <div className="w-full max-w-[480px] relative p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border-2 bg-slate-900 border-brand-yellow/30 backdrop-blur-3xl flex flex-col shadow-[0_0_50px_rgba(255,242,0,0.1)] transition-all duration-500 overflow-visible">
                        
                        {/* Header Icons */}
                        <div className="absolute top-8 left-8 flex items-center gap-2 text-brand-yellow/60">
                            <Zap className="w-4 h-4 fill-brand-yellow/20" />
                            <span className="text-[10px] font-black uppercase tracking-widest">MÁXIMA PERFORMANCE</span>
                        </div>
                        <div className="absolute top-8 right-8 text-brand-yellow/60">
                            <Crown className="w-5 h-5" />
                        </div>

                        <div className="mb-12 mt-10 text-center">
                            <h3 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">PLANO AGENDA PRO</h3>
                            <p className="text-brand-gray text-sm md:text-base font-light max-w-[280px] mx-auto leading-relaxed opacity-80">
                                Seus clientes agendando 24h por dia, mesmo quando você está offline.
                            </p>
                        </div>

                        <div className="mb-10 text-center">
                            <div className="flex flex-col items-center justify-center gap-1">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-white text-5xl md:text-6xl font-black">
                                        ¥{monthlyPrice.toLocaleString()}
                                    </span>
                                    <span className="text-brand-gray/60 text-xs uppercase font-bold tracking-widest">/MÊS</span>
                                </div>
                            </div>
                        </div>

                        <a href={eliteUrl} className="relative w-full h-16 bg-brand-yellow text-slate-950 font-black rounded-2xl flex items-center justify-center gap-2 hover:bg-brand-yellow/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl text-[11px] uppercase tracking-[0.1em] group/btn overflow-hidden mb-8">
                            <span className="relative z-10">QUERO COMEÇAR MEU AGENDAMENTO</span>
                        </a>

                        {/* Feature List (No Accordion) */}
                        <div className="mt-auto pt-8 border-t border-white/10">
                            <div className="w-full flex items-center justify-between mb-6">
                                <span className="text-white font-black text-[11px] uppercase tracking-widest leading-none">PRINCIPAIS RECURSOS</span>
                            </div>
                            
                            <ul className="space-y-4 px-2">
                                <SmallCheckBullet text="Painel de Agendamento Online 24h" color="yellow" />
                                <SmallCheckBullet text="Gestão de 1 Profissional (Agenda Única)" color="yellow" />
                                <SmallCheckBullet text="Cadastro Ilimitado de Serviços" color="yellow" />
                                <SmallCheckBullet text="Notificações Automáticas de Novas Reservas" color="yellow" />
                                <SmallCheckBullet text="Bloqueio de Horários e Pausas" color="yellow" />
                                <SmallCheckBullet text="Customização Total da Página de Agendamentos" color="yellow" />
                                <SmallCheckBullet text="Confirmação via Sistema Integrado" color="yellow" />
                                <SmallCheckBullet text="Suporte Premium Incluso" color="yellow" />
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto mb-16 relative">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 p-10 rounded-4xl relative overflow-hidden">
                        <div className="flex-grow space-y-3 text-center md:text-left relative z-10">
                            <div>
                                <h4 className="font-black text-[11px] lg:text-xs uppercase tracking-[0.4em] text-brand-blue mb-6">
                                    PROFISSIONALISMO & SEGURANÇA
                                </h4>
                                <ul className="space-y-3 text-white/90">
                                    <li className="flex items-center gap-3 font-bold text-base md:text-lg">
                                        <div className="w-1.5 h-1.5 bg-brand-blue rounded-full"></div>
                                        Implementação profissional inclusa
                                    </li>
                                    <li className="flex items-center gap-3 font-bold text-base md:text-lg">
                                        <div className="w-1.5 h-1.5 bg-brand-blue rounded-full"></div>
                                        Sem taxa de instalação
                                    </li>
                                    <li className="flex items-center gap-3 font-bold text-base md:text-lg">
                                        <div className="w-1.5 h-1.5 bg-brand-blue rounded-full"></div>
                                        Suporte assistido no primeiro acesso
                                    </li>
                                    <li className="flex items-center gap-3 font-bold text-base md:text-lg">
                                        <div className="w-1.5 h-1.5 bg-brand-blue rounded-full"></div>
                                        Configuração inicial da sua agenda
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex-shrink-0 relative group z-10">
                            {/* Brilho Azul Claro atrás do ícone */}
                            <div className="absolute inset-0 bg-brand-blue/20 blur-[50px] rounded-full scale-150 -z-10 group-hover:bg-brand-blue/30 transition-all duration-700"></div>
                            <ShieldCheck className="w-20 h-20 md:w-24 md:h-24 text-brand-blue/60 relative z-10" strokeWidth={1} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Final CTA */}
            <div className="text-center pb-12 relative z-10">
                <a href={generalUrl} className="relative bg-white hover:bg-slate-100 text-slate-950 font-black text-xs h-12 px-10 rounded-lg inline-flex items-center justify-center transition-all shadow-[0_0_25px_rgba(56,182,255,0.35)] hover:scale-105 active:scale-95 uppercase tracking-wider group overflow-hidden">
                    <span className="relative z-10">Começar agora pelo WhatsApp</span>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </a>
            </div>
        </section>
    );
};

const SmallCheckBullet = ({ text, color = 'blue' }: { text: string, color?: 'blue' | 'yellow' }) => (
    <li className="flex items-center gap-3 text-slate-300">
        <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${color === 'yellow' ? 'bg-brand-yellow text-slate-950' : 'bg-brand-blue text-slate-950'}`}>
            <Check strokeWidth={4} className="w-2.5 h-2.5" />
        </div>
        <span className="text-[13px] md:text-sm font-bold leading-tight uppercase">{text}</span>
    </li>
);

const FeatureTile = () => null; // Removed as no longer used
const StepCardMinimal = () => null; // Removed as no longer used

