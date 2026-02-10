"use client";

import { motion } from 'framer-motion';
import { Shield, Award, Lock, Users } from 'lucide-react';

interface TrustBadgesProps {
    variant?: 'logos' | 'certifications' | 'stats';
    accent?: string;
}

export default function TrustBadges({ variant = 'logos', accent = '#2563eb' }: TrustBadgesProps) {
    const logos = [
        'Google', 'Microsoft', 'Amazon', 'IBM', 'Salesforce'
    ];

    const certifications = [
        { icon: Shield, text: 'SOC 2 Certified' },
        { icon: Lock, text: 'GDPR Compliant' },
        { icon: Award, text: 'ISO 27001' },
        { icon: Users, text: '10k+ Customers' }
    ];

    if (variant === 'logos') {
        return (
            <div className="py-8">
                <p className="text-center text-gray-600 mb-6 font-medium">Trusted by leading companies worldwide</p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                    {logos.map((logo, index) => (
                        <motion.div
                            key={logo}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            {logo}
                        </motion.div>
                    ))}
                </div>
            </div>
        );
    }

    if (variant === 'certifications') {
        return (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
                {certifications.map((cert, index) => {
                    const Icon = cert.icon;
                    return (
                        <motion.div
                            key={cert.text}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center text-center gap-2"
                        >
                            <div
                                className="w-12 h-12 rounded-full flex items-center justify-center"
                                style={{ backgroundColor: accent + '20' }}
                            >
                                <Icon className="w-6 h-6" style={{ color: accent }} />
                            </div>
                            <span className="text-sm font-medium text-gray-700">{cert.text}</span>
                        </motion.div>
                    );
                })}
            </div>
        );
    }

    return null;
}
