import React from 'react';
import { Badge } from '../Badge';
import { MessageCircle, Check, Box, ShieldCheck, Zap, ArrowRight, Settings, Smartphone, Rocket } from 'lucide-react';

export const Pricing = () => {
    const whatsappUrl = "https://wa.me/8109011886491?text=";
    const proUrl = `${whatsappUrl}${encodeURIComponent("Olá! Gostaria de saber mais sobre o Plano de 6 Meses da CP Agenda Pro.")}`;
    const eliteUrl = `${whatsappUrl}${encodeURIComponent("Olá! Gostaria de saber mais sobre o Plano de 12 Meses da CP Agenda Pro.")}`;
    const generalUrl = `${whatsappUrl}${encodeURIComponent("Olá! Gostaria de saber mais sobre os planos da CP Agenda Pro.")}`;

    return (
        <section id="pricing" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-pink/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>

            <div className="max-w-[1440px] mx-auto px-6 md:px-24 w-full">
                {/* 1. Pricing Plans Header */}
                <div className="text-center mb-12 px-4">
                    <Badge variant="outline" className="mb-6 uppercase tracking-[0.3em] font-black text-[10px] py-1 px-4 text-brand-yellow border-brand-yellow/50">PLANOS</Badge>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[1.1]">
                        Escolha o seu plano
                    </h2>
                    <p className="text-brand-gray text-base md:text-lg font-light max-w-2xl mx-auto opacity-80">
                        Sem taxa de ativação e sem cobranças ocultas.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16 items-stretch px-0">
                    {/* PLANO 6 MESES */}
                    <div className="w-full relative p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border-2 bg-slate-900/60 border-slate-800 hover:border-brand-blue/40 transition-all duration-500 backdrop-blur-xl flex flex-col group overflow-hidden">
                        <div className="absolute -top-10 -left-10 w-24 h-24 bg-brand-blue/10 rounded-full blur-[40px]"></div>

                        <div className="mb-8 mt-4">
                            <h3 className="text-3xl font-black text-white mb-1 uppercase tracking-tight font-black">PLANO 6 MESES</h3>
                            <p className="text-brand-blue text-xs uppercase font-black tracking-widest opacity-80">ACESSO RÁPIDO E ESSENCIAL</p>
                        </div>

                        <ul className="space-y-3 mb-10 flex-grow">
                            <SmallCheckBullet text="Painel de Agendamento Online 24h" />
                            <SmallCheckBullet text="Gestão de 1 Profissional (Agenda Única)" />
                            <SmallCheckBullet text="Cadastro Ilimitado de Serviços" />
                            <SmallCheckBullet text="Notificações Automáticas de Novas Reservas" />
                            <SmallCheckBullet text="Bloqueio de Horários e Pausas" />
                            <SmallCheckBullet text="Customização Total da Página de Agendamentos" />
                            <SmallCheckBullet text="Confirmação via Sistema Integrado" />
                            <SmallCheckBullet text="Suporte Premium Incluso" />
                        </ul>

                        <div className="bg-slate-950/40 border border-white/5 rounded-2xl p-6 mb-8 relative overflow-hidden">
                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-white text-5xl font-black transition-all">
                                            ¥1.490
                                        </span>
                                        <span className="text-brand-blue text-[10px] uppercase font-bold tracking-widest ml-2">POR MÊS</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-brand-gray text-[11px] uppercase opacity-70 tracking-wider">
                                            Cobrança mensal automática durante 6 meses
                                        </span>
                                    </div>
                                </div>

                                <div className="bg-brand-blue/10 text-brand-blue text-[10px] font-black uppercase py-1.5 px-3 rounded-full text-center border border-brand-blue/20">
                                    ACESSO TOTAL + SUPORTE INCLUÍDO
                                </div>
                            </div>
                        </div>

                        <a href={proUrl} className="relative w-full h-12 bg-brand-blue text-slate-950 font-black rounded-xl flex items-center justify-center gap-2 hover:scale-[1.03] transition-all text-[10px] uppercase tracking-widest active:scale-95 shadow-lg shadow-brand-blue/20 group/btn overflow-hidden">
                            <span className="relative z-10">COMEÇAR COM PLANO 6 MESES</span>
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-white transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300"></div>
                        </a>
                    </div>

                    {/* PLANO 12 MESES */}
                    <div className="w-full relative p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border-2 bg-slate-900 border-brand-yellow/30 backdrop-blur-3xl flex flex-col shadow-[0_0_50px_rgba(255,242,0,0.1)] transition-all duration-500 overflow-visible">
                        <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-yellow/10 rounded-full blur-[40px]"></div>
                        <div className="absolute -top-5 left-12 z-20">
                            <Badge variant="outline" className="bg-slate-950 text-brand-yellow font-black px-6 py-1.5 shadow-2xl text-[9px] uppercase border-2 border-brand-yellow">RECOMENDADO</Badge>
                        </div>

                        <div className="mb-8 mt-4">
                            <h3 className="text-3xl font-black text-white mb-1 uppercase tracking-tight font-black">PLANO 12 MESES</h3>
                            <p className="text-brand-yellow text-xs uppercase font-black tracking-widest">FOCO TOTAL NO CRESCIMENTO (BRASILEIROS NO JAPÃO)</p>
                        </div>

                        <ul className="space-y-3 mb-10 flex-grow">
                            <SmallCheckBullet text="Painel de Agendamento Online 24h" color="yellow" />
                            <SmallCheckBullet text="Gestão de 1 Profissional (Agenda Única)" color="yellow" />
                            <SmallCheckBullet text="Cadastro Ilimitado de Serviços" color="yellow" />
                            <SmallCheckBullet text="Notificações Automáticas de Novas Reservas" color="yellow" />
                            <SmallCheckBullet text="Bloqueio de Horários e Pausas" color="yellow" />
                            <SmallCheckBullet text="Customização Total da Página de Agendamentos" color="yellow" />
                            <SmallCheckBullet text="Confirmação via Sistema Integrado" color="yellow" />
                            <SmallCheckBullet text="Suporte Premium Incluso" color="yellow" />
                        </ul>

                        <div className="bg-slate-950/40 border border-white/5 rounded-2xl p-6 mb-8 relative overflow-hidden">
                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-white text-5xl font-black transition-all">
                                            ¥980
                                        </span>
                                        <span className="text-brand-yellow text-[10px] uppercase font-bold tracking-widest ml-2">POR MÊS</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-brand-gray text-[11px] uppercase opacity-70 tracking-wider">
                                            Cobrança mensal automática durante 12 meses
                                        </span>
                                    </div>
                                </div>

                                <div className="bg-brand-pink/10 text-brand-pink text-[10px] font-black uppercase py-1.5 px-3 rounded-full text-center border border-brand-pink/20">
                                    ECONOMIA DE ¥6.120 (35% OFF) NO PERÍODO
                                </div>
                            </div>
                        </div>

                        <a href={eliteUrl} className="relative w-full h-14 bg-brand-yellow text-slate-950 font-black rounded-xl flex items-center justify-center gap-2 hover:scale-[1.03] transition-all shadow-xl active:scale-95 text-[10px] uppercase tracking-widest leading-none group/btn overflow-hidden">
                            <span className="relative z-10">COMEÇAR COM PLANO 12 MESES</span>
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-white transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300"></div>
                        </a>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto mb-16 relative">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 p-10 rounded-4xl relative">
                        <div className="flex-grow space-y-3 text-center md:text-left">
                            <div>
                                <h4 className="text-brand-blue font-black text-xs uppercase tracking-[0.3em] mb-4">
                                    PROFISSIONALISMO & SEGURANÇA
                                </h4>
                                <h4 className="text-white font-black text-lg mb-1">
                                    Cancelamento disponível a qualquer momento
                                </h4>
                                <p className="text-lg text-brand-gray/80 font-light leading-relaxed mb-3">
                                    Implementação profissional inclusa &bull; Sem taxa de instalação &bull; Ativação imediata
                                </p>
                                <p className="text-xs text-brand-gray/60 font-light">
                                    Planos com duração mínima de 6 ou 12 meses. O cancelamento encerra o acesso ao sistema.
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
