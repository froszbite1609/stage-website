/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {},
        colors: {
            black: 'hsl(0, 0%, 0%)',
            white: 'hsl(0, 100%, 100%)',
            waikawa: {
                50: 'hsl(210, 37%, 97%)',
                100: 'hsl(217, 35%, 93%)',
                200: 'hsl(218, 38%, 87%)',
                300: 'hsl(216, 38%, 78%)',
                400: 'hsl(217, 37%, 68%)',
                500: 'hsl(221, 36%, 60%)',
                600: 'hsl(226, 32%, 52%)',
                700: 'hsl(228, 30%, 48%)',
                800: 'hsl(229, 28%, 40%)',
                900: 'hsl(229, 25%, 33%)',
                950: 'hsl(232, 21%, 21%)'
            },
            background: {
                light: 'hsl(0, 100%, 100%)',
                dark: 'hsl(0, 0%, 10%)'
            },
            'background-soft': {
                light: 'hsl(0, 0%, 98%)',
                dark: 'hsl(0, 0%, 14%)'
            },
            'background-mute': {
                light: 'hsl(0, 0%, 95%)',
                dark: 'hsl(0, 0%, 18%)'
            },
            divider: {
                light: 'hsla(0, 0%, 24%, 0.29)',
                dark: 'hsla(0, 0%, 33%, 0.65)'
            },
            'divider-light': {
                light: 'hsla(0, 0%, 24%, 0.12)',
                dark: 'hsla(0, 0%, 33%, 0.48)'
            },
            'modal-background': 'hsla(227, 14%, 46%, 0.8)'
        }
    },
    plugins: []
}
