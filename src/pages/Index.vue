<template>
  <div id="scroll-container">
      <Navbar/>
      <section class="section">
        <Landing/>
      </section>
      <section class="section">
        <Product />
      </section>
      <section class="section">
        <Advantages />
      </section>
      <Footer/>
  </div>
</template>
<script>
import Navbar from '~/components/Navbar.vue'
import Landing from '~/layouts/Landing'
import Product from '~/layouts/Product'
import Advantages from '~/layouts/Advantages'
import Footer from '~/components/Footer.vue'


export default {
  components:{
    Navbar,
    Landing,
    Product,
    Advantages,
    Footer,
  },
}
</script>


