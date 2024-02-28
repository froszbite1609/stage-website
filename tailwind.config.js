/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {},
        colors: {
            transparent: 'transparent',
            black: 'hsl(0, 0%, 0%)',
            white: 'hsl(0, 0%, 100%)',
            bgLight: 'hsl(0, 100%, 100%)',
            bgDark: 'hsl(0, 0%, 10%)',
            bgSoft: {
                light: 'hsl(0, 0%, 98%)',
                dark: 'hsl(0, 0%, 14%)'
            },
            bgMute: {
                light: 'hsl(0, 0%, 95%)',
                dark: 'hsl(0, 0%, 18%)'
            },
            divider: {
                light: 'hsla(0, 0%, 24%, 0.29)',
                dark: 'hsla(0, 0%, 33%, 0.65)'
            },
            dividerLight: {
                light: 'hsla(0, 0%, 24%, 0.12)',
                dark: 'hsla(0, 0%, 33%, 0.48)'
            },
            modalBG: 'hsla(227, 14%, 46%, 0.8)',
            textPrimary: {
                light: 'hsl(208, 37%, 20%)',
                dark: 'hsla(0, 0%, 100%, 0.87)'
            },
            textSecondary: {
                light: 'hsla(0, 0%, 24%, 0.7)',
                dark: 'hsla(0, 0%, 92%, 0.6)'
            },
            mainColour: {
                light: 'hsl(183, 49%, 63%)',
                dark: 'hsl(183, 49%, 37%)'
            }
        }
    },
    plugins: []
}
