"use client";

import { motion } from 'framer-motion';
import { Brain, Cpu, Sparkles, Workflow } from 'lucide-react';
import Button from '@/components/ui/Button';
import FeatureCard from '@/components/ui/FeatureCard';
import PricingTable from '@/components/ui/PricingTable';
import ThemeNavigator from '@/components/shared/ThemeNavigator';
import { Theme } from '@/lib/themes';

interface Layout10Props {
    theme: Theme;
}

export default function Layout10Neuro({ theme }: Layout10Props) {
    const features = [
        { icon: Brain, title: 'Smart Automation', description: 'AI that learns from your workflow patterns' },
        { icon: Cpu, title: 'ML Models', description: 'Pre-trained models ready to use' },
        { icon: Sparkles, title: 'Auto-Optimization', description: 'Continuous performance improvements' },
        { icon: Workflow, title: 'Workflows', description: 'Build complex automation pipelines' }
    ];

    const pricingTiers = [
        { name: 'Starter', price: 49, period: 'month', description: 'For individuals', features: ['10 AI models', '1,000 API calls/mo', 'Email support', 'Basic analytics'], cta: 'Start Free Trial' },
        { name: 'Professional', price: 199, period: 'month', description: 'For teams', features: ['Unlimited models', '100K API calls/mo', 'Priority support', 'Advanced analytics', 'Custom training'], cta: 'Start Free Trial', popular: true },
        { name: 'Enterprise', price: 599, period: 'month', description: 'For large scale', features: ['Everything in Pro', 'Unlimited API calls', 'Dedicated support', 'On-premise option', 'SLA'], cta: 'Contact Sales' }
    ];

    return (
        <div
            className="min-h-screen"
            style={{ backgroundColor: theme.colors.background }}
        >
            <ThemeNavigator currentThemeSlug={theme.slug} />

            {/* Neumorphic Hero */}
            <section className="min-h-screen flex items-center justify-center px-6 py-20">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="rounded-3xl p-12 md:p-20"
                        style={{
                            background: theme.colors.background,
                            boxShadow: `20px 20px 60px ${theme.colors.secondary}40, -20px -20px 60px ${theme.colors.accent}20`,
                        }}
                    >
                        <div className="text-center">
                            <div
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8"
                                style={{
                                    background: theme.colors.background,
                                    boxShadow: `inset 5px 5px 10px ${theme.colors.secondary}30, inset -5px -5px 10px ${theme.colors.accent}15`,
                                }}
                            >
                                <Brain className="w-5 h-5" style={{ color: theme.colors.primary }} />
                                <span className="font-semibold" style={{ color: theme.colors.text }}>
                                    Powered by Advanced AI
                                </span>
                            </div>

                            <h1
                                className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
                                style={{ color: theme.colors.text }}
                            >
                                {theme.product.tagline}
                            </h1>

                            <p
                                className="text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto"
                                style={{ color: theme.colors.text, opacity: 0.8 }}
                            >
                                Harness the power of artificial intelligence to automate workflows, analyze data, and unlock insights that drive growth.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    className="px-8 py-4 rounded-xl font-semibold text-lg transition-all"
                                    style={{
                                        background: theme.colors.background,
                                        color: theme.colors.primary,
                                        boxShadow: `8px 8px 16px ${theme.colors.secondary}40, -8px -8px 16px ${theme.colors.accent}20`,
                                    }}
                                    onMouseDown={(e) => {
                                        e.currentTarget.style.boxShadow = `inset 4px 4px 8px ${theme.colors.secondary}40, inset -4px -4px 8px ${theme.colors.accent}20`;
                                    }}
                                    onMouseUp={(e) => {
                                        e.currentTarget.style.boxShadow = `8px 8px 16px ${theme.colors.secondary}40, -8px -8px 16px ${theme.colors.accent}20`;
                                    }}
                                >
                                    Start Free Trial
                                </button>

                                <button
                                    className="px-8 py-4 rounded-xl font-semibold text-lg transition-all"
                                    style={{
                                        background: theme.colors.primary,
                                        color: '#ffffff',
                                        boxShadow: `8px 8px 16px ${theme.colors.secondary}40, -8px -8px 16px ${theme.colors.accent}20`,
                                    }}
                                >
                                    See Demo
                                </button>
                            </div>

                            <p className="text-sm mt-8" style={{ color: theme.colors.text, opacity: 0.6 }}>
                                ✓ 14-day free trial ✓ No credit card required ✓ Cancel anytime
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Neumorphic Feature Cards */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2
                            className="text-4xl md:text-5xl font-bold mb-4"
                            style={{ color: theme.colors.text }}
                        >
                            Intelligent features for modern teams
                        </h2>
                        <p className="text-xl" style={{ color: theme.colors.text, opacity: 0.7 }}>
                            Everything you need to automate and scale
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="rounded-2xl p-8"
                                    style={{
                                        background: theme.colors.background,
                                        boxShadow: `12px 12px 24px ${theme.colors.secondary}35, -12px -12px 24px ${theme.colors.accent}18`,
                                    }}
                                >
                                    <div
                                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                                        style={{
                                            background: theme.colors.background,
                                            boxShadow: `inset 6px 6px 12px ${theme.colors.secondary}30, inset -6px -6px 12px ${theme.colors.accent}15`,
                                        }}
                                    >
                                        <Icon className="w-7 h-7" style={{ color: theme.colors.primary }} />
                                    </div>
                                    <h3
                                        className="text-xl font-bold mb-3"
                                        style={{ color: theme.colors.text }}
                                    >
                                        {feature.title}
                                    </h3>
                                    <p style={{ color: theme.colors.text, opacity: 0.7 }}>
                                        {feature.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Stats with Neumorphic Cards */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: '100K+', label: 'Active Users' },
                            { value: '5M+', label: 'AI Tasks/Day' },
                            { value: '99.9%', label: 'Accuracy' },
                            { value: '24/7', label: 'Support' }
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center p-8 rounded-2xl"
                                style={{
                                    background: theme.colors.background,
                                    boxShadow: `10px 10px 20px ${theme.colors.secondary}35, -10px -10px 20px ${theme.colors.accent}18`,
                                }}
                            >
                                <div
                                    className="text-4xl md:text-5xl font-bold mb-2"
                                    style={{ color: theme.colors.primary }}
                                >
                                    {stat.value}
                                </div>
                                <div
                                    className="text-sm font-medium"
                                    style={{ color: theme.colors.text, opacity: 0.7 }}
                                >
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2
                            className="text-4xl font-bold mb-4"
                            style={{ color: theme.colors.text }}
                        >
                            Choose your intelligence level
                        </h2>
                        <p className="text-xl" style={{ color: theme.colors.text, opacity: 0.7 }}>
                            Plans that scale with your ambition
                        </p>
                    </div>

                    <PricingTable tiers={pricingTiers} accent={theme.colors.primary} />
                </div>
            </section>

            {/* Final CTA - Neumorphic */}
            <section className="py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center p-16 rounded-3xl"
                        style={{
                            background: theme.colors.primary,
                            boxShadow: `20px 20px 40px ${theme.colors.secondary}60, -20px -20px 40px ${theme.colors.accent}30`,
                        }}
                    >
                        <h2 className="text-5xl font-bold mb-6 text-white">
                            Ready to embrace AI?
                        </h2>
                        <p className="text-xl mb-10 text-white/90">
                            Join thousands of companies automating with {theme.product.name}
                        </p>
                        <button
                            className="px-10 py-5 rounded-xl font-bold text-lg transition-all"
                            style={{
                                background: '#ffffff',
                                color: theme.colors.primary,
                                boxShadow: `8px 8px 16px rgba(0,0,0,0.2), -8px -8px 16px rgba(255,255,255,0.3)`,
                            }}
                        >
                            Start Your AI Journey
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
