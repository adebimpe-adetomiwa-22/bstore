/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {
                main: '#F15A24',
                primary: '#321D52',
                secondary: '#F6F6F6',
                tertiary: '#BCADAD',
                rblue: 'rgba(50, 29, 82, 0.9)',
            },
            screen: {
                xs: '320px',
            },
        },
    },
    plugins: [tailwindScrollbar],
};
