import { useState, useEffect } from "react";
import type { CountdownValues } from "../types";

const calculateTimeLeft = (target: Date): CountdownValues => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
    };
};

const useCountdown = (target: Date): CountdownValues => {
    const [timeLeft, setTimeLeft] = useState<CountdownValues>(() => calculateTimeLeft(target));

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft(target));
        }, 1000);
        return () => clearInterval(interval);
    }, [target]);

    return timeLeft;
};

export default useCountdown;
