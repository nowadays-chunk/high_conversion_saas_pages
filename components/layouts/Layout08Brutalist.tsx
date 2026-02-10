"use client";

import { motion } from 'framer-motion';
import { ShoppingCart, CreditCard, Package, BarChart } from 'lucide-react';
import Button from '@/components/ui/Button';
import PricingTable from '@/components/ui/PricingTable';
import ThemeNavigator from '@/components/shared/ThemeNavigator';
import { Theme } from '@/lib/themes';

interface Layout08Props {
    theme: Theme;
}

export default function Layout08Brutalist({ theme }: Layout08Props) {
    const features = [
        { icon: ShoppingCart, title: 'Online Store', description: 'Launch your store in minutes' },
        { icon: CreditCard, title: 'Payments', description: 'Accept payments globally' },
        { icon: Package, title: 'Inventory', description: 'Manage stock effortlessly' },
        { icon: BarChart, title: 'Analytics', description: 'Track sales in real-time' }
    ];

    const pricingTiers = [
        { name: 'BASIC', price: 29, period: 'MONTH', description: 'Start selling', features: ['Unlimited products', 'Basic analytics', 'Email support'], cta: 'START NOW' },
        { name: 'PRO', price: 79, period: 'MONTH', description: 'Grow faster', features: ['Everything in Basic', 'Advanced analytics', 'Priority support', 'Abandoned cart'], cta: 'START NOW', popular: true },
        { name: 'SCALE', price: 299, period: 'MONTH', description: 'Enterprise power', features: ['Everything in Pro', 'Custom integrations', 'Dedicated manager', 'White label'], cta: 'TALK TO US' }
    ];

    return (
        <div className="min-h-screen bg-gray-50 text-black">
            <ThemeNavigator currentThemeSlug={theme.slug} />

            {/* Brutalist Hero - Asymmetric */}
            <section className="min-h-screen px-6 py-20">
                <div className="max-w-7xl mx-auto">
                    {/* Large Bold Header */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div
                            className="inline-block px-8 py-4 mb-8 border-4 border-black transform -rotate-1"
                            style={{ backgroundColor: theme.colors.primary }}
                        >
                            <span className="font-black text-white text-2xl uppercase tracking-wider">
                                E-COMMERCE REVOLUTION
                            </span>
                        </div>

                        <h1 className="text-7xl md:text-9xl font-black uppercase leading-none mb-12 border-b-8 border-black pb-8 inline-block">
                            {theme.product.name.split(' ').map((word, i) => (
                                <div key={i} className={i % 2 === 0 ? "" : "ml-12"}>{word}</div>
                            ))}
                        </h1>

                        <div className="grid md:grid-cols-2 gap-12 mt-16">
                            {/* Left Column */}
                            <div>
                                <p className="text-3xl font-bold mb-8 uppercase leading-tight">
                                    {theme.product.tagline}
                                </p>

                                <div className="space-y-4">
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        themeColor={theme.colors.primary}
                                        className="w-full border-4 border-black rounded-none font-black uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                                    >
                                        START SELLING NOW
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        themeColor="#000000"
                                        className="w-full border-4 border-black rounded-none font-black uppercase bg-white hover:bg-gray-100"
                                    >
                                        SEE EXAMPLES
                                    </Button>
                                </div>
                            </div>

                            {/* Right Column - Stats */}
                            <div className="space-y-6">
                                {[
                                    { number: '500K+', label: 'STORES ONLINE' },
                                    { number: '$2B+', label: 'REVENUE PROCESSED' },
                                    { number: '99.9%', label: 'UPTIME' }
                                ].map((stat, i) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="border-4 border-black p-6 bg-white transform hover:translate-x-2 transition-transform"
                                        style={{ boxShadow: '6px 6px 0px 0px rgba(0,0,0,1)' }}
                                    >
                                        <div className="text-5xl font-black mb-2" style={{ color: theme.colors.primary }}>
                                            {stat.number}
                                        </div>
                                        <div className="text-lg font-bold uppercase">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features - Brutalist Boxes */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-6xl font-black uppercase mb-16 border-b-8 border-black inline-block pb-4">
                        FEATURES
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, rotate: -2 }}
                                    whileInView={{ opacity: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ rotate: 2, scale: 1.05 }}
                                    className="border-4 border-black p-6 bg-white"
                                    style={{ boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)' }}
                                >
                                    <div
                                        className="w-16 h-16 border-4 border-black flex items-center justify-center mb-4"
                                        style={{ backgroundColor: theme.colors.primary }}
                                    >
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-black uppercase mb-2">{feature.title}</h3>
                                    <p className="font-bold text-gray-700">{feature.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Pricing - Brutalist */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-6xl font-black uppercase mb-16 border-b-8 border-black inline-block pb-4">
                        PRICING
                    </h2>

                    <PricingTable tiers={pricingTiers} accent={theme.colors.primary} />
                </div>
            </section>

            {/* Final CTA - Bold Statement */}
            <section
                className="py-32 px-6 border-y-8 border-black relative overflow-hidden"
                style={{ backgroundColor: theme.colors.primary }}
            >
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <h2 className="text-7xl md:text-8xl font-black uppercase mb-8 text-white leading-none">
                        STOP WAITING<br />START SELLING
                    </h2>
                    <Button
                        variant="secondary"
                        size="lg"
                        className="border-4 border-black rounded-none font-black uppercase text-2xl px-12 py-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
                    >
                        LAUNCH YOUR STORE
                    </Button>
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-8 grid-rows-8 h-full">
                        {[...Array(64)].map((_, i) => (
                            <div key={i} className={`border border-black ${i % 3 === 0 ? 'bg-black' : ''}`} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
