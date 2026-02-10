"use client";

import { motion } from 'framer-motion';
import { Code2, Terminal, Zap, Lock, Database, Cloud } from 'lucide-react';
import Button from '@/components/ui/Button';
import FeatureCard from '@/components/ui/FeatureCard';
import PricingTable from '@/components/ui/PricingTable';
import ThemeNavigator from '@/components/shared/ThemeNavigator';
import { Theme } from '@/lib/themes';

interface Layout06Props {
    theme: Theme;
}

export default function Layout06DarkMode({ theme }: Layout06Props) {
    const features = [
        { icon: Code2, title: 'RESTful APIs', description: 'Clean, intuitive REST APIs built for developers' },
        { icon: Terminal, title: 'CLI Tools', description: 'Powerful command-line interface for automation' },
        { icon: Zap, title: 'Lightning Fast', description: 'Sub-100ms response times globally' },
        { icon: Lock, title: 'Secure by Default', description: 'Enterprise-grade security built-in' },
        { icon: Database, title: 'Scalable', description: 'From prototype to millions of requests' },
        { icon: Cloud, title: 'Global CDN', description: 'Distributed worldwide for low latency' }
    ];

    const pricingTiers = [
        { name: 'Hobby', price: 0, period: 'month', description: 'For personal projects', features: ['100K API calls/mo', 'Community support', 'Basic analytics'], cta: 'Get Started' },
        { name: 'Pro', price: 29, period: 'month', description: 'For growing apps', features: ['1M API calls/mo', 'Email support', 'Advanced analytics', 'Webhooks'], cta: 'Start Trial', popular: true },
        { name: 'Enterprise', price: 199, period: 'month', description: 'For large scale', features: ['Unlimited calls', '24/7 support', 'Custom SLA', 'Dedicated infra'], cta: 'Contact Us' }
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
            <ThemeNavigator currentThemeSlug={theme.slug} />

            {/* Dark Hero with Code Snippet */}
            <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-green-400 font-semibold text-sm">All systems operational</span>
                        </div>

                        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                            {theme.product.tagline}
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Developer-first API platform with best-in-class documentation, SDKs, and support. Build faster with our powerful APIs.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button variant="primary" size="lg" themeColor={theme.colors.primary}>
                                Get API Key
                            </Button>
                            <Button variant="outline" size="lg" themeColor={theme.colors.primary}>
                                Read Docs
                            </Button>
                        </div>

                        <p className="text-sm text-gray-500 mt-6">✓ Free tier available ✓ No credit card required</p>
                    </motion.div>

                    {/* Right: Code Snippet */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="bg-gray-800/50 backdrop-blur border border-green-500/20 rounded-xl p-6 shadow-2xl shadow-green-500/10">
                            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-700">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <span className="text-sm text-gray-400 ml-2">api_example.js</span>
                            </div>
                            <pre className="text-sm font-mono text-green-400 overflow-x-auto">
                                <code>{`// Initialize client
const api = new APIHub({
  apiKey: 'your_api_key'
});

// Make request
const data = await api.get('/users');
console.log(data);

// Response: 200 OK
// ✓ 42ms latency`}</code>
                            </pre>
                        </div>

                        {/* Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl blur-xl -z-10" />
                    </motion.div>
                </div>
            </section>

            {/* Features on Dark */}
            <section className="py-24 px-6 bg-gray-800/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Built for developers</h2>
                        <p className="text-xl text-gray-400">Everything you need to integrate and scale</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

            {/* Pricing */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Simple pricing, no surprises</h2>
                        <p className="text-xl text-gray-400">Pay as you grow</p>
                    </div>

                    <PricingTable tiers={pricingTiers} accent={theme.colors.primary} />
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent" />
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                        Start building today
                    </h2>
                    <p className="text-xl text-gray-300 mb-10">Join 10,000+ developers building with {theme.product.name}</p>
                    <Button variant="primary" size="lg" themeColor={theme.colors.primary}>
                        Get Your API Key
                    </Button>
                </div>
            </section>
        </div>
    );
}
