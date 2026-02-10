"use client";

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Button from './Button';
import { cn } from '@/lib/utils';

interface PricingTier {
    name: string;
    price: number;
    period: string;
    description: string;
    features: string[];
    cta: string;
    popular?: boolean;
}

interface PricingTableProps {
    tiers: PricingTier[];
    accent?: string;
}

export default function PricingTable({ tiers, accent = '#2563eb' }: PricingTableProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {tiers.map((tier, index) => (
                <motion.div
                    key={tier.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={cn(
                        'relative bg-white rounded-2xl shadow-lg p-8 border-2',
                        tier.popular ? 'border-opacity-100 scale-105' : 'border-gray-200'
                    )}
                    style={tier.popular ? { borderColor: accent } : undefined}
                >
                    {tier.popular && (
                        <div
                            className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-white text-sm font-semibold"
                            style={{ backgroundColor: accent }}
                        >
                            Most Popular
                        </div>
                    )}

                    <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                        <p className="text-gray-600 mb-4">{tier.description}</p>
                        <div className="flex items-baseline justify-center">
                            <span className="text-5xl font-bold text-gray-900">${tier.price}</span>
                            <span className="text-gray-600 ml-2">/{tier.period}</span>
                        </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                        {tier.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accent }} />
                                <span className="text-gray-700">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <Button
                        variant={tier.popular ? 'primary' : 'outline'}
                        className="w-full"
                        themeColor={accent}
                    >
                        {tier.cta}
                    </Button>
                </motion.div>
            ))}
        </div>
    );
}
