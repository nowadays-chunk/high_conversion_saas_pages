"use client";

import { motion } from 'framer-motion';
import { Users, Award, TrendingUp, Heart } from 'lucide-react';
import Button from '@/components/ui/Button';
import FeatureCard from '@/components/ui/FeatureCard';
import PricingTable from '@/components/ui/PricingTable';
import ThemeNavigator from '@/components/shared/ThemeNavigator';
import { Theme } from '@/lib/themes';

interface Layout07Props {
    theme: Theme;
}

export default function Layout07Glass({ theme }: Layout07Props) {
    const features = [
        { icon: Users, title: 'Employee Directory', description: 'Centralized employee information and org charts' },
        { icon: Award, title: 'Performance Reviews', description: 'Streamlined review process with templates' },
        { icon: TrendingUp, title: 'Analytics', description: 'Insights into team performance and growth' },
        { icon: Heart, title: 'Employee Wellbeing', description: 'Track satisfaction and engagement' }
    ];

    const pricingTiers = [
        { name: 'Starter', price: 5, period: 'user/mo', description: 'For small teams', features: ['Up to 25 employees', 'Basic HR tools', 'Email support'], cta: 'Start Trial' },
        { name: 'Professional', price: 10, period: 'user/mo', description: 'For growing companies', features: ['Up to 500 employees', 'Advanced features', 'Performance reviews', 'Priority support'], cta: 'Start Trial', popular: true },
        { name: 'Enterprise', price: 25, period: 'user/mo', description: 'For large organizations', features: ['Unlimited employees', 'Custom workflows', 'Dedicated support', 'API access'], cta: 'Contact Sales' }
    ];

    return (
        <div
            className="min-h-screen relative"
            style={{
                backgroundColor: theme.colors.background,
                backgroundImage: `radial-gradient(ellipse at 50% 20%, ${theme.colors.primary}15, transparent 60%), radial-gradient(ellipse at 80% 80%, ${theme.colors.accent}10, transparent 60%)`
            }}
        >
            <ThemeNavigator currentThemeSlug={theme.slug} />

            {/* Glassmorphic Hero */}
            <section className="min-h-screen flex items-center justify-center px-6 py-20">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-3xl p-12 md:p-16 shadow-2xl"
                    >
                        <div className="text-center">
                            <div className="inline-block px-6 py-3 rounded-full mb-8 backdrop-blur-md bg-white/40 border border-white/50">
                                <span className="font-semibold" style={{ color: theme.colors.primary }}>
                                    💼 Trusted by forward-thinking companies
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: theme.colors.text }}>
                                {theme.product.tagline}
                            </h1>

                            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed" style={{ color: theme.colors.text, opacity: 0.8 }}>
                                Modern HR management for the modern workplace. Empower your people, streamline processes, and build a thriving culture.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="primary" size="lg" themeColor={theme.colors.primary}>
                                    Start Free Trial
                                </Button>
                                <Button variant="ghost" size="lg" className="backdrop-blur-md bg-white/20 hover:bg-white/30 border border-white/40">
                                    Book a Demo
                                </Button>
                            </div>

                            <p className="text-sm mt-8" style={{ color: theme.colors.text, opacity: 0.6 }}>
                                ✓ No credit card required ✓ 14-day free trial ✓ Cancel anytime
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Floating Glass Cards for Features */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4" style={{ color: theme.colors.text }}>
                            Everything your HR team needs
                        </h2>
                        <p className="text-xl" style={{ color: theme.colors.text, opacity: 0.7 }}>
                            Powerful features in a beautiful package
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                    className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                                >
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 backdrop-blur-md"
                                        style={{ backgroundColor: theme.colors.primary + '30' }}
                                    >
                                        <Icon className="w-6 h-6" style={{ color: theme.colors.primary }} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2" style={{ color: theme.colors.text }}>
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

            {/* Pricing with Glass Effect */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4" style={{ color: theme.colors.text }}>
                            Transparent pricing
                        </h2>
                        <p className="text-xl" style={{ color: theme.colors.text, opacity: 0.7 }}>
                            Choose the plan that fits your team
                        </p>
                    </div>

                    <PricingTable tiers={pricingTiers} accent={theme.colors.primary} />
                </div>
            </section>

            {/* Final CTA with Glassmorphism */}
            <section className="py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="backdrop-blur-2xl bg-white/25 border border-white/40 rounded-3xl p-12 md:p-16 text-center shadow-2xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: theme.colors.text }}>
                            Transform your HR today
                        </h2>
                        <p className="text-xl mb-10" style={{ color: theme.colors.text, opacity: 0.8 }}>
                            Join companies making their people operations effortless
                        </p>
                        <Button variant="primary" size="lg" themeColor={theme.colors.primary}>
                            Get Started Free
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
