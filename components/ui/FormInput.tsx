"use client";

import { InputHTMLAttributes, forwardRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    success?: string;
    helperText?: string;
    accent?: string;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
    ({ className, label, error, success, helperText, accent = '#2563eb', ...props }, ref) => {
        const [isFocused, setIsFocused] = useState(false);

        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {label}
                    </label>
                )}
                <div className="relative">
                    <input
                        ref={ref}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        className={cn(
                            'w-full px-4 py-3 border-2 rounded-lg transition-all outline-none',
                            'placeholder:text-gray-400',
                            error && 'border-red-500 focus:border-red-500',
                            success && 'border-green-500 focus:border-green-500',
                            !error && !success && 'border-gray-200 focus:border-opacity-100',
                            className
                        )}
                        style={!error && !success && isFocused ? { borderColor: accent } : undefined}
                        {...props}
                    />
                    {error && (
                        <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500" />
                    )}
                    {success && (
                        <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                    )}
                </div>
                {error && (
                    <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                        {error}
                    </p>
                )}
                {success && (
                    <p className="mt-1.5 text-sm text-green-600 flex items-center gap-1">
                        {success}
                    </p>
                )}
                {helperText && !error && !success && (
                    <p className="mt-1.5 text-sm text-gray-500">{helperText}</p>
                )}
            </div>
        );
    }
);

FormInput.displayName = 'FormInput';

export default FormInput;
