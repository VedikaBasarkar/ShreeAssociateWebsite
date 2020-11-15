<template>
    <div class="bg-gray-200 py-10">
      <div class="container flex flex-col items-center justify-center px-10">
        <div class="text-center font-bold text-3xl md:text-5xl servicesHeadingText">Facilities.</div>
        <div class="text-center font-light text-base servicesDescText mb-6 lg:mx-40">Discover the Facilities</div>
      </div>
      <!--  -->
    </div>
</template>
<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
export default {

  mounted(){
    gsap.registerPlugin(ScrollTrigger)
    gsap.from('.servicesLine',{scrollTrigger:{ trigger: '.servicesLine', toggleActions: 'restart none none none ' },ease: "power4", y: -40, duration:2})
  },
}
</script>
<style scoped>

</style>