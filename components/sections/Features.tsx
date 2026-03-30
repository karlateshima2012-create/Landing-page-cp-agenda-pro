
import React from 'react';
import { Users, CreditCard, TrendingUp, Check } from 'lucide-react';

const FeatureSection = ({ icon, title, description, badge, items, colorClass, glowClass, imageUrl, cardBg, reverse = false }: {
    icon: React.ReactNode,
    title: string,
    description?: string,
    badge?: string,
    items?: string[],
    colorClass: string,
    glowClass: string,
    imageUrl?: string,
    cardBg?: string,
    reverse?: boolean
}) => (
    <section className={`py-12 md:py-16 ${reverse ? 'bg-slate-900 border-y border-white/5' : 'bg-slate-950'}`}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
            <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 md:gap-24`}>
                <div className="flex-1 text-center md:text-left">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-8 mx-auto md:mx-0 transition-all ${colorClass} ${glowClass} animate-float shadow-xl`}>
                        {icon}
                    </div>
                    {badge && (
                        <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 bg-white/5 border border-white/10 text-brand-blue`}>
                            {badge}
                        </div>
                    )}
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">{title}</h2>
                    {description && (
                        <p className="text-lg md:text-xl text-brand-gray leading-relaxed font-light max-w-xl mx-auto md:mx-0 mb-8">
                            {description}
                        </p>
                    )}
                    {items && (
                        <ul className="space-y-4 text-left max-w-xl mx-auto md:mx-0">
                            {items.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4 text-brand-gray text-base md:text-lg font-light group">
                                    <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-brand-blue/20 group-hover:border-brand-blue/40 transition-colors">
                                        <Check className="w-3.5 h-3.5 text-brand-blue" />
                                    </div>
                                    <span className="text-base font-light group-hover:text-white transition-colors">{item}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                {imageUrl && (
                    <div className="hidden md:block flex-1 w-full perspective-1000">
                        <div className="relative group transition-transform duration-500 hover:rotate-y-6">
                            <div className={`absolute inset-0 ${reverse ? 'bg-brand-pink' : 'bg-brand-blue'} blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                            <div className={`relative ${cardBg || 'bg-slate-900/60'} border border-white/10 p-0 rounded-[2rem] shadow-2xl overflow-hidden aspect-[4/3]`}>
                                <img
                                    src={imageUrl}
                                    alt={title}
                                    className="w-full h-full object-contain rounded-[2rem] opacity-100 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </section>
);

export const FeaturesShowcase = () => (
    <div id="features" className="relative">
        <FeatureSection
            colorClass="bg-brand-blue text-white"
            glowClass="btn-glow-blue"
            icon={<Users className="w-8 h-8" />}
            badge="AGENDAMENTO ONLINE"
            title="Sua agenda aberta 24h por dia, sem precisar atender o telefone"
            cardBg="bg-[#0C0E1A]"
            imageUrl="https://midias.creativeprintjp.com/wp-content/uploads/2026/03/Gemini_Generated_Image_1oj8xx1oj8xx1oj8.png"
            items={[
                "Link exclusivo para seus clientes agendarem horários",
                "Visualização em tempo real das vagas disponíveis",
                "Confirmação e gestão total de reservas pelo gestor",
                "Acesso fácil por qualquer smartphone ou tablet",
                "Histórico completo de atendimentos por cliente",
                "Fim das mensagens fora de hora pedindo horário"
            ]}
        />
        <FeatureSection
            reverse
            colorClass="bg-brand-pink text-white"
            glowClass="btn-glow-pink"
            icon={<CreditCard className="w-8 h-8" />}
            badge="GESTÃO ÚNICA"
            title="Um profissional, um sistema, produtividade infinita"
            cardBg="bg-[#0E1123]"
            imageUrl="https://midias.creativeprintjp.com/wp-content/uploads/2026/03/Design-sem-nome-1.png"
            items={[
                "Gestão simplificada para 1 profissional (Agenda Única)",
                "Cadastro ilimitado de serviços e procedimentos",
                "Definição de tempos específicos para cada serviço",
                "Interface limpa e intuitiva para o dia a dia",
                "Organização total da sua rotina de trabalho",
                "Profissionalismo que encanta o seu cliente"
            ]}
        />
        <FeatureSection
            colorClass="bg-brand-yellow text-slate-950"
            glowClass="btn-glow-yellow"
            icon={<TrendingUp className="w-8 h-8" />}
            badge="CONTROLE TOTAL"
            title="Domine seus horários com flexibilidade total"
            cardBg="bg-[#0F1A2E]"
            imageUrl="https://midias.creativeprintjp.com/wp-content/uploads/2026/03/Design-sem-nome.png"
            items={[
                "Notificações de novas reservas para o gestor",
                "Bloqueio de horários para compromissos pessoais",
                "Pausas e intervalos personalizados e fáceis de configurar",
                "Visualização clara da sua ocupação diária e semanal",
                "Gestão de feriados e horários especiais",
                "Controle absoluto sobre o seu tempo e descanso"
            ]}
        />
    </div>
);
