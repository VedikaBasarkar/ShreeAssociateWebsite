const c1 = () => import(/* webpackChunkName: "page--src-pages-services-vue" */ "C:\\projects\\external\\Vedika-ShreeAssociateWebsite\\src\\pages\\services.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-products-vue" */ "C:\\projects\\external\\Vedika-ShreeAssociateWebsite\\src\\pages\\products.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-gallery-vue" */ "C:\\projects\\external\\Vedika-ShreeAssociateWebsite\\src\\pages\\gallery.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-contact-vue" */ "C:\\projects\\external\\Vedika-ShreeAssociateWebsite\\src\\pages\\contact.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "C:\\projects\\external\\Vedika-ShreeAssociateWebsite\\src\\pages\\about.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "C:\\projects\\external\\Vedika-ShreeAssociateWebsite\\src\\pages\\404.vue")
const c7 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\projects\\external\\Vedika-ShreeAssociateWebsite\\src\\pages\\Index.vue")

export default [
  {
    path: "/services/",
    component: c1
  },
  {
    path: "/products/",
    component: c2
  },
  {
    path: "/gallery/",
    component: c3
  },
  {
    path: "/contact/",
    component: c4
  },
  {
    path: "/about/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    name: "home",
    path: "/",
    component: c7
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]
