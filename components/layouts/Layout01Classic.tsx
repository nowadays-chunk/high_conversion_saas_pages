"use client";

import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users, Zap, ArrowRight, Mail } from 'lucide-react';
import Button from '@/components/ui/Button';
import FeatureCard from '@/components/ui/FeatureCard';
import TestimonialSlider from '@/components/ui/TestimonialSlider';
import PricingTable from '@/components/ui/PricingTable';
import TrustBadges from '@/components/ui/TrustBadges';
import StatsDisplay from '@/components/ui/StatsDisplay';
import FormInput from '@/components/ui/FormInput';
import ThemeNavigator from '@/components/shared/ThemeNavigator';
import { Theme } from '@/lib/themes';

interface Layout01Props {
    theme: Theme;
}

export default function Layout01Classic({ theme }: Layout01Props) {
    const features = [
        { icon: BarChart3, title: 'Real-Time Analytics', description: 'Monitor your data with live dashboards and instant insights that drive decision-making.' },
        { icon: TrendingUp, title: 'Growth Tracking', description: 'Visualize trends and patterns to identify opportunities and optimize performance.' },
        { icon: Users, title: 'Team Collaboration', description: 'Share insights across your organization with powerful collaboration tools.' },
        { icon: Zap, title: 'Lightning Fast', description: 'Process millions of data points in seconds with our optimized infrastructure.' }
    ];

    const testimonials = [
        { name: 'Sarah Johnson', role: 'VP of Analytics', company: 'TechCorp', rating: 5, content: 'DataViz Pro transformed how we make decisions. The insights are invaluable and the interface is incredibly intuitive.' },
        { name: 'Michael Chen', role: 'Data Director', company: 'Growth Inc', rating: 5, content: 'We saw a 300% improvement in our data accessibility within the first month. Absolutely game-changing.' },
        { name: 'Emily Rodriguez', role: 'CEO', company: 'Startup Labs', rating: 5, content: 'Finally, an analytics platform that our entire team actually enjoys using. The ROI has been phenomenal.' }
    ];

    const pricingTiers = [
        { name: 'Starter', price: 29, period: 'month', description: 'Perfect for small teams', features: ['Up to 5 users', '10 dashboards', 'Email support', 'Basic integrations'], cta: 'Start Free Trial' },
        { name: 'Professional', price: 99, period: 'month', description: 'For growing businesses', features: ['Up to 25 users', 'Unlimited dashboards', 'Priority support', 'Advanced integrations', 'Custom reports'], cta: 'Start Free Trial', popular: true },
        { name: 'Enterprise', price: 299, period: 'month', description: 'For large organizations', features: ['Unlimited users', 'Unlimited everything', '24/7 phone support', 'Dedicated account manager', 'Custom development'], cta: 'Contact Sales' }
    ];

    const stats = [
        { value: 50000, label: 'Active Users', suffix: '+' },
        { value: 99, label: 'Uptime', suffix: '%' },
        { value: 1000000, label: 'Data Points/sec', suffix: '+' },
        { value: 4, label: 'Avg Rating', suffix: '.9', prefix: '' }
    ];

    return (
        <div className="min-h-screen" style={{ backgroundColor: theme.colors.background, color: theme.colors.text }}>
            <ThemeNavigator currentThemeSlug={theme.slug} />

            {/* Hero Section - Z-Pattern */}
            <section className="relative pt-20 pb-32 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Value Prop */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                                {theme.product.tagline}
                            </h1>
                            <p className="text-xl mb-8 opacity-80 leading-relaxed">
                                Empower your team with real-time analytics and actionable insights. Make data-driven decisions faster than ever before.
                            </p>
                            <div className="flex flex-wrap gap-4 mb-8">
                                <Button variant="primary" size="lg" themeColor={theme.colors.primary}>
                                    Start Free Trial <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                                <Button variant="outline" size="lg" themeColor={theme.colors.primary}>
                                    Watch Demo
                                </Button>
                            </div>
                            <p className="text-sm opacity-60">No credit card required • 14-day free trial • Cancel anytime</p>
                        </motion.div>

                        {/* Right: Visual/Stats */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-2xl p-8 shadow-2xl" style={{ backgroundColor: theme.colors.primary + '10' }}>
                                <div className="w-full h-full rounded-xl bg-white shadow-lg p-6 flex items-center justify-center">
                                    <BarChart3 className="w-32 h-32" style={{ color: theme.colors.primary }} />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="py-8 px-6 border-t border-b" style={{ borderColor: theme.colors.muted + '30' }}>
                <div className="max-w-7xl mx-auto">
                    <TrustBadges variant="logos" accent={theme.colors.primary} />
                </div>
            </section>

            {/* Features - F-Pattern */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4">Everything you need to succeed</h2>
                        <p className="text-xl opacity-70 max-w-2xl mx-auto">
                            Powerful features designed to help you make smarter decisions
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature) => (
                            <FeatureCard
                                key={feature.title}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                accent={theme.colors.primary}
                                variant="elevated"
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-6" style={{ backgroundColor: theme.colors.primary + '08' }}>
                <div className="max-w-7xl mx-auto">
                    <StatsDisplay stats={stats} accent={theme.colors.primary} />
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">Loved by thousands of teams</h2>
                    <TestimonialSlider testimonials={testimonials} accent={theme.colors.primary} />
                </div>
            </section>

            {/* Pricing */}
            <section className="py-24 px-6" style={{ backgroundColor: theme.colors.primary + '05' }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Simple, transparent pricing</h2>
                        <p className="text-xl opacity-70">Choose the perfect plan for your team</p>
                    </div>
                    <PricingTable tiers={pricingTiers} accent={theme.colors.primary} />
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-2xl p-12 text-center shadow-2xl"
                        style={{ backgroundColor: theme.colors.primary, color: '#ffffff' }}
                    >
                        <h2 className="text-4xl font-bold mb-4">Ready to transform your data?</h2>
                        <p className="text-xl mb-8 opacity-90">Join 50,000+ teams making smarter decisions with {theme.product.name}</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                            <FormInput
                                type="email"
                                placeholder="Enter your work email"
                                className="flex-1"
                                accent="#ffffff"
                            />
                            <Button variant="secondary" size="lg">
                                Get Started <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t" style={{ borderColor: theme.colors.muted + '30' }}>
                <div className="max-w-7xl mx-auto text-center opacity-60">
                    <p>© 2026 {theme.product.name}. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
