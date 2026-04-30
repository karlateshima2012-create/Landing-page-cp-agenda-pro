
import React from 'react';

const QuickCard = ({ title, description, badge, colorClass }: { title: string, description: string, badge: string, colorClass: string }) => (
    <div className="bg-slate-900 border-2 border-slate-800 p-8 rounded-[1.6rem] backdrop-blur-xl shadow-2xl transition-all hover:bg-slate-800/80 hover:border-brand-blue/40 group animate-fade-in-up">
        <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 ${colorClass} bg-opacity-20`}>
            {badge}
        </div>
        <h3 className="text-2xl md:text-3xl font-black text-white mb-4 group-hover:text-brand-blue transition-colors">
            {title}
        </h3>
        <p className="text-base text-brand-gray/80 leading-relaxed font-light">
            {description}
        </p>
    </div>
);

export const QuickFeatures = () => (
    <section className="relative py-12 px-6 md:px-16 lg:px-24 z-20">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <QuickCard
                badge="Agendamento"
                title="SISTEMA ONLINE 24 HORAS"
                description="Permita que seus clientes consultem horários e reservem serviços sozinhos, direto pelo celular, a qualquer hora do dia ou da noite."
                colorClass="text-brand-blue bg-brand-blue"
            />
            <QuickCard
                badge="Produtividade"
                title="GESTÃO TOTAL DO SEU TEMPO"
                description="Gestão de profissional com agenda única, cadastro ilimitado de serviços e total controle sobre seus bloqueios de horários e pausas personalizadas."
                colorClass="text-brand-pink bg-brand-pink"
            />
            <QuickCard
                badge="Eficiência"
                title="NOTIFICAÇÕES AUTOMÁTICAS"
                description="Notificações imediatas de novos agendamentos para confirmar cada reserva e manter o controle total da agenda com praticidade."
                colorClass="text-brand-yellow bg-brand-yellow"
            />
        </div>
    </section>
);
