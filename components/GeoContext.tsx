import React, { createContext, useContext, useEffect, useState } from 'react';

interface GeoContextType {
    isBrazil: boolean;
}

const GeoContext = createContext<GeoContextType>({ isBrazil: false });

export const useGeo = () => useContext(GeoContext);

export const GeoProvider = ({ children }: { children: React.ReactNode }) => {
    const [isBrazil, setIsBrazil] = useState(false);

    useEffect(() => {
        fetch('https://ipapi.co/json/')
            .then(r => r.json())
            .then(d => { if (d.country_code === 'BR') setIsBrazil(true); })
            .catch(() => {});
    }, []);

    return <GeoContext.Provider value={{ isBrazil }}>{children}</GeoContext.Provider>;
};
