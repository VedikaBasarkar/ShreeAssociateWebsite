<template>
  <div class="my-10 md:my-48 flex flex-col mx-4 md:mx-20">
    <h1 class="text-black text-center text-4xl font-bold mt-10 md:mt-0 font-poppins">It's <span class="text-primary">Advantage</span></h1>
    <div class="flex flex-wrap">
      <div v-for="(a, index) in advantage" :key="index" class="w-full md:w-1/4 p-4 my-5">
        <div class="flex flex-col md:p-5 justify-center">
          <g-image :src="a.icon" class= "h-20 md:h-32" />
          <div class="md:py-8 px-2">
            <p class="text-medium text-center font-poppins">{{a.text}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      advantage:[
        {
          id:1,
          icon:'https://res.cloudinary.com/db3h7h0pa/image/upload/v1609028336/ShreeAssociatesSolar/ad1.svg',
          text:'You can generate your own power of your rooftop'
        },
        {
          id:2,
          icon:'https://res.cloudinary.com/db3h7h0pa/image/upload/v1609028336/ShreeAssociatesSolar/ad2.svg',
          text:'The ROI period of the amount is mainly around 2 - 5 years'
        },
        {
          id:3,
          icon:'https://res.cloudinary.com/db3h7h0pa/image/upload/v1609028336/ShreeAssociatesSolar/ad3.svg',
          text:'Post ROI period it is only savings per year that you get out of  power generation'
        },
        {
          id:4,
          icon:'https://res.cloudinary.com/db3h7h0pa/image/upload/v1609028336/ShreeAssociatesSolar/ad4.svg',
          text:'Post ROI power generation adds up in savings per year'
        },
      ]
    }
  },
}
</script>