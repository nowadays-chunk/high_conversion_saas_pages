"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    avatar?: string;
}

interface TestimonialSliderProps {
    testimonials: Testimonial[];
    accent?: string;
}

export default function TestimonialSlider({ testimonials, accent = '#2563eb' }: TestimonialSliderProps) {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((current + 1) % testimonials.length);
    const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

    return (
        <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
                >
                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4">
                        {[...Array(testimonials[current].rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-current" style={{ color: accent }} />
                        ))}
                    </div>

                    {/* Testimonial Content */}
                    <blockquote className="text-xl md:text-2xl font-medium text-gray-900 mb-6 leading-relaxed">
                        "{testimonials[current].content}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                        <div
                            className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl"
                            style={{ backgroundColor: accent }}
                        >
                            {testimonials[current].name.charAt(0)}
                        </div>
                        <div>
                            <div className="font-bold text-gray-900">{testimonials[current].name}</div>
                            <div className="text-gray-600">{testimonials[current].role} at {testimonials[current].company}</div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-6">
                <button
                    onClick={prev}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={next}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label="Next testimonial"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-2 rounded-full transition-all ${index === current ? 'w-8' : 'w-2 bg-gray-300'
                            }`}
                        style={index === current ? { backgroundColor: accent } : undefined}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
