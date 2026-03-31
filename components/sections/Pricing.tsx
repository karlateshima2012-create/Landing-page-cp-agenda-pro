import React, { useState } from 'react';
import { Badge } from '../Badge';
import { MessageCircle, Check, Box, ShieldCheck, Zap, ArrowRight, Settings, Smartphone, Rocket, Crown } from 'lucide-react';

export const Pricing = () => {
    const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
    const whatsappUrl = "https://wa.me/8109011886491?text=";
    const eliteUrl = `${whatsappUrl}${encodeURIComponent("Olá! Gostaria de saber mais sobre o Plano de 12 Meses da CP Agenda Pro.")}`;
    const generalUrl = `${whatsappUrl}${encodeURIComponent("Olá! Gostaria de saber mais sobre os planos da CP Agenda Pro.")}`;

    const monthlyPrice = 1280;
    const annualTotal = monthlyPrice * 12;

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
                                <div className="text-brand-gray/40 text-[11px] font-medium tracking-wide">
                                    Total de ¥{annualTotal.toLocaleString()} em 12 meses
                                </div>
                            </div>
                        </div>

                        <a href={eliteUrl} className="relative w-full h-16 bg-brand-yellow text-slate-950 font-black rounded-2xl flex items-center justify-center gap-2 hover:bg-brand-yellow/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl text-[11px] uppercase tracking-[0.1em] group/btn overflow-hidden mb-8">
                            <span className="relative z-10">QUERO COMEÇAR MEU AGENDAMENTO</span>
                        </a>

                        {/* Accordion Features */}
                        <div className="mt-auto pt-8 border-t border-white/10">
                            <button 
                                onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                                className="w-full flex items-center justify-between hover:opacity-80 transition-all group"
                            >
                                <span className="text-white font-black text-[11px] uppercase tracking-widest leading-none">PRINCIPAIS RECURSOS</span>
                                <ArrowRight className={`w-4 h-4 text-brand-yellow transition-transform duration-300 ${isFeaturesOpen ? 'rotate-90' : ''}`} />
                            </button>
                            
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isFeaturesOpen ? 'max-h-[500px] mt-6 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
                                <ul className="space-y-3 px-2">
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
                </div>

                <div className="max-w-5xl mx-auto mb-16 relative">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 p-10 rounded-4xl relative">
                        <div className="flex-grow space-y-3 text-center md:text-left">
                            <div>
                                <h4 className="text-brand-blue font-black text-xs uppercase tracking-[0.3em] mb-4">
                                    PROFISSIONALISMO & SEGURANÇA
                                </h4>
                                <p className="text-sm md:text-base text-white/90 font-black leading-relaxed mb-1">
                                    Implementação profissional inclusa • Sem taxa de instalação
                                </p>
                                <p className="text-sm md:text-base text-brand-gray font-light opacity-80 mb-1">
                                    Cobrança mensal automática no cartão, com total segurança via Stripe
                                </p>
                                <p className="text-sm md:text-base text-brand-gray font-light opacity-80 mb-6">
                                    Plano com permanência mínima de 12 meses
                                </p>
                                <p className="text-xs md:text-sm text-brand-gray/60 font-light leading-none">
                                    O cancelamento encerra o acesso ao sistema
                                </p>
                            </div>
                        </div>

                        <div className="flex-shrink-0 relative group">
                            {/* Brilho Azul Claro atrás do ícone */}
                            <div className="absolute inset-0 bg-brand-blue/20 blur-[50px] rounded-full scale-150 -z-10 group-hover:bg-brand-blue/30 transition-all duration-700"></div>
                            <ShieldCheck className="w-20 h-20 md:w-24 md:h-24 text-brand-blue/60 relative z-10" strokeWidth={1} />
                        </div>
                    </div>
                </div>


            </div>

            {/* 2. OFERTA LANÇAMENTO */}
            <div className="max-w-[1440px] mx-auto relative z-10 px-6 md:px-16 lg:px-24 mb-16">
                <div className="w-full border-2 border-brand-blue/30 rounded-[2rem] md:rounded-[4rem] bg-slate-900 overflow-hidden relative group">
                    <div className="absolute inset-0 bg-brand-blue/5 opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="py-16 md:py-24 px-8 md:px-16 lg:px-24 relative z-10 text-center">
                        <Badge variant="blue" className="mb-8 uppercase tracking-[0.3em] font-black text-[10px] py-1 px-5">OFERTA LANÇAMENTO</Badge>
                        <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-none max-w-3xl mx-auto">
                            Ganhe 20 Tags NFC exclusivas ao contratar seu plano hoje
                        </h3>
                        <p className="text-brand-gray text-lg font-light mb-12 max-w-2xl mx-auto">
                            Inovação e praticidade: tags tipo chaveiro que levam seu cliente <span className="text-white font-bold">direto para sua página de agendamento</span> apenas encostando o celular.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14 max-w-3xl mx-auto">
                            <FeatureTile
                                title="CHAVEIROS NFC"
                                sub="Tags compactas e ultra-práticas para uso diário."
                            />
                            <FeatureTile
                                title="TOQUE MÁGICO"
                                sub="Basta encostar o celular para abrir seu agendamento."
                            />
                            <FeatureTile
                                title="20 UNIDADES"
                                sub="Kit completo para você e seus melhores clientes."
                                highlight
                            />
                        </div>

                        <a href={generalUrl} className="relative inline-flex items-center gap-4 bg-white text-slate-950 font-black py-4 px-8 rounded-xl text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl leading-none group/btn overflow-hidden">
                            <span className="relative z-10">Quero garantir meu bônus</span>
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-blue transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300"></div>
                        </a>


                    </div>
                </div>
            </div>

            {/* 3. COMO CONTRATAR EM 3 PASSOS */}
            <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 mb-16">
                <div className="text-center mb-20">
                    <Badge variant="outline" className="mb-6 uppercase tracking-[0.3em] font-black text-[10px] py-1 px-4 text-brand-blue border-brand-blue/30">COMEÇAR É SIMPLES</Badge>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-[0.9]">
                        Como contratar em 3 passos
                    </h2>
                    <p className="text-brand-gray text-lg md:text-xl font-light max-w-2xl mx-auto">
                        Sem burocracia e sem formulários complexos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-[90%] md:max-w-5xl mx-auto">
                    <StepCardMinimal
                        icon={<MessageCircle className="w-10 h-10" />}
                        step="PASSO 1"
                        title="Atendimento pelo WhatsApp"
                        desc="Fale diretamente pelo whatsapp, sem complicação e sem formulários."
                    />
                    <StepCardMinimal
                        icon={<Zap className="w-10 h-10" />}
                        step="PASSO 2"
                        title="Escolha do plano ideal"
                        desc="Entendemos sua necessidade e definimos juntos a melhor opção para o seu negócio."
                    />
                    <StepCardMinimal
                        icon={<Rocket className="w-10 h-10" />}
                        step="PASSO 3"
                        title="Pagamento e acesso imediato"
                        desc="Pagamento simples e sistema liberado para uso imediatamente."
                    />
                </div>
            </div>

            {/* Final CTA */}
            <div className="text-center pb-12">
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
        <span className="text-[13px] md:text-sm font-bold leading-tight uppercase font-medium">{text}</span>
    </li>
);

