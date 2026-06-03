import React, { useState } from 'react';
import { Badge } from '../Badge';
import { Check, Zap, Crown } from 'lucide-react';


export const Pricing = () => {
    const whatsappUrl = "https://wa.me/8109011886491?text=";
    const eliteUrl = `${whatsappUrl}${encodeURIComponent("Olá! Gostaria de saber mais sobre o Plano de 12 Meses da CP Agenda Pro.")}`;
    const generalUrl = `${whatsappUrl}${encodeURIComponent("Olá! Gostaria de saber mais sobre os planos da CP Agenda Pro.")}`;

    const [isAnnual, setIsAnnual] = useState(false);
    const price = isAnnual ? 12800 : 1280;
    const planName = isAnnual ? "PLANO AGENDA ANUAL" : "PLANO AGENDA MENSAL";
    const period = isAnnual ? "/ANO" : "/MÊS";

    return (
        <section id="pricing" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-pink/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-pink/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>

            <div className="max-w-[1440px] mx-auto px-6 md:px-24 w-full">
                {/* 1. Pricing Plans Header */}
                <div className="text-center mb-12 px-4">
                    <Badge variant="outline" className="mb-6 uppercase tracking-[0.3em] font-black text-[10px] py-1 px-4 text-brand-pink border-brand-pink/50">INVESTIMENTO</Badge>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[1.1]">
                        Conheça nossos Planos
                    </h2>
                </div>

                <div className="flex justify-center mb-16 px-4">
                    <div className="w-full max-w-[480px] relative p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border-2 bg-slate-900 border-brand-pink/30 backdrop-blur-3xl flex flex-col shadow-[0_0_50px_rgba(229,21,122,0.1)] transition-all duration-500 overflow-visible">
                        
                        {/* Edge Pulsing Light */}
                        <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-[250px] h-[250px] bg-brand-pink rounded-full blur-[100px] opacity-30 animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite] -z-10 pointer-events-none"></div>

                        {/* Header Icons */}
                        <div className="absolute top-8 left-8 flex items-center gap-2 text-brand-pink/60">
                            <Zap className="w-4 h-4 fill-brand-pink/20" />
                            <span className="text-[10px] font-black uppercase tracking-widest">MÁXIMA PERFORMANCE</span>
                        </div>
                        <div className="absolute top-8 right-8 text-brand-pink/60">
                            <Crown className="w-5 h-5" />
                        </div>

                        <div className="mb-8 mt-10 text-center">
                            <h3 className="text-xl md:text-2xl font-black text-brand-pink mb-4 uppercase tracking-tighter">{planName}</h3>
                        </div>

                        {/* Toggle */}
                        <div className="mb-8 text-center flex items-center justify-center gap-3">
                            <span className={`text-sm font-bold transition-colors ${!isAnnual ? 'text-white' : 'text-slate-500'}`}>Mensal</span>
                            <button 
                                onClick={() => setIsAnnual(!isAnnual)}
                                className="relative w-14 h-7 rounded-full bg-slate-800 border border-brand-pink/30 p-1 cursor-pointer transition-colors focus:outline-none"
                            >
                                <div className={`w-5 h-5 rounded-full bg-brand-pink shadow-[0_0_10px_rgba(229,21,122,0.5)] transition-transform duration-300 ${isAnnual ? 'translate-x-7' : 'translate-x-0'}`} />
                            </button>
                            <span className={`text-sm font-bold transition-colors ${isAnnual ? 'text-brand-pink' : 'text-slate-500'}`}>Anual</span>
                        </div>

                        <div className="mb-10 text-center">
                            <div className="flex flex-col items-center justify-center gap-1">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-white text-5xl md:text-6xl font-black">
                                        ¥{price.toLocaleString()}
                                    </span>
                                    <span className="text-brand-gray/60 text-xs uppercase font-bold tracking-widest">{period}</span>
                                </div>
                            </div>
                        </div>

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
                            </ul>
                        </div>
                    </div>
                </div>


                {/* Summary Statement between cards */}
                <div className="relative text-center pt-12 pb-24 md:pt-20 md:pb-32 px-6">
                    {/* Pulsing Lights for Trial Section */}
                    <div className="absolute top-0 -left-10 w-[300px] h-[300px] bg-brand-pink rounded-full blur-[120px] opacity-25 animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite] -z-10 pointer-events-none"></div>
                    <div className="absolute bottom-0 -right-10 w-[300px] h-[300px] bg-brand-pink rounded-full blur-[120px] opacity-25 animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite] -z-10 pointer-events-none"></div>
                    
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[1.1]">
                        Teste Grátis por 30 Dias
                    </h2>
                    <div className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto mb-10 space-y-4">
                        <p>Use o sistema completo e veja como ele funciona na prática.</p>
                        <p>Clique em INICIAR TESTE GRÁTIS, escolha o melhor horário para você e nós configuramos juntos a sua agenda e sua página personalizada.</p>
                        <p>Deixamos tudo pronto para receber seus primeiros agendamentos.</p>
                        <p>Após o período de teste, o pagamento poderá ser realizado por transferência bancária, PayPay ou cartão de crédito.</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <a
                            href="https://cpagendapro.creativeprintjp.com/?p=41"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative bg-brand-pink hover:bg-brand-pink/90 text-white font-black text-xs h-12 px-10 rounded-lg inline-flex items-center justify-center gap-3 transition-all btn-glow-pink hover:scale-105 active:scale-95 uppercase tracking-wider group overflow-hidden"
                        >
                            <span className="relative z-10">INICIAR TESTE GRÁTIS</span>
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};


const SmallCheckBullet = ({ text, color = 'blue' }: { text: string, color?: 'blue' | 'yellow' }) => (
    <li className="flex items-center gap-3 text-slate-300">
        <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${color === 'yellow' ? 'bg-brand-pink text-slate-950' : 'bg-brand-pink text-slate-950'}`}>
            <Check strokeWidth={4} className="w-2.5 h-2.5" />
        </div>
        <span className="text-[13px] md:text-sm font-bold leading-tight uppercase">{text}</span>
    </li>
);

const FeatureTile = () => null; // Removed as no longer used
const StepCardMinimal = () => null; // Removed as no longer used

