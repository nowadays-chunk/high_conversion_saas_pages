"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { formatNumber } from '@/lib/utils';

interface Stat {
    value: number;
    label: string;
    suffix?: string;
    prefix?: string;
}

interface StatsDisplayProps {
    stats: Stat[];
    accent?: string;
}

export default function StatsDisplay({ stats, accent = '#2563eb' }: StatsDisplayProps) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
            {stats.map((stat, index) => (
                <StatCounter key={stat.label} stat={stat} accent={accent} delay={index * 0.1} />
            ))}
        </div>
    );
}

function StatCounter({ stat, accent, delay }: { stat: Stat; accent: string; delay: number }) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (!hasAnimated) return;

        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = stat.value / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= stat.value) {
                setCount(stat.value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [hasAnimated, stat.value]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            onViewportEnter={() => setHasAnimated(true)}
            className="text-center"
        >
            <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: accent }}>
                {stat.prefix}{formatNumber(count)}{stat.suffix}
            </div>
            <div className="text-gray-600 font-medium">{stat.label}</div>
        </motion.div>
    );
}
