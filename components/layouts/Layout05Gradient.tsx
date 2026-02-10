"use client";

import { motion } from 'framer-motion';
import { Palette, Layers, Sparkles, Workflow } from 'lucide-react';
import Button from '@/components/ui/Button';
import FeatureCard from '@/components/ui/FeatureCard';
import PricingTable from '@/components/ui/PricingTable';
import ThemeNavigator from '@/components/shared/ThemeNavigator';
import { Theme } from '@/lib/themes';

interface Layout05Props {
    theme: Theme;
}

export default function Layout05Gradient({ theme }: Layout05Props) {
    const features = [
        { icon: Palette, title: 'Design System', description: 'Build consistent, beautiful designs with shared components' },
        { icon: Layers, title: 'Version Control', description: 'Track every change and collaborate with confidence' },
        { icon: Sparkles, title: 'AI-Powered', description: 'Get intelligent suggestions to speed up your workflow' },
        { icon: Workflow, title: 'Integrations', description: 'Connect with your favorite design and dev tools' }
    ];

    const pricingTiers = [
        { name: 'Free', price: 0, period: 'forever', description: 'For side projects', features: ['3 projects', '100 MB storage', 'Basic features'], cta: 'Get Started' },
        { name: 'Pro', price: 12, period: 'user/mo', description: 'For professionals', features: ['Unlimited projects', '100 GB storage', 'Advanced features', 'Version history'], cta: 'Try Free', popular: true },
        { name: 'Team', price: 45, period: 'user/mo', description: 'For teams', features: ['Everything in Pro', 'Team libraries', 'Admin controls', 'Priority support'], cta: 'Try Free' }
    ];

    return (
        <div className="min-h-screen" style={{ backgroundColor: theme.colors.background }}>
            <ThemeNavigator currentThemeSlug={theme.slug} />

            {/* Gradient Hero */}
            <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
                {/* Animated Gradient Background */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 50%, ${theme.colors.accent} 100%)`,
                    }}
                >
                    <motion.div
                        animate={{
                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: 'linear'
                        }}
                        className="absolute inset-0"
                        style={{
                            background: `linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)`,
                            backgroundSize: '200% 200%'
                        }}
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-6 py-3 rounded-full mb-8 bg-white/20 backdrop-blur-md border border-white/30">
                            <span className="font-bold text-white">🎨 Trusted by 500k+ designers</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black mb-8 text-white leading-tight">
                            {theme.product.tagline}
                        </h1>

                        <p className="text-2xl md:text-3xl mb-12 text-white/95 max-w-3xl mx-auto leading-relaxed">
                            The ultimate design collaboration platform. Create, share, and iterate faster than ever before.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="secondary" size="lg">
                                Get Started Free
                            </Button>
                            <Button variant="ghost" size="lg" className="bg-white/10 hover:bg-white/20 text-white border border-white/30">
                                See Examples
                            </Button>
                        </div>

                        <p className="text-white/80 mt-8">✨ No credit card required • 💎 Forever free plan available</p>
                    </motion.div>
                </div>

                {/* Floating Elements */}
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-20 left-20 w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md hidden lg:block"
                />
                <motion.div
                    animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-white/10 backdrop-blur-md hidden lg:block"
                />
            </section>

            {/* Features */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-4" style={{ color: theme.colors.text }}>Designed for creators</h2>
                        <p className="text-xl text-gray-600">Everything you need to bring your ideas to life</p>
                    </div>

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

            {/* Gradient Feature Section */}
            <section
                className="py-32 px-6 text-white"
                style={{
                    background: `linear-gradient(90deg, ${theme.colors.secondary} 0%, ${theme.colors.primary} 100%)`
                }}
            >
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-5xl font-bold mb-6">Built for modern workflows</h2>
                    <p className="text-xl opacity-90 mb-12">Seamlessly integrate with tools you already love</p>
                    <div className="flex flex-wrap justify-center gap-8">
                        {['Figma', 'Sketch', 'Adobe XD', 'GitHub', 'Slack', 'Notion'].map((tool) => (
                            <div key={tool} className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-lg font-semibold">
                                {tool}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-4" style={{ color: theme.colors.text }}>Choose your plan</h2>
                        <p className="text-xl text-gray-600">Start free, scale as you grow</p>
                    </div>

                    <PricingTable tiers={pricingTiers} accent={theme.colors.primary} />
                </div>
            </section>

            {/* Final CTA with Gradient */}
            <section
                className="py-32 px-6 text-white"
                style={{
                    background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.accent} 100%)`
                }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-6xl font-bold mb-6">Ready to create magic?</h2>
                    <p className="text-2xl opacity-90 mb-10">Join half a million designers who trust {theme.product.name}</p>
                    <Button variant="secondary" size="lg">
                        Start Creating for Free
                    </Button>
                </div>
            </section>
        </div>
    );
}
