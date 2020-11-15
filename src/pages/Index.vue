<template>
  <div id="scroll-container">
      <Navbar/>
      <section class="section" id="home">
        <Landing/>
      </section>
      <section class="section" id="mainServices">
        <MainServices/>
      </section>
      <section class="section" id="subServices">
        <SubServices/>
      </section>
      <section class="section" id="pricings">
        <Pricing/>
      </section>
      <section class="section" id="facilities">
        <Facilities/>
      </section>
      <Footer/>
  </div>
</template>
<script>
import Navbar from '~/components/Navbar.vue'
import Landing from '~/layouts/Landing'
import MainServices from '~/layouts/MainServices'
import SubServices from '~/layouts/SubServices'
import Facilities from '~/layouts/Facilities'
import Pricing from '~/layouts/Pricing'
import Footer from '~/components/Footer.vue'

export default {
  components:{
    Navbar,
    Landing,
    MainServices,
    SubServices,
    Facilities,
    Pricing,
    Footer,
  },
}
</script>


