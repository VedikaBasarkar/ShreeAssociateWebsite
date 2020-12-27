<template>
  <div class="my-10 md:my-24 flex flex-col mx-4 md:mx-20">
    <h1 class="text-black text-center text-4xl font-bold mt-10 md:mt-0 font-poppins">Happy <span class="text-primary">Customers</span></h1>
    <div class="flex flex-wrap">
      <div v-for="(a, index) in advantage" :key="index" class="w-full md:w-1/3 p-4 my-5">
        <div class="flex flex-col md:p-5 justify-center">
          <div class="md:py-8 p-10 shadow-md rounded">
            <p class="text-medium text-gray-700 font-poppins text-left font-poppins italic">{{a.text}}</p>
            <p class="text-right text-orange-500 font-poppins mt-4">- {{a.user}}</p>
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
          user:'Manoj Beharilal Melwani',
          text:`"Thorough professionals with strong technical team Shree Associates have. All the work was completed in specified time and also in integrity."`
        },
        {
          id:2,
          user:'Bhushanraj Mukhate',
          text:`"I wasn't aware of different solar products available out there in market right now. Service was excellent, very happy with them. Thanks you guys, it helped a lot."`
        },
        {
          id:3,
          user:'Nikhil Gangwal',
          text:`"Thanks for providing the information on solar power which we found very useful. We proceed with a 15kW system where they supplied panels and installed"`
        },
      ]
    }
  },
}
</script>