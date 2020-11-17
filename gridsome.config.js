const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const postcssPlugins = [
        tailwind(),
    ]
    // if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
    siteName: 'ShreeAssociateSolar',
    siteDescription: "Solar products and services",
    siteUrl: '',
    titleTemplate: `ShreeAssociateSolar`,
    icon: 'src/favicon.png',
    plugins: [{
        use: '@allanchain/gridsome-plugin-pwa',
        options: {
            manifestOptions: {
                name: "",
                short_name: '',
                description: '',
                display: 'standalone',
                gcm_sender_id: undefined,
                start_url: '/',
                categories: ['education'],
                lang: 'en-GB',
                dir: 'auto',
                theme_color: '#ffc800',
                background_color: '#fff',
                "icons": [{
                    "src": "",
                    "sizes": "192x192"
                }],
            },
            appleMobileWebAppStatusBarStyle: 'default',
            manifestPath: 'manifest.json',
            msTileColor: '#1f74ff',
            workboxOptions: {
                cacheId: 'awesome-pwa',
                globPatterns: ['assets/@(js|css)/*', 'index.html'],
                skipWaiting: true
            }
        }
    }],
    css: {
        loaderOptions: {
            postcss: {
                plugins: postcssPlugins,
            },
        },
    },
}