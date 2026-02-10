"use client";

import { motion } from 'framer-motion';
import { Mail, Send, Users, Target, TrendingUp, Zap } from 'lucide-react';
import Button from '@/components/ui/Button';
import FeatureCard from '@/components/ui/FeatureCard';
import PricingTable from '@/components/ui/PricingTable';
import StatsDisplay from '@/components/ui/StatsDisplay';
import ThemeNavigator from '@/components/shared/ThemeNavigator';
import { Theme } from '@/lib/themes';

interface Layout03Props {
    theme: Theme;
}

export default function Layout03VideoHero({ theme }: Layout03Props) {
    const features = [
        { icon: Send, title: 'Automation', description: 'Create powerful campaigns that run on autopilot.' },
        { icon: Users, title: 'Segmentation', description: 'Target the right audience with precision.' },
        { icon: Target, title: 'Personalization', description: 'Deliver personalized content at scale.' },
        { icon: TrendingUp, title: 'Analytics', description: 'Track performance and optimize results.' },
        { icon: Zap, title: 'A/B Testing', description: 'Test everything to maximize conversions.' },
        { icon: Mail, title: 'Templates', description: 'Beautiful email templates ready to use.' }
    ];

    const pricingTiers = [
        { name: 'Starter', price: 49, period: 'month', description: 'For small businesses', features: ['Up to 10,000 contacts', '50,000 emails/month', 'Basic automation', 'Email support'], cta: 'Get Started' },
        { name: 'Growth', price: 149, period: 'month', description: 'For growing teams', features: ['Up to 50,000 contacts', '500,000 emails/month', 'Advanced automation', 'A/B testing', 'Priority support'], cta: 'Get Started', popular: true },
        { name: 'Scale', price: 399, period: 'month', description: 'For enterprises', features: ['Unlimited contacts', 'Unlimited emails', 'Everything included', 'Dedicated support', 'Custom integrations'], cta: 'Contact Us' }
    ];

    const stats = [
        { value: 2, label: 'Billion Emails Sent', suffix: 'B+' },
        { value: 99, label: 'Delivery Rate', suffix: '%' },
        { value: 10000, label: 'Active Campaigns', suffix: '+' },
        { value: 300, label: 'Avg. ROI Increase', suffix: '%' }
    ];

    return (
        <div className="min-h-screen" style={{ backgroundColor: theme.colors.background, color: theme.colors.text }}>
            <ThemeNavigator currentThemeSlug={theme.slug} />

            {/* Video Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Dark Overlay Background (simulating video) */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundColor: theme.colors.background === '#0f172a' ? theme.colors.background : '#0f172a',
                        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)'
                    }}
                />

                {/* Content */}
                <div className="relative z-10 text-center px-6 py-32 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-2 rounded-full mb-6 bg-white/10 backdrop-blur-sm border border-white/20">
                            <span className="font-semibold text-sm text-white">✨ The Future of Email Marketing</span>
                        </div>
                        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-white">
                            {theme.product.tagline}
                        </h1>
                        <p className="text-2xl mb-12 text-white/90 leading-relaxed max-w-3xl mx-auto">
                            Build campaigns that convert. Automate your email marketing and watch your revenue grow while you sleep.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="primary" size="lg" themeColor={theme.colors.primary}>
                                Start Free Trial
                            </Button>
                            <Button variant="outline" size="lg" themeColor="#ffffff">
                                Watch Demo Video
                            </Button>
                        </div>
                        <p className="text-sm text-white/70 mt-8">No credit card required • 2,000 free sends • Cancel anytime</p>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50"
                >
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
                    </div>
                </motion.div>
            </section>

            {/* Stats on Dark Background */}
            <section className="py-16 px-6" style={{ backgroundColor: theme.colors.background === '#0f172a' ? '#1e293b' : theme.colors.primary + '10' }}>
                <div className="max-w-7xl mx-auto">
                    <StatsDisplay stats={stats} accent={theme.colors.primary} />
                </div>
            </section>

            {/* Features */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4">Everything you need to succeed</h2>
                        <p className="text-xl opacity-70">Powerful tools for modern email marketing</p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature) => (
                            <FeatureCard
                                key={feature.title}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                accent={theme.colors.primary}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-24 px-6" style={{ backgroundColor: theme.colors.background === '#0f172a' ? '#1e293b' : '#f9fafb' }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Choose your plan</h2>
                        <p className="text-xl opacity-70">Flexible pricing for every business size</p>
                    </div>
                    <PricingTable tiers={pricingTiers} accent={theme.colors.primary} />
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 px-6" style={{ backgroundColor: theme.colors.primary }}>
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-5xl font-bold mb-6">Start growing your business today</h2>
                    <p className="text-xl mb-10 opacity-90">Join 10,000+ companies using {theme.product.name} to drive revenue</p>
                    <Button variant="secondary" size="lg">
                        Create Your Free Account
                    </Button>
                </div>
            </section>
        </div>
    );
}
