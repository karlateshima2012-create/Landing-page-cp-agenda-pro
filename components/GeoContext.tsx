import React, { createContext, useContext, useEffect, useState } from 'react';

interface GeoContextType {
    isBrazil: boolean;
}

const GeoContext = createContext<GeoContextType>({ isBrazil: false });

export const useGeo = () => useContext(GeoContext);

const detectBrazilSync = (): boolean => {
    // 1. Idioma
    const lang = navigator.language || '';
    if (lang.toLowerCase().startsWith('pt')) return true;

    // 2. Fuso horário
    try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        // Clientes são primariamente JP ou BR. Se for America/*, assumimos Brasil.
        if (tz && tz.startsWith('America/')) return true;
    } catch {}

    return false;
};

const detectBrazilAsync = async (): Promise<boolean> => {
    // Primary: api.country.is
    try {
        const r = await fetch('https://api.country.is/');
        const d = await r.json();
        if (d.country) return d.country === 'BR';
    } catch {}

    // Fallback: cloudflare trace
    try {
        const r = await fetch('https://cloudflare.com/cdn-cgi/trace');
        const text = await r.text();
        const match = text.match(/loc=(\w+)/);
        if (match) return match[1] === 'BR';
    } catch {}

    return detectBrazilSync();
};

export const GeoProvider = ({ children }: { children: React.ReactNode }) => {
    // Inicializa com a detecção síncrona (idioma/fuso) para evitar flash de conteúdo
    const [isBrazil, setIsBrazil] = useState<boolean>(detectBrazilSync());

    useEffect(() => {
        // Tenta confirmar com a API de IP em background
        detectBrazilAsync().then(result => {
            if (result !== isBrazil) {
                setIsBrazil(result);
            }
        });
    }, [isBrazil]);

    return <GeoContext.Provider value={{ isBrazil }}>{children}</GeoContext.Provider>;
};
