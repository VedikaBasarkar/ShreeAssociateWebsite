<template>
  <div class="lg:h-screen flex flex-col md:flex:row">
    <div class="mx-20">
      <h1 class="text-black text-center text-4xl font-bold">Our <span class="text-primary">Products</span></h1>
      <div class="flex flex-wrap">
        <div class="w-1/2 shadow-md p-4">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      Services:[
        {
          id:1,
          name: 'Solar Panels',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1608574792/ShreeAssociatesSolar/Products/solar_panel.svg`,
        },
        {
          id:2,
          name: 'Solar Inverter',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1608574792/ShreeAssociatesSolar/Products/Solar_inverter.svg`,
        },
        {
          id:3,
          name: 'Solar Pump',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1608574792/ShreeAssociatesSolar/Products/Solar_Pump.svg`,
        },
        {
          id:4,
          name: 'Solar Fence',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1608574792/ShreeAssociatesSolar/Products/solar_fence.svg`,
        },
      ]
    }
  },
}
</script>
<style scoped>

</style>