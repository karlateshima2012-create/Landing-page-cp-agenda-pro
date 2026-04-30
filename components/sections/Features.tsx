
import React from 'react';
import { Check } from 'lucide-react';


const FeatureSection = ({ title, description, items, imageUrl }: {
    title: string,
    description?: string,
    items?: string[],
    imageUrl?: string
}) => (
    <section className="py-12 md:py-24 bg-slate-950">
        <div className="max-w-[1440px] mx-auto relative z-10 px-6 md:px-16 lg:px-24">
            <div className="relative w-full bg-slate-900/40 border-2 border-brand-blue/60 rounded-[2rem] md:rounded-[4rem] py-16 md:py-24 px-8 md:px-16 lg:px-24 backdrop-blur-3xl shadow-[0_80px_160px_-40px_rgba(0,0,0,0.95)] overflow-hidden group">
                {/* Visual Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent opacity-50 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 blur-[100px] -z-10 rounded-full"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight tracking-tighter">
                            {title.split(" ").map((word, i) => (
                                <span key={i} className={word.toUpperCase() === "ONLINE" ? "text-brand-blue text-glow-blue" : ""}>
                                    {word}{" "}
                                </span>
                            ))}
                        </h2>
                        
                        {description && (
                            <p className="text-lg text-brand-gray/80 leading-relaxed font-light mb-10 max-w-xl">
                                {description}
                            </p>
                        )}

                        <div className="grid grid-cols-1 gap-4">
                            {items && items.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4 text-brand-gray group/item">
                                    <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-brand-blue/20 group-hover/item:border-brand-blue/40 transition-colors">
                                        <Check className="w-3.5 h-3.5 text-brand-blue shadow-[0_0_10px_rgba(56,182,255,0.5)]" />
                                    </div>
                                    <span className="text-base font-light group-hover/item:text-white transition-colors leading-relaxed">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {imageUrl && (
                        <div className="flex-1 w-full max-w-lg">
                            <div className="relative rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl group-hover:scale-[1.02] transition-transform duration-700">
                                <img
                                    src={imageUrl}
                                    alt={title}
                                    className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </section>
);


export const FeaturesShowcase = () => (
    <div id="solucoes" className="relative">
        <FeatureSection
            title="Sua agenda aberta 24h por dia, sem precisar atender o telefone"
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
    </div>
);

