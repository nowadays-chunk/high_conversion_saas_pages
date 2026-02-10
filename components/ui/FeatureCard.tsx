"use client";

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    accent?: string;
    variant?: 'default' | 'bordered' | 'elevated';
}

export default function FeatureCard({
    icon: Icon,
    title,
    description,
    accent = '#2563eb',
    variant = 'default'
}: FeatureCardProps) {
    const variantClasses = {
        default: 'bg-white hover:shadow-lg',
        bordered: 'bg-white border-2 hover:border-opacity-100 border-opacity-20',
        elevated: 'bg-white shadow-md hover:shadow-2xl'
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className={cn(
                'p-6 rounded-xl transition-all duration-300',
                variantClasses[variant]
            )}
            style={variant === 'bordered' ? { borderColor: accent } : undefined}
        >
            <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: accent + '20' }}
            >
                <Icon className="w-6 h-6" style={{ color: accent }} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </motion.div>
    );
}
