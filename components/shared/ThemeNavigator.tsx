"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Palette } from 'lucide-react';
import { themes } from '@/lib/themes';
import { cn } from '@/lib/utils';

interface ThemeNavigatorProps {
    currentThemeSlug?: string;
}

export default function ThemeNavigator({ currentThemeSlug }: ThemeNavigatorProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Floating Navigation Button */}
            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all"
                aria-label="Toggle theme navigator"
            >
                {isOpen ? <X className="w-6 h-6" /> : <Palette className="w-6 h-6" />}
            </motion.button>

            {/* Theme Navigator Modal */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                        />

                        {/* Theme Grid */}
                        <motion.div
                            initial={{ opacity: 0, x: 300 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 300 }}
                            className="fixed right-0 top-0 bottom-0 w-full md:w-[600px] bg-white shadow-2xl z-50 overflow-y-auto"
                        >
                            <div className="p-8">
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <h2 className="text-3xl font-bold text-gray-900">Theme Gallery</h2>
                                        <p className="text-gray-600 mt-1">Browse 10 unique conversion-optimized designs</p>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                        aria-label="Close"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>

                                {/* Home Link */}
                                <Link
                                    href="/"
                                    onClick={() => setIsOpen(false)}
                                    className="block mb-6 p-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all text-center font-semibold"
                                >
                                    ← Back to Gallery Home
                                </Link>

                                {/* Theme Cards */}
                                <div className="space-y-4">
                                    {themes.map((theme, index) => (
                                        <motion.div
                                            key={theme.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <Link
                                                href={`/${theme.slug}`}
                                                onClick={() => setIsOpen(false)}
                                                className={cn(
                                                    "block p-5 rounded-xl border-2 transition-all hover:shadow-lg",
                                                    currentThemeSlug === theme.slug
                                                        ? "border-purple-600 bg-purple-50" : "border-gray-200 hover:border-gray-300"
                                                )}
                                            >
                                                <div className="flex items-start gap-4">
                                                    {/* Color Preview */}
                                                    <div className="flex gap-1">
                                                        <div
                                                            className="w-3 h-12 rounded"
                                                            style={{ backgroundColor: theme.colors.primary }}
                                                        />
                                                        <div
                                                            className="w-3 h-12 rounded"
                                                            style={{ backgroundColor: theme.colors.secondary }}
                                                        />
                                                        <div
                                                            className="w-3 h-12 rounded"
                                                            style={{ backgroundColor: theme.colors.accent }}
                                                        />
                                                    </div>

                                                    {/* Theme Info */}
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <h3 className="font-bold text-gray-900">{theme.name}</h3>
                                                            {currentThemeSlug === theme.slug && (
                                                                <span className="px-2 py-0.5 bg-purple-600 text-white text-xs rounded-full">
                                                                    Current
                                                                </span>
                                                            )}
                                                        </div>
                                                        <p className="text-sm text-gray-600 mb-2">{theme.description}</p>
                                                        <div className="flex items-center gap-2 text-xs">
                                                            <span className="px-2 py-1 bg-gray-100 rounded text-gray-700">
                                                                {theme.product.category}
                                                            </span>
                                                            <span className="text-gray-500">{theme.ideology}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
