import React, { useState } from 'react';
import { Badge } from '../Badge';
import { ChevronDown, ChevronUp } from 'lucide-react';

export interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

export const FAQS: FAQItem[] = [
    {
        id: 1,
        question: "O que é o CP Agenda Pro?",
        answer: "O CP Agenda Pro é um sistema de agendamento online inteligente.\nEle permite que seus clientes marquem horários sozinhos via link exclusivo, notifica o gestor sobre novas reservas e organiza sua rotina de profissional único com total praticidade."
    },
    {
        id: 2,
        question: "Meus clientes precisam baixar algum aplicativo?",
        answer: "Não! O agendamento é feito diretamente pelo navegador do celular do cliente.\nÉ rápido, intuitivo e funciona sem ocupar espaço no aparelho."
    },
    {
        id: 3,
        question: "Consigo bloquear dias, folgas e feriados?",
        answer: "Sim. Você tem total liberdade para bloquear dias específicos, folgas ou feriados de forma simples.\nSua agenda online só mostrará os horários em que você realmente estiver disponível para atender."
    },
    {
        id: 4,
        question: "Como os avisos funcionam?",
        answer: "O sistema envia notificações imediatas de novos agendamentos diretamente para o gestor da agenda.\nIsso permite que você confirme cada reserva e mantenha sua produtividade no máximo."
    },
    {
        id: 5,
        question: "Posso cadastrar quantos serviços eu quiser?",
        answer: "Com certeza. O cadastro de serviços é ilimitado.\nVocê pode definir nomes, durações diferentes e valores para cada procedimento que oferece."
    },
    {
        id: 6,
        question: "O sistema funciona 24 horas?",
        answer: "Sim. Mesmo quando você está descansando ou atendendo um cliente, sua agenda está 'aberta' online.\nNovos agendamentos podem ser feitos a qualquer momento."
    },
    {
        id: 7,
        question: "Como funciona a gestão de profissional único?",
        answer: "O sistema é otimizado para profissionais independentes.\nEle garante que não ocorram choques de horários e centraliza todas as informações em uma agenda única e poderosa."
    }
];

export const FAQSection = () => {
    const [openId, setOpenId] = useState<number | null>(null);

    return (
        <section id="faq" className="pt-4 md:pt-8 pb-4 md:pb-6 bg-transparent relative w-full transition-all duration-700">
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-950 via-slate-950/80 to-transparent pointer-events-none z-0"></div>

            <div className="max-w-6xl mx-auto relative z-30 px-6 md:px-16 lg:px-24">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Dúvidas Comuns</h2>
                </div>

                <div className="max-w-3xl mx-auto space-y-2">
                    {FAQS.map(faq => (
                        <div
                            key={faq.id}
                            className="bg-slate-900/40 border border-white/5 rounded-2xl overflow-hidden transition-all hover:border-brand-blue/30 group backdrop-blur-md"
                        >
                            <button
                                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                                className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4"
                            >
                                <h4 className="text-base font-bold text-white leading-tight">
                                    {faq.question}
                                </h4>
                                <div className="text-white/40 group-hover:text-brand-blue transition-colors">
                                    {openId === faq.id ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                                </div>
                            </button>

                            <div className={`px-5 md:px-6 transition-all duration-300 ${openId === faq.id ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                                <div className="pt-4 border-t border-white/5">
                                    <p className="text-brand-gray/80 text-base md:text-lg leading-relaxed font-light whitespace-pre-line">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
