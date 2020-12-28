<template>
    <div>
        <Navbar />
        <div class="mt-20 md:mx-48">
            <h1 class="text-black text-center text-4xl font-bold mb-10 font-poppins">Our <span class="text-primary">Services</span></h1>
            <div class="flex flex-wrap ">
                <div v-for="(f, index) in Services" :key="index" class="w-full md:w-1/2 flex flex-col justify-center items-center text-center my-4 md:px-1">
                    <div class="p-5 rounded-md">
                    <g-image :src="f.icon" :alt="f.text" class="h-24" />
                    </div>
                    <div class="text-2xl font-medium font-poppins">{{f.name}}</div>
                    <p class="mt-4 text-xs md:text-sm text-gray-900 text-center w-64 font-poppins">{{ f.text }}</p>
                </div>
            </div>
        </div>
        <ContactForm />
        <Footer />
    </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import ContactForm from '~/components/ContactForm.vue'

export default {
    components:{
    Navbar,
    Footer,
    ContactForm
  },
  data(){
    return {
      Services:[
        {
          id:1,
          name: 'Designing',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1608574792/ShreeAssociatesSolar/Services/designing.svg`,
          text: 'To fit in maximum panels in the available space according to the customers requirement.'
        },
        {
          id:2,
          name: 'Fabrication',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1608574792/ShreeAssociatesSolar/Services/fabrication.svg`,
          text: 'To give altitude and acquire maximum output from the no-shadow region.'
        },
        {
          id:3,
          name: 'Solar Rooftop Installation',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1608574792/ShreeAssociatesSolar/Services/solar-rooftop-installation.svg`,
          text: 'To install the system in a way to get maximum efficiency in the optimum given space.'
        },
        {
          id:4,
          name: 'Net Metering',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1608574792/ShreeAssociatesSolar/Services/net-meter.svg`,
          text: 'Electricity billing mechanism which allows the customer to generate their own electricity from theri own solar rooftop.'
        },
        {
          id:5,
          name: 'Solar Tagging',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1608574792/ShreeAssociatesSolar/Services/solar-tagging.svg`,
          text: 'A process which adds up to the normal bill after the solar rooftop plant is commissioned.'
        },
        {
          id:6,
          name: 'MSEB Work',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1608574792/ShreeAssociatesSolar/Services/MSEB.svg`,
          text: 'The government partner through which the customer can avail the benefit of solar rooftop.'
        },
        {
          id:7,
          name: 'Consultation',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1608616409/ShreeAssociatesSolar/Services/consultation.svg`,
          text: 'All types of sustainable solutions available.'
        }
      ]
    }
  },
}
</script>