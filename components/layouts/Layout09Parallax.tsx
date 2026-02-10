"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Eye, Lock, AlertTriangle } from 'lucide-react';
import { useRef } from 'react';
import Button from '@/components/ui/Button';
import FeatureCard from '@/components/ui/FeatureCard';
import PricingTable from '@/components/ui/PricingTable';
import ThemeNavigator from '@/components/shared/ThemeNavigator';
import { Theme } from '@/lib/themes';

interface Layout09Props {
    theme: Theme;
}

export default function Layout09Parallax({ theme }: Layout09Props) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

    const features = [
        { icon: Shield, title: 'Threat Detection', description: 'AI-powered threat detection in real-time' },
        { icon: Eye, title: 'Monitoring', description: '24/7 security monitoring and alerts' },
        { icon: Lock, title: 'Encryption', description: 'Military-grade data encryption' },
        { icon: AlertTriangle, title: 'Incident Response', description: 'Rapid response to security incidents' }
    ];

    const pricingTiers = [
        { name: 'Essential', price: 99, period: 'month', description: 'For small businesses', features: ['Basic protection', 'Daily scans', 'Email alerts', 'Support 9-5'], cta: 'Get Protected' },
        { name: 'Advanced', price: 299, period: 'month', description: 'For growing companies', features: ['Advanced protection', 'Real-time monitoring', 'Instant alerts', '24/7 support', 'Incident response'], cta: 'Get Protected', popular: true },
        { name: 'Enterprise', price: 999, period: 'month', description: 'For large organizations', features: ['Complete protection', 'Dedicated team', 'Custom solutions', 'SLA guarantee', 'Compliance tools'], cta: 'Contact Us' }
    ];

    return (
        <div className="min-h-screen" style={{ backgroundColor: theme.colors.background }}>
            <ThemeNavigator currentThemeSlug={theme.slug} />

            {/* Parallax Hero */}
            <section ref={ref} className="relative h-screen overflow-hidden">
                {/* Background Layers */}
                <motion.div
                    style={{ y: y1 }}
                    className="absolute inset-0 z-0"
                >
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `linear-gradient(135deg, ${theme.colors.primary}20 0%, ${theme.colors.secondary}20 100%)`,
                        }}
                    />
                    {/* Pattern Overlay */}
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                        backgroundSize: '50px 50px'
                    }} />
                </motion.div>

                <motion.div
                    style={{ y: y2 }}
                    className="absolute inset-0 z-10 pointer-events-none"
                >
                    {/* Floating Shield Icons */}
                    <Shield
                        className="absolute top-20 left-20 w-24 h-24 opacity-20"
                        style={{ color: theme.colors.primary }}
                    />
                    <Lock
                        className="absolute bottom-40 right-32 w-32 h-32 opacity-15"
                        style={{ color: theme.colors.accent }}
                    />
                </motion.div>

                {/* Content */}
                <motion.div
                    style={{ opacity }}
                    className="relative z-20 h-full flex items-center justify-center px-6"
                >
                    <div className="max-w-5xl text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div
                                className="inline-block px-6 py-3 rounded-full mb-8 text-white font-semibold"
                                style={{ backgroundColor: theme.colors.primary }}
                            >
                                🛡️ Protecting 10,000+ businesses worldwide
                            </div>

                            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight" style={{ color: theme.colors.text }}>
                                {theme.product.tagline}
                            </h1>

                            <p className="text-2xl md:text-3xl mb-12 leading-relaxed max-w-3xl mx-auto" style={{ color: theme.colors.text, opacity: 0.85 }}>
                                Advanced AI-powered cybersecurity that adapts to threats before they happen. Protect what matters most.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="primary" size="lg" themeColor={theme.colors.primary}>
                                    Free Security Audit
                                </Button>
                                <Button variant="outline" size="lg" themeColor={theme.colors.primary}>
                                    See How It Works
                                </Button>
                            </div>

                            <p className="text-sm mt-8" style={{ color: theme.colors.text, opacity: 0.6 }}>
                                ✓ No credit card required ✓ Setup in 5 minutes ✓ SOC 2 certified
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
                    style={{ color: theme.colors.primary }}
                >
                    <div className="flex flex-col items-center">
                        <span className="text-sm font-medium mb-2">Scroll to explore</span>
                        <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{ borderColor: theme.colors.primary }}>
                            <div className="w-1 h-3 rounded-full mt-2" style={{ backgroundColor: theme.colors.primary }} />
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Layered Features Section */}
            <section className="py-32 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-bold mb-6" style={{ color: theme.colors.text }}>
                            Layers of protection
                        </h2>
                        <p className="text-xl" style={{ color: theme.colors.text, opacity: 0.7 }}>
                            Comprehensive security at every level
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <FeatureCard
                                    icon={feature.icon}
                                    title={feature.title}
                                    description={feature.description}
                                    accent={theme.colors.primary}
                                    variant="elevated"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats with Parallax */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div
                    className="absolute inset-0"
                    style={{ backgroundColor: theme.colors.primary + '10' }}
                />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {[
                            { value: '99.99%', label: 'Threat Detection' },
                            { value: '<1min', label: 'Response Time' },
                            { value: '10K+', label: 'Businesses Protected' },
                            { value: '100M+', label: 'Threats Blocked' }
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-5xl font-bold mb-3" style={{ color: theme.colors.primary }}>
                                    {stat.value}
                                </div>
                                <div className="text-lg font-medium" style={{ color: theme.colors.text, opacity: 0.7 }}>
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
                        <h2 className="text-4xl font-bold mb-4" style={{ color: theme.colors.text }}>
                            Protection for every business size
                        </h2>
                        <p className="text-xl" style={{ color: theme.colors.text, opacity: 0.7 }}>
                            Choose your security level
                        </p>
                    </div>

                    <PricingTable tiers={pricingTiers} accent={theme.colors.primary} />
                </div>
            </section>

            {/* Final CTA */}
            <section
                className="py-32 px-6 text-white relative overflow-hidden"
                style={{ backgroundColor: theme.colors.primary }}
            >
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        Don't wait for a breach
                    </h2>
                    <p className="text-2xl mb-10 opacity-90">
                        Start protecting your business today with {theme.product.name}
                    </p>
                    <Button variant="secondary" size="lg">
                        Get Your Free Security Audit
                    </Button>
                </div>
            </section>
        </div>
    );
}
