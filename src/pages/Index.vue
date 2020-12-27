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
      <section class="section">
        <Testimonial />
      </section>
      <ContactForm />
      <Footer/>
  </div>
</template>
<script>
import Navbar from '~/components/Navbar.vue'
import Landing from '~/layouts/Landing'
import Product from '~/layouts/Product'
import Advantages from '~/layouts/Advantages'
import Testimonial from '~/layouts/Testimonial'
import ContactForm from '~/components/ContactForm.vue'
import Footer from '~/components/Footer.vue'


export default {
  components:{
    Navbar,
    Landing,
    Product,
    Advantages,
    Testimonial,
    ContactForm,
    Footer,
  },
}
</script>


