
import React from 'react';
import { Users, CreditCard, TrendingUp, Check } from 'lucide-react';

const FeatureSection = ({ icon, title, description, badge, items, colorClass, glowClass }: {
    icon: React.ReactNode,
    title: string,
    description?: string,
    badge?: string,
    items?: string[],
    colorClass: string,
    glowClass: string,
    reverse?: boolean
}) => (
    <section className="py-24 bg-slate-950 border-b border-white/5 last:border-0">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all ${colorClass} ${glowClass} animate-float shadow-2xl`}>
                    {icon}
                </div>
                {badge && (
                    <div className="inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 bg-white/5 border border-white/10 text-brand-blue">
                        {badge}
                    </div>
                )}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight tracking-tighter max-w-3xl">{title}</h2>
                {description && (
                    <p className="text-brand-gray text-lg md:text-xl leading-relaxed font-light max-w-2xl mb-12">
                        {description}
                    </p>
                )}
                {items && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-left w-full max-w-3xl">
                        {items.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4 text-brand-gray text-base md:text-lg font-light group">
                                <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-brand-blue/20 group-hover:border-brand-blue/40 transition-colors">
                                    <Check className="w-3.5 h-3.5 text-brand-blue" />
                                </div>
                                <span className="group-hover:text-white transition-colors">{item}</span>
                            </div>
                        ))}
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
            badge="CRM COMPLETO"
            title="Tenha o controle total dos seus clientes na palma da mão"
            items={[
                "Cadastre clientes com nome, telefone, endereço e histórico",
                "Saiba a data da última compra de cada um",
                "Receba lembretes estratégicos para acionar clientes",
                "Descubra quanto cada cliente já gastou (valor vitalício)",
                "Identifique seus clientes TOP (os que mais compram)",
                "Base organizada para campanhas de marketing certeiras"
            ]}
        />
        <FeatureSection
            reverse
            colorClass="bg-brand-pink text-white"
            glowClass="btn-glow-pink"
            icon={<CreditCard className="w-8 h-8" />}
            badge="SISTEMA DE FIDELIDADE"
            title="Transforme clientes comuns em fãs que voltam sempre"
            items={[
                "Clientes acumulam pontos a cada compra realizada",
                "Pontos viram prêmios e descontos (você define as regras)",
                "Estímulo automático para recompra",
                "Cliente acompanha seus pontos pelo celular",
                "Aumento do ticket médio naturalmente",
                "Diferencial competitivo: você fideliza enquanto concorrente só vende"
            ]}
        />
        <FeatureSection
            colorClass="bg-brand-yellow text-slate-950"
            glowClass="btn-glow-yellow"
            icon={<TrendingUp className="w-8 h-8" />}
            badge="RELATÓRIOS E DECISÕES"
            title="Enxergue seu negócio com clareza e tome decisões estratégicas"
            items={[
                "Saiba exatamente quantos clientes estão cadastrados",
                "Veja quantos estão ativos e quantos precisam ser reativados",
                "Descubra o ticket médio por cliente",
                "Relatórios de vendas por período",
                "Dados para definir promoções estratégicas",
                "Métricas de crescimento e retenção em tempo real"
            ]}
        />
    </div>
);
