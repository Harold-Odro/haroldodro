import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                'accent-blue': '#4070f4',
                'accent-blue-light': '#5c85f6',
                'accent-blue-dark': '#3560e0',
            },
            animation: {
                'gradient-shift': 'gradient-shift 8s ease infinite',
                'float': 'float 6s ease-in-out infinite',
                'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
                'fadeIn': 'fadeIn 0.8s ease-out forwards',
            },
            keyframes: {
                'gradient-shift': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'pulse-subtle': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.8' },
                },
                'fadeIn': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            backdropBlur: {
                'xs': '2px',
            },
            boxShadow: {
                'soft': '0 2px 15px rgba(0, 0, 0, 0.05)',
                'glow': '0 0 15px rgba(64, 112, 244, 0.5)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            typography: {
                DEFAULT: {
                    css: {
                        maxWidth: '65ch',
                        color: 'inherit',
                        a: {
                            color: '#4070f4',
                            '&:hover': {
                                color: '#3560e0',
                            },
                        },
                    },
                },
            },
        },
    },

    plugins: [
        forms,
        function({ addUtilities }) {
            addUtilities({
                '.text-shadow': {
                    'text-shadow': '0 2px 4px rgba(0, 0, 0, 0.1)',
                },
                '.text-shadow-lg': {
                    'text-shadow': '0 4px 8px rgba(0, 0, 0, 0.12)',
                },
                '.glassmorphism': {
                    'background': 'rgba(255, 255, 255, 0.1)',
                    'backdrop-filter': 'blur(8px)',
                },
            });
        },
    ],
};