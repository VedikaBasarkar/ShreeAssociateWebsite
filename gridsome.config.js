const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')


const postcssPlugins = [
        tailwind(),
    ]
    // if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
    siteName: 'ShreeAssociateSolar',
    siteDescription: "We provide best solar products and othere services. We do customizatin according to you need. Do contact on 8975707571 and 9420234355",
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