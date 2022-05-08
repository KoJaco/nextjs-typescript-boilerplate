const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    // prefix: 'tw-',
    // important: true,
    theme: {
        fontFamily: {
            heading: ['Inter', 'system-ui', 'sans-serif'],
            body: ['Inter', 'system-ui', 'sans-serif'],
        },
        // Ensure these match with .storybook/preview.js
        screens: {
            xs: '375px',
            sm: '600px',
            md: '900px',
            lg: '1200px',
            xl: '1536px',
        },
        colors: {
            // Light and Dark
            transparent: 'transparent',
            white: '#fff',
            light: '#e9ecef',
            gray: {
                100: '#f8f9fa',
                200: '#e9ecef',
                300: '#dee2e6',
                400: '#ced4da',
                500: '#adb5bd',
                600: '#6c757d',
                700: '#495057',
                800: '#343a40',
                900: '#212529',
            },
            dark: '#344767',
            black: '#000',
            // Colors
            blue: '#63B3ED',
            indigo: '#596CFF',
            purple: '6f42c1',
            pink: '#d63384',
            red: '#F56565',
            orange: '#fd7e14',
            yellow: '#FBD38D',
            green: '#81E6D9',
            teal: '#20c997',
            cyan: '#0dcaf0',
            // Main Color theme
            primary: '#cb0c9f',
            secondary: '#8392AB',
            info: '#17c1e8',
            success: '#82d616',
            warning: '#fbcf33',
            danger: '#ea0606',
        },
        // extend: {
        //     spacing: {
        //         '8xl': '96rem',
        //         '9xl': '128rem',
        //     },
        //     borderRadius: {
        //         '4xl': '2rem',
        //     },
        // },
    },
    plugins: [
        // https://tailwindcss.com/docs/plugins
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        plugin(function ({ addUtilities }) {
            addUtilities({
                '.content-auto': {
                    'content-visibility': 'auto',
                },
                '.content-hidden': {
                    'content-visibility': 'hidden',
                },
                '.content-visible': {
                    'content-visibility': 'visible',
                },
            });
        }),
    ],
};
