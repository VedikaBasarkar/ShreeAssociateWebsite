module.exports = {
    purge: {
        content: [
            './src/**/*.vue',
            './src/**/*.js',
        ]
    },
    theme: {
        container: {
            center: true,
        },
        screens: {
            'xs': '340px',
            // => @media (min-width: 400px) { ... }

            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
        },
        fontSize: {
            'xs': '.75rem',
            'sm': '.875rem',
            'tiny': '.875rem',
            'base': '1rem',
            'lg': '1.125rem',
            'xl': '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
            '8xl': '6rem',
            '9xl': '7rem',
            '10xl': '10rem',
        },
        extend: {
            colors: {
                primary: '#ffc800',
            },
            fontFamily: {
                bebas: ['Bebas Neue']
            },
            spacing: {
                '78': '20rem',
                '96': '24rem',
                '128': '32rem'
            }
        },
    },
    variants: {},
    plugins: [],
}