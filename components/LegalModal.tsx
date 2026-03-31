
import React from 'react';

interface LegalModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm animate-fade-in"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-4xl max-h-[80vh] bg-slate-900 border border-slate-800 rounded-[2rem] shadow-2xl overflow-hidden animate-fade-in-up">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/50">
                    <h2 className="text-sm md:text-base font-black text-white uppercase tracking-[0.2em]">Termos de Uso e Política de Privacidade</h2>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-white/5 text-brand-gray transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Scrollable Body */}
                <div className="p-8 overflow-y-auto max-h-[calc(80vh-80px)] space-y-12 text-brand-gray leading-relaxed font-light custom-scrollbar">
                    
                    {/* CONTRATO */}
                    <section>
                        <h3 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-6">📄 CONTRATO DE PRESTAÇÃO DE SERVIÇO – CP AGENDA PRO</h3>
                        <div className="space-y-6 text-sm">
                            <div>
                                <h4 className="text-white font-bold mb-2">1. Objeto</h4>
                                <p>A CONTRATADA (Creative Print) disponibiliza ao CONTRATANTE acesso ao sistema CP Agenda Pro, incluindo funcionalidades de agendamento online 24h, gestão de profissionais, notificações automáticas e integração com NFC/QR Code.</p>
                            </div>

                            <div>
                                <h4 className="text-white font-bold mb-2">2. Modalidade de Contratação</h4>
                                <p>O serviço é contratado na modalidade de compromisso anual, com uma duração mínima de 12 meses. O período mínimo contratado começa a partir da data da confirmação do primeiro pagamento.</p>
                            </div>

                            <div>
                                <h4 className="text-white font-bold mb-2">3. Forma de Pagamento e Valores</h4>
                                <p>O serviço é cobrado de forma recorrente, com pagamentos mensais automáticos no cartão, com total segurança via Stripe. A assinatura permanece ativa e será renovada automaticamente até que o cliente solicite o cancelamento, respeitando o período mínimo contratado.</p>
                                <p className="mt-2 text-brand-blue font-bold">Valor Vigente:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li><strong>Plano 12 Meses</strong>: ¥1.280/mês (anual)</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-white font-bold mb-2">4. Compromisso e Cancelamento</h4>
                                <p>Ao contratar o serviço, o CONTRATANTE concorda com o período mínimo de 12 meses.</p>
                                <p className="mt-2"><strong>Regras:</strong></p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>O cancelamento pode ser solicitado a qualquer momento.</li>
                                    <li><strong>Em caso de cancelamento:</strong> Caso o cancelamento ocorra antes de 12 meses, o plano contratado será considerado até o final do período.</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-white font-bold mb-2">5. Inadimplência</h4>
                                <p>Caso o pagamento não seja realizado, o acesso ao sistema poderá ser suspenso automaticamente. A reativação dependerá da regularização do pagamento.</p>
                            </div>

                            <div>
                                <h4 className="text-white font-bold mb-2">6. Ativação do Serviço</h4>
                                <p>Após a confirmação do pagamento, a Creative Print realizará a configuração inicial do sistema. O prazo de ativação pode variar conforme a complexidade da configuração técnica.</p>
                            </div>

                            <div>
                                <h4 className="text-white font-bold mb-2">7. Responsabilidade do Cliente</h4>
                                <p>O CONTRATANTE é responsável pelo uso correto da plataforma, gestão de seus clientes/dados e operação dos dispositivos NFC/QR Code vinculados ao sistema.</p>
                            </div>

                            <div>
                                <h4 className="text-white font-bold mb-2">8. Limitação de Responsabilidade</h4>
                                <p>A CONTRATADA não se responsabiliza por perda de vendas por mau uso do sistema ou falhas externas (internet, dispositivos de terceiros).</p>
                            </div>
                        </div>
                    </section>

                    {/* TERMOS DE USO */}
                    <section>
                        <h3 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-6">📜 TERMOS DE USO – CP AGENDA PRO</h3>
                        <div className="space-y-6 text-sm">
                            <div>
                                <h4 className="text-white font-bold mb-2">1. Uso da Plataforma</h4>
                                <p>O sistema deve ser utilizado exclusivamente para fins comerciais legítimos, sendo proibido o uso indevido de dados de clientes ou práticas abusivas/fraudulentas.</p>
                            </div>

                            <div>
                                <h4 className="text-white font-bold mb-2">2. Dados e Privacidade</h4>
                                <p>Os dados inseridos no sistema são de responsabilidade do CONTRATANTE. A Creative Print não compartilha dados com terceiros, exceto quando necessário para o funcionamento técnico (ex: processamento via Stripe).</p>
                            </div>

                            <div>
                                <h4 className="text-white font-bold mb-2">3. Acesso ao Sistema</h4>
                                <p>O acesso é individual e vinculado ao cliente contratante, não sendo permitido o compartilhamento indevido de acesso ou revenda do sistema sem autorização prévia.</p>
                            </div>

                            <div>
                                <h4 className="text-white font-bold mb-2">4. Atualizações e Suporte</h4>
                                <p>A Creative Print pode realizar melhorias no sistema sem aviso prévio. O suporte será prestado conforme disponibilidade, principalmente durante a ativação e uso inicial.</p>
                            </div>
                        </div>
                    </section>

                    <div className="pt-8 border-t border-white/5 text-center italic text-[10px]">
                        Última atualização: 30 de Março de 2026
                    </div>
                </div>
            </div>
        </div>
    );
};
