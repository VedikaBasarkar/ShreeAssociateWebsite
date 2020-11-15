<template>
  <div class="lg:h-screen">

  </div>
</template>
<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
export default {
  components:{
    gsap,
  
  },
  mounted(){
    gsap.registerPlugin(ScrollTrigger)
  }
}
</script>
<style scoped>

</style>