"use client";

import { motion } from 'framer-motion';
import { Database, LineChart, Filter, Share2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import FeatureCard from '@/components/ui/FeatureCard';
import PricingTable from '@/components/ui/PricingTable';
import ThemeNavigator from '@/components/shared/ThemeNavigator';
import { Theme } from '@/lib/themes';

interface Layout04Props {
    theme: Theme;
}

export default function Layout04Minimal({ theme }: Layout04Props) {
    const features = [
        { icon: Database, title: 'Centralized Data', description: 'All customer information in one place' },
        { icon: LineChart, title: 'Sales Pipeline', description: 'Visualize and optimize your sales process' },
        { icon: Filter, title: 'Smart Filtering', description: 'Find exactly what you need instantly' },
        { icon: Share2, title: 'Team Sync', description: 'Keep everyone aligned and informed' }
    ];

    const pricingTiers = [
        { name: 'Solo', price: 0, period: 'forever', description: 'For individuals', features: ['Up to 100 contacts', 'Basic CRM features', 'Email support'], cta: 'Start Free' },
        { name: 'Team', price: 29, period: 'user/mo', description: 'For small teams', features: ['Unlimited contacts', 'Advanced features', 'Integrations', 'Priority support'], cta: 'Start Free', popular: true },
        { name: 'Business', price: 99, period: 'user/mo', description: 'For enterprises', features: ['Everything in Team', 'Custom fields', 'API access', 'Dedicated support'], cta: 'Contact Us' }
    ];

    return (
        <div className="min-h-screen bg-white text-black">
            <ThemeNavigator currentThemeSlug={theme.slug} />

            {/* Minimal Hero */}
            <section className="min-h-screen flex items-center justify-center px-6">
                <div className="max-w-5xl w-full">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="space-y-12"
                    >
                        {/* Large Typography */}
                        <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight">
                            {theme.product.name}
                        </h1>

                        {/* Spacer Line */}
                        <div className="h-px bg-black w-24"></div>

                        {/* Subheading */}
                        <p className="text-2xl md:text-3xl max-w-2xl font-light leading-relaxed">
                            {theme.product.tagline}
                        </p>

                        {/* CTA */}
                        <div className="pt-8">
                            <Button variant="primary" size="lg" themeColor="#000000">
                                Get Started
                            </Button>
                        </div>

                        {/* Minimal Stats */}
                        <div className="grid grid-cols-3 gap-8 pt-16 border-t border-black/10">
                            <div>
                                <div className="text-5xl font-bold mb-2">10k+</div>
                                <div className="text-sm uppercase tracking-wider text-gray-500">Companies</div>
                            </div>
                            <div>
                                <div className="text-5xl font-bold mb-2">99.9%</div>
                                <div className="text-sm uppercase tracking-wider text-gray-500">Uptime</div>
                            </div>
                            <div>
                                <div className="text-5xl font-bold mb-2">150+</div>
                                <div className="text-sm uppercase tracking-wider text-gray-500">Countries</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features - Minimal Grid */}
            <section className="py-32 px-6 border-t border-black/10">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6">Features</h2>
                        <div className="h-px bg-black w-16"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="space-y-4"
                                >
                                    <Icon className="w-12 h-12 stroke-[1.5px]" />
                                    <h3 className="text-3xl font-bold">{feature.title}</h3>
                                    <p className="text-lg text-gray-600 font-light">{feature.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Pricing - Minimal */}
            <section className="py-32 px-6 border-t border-black/10">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6">Pricing</h2>
                        <div className="h-px bg-black w-16"></div>
                        <p className="text-xl text-gray-600 mt-6 font-light">Simple. Transparent. Fair.</p>
                    </div>

                    <PricingTable tiers={pricingTiers} accent="#000000" />
                </div>
            </section>

            {/* Final CTA - Minimal */}
            <section className="py-32 px-6 border-t border-black/10">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-6xl md:text-7xl font-bold mb-8">Ready?</h2>
                    <Button variant="primary" size="lg" themeColor="#000000">
                        Start Your Free Trial
                    </Button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-black/10">
                <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
                    <p>© 2026 {theme.product.name}</p>
                </div>
            </footer>
        </div>
    );
}
