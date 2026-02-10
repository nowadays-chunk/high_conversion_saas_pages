"use client";

import { motion } from 'framer-motion';
import { Rocket, Target, Clock, Trophy, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import FeatureCard from '@/components/ui/FeatureCard';
import TestimonialSlider from '@/components/ui/TestimonialSlider';
import PricingTable from '@/components/ui/PricingTable';
import StatsDisplay from '@/components/ui/StatsDisplay';
import ThemeNavigator from '@/components/shared/ThemeNavigator';
import { Theme } from '@/lib/themes';

interface Layout02Props {
    theme: Theme;
}

export default function Layout02SplitScreen({ theme }: Layout02Props) {
    const features = [
        { icon: Rocket, title: 'Fast Setup', description: 'Get your team up and running in minutes, not days.' },
        { icon: Target, title: 'Goal Tracking', description: 'Set and track goals with visual progress indicators.' },
        { icon: Clock, title: 'Time Management', description: 'Optimize your time with intelligent scheduling.' },
        { icon: Trophy, title: 'Team Success', description: 'Celebrate wins and boost team morale.' }
    ];

    const testimonials = [
        { name: 'Alex Turner', role: 'Project Manager', company: 'BuildCo', rating: 5, content: 'TeamFlow completely changed how we manage projects. Our productivity increased by 40% in the first quarter.' },
        { name: 'Lisa Wong', role: 'Team Lead', company: 'Creative Studios', rating: 5, content: 'The collaboration features are amazing. Everyone stays on the same page effortlessly.' }
    ];

    const pricingTiers = [
        { name: 'Team', price: 19, period: 'user/mo', description: 'For small teams', features: ['Up to 10 users', 'Unlimited projects', 'Basic integrations', 'Email support'], cta: 'Try Free' },
        { name: 'Business', price: 39, period: 'user/mo', description: 'For growing companies', features: ['Unlimited users', 'Advanced analytics', 'Priority support', 'Custom workflows', 'API access'], cta: 'Try Free', popular: true },
        { name: 'Enterprise', price: 79, period: 'user/mo', description: 'For large teams', features: ['Everything in Business', 'Dedicated support', 'Custom integrations', 'SLA guarantee'], cta: 'Contact Us' }
    ];

    const stats = [
        { value: 100000, label: 'Projects Delivered', suffix: '+' },
        { value: 95, label: 'Customer Satisfaction', suffix: '%' },
        { value: 24, label: 'Support Available', suffix: '/7' },
        { value: 500, label: 'Enterprise Clients', suffix: '+' }
    ];

    return (
        <div className="min-h-screen" style={{ backgroundColor: theme.colors.background, color: theme.colors.text }}>
            <ThemeNavigator currentThemeSlug={theme.slug} />

            {/* Split Hero */}
            <section className="min-h-screen grid lg:grid-cols-2">
                {/* Left: Content */}
                <div className="flex items-center justify-center px-6 py-20 lg:py-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-xl"
                    >
                        <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: theme.colors.primary + '20', color: theme.colors.primary }}>
                            <span className="font-semibold text-sm">🚀 Trusted by 100,000+ teams</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            {theme.product.tagline}
                        </h1>
                        <p className="text-xl mb-8 opacity-80 leading-relaxed">
                            Bring your team together with intuitive project management. Deliver projects faster, collaborate better, and achieve more.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button variant="primary" size="lg" themeColor={theme.colors.primary}>
                                Start Free Trial <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                            <Button variant="ghost" size="lg">
                                See How It Works
                            </Button>
                        </div>
                        <p className="text-sm opacity-60 mt-6">✓ Free 14-day trial ✓ No credit card required ✓ Setup in 5 minutes</p>
                    </motion.div>
                </div>

                {/* Right: Visual */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                    style={{ backgroundColor: theme.colors.primary + '15' }}
                >
                    <div className="h-full flex items-center justify-center p-12">
                        <div className="w-full max-w-md aspect-square rounded-2xl bg-white shadow-2xl p-8 flex items-center justify-center">
                            <Rocket className="w-48 h-48" style={{ color: theme.colors.primary }} />
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Features with Alternating Layout */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Built for modern teams</h2>
                        <p className="text-xl opacity-70">Everything you need in one place</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature) => (
                            <FeatureCard
                                key={feature.title}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                accent={theme.colors.primary}
                                variant="bordered"
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 px-6" style={{ backgroundColor: theme.colors.primary + '08' }}>
                <div className="max-w-7xl mx-auto">
                    <StatsDisplay stats={stats} accent={theme.colors.primary} />
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">What our customers say</h2>
                    <TestimonialSlider testimonials={testimonials} accent={theme.colors.primary} />
                </div>
            </section>

            {/* Pricing */}
            <section className="py-24 px-6" style={{ backgroundColor: theme.colors.background }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Pricing that scales with you</h2>
                        <p className="text-xl opacity-70">Start free, upgrade when you're ready</p>
                    </div>
                    <PricingTable tiers={pricingTiers} accent={theme.colors.primary} />
                </div>
            </section>

            {/* Final CTA - Split */}
            <section className="grid lg:grid-cols-2 min-h-[400px]">
                <div className="flex items-center justify-center p-12" style={{ backgroundColor: theme.colors.primary }}>
                    <div className="max-w-md text-white">
                        <h3 className="text-3xl font-bold mb-4">Ready to boost your team's productivity?</h3>
                        <p className="text-lg mb-6 opacity-90">Join thousands of teams who trust {theme.product.name}</p>
                        <Button variant="secondary" size="lg">
                            Start Your Free Trial <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </div>
                </div>
                <div className="flex items-center justify-center p-12" style={{ backgroundColor: theme.colors.secondary }}>
                    <div className="max-w-md text-white">
                        <h3 className="text-2xl font-bold mb-4">Have questions?</h3>
                        <p className="mb-6 opacity-90">Our team is here to help you succeed</p>
                        <Button variant="outline" size="lg" themeColor="#ffffff">
                            Talk to Sales
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
