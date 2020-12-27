<template>
  <div class="lg:h-screen flex flex-col md:flex:row">
    <div class="mx-4 md:mx-20">
      <h1 class="text-black text-center text-4xl font-bold mt-10 md:mt-0 font-poppins">Our <span class="text-primary">Products</span></h1>
      <div class="flex flex-wrap">
        <div v-for="(p, index) in products" :key="index" class="w-full md:w-1/2 md:p-4 my-5">
          <div class="flex flex-col md:flex-row md:p-5">
            <g-image :src="p.icon" class="w-full md:w-1/2 h-48" />
            <div class="w-full md:w-1/2 md:px-8">
              <div class="font-medium text-2xl pb-1 text-center md:text-left font-poppins">{{p.name}}</div>
              <div class="text-center text-sm md:text-left font-poppins">{{p.text}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <button class="submit-btn text-white bg-orange-500 focus:outline-none focus:shadow-outline font-poppins"><router-link to="/products">See all Products </router-link></button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      products:[
        {
          id:1,
          name: 'Solar Panels',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1608574792/ShreeAssociatesSolar/Products/solar_panel.svg`,
          text: 'A PV module is an assembly of photo-voltaic cells mounted in a framework for installation. Photo-voltaic cells use sunlight as a source of energy and generate direct current electricity.'
        },
        {
          id:2,
          name: 'Solar Inverter',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1608574792/ShreeAssociatesSolar/Products/Solar_inverter.svg`,
          text: 'A solar inverter is a type of electrical converter which converts the variable direct current (DC) output of a photovoltaic (PV). which further can be used for many different appliances.'
        },
        {
          id:3,
          name: 'Solar Pump',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1608574792/ShreeAssociatesSolar/Products/Solar_Pump.svg`,
          text: 'The system operates on power generated using solar PV (photovoltaic) system which converts the solar energy into electricity, which is used for running the motor pump set.'
        },
        {
          id:4,
          name: 'Solar Fence',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1608574792/ShreeAssociatesSolar/Products/solar_fence.svg`,
          text: 'The Solar Fencing System is similar to regular electric fence and works on Solar Energy with the backup facility to run uninterruptedly during the nights as well as cloudy days.'
        },
      ]
    }
  },
}
</script>
<style scoped>
.submit-btn{
    outline: none;
    border-radius: 30px;
    padding: 10px 20px;
    margin: 10px 0px;
    cursor: pointer;
}
</style>