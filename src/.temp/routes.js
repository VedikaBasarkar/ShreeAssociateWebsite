const c1 = () => import(/* webpackChunkName: "page--src--pages--services-vue" */ "/Users/vedikabasarkar/Documents/ShreeAssociateWebsite/src/pages/services.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--products-vue" */ "/Users/vedikabasarkar/Documents/ShreeAssociateWebsite/src/pages/products.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/Users/vedikabasarkar/Documents/ShreeAssociateWebsite/src/pages/contact.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/vedikabasarkar/Documents/ShreeAssociateWebsite/src/pages/about.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/vedikabasarkar/Documents/ShreeAssociateWebsite/src/pages/404.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/vedikabasarkar/Documents/ShreeAssociateWebsite/src/pages/Index.vue")

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
    path: "/contact/",
    component: c3
  },
  {
    path: "/about/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
