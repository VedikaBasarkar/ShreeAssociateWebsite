<template>
  <div id="scroll-container">
      <Navbar/>
      <section class="section" id="home">
        <Landing/>
      </section>
      <section class="section" id="home">
        <Product />
      </section>
      <Footer/>
  </div>
</template>
<script>
import Navbar from '~/components/Navbar.vue'
import Landing from '~/layouts/Landing'
import Product from '~/layouts/Product'
import Footer from '~/components/Footer.vue'


export default {
  components:{
    Navbar,
    Landing,
    Product,
    Footer,
  },
}
</script>


