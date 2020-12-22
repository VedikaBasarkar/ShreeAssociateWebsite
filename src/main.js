import Vue from 'vue'
import Vuex from 'vuex'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
require('~/main.css')
import PatterCSS from 'pattern.css/dist/pattern.css'
import VueRellax from 'vue-rellax'
import VueScrollTo from 'vue-scrollto'
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

import { extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";

Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule]);
});

export default function(Vue, { router, head, isClient, appOptions }) {
    head.script.push({
        src: 'https://instant.page/5.1.0',
        type: 'module',
        integrity: 'sha384-by67kQnR+pyfy8yWP4kPO12fHKRLHZPfEsiSXR8u2IKcTdxD805MGUXBzVPnkLHw',
        body: true
    }, {
        type: "application/ld+json",
        json: {
            "@context": "http://www.schema.org",
            "@type": "Organization",
            "name": "",
            "url": "",
            "logo": "",
            "description": "",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "",
                "addressLocality": "",
                "addressRegion": "",
                "postalCode": ""
            }
        }
    })
    head.link.push()

    let copyRightNotice = `\u00a9 wwww.shreeassociatesolar.com, ${ new Date().getFullYear() }. All rights reserved`;

    head.meta.push({
        key: 'keywords',
        name: 'keywords',
        content: ''
    }, {
        key: 'description',
        name: 'description',
        content: ''
    }, {
        name: "theme-color",
        color: "#fff"
    }, {
        name: "msapplication-TileColor",
        content: "#fff"
    }, {
        name: "msapplication-TileImage",
        content: ""
    }, {
        name: 'copyright',
        content: copyRightNotice
    }, {
        key: "og:type",
        property: "og:type",
        content: ''
    }, {
        key: "og:description",
        property: "og:description",
        content: ''
    }, {
        key: "og:image",
        property: "og:image",
        content: ''
    }, {
        property: "og:site_name",
        content: ''
    }, {
        key: "og:image:secure_url",
        property: "og:image:secure_url",
        content: ''
    }, {
        property: "og:url",
        content: ''
    }, {
        name: "twitter:card",
        content: 'twitter:card'
    }, {
        name: "twitter:description",
        content: ''
    }, {
        name: "twitter:title",
        content: ''
    }, {
        name: "twitter:site",
        content: ''
    }, {
        name: "twitter:creator",
        content: ''
    }, {
        name: "twitter:image",
        content: ''
    }, );
    // 
    // if (isClient && process.env.NODE_ENV === 'production') {
    //     require('./registerServiceWorker')
    // }

    Vue.use(VueScrollTo, {
        container: "body",
        duration: 800,
        easing: "ease",
        offset: -10,
        force: true,
        cancelable: true,
        onStart: false,
        onDone: false,
        onCancel: false,
        x: false,
        y: true
    })
    Vue.use(Vuesax)
    Vue.use(PatterCSS)
    Vue.use(VueRellax)
    Vue.use(CoolLightBox)

}