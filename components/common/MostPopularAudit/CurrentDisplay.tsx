import React from "react";
import AnimatedNumber from "./AnimatedNumber"; 

interface CurrencyDisplayProps {
    marketCap: number | null;
}

const formatNumber = (number: number) => {
    return Math.round(number).toLocaleString();  // Округляем и форматируем число
};

const CurrencyDisplay: React.FC<CurrencyDisplayProps> = ({ marketCap }) => {
    return (
        <div>
            {
            marketCap ? <p>${formatNumber(marketCap)}</p>
            : <AnimatedNumber value={marketCap} loading={marketCap === null} />
            }
        </div>
    );
};

export default CurrencyDisplay;