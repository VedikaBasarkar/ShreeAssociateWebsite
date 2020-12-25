const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')


const postcssPlugins = [
        tailwind(),
    ]
    // if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
    siteName: 'ShreeAssociateSolar',
    siteDescription: "Looking for coworking spaces in Bengaluru? 🥇 Nomad Spaces provides premium and affordable coworking offices for rent in Bangalore. Price starts @ ₹4000.",
    siteUrl: 'https://shreeassociatesolar.com/',
    titleTemplate: `ShreeAssociateSolar`,
    icon: 'src/favicon.png',
    css: {
        loaderOptions: {
            postcss: {
                plugins: postcssPlugins,
            },
        },
    },
}