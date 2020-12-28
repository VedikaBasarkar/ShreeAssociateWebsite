<template>
    <div>
        <Navbar />
        <div class="mt-20 md:mx-48">
        <h1 class="text-black text-center text-4xl font-bold font-poppins">Our <span class="text-primary">Products</span></h1>
            <div v-for="(p, index) in products" :key="index" class="flex flex-col product-reg">
                <div v-if="(p.id % 2) == 1" class="flex py-16 justify-between">
                    <div class="w-3/5 pr-10">
                      <div class="shadow-lg p-10">
                          <h1 class="text-primary text-2xl font-bold font-poppins">{{p.name1}} <span class="text-black">{{p.name2}}</span></h1>
                          <p class="text-md font-poppins">{{p.text}}</p>
                      </div>
                    </div>
                    <g-image :src="p.icon" :alt="p.name1 + p.name2" class="h-56" />
                </div>
                <div v-if="(p.id % 2) == 0" class="flex justify-between py-16">
                    <g-image :src="p.icon" :alt="p.name1 + p.name2" class="h-56" />
                    <div class="w-3/5 pl-10">
                      <div class="shadow-lg p-10">
                        <h1 class="text-primary text-right text-2xl font-bold font-poppins">{{p.name1}} <span class="text-black">{{p.name2}}</span></h1>
                        <p class="text-right text-md font-poppins">{{p.text}}</p>
                      </div>
                    </div>
                </div>
            </div>

            <div v-for="(p, index) in products" :key="index" class="p-5 product-mob flex flex-col object-center">
              <div class="shadow-lg p-5">
                  <h1 class="text-primary text-2xl font-bold text-center font-poppins">{{p.name1}} <span class="text-black">{{p.name2}}</span></h1>
                  <p class="text-sm text-center font-poppins">{{p.text}}</p>
              </div>
              <div class="flex justify-center">
                <g-image :src="p.icon" :alt="p.name1 + p.name2" class="h-48 my-10" />
              </div>
              <hr>
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
    ContactForm,
    Footer,
  },
  data(){
    return {
      products:[
        {
          id:1,
          name1: 'Solar',
          name2: 'Panel',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1608574792/ShreeAssociatesSolar/Products/solar_panel.svg`,
          text: 'A PV module is an assembly of photo-voltaic cells mounted in a framework for installation. Photo-voltaic cells use sunlight as a source of energy and generate direct current electricity.'
        },
        {
          id:2,
          name1: 'Solar',
          name2: 'Inverter',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1605591447/ShreeAssociatesSolar/Products/Solar_inverter.svg`,
          text: 'A solar inverter is a type of electrical converter which converts the variable direct current (DC) output of a photovoltaic (PV). which further can be used for many different appliances.'
        },
        {
          id:3,
          name1: 'Solar',
          name2: 'ON Grid System',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1605591447/ShreeAssociatesSolar/Products/Solar_On_Grid.svg`,
          text: 'An on-grid solar system also known as grid tie is a solar PV System which works along with the grid.  This is the most cost effective implementation when compared against off grid and hybrid solar system for electricity saving or reduce bill. '
        },
        {
          id:4,
          name1: 'Solar',
          name2: 'OFF Grid System',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1605591447/ShreeAssociatesSolar/Products/Solar_Off_Grid1.svg`,
          text: 'In an off-grid system there is no public electricity grid. Once solar power is used by the appliances in your property, any excess power will be sent to your battery bank. Once the battery is full it will stop receiving power from the solar system.'
        },
        {
          id:5,
          name1: 'Solar',
          name2: 'Pump',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1605591447/ShreeAssociatesSolar/Products/Solar_Pump.svg`,
          text: 'The system operates on power generated using solar PV (photovoltaic) system which converts the solar energy into electricity, which is used for running the motor pump set. The pumping system draws water from the open well, bore well, stream, pond, canal etc.'
        },
        {
          id:6,
          name1: 'Solar',
          name2: 'Fence',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1605591447/ShreeAssociatesSolar/Products/solar_fence.svg`,
          text: 'The Solar Fencing System is similar to a regular electric fence and works on Solar Energy with a backup facility to run uninterruptedly during nights as well as cloudy days.'
        },
        {
          id:7,
          name1: 'ACDB/',
          name2: 'DCDB',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1605591447/ShreeAssociatesSolar/Products/ACDB.svg`,
          text: 'The ACDB (Alternative Current Distribution Box) receives the AC power from the solar inverter and directs it to AC loads through the distribution board. DCDB controls the DC power from solar panel and has necessary surge protection device (SPD) and fuses. DCDB protects the solar panel, solar inverter and solar battery from any type of damage in a solar system.'
        },
        {
          id:8,
          name1: 'Net',
          name2: 'Meter',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1605591447/ShreeAssociatesSolar/Products/Net_metering.svg`,
          text: `Net metering solar systems are set up to send energy to your household first, before sending the excess energy back into the grid. That means only solar energy that's not used in your home is sent to the grid – and you receive a payment (or 'feed-in tariff') for that excess.`,
        },
        {
          id:9,
          name1: 'Prefabricated',
          name2: 'Solar Structure',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1605591447/ShreeAssociatesSolar/Products/solar-pre.svg`,
          text: `Prefabricated solar structure is Galvanized steel structure for the panels to fit along.`
        }
      ]
    }
  },
}
</script>

<style scoped>
.product-reg{
  display: block;
}
.product-mob{
  display: none;
}
@media (max-width: 768px) { 
  .product-reg{
    display: none;
  }  
  .product-mob{
    display: block
  }
}
</style>