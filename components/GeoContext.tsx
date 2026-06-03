import React, { createContext, useContext, useEffect, useState } from 'react';

interface GeoContextType {
    isBrazil: boolean;
}

const GeoContext = createContext<GeoContextType>({ isBrazil: false });

export const useGeo = () => useContext(GeoContext);

const detectBrazil = async (): Promise<boolean> => {
    // Primary: api.country.is — sem limite, sem chave, CORS liberado
    try {
        const r = await fetch('https://api.country.is/');
        const d = await r.json();
        if (d.country) return d.country === 'BR';
    } catch {}

    // Fallback: cloudflare trace (retorna texto simples, muito confiável)
    try {
        const r = await fetch('https://cloudflare.com/cdn-cgi/trace');
        const text = await r.text();
        const match = text.match(/loc=(\w+)/);
        if (match) return match[1] === 'BR';
    } catch {}

    // Último recurso: idioma do navegador
    const lang = navigator.language || '';
    return lang.toLowerCase().startsWith('pt');
};

export const GeoProvider = ({ children }: { children: React.ReactNode }) => {
    const [isBrazil, setIsBrazil] = useState(false);

    useEffect(() => {
        detectBrazil().then(result => setIsBrazil(result));
    }, []);

    return <GeoContext.Provider value={{ isBrazil }}>{children}</GeoContext.Provider>;
};