const FeatureTile = ({ title, sub, highlight = false }: { title: string, sub: string, highlight?: boolean }) => (
    <div className={`flex flex-col items-center justify-center p-8 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-all group/tile ${highlight ? 'border-brand-blue/30' : ''}`}>
        <Check className={`w-8 h-8 mb-6 group-hover/tile:scale-125 transition-transform ${highlight ? 'text-brand-pink animate-pulse' : 'text-brand-blue'}`} />
        <span className={`text-white font-black text-xl md:text-2xl tracking-tighter text-center uppercase mb-3 leading-none ${highlight ? 'text-brand-blue' : ''}`}>{title}</span>
        <span className="text-brand-gray/80 text-sm md:text-base font-light text-center leading-relaxed">{sub}</span>
    </div>
);

const StepCardMinimal = ({ icon, step, title, desc }: { icon: React.ReactNode, step: string, title: string, desc: string }) => (
    <div className="relative p-10 rounded-[3rem] bg-slate-900 border border-white/5 group hover:border-brand-blue/30 transition-all flex flex-col items-center text-center">
        <div className="text-brand-blue mb-8 group-hover:scale-110 transition-transform">{icon}</div>
        <span className="text-[11px] font-black tracking-[0.3em] text-white/30 mb-3 uppercase">{step}</span>
        <h4 className="text-2xl font-black text-white mb-6 uppercase tracking-tight leading-none">{title}</h4>
        <p className="text-brand-gray/80 text-base font-light leading-relaxed">{desc}</p>
    </div>
);
