/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                roboto: ['Roboto', 'sans-serif'],
            },
            backgroundImage: {
                'signup-banner': "url('/public/ataraxia-signupbanner.png')",
            },
            colors: {
                primary: {
                    100: '#FF99B6',
                    200: '#FF5C8A',
                    300: '#FF336D',
                    400: '#FF0A50',
                    500: '#E0003F',
                    600: '#CC003A',
                    700: '#B80034',
                    800: '#A3002E',
                    900: '#8F0028',
                },
                secondary: {
                    100: '#C1ED82',
                    200: '#AFE85E',
                    300: '#9DE33B',
                    400: '#8AD61F',
                    500: '#7FC41C',
                    600: '#73B319',
                    700: '#67A117',
                    800: '#5C8F14',
                    900: '#507D12',
                },
                tertiary: {
                    300: '#A525D0',
                    400: '#8A1FAD',
                    500: '#6A1886',
                },
                quaternary: {
                    300: '#FE855D',
                    400: '#FE6734',
                    500: '#FE4001',
                },
                quinary: {
                    500: '#FFE50F',
                },
            },
        },
    },
    plugins: [
        require('@headlessui/tailwindcss'),
        require('@tailwindcss/typography'),
    ],
}
