import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedNumberProps {
    value: number | null;
    loading: boolean;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, loading }) => {
    const [displayValue, setDisplayValue] = useState<number>(100000000);

    useEffect(() => {
        if (!loading && value !== null) {
            setDisplayValue(value); // Устанавливаем конечное значение после загрузки
            return;
        }

        const interval = setInterval(() => {
        setDisplayValue((prev) => prev + Math.floor(Math.random() * 1000000)); // Бесконечная прокрутка
        }, 50); // Скорость анимации

        return () => clearInterval(interval);
    }, [loading, value]);

    return (
        <motion.p
            key={value}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ display: "inline-block"}}
        >
            {`$${displayValue.toLocaleString()}`} {/* Форматируем число */}
        </motion.p>
    );
};

export default AnimatedNumber;