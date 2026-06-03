
import React from 'react';

const QuickCard = ({ title, description, badge, colorClass }: { title: string, description: string, badge: string, colorClass: string }) => (
    <div className="bg-slate-900 border-2 border-slate-800 p-8 rounded-[1.6rem] backdrop-blur-xl shadow-2xl transition-all hover:bg-slate-800/80 hover:border-brand-pink/40 group animate-fade-in-up">
        <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 ${colorClass} bg-opacity-20`}>
            {badge}
        </div>
        <h3 className="text-xl md:text-2xl font-black text-white mb-4 group-hover:text-brand-pink transition-colors">
            {title}
        </h3>
        <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed">
            {description}
        </p>
    </div>
);

export const QuickFeatures = () => (
    <section id="features" className="relative py-12 px-6 md:px-16 lg:px-24 z-20">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <QuickCard
                badge="Agendamento"
                title="LINK EXCLUSIVO PARA AGENDAMENTO"
                description="Compartilhe seu link e permita que seus clientes agendem online."
                colorClass="text-brand-pink bg-brand-pink"
            />
            <QuickCard
                badge="Produtividade"
                title="GESTÃO TOTAL DO SEU TEMPO"
                description="Defina seus dias, horários disponíveis e períodos de atendimento."
                colorClass="text-brand-pink bg-brand-pink"
            />
            <QuickCard
                badge="Eficiência"
                title="SISTEMA ONLINE 24H"
                description="Acompanhe seus horários, serviços e agendamentos em um único lugar."
                colorClass="text-brand-pink bg-brand-pink"
            />
        </div>
    </section>
);
