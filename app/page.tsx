"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { themes } from '@/lib/themes';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full mb-8 font-semibold">
              ✨ 10 Unique High-Conversion Designs
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              SaaS Landing Page<br />Theme Gallery
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              Explore 10 professionally crafted landing pages, each with unique layouts and design aesthetics.
              Built with Conversion-Centered Design principles, Next.js SSR, and Tailwind CSS.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#gallery"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold text-lg hover:shadow-xl transition-all inline-flex items-center justify-center"
              >
                Explore Themes <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="px-6 py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '10 Unique Layouts', desc: 'From classic to brutalist, each theme showcases different design approaches' },
              { title: 'SSR with Next.js', desc: 'Server-side rendered for optimal SEO and performance' },
              { title: 'CCD Principles', desc: 'Conversion-Centered Design with behavioral UX patterns' }
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Theme Gallery */}
      <section id="gallery" className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Choose Your Design
            </h2>
            <p className="text-xl text-gray-600">
              Click any card to view the full landing page
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {themes.map((theme, index) => (
              <motion.div
                key={theme.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/variances/${theme.slug}`}>
                  <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-gray-200">
                    {/* Color Preview Banner */}
                    <div
                      className="h-32 relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 50%, ${theme.colors.accent} 100%)`
                      }}
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">
                            {theme.name}
                          </h3>
                          <p className="text-sm text-gray-500 font-medium">
                            {theme.product.category}
                          </p>
                        </div>
                        <div className="text-gray-400 group-hover:text-purple-600 transition-colors">
                          <ArrowRight className="w-6 h-6" />
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                        {theme.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {theme.ideology.split(', ').slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-gray-700">
                            Layout: {theme.layout.replace('Layout', '').replace(/(\d+)/, ' $1')}
                          </span>
                          <span className="text-sm font-semibold text-purple-600 group-hover:underline">
                            View Page →
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">High-Conversion SaaS Landing Pages</h3>
            <p className="text-gray-400">10 unique themes built with Next.js, TypeScript & Tailwind CSS</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
            <span className="text-gray-600">|</span>
            <span className="text-gray-500">Built with ❤️ using Conversion-Centered Design</span>
          </div>
          <p className="text-sm text-gray-500">© 2026 SaaS Landing Pages. All themes are fully responsive and SSR-ready.</p>
        </div>
      </footer>
    </div>
  );
}
