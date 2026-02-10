"use client";

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    themeColor?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isLoading, themeColor = '#2563eb', children, ...props }, ref) => {
        const sizeClasses = {
            sm: 'px-4 py-2 text-sm',
            md: 'px-6 py-3 text-base',
            lg: 'px-8 py-4 text-lg'
        };

        const variantClasses = {
            primary: `text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all`,
            secondary: `bg-gray-100 text-gray-900 font-semibold hover:bg-gray-200 transition-all`,
            ghost: `bg-transparent hover:bg-gray-100 text-gray-700 transition-all`,
            outline: `border-2 bg-transparent font-semibold hover:bg-opacity-10 transition-all`
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    'rounded-lg font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden',
                    sizeClasses[size],
                    variantClasses[variant],
                    className
                )}
                style={variant === 'primary' ? { backgroundColor: themeColor } :
                    variant === 'outline' ? { borderColor: themeColor, color: themeColor } : undefined}
                disabled={isLoading}
                {...props}
            >
                {isLoading ? (
                    <span className="flex items-center justify-center">
                        <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Loading...
                    </span>
                ) : children}
            </motion.button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
