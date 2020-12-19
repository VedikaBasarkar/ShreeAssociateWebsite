<template>
    <div>
        <Navbar />
        <div class="mt-20 container">
        <h1 class="text-black text-center text-4xl font-bold">Our <span class="text-primary">Products</span></h1>
            <div v-for="(p, index) in products" :key="index" class="w-100 flex">
                <div v-if="(p.id % 2) == 0" class="w-100 flex">
                    <div class="w-2/5">
                        <h1 class="text-primary text-center text-2xl font-bold">{{p.name1}} <span class="text-black">{{p.name2}}</span></h1>
                        <p>{{p.text}}</p>
                    </div>
                    <div class="w-3/5">
                            <g-image :src="p.icon" :alt="p.name1 + p.name2" class="h-12" />
                    </div>
                </div>
                <div v-if="(p.id % 2) == 1" class="w-100 flex">
                    <div class="w-2/5">
                        <h1 class="text-primary text-center text-2xl font-bold">{{p.name1}} <span class="text-black">{{p.name2}}</span></h1>
                        <p>{{p.text}}</p>
                    </div>
                    <div class="w-3/5">
                            <g-image :src="p.icon" :alt="p.name1 + p.name2" class="h-12" />
                    </div>
                </div>
            </div>
        </div>
        <!-- <ContactForm />
        <Footer /> -->
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
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1605591447/ShreeAssociatesSolar/topnav-logo.svg`,
          text: 'A PV module is an assembly of photo-voltaic cells mounted in a framework for installation. Photo-voltaic cells use sunlight as a source of energy and generate direct current electricity.'
        },
        {
          id:2,
          name1: 'Solar',
          name2: 'Inverter',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1605591447/ShreeAssociatesSolar/topnav-logo.svg`,
          text: 'A solar inverter is a type of electrical converter which converts the variable direct current (DC) output of a photovoltaic (PV). which further can be used for many different appliances.'
        },
        {
          id:3,
          name1: 'Solar',
          name2: 'ON Grid System',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1605591447/ShreeAssociatesSolar/topnav-logo.svg`,
          text: 'An on-grid solar system is a grid connected solar PV System which works along with the grid. The on-grid solar system also known as grid tie or connected solar system. This is the most cost effective type for solar system compare to off grid and hybrid solar system for electricity saving or reduce bill. '
        },
        {
          id:4,
          name1: 'Solar',
          name2: 'OFF Grid System',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1605591447/ShreeAssociatesSolar/topnav-logo.svg`,
          text: 'In an off-grid system there is no public electricity grid. Once solar power is used by the appliances in your property, any excess power will be sent to your battery bank. Once the battery is full it will stop receiving power from the solar system.'
        },
        {
          id:5,
          name1: 'Solar',
          name2: 'Pump',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1605591447/ShreeAssociatesSolar/topnav-logo.svg`,
          text: 'The system operates on power generated using solar PV (photovoltaic) system which converts the solar energy into electricity, which is used for running the motor pump set. The pumping system draws water from the open well, bore well, stream, pond, canal etc.'
        },
        {
          id:6,
          name1: 'Solar',
          name2: 'Fence',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1605591447/ShreeAssociatesSolar/topnav-logo.svg`,
          text: 'The Solar Fencing System is similar to regular electric fence and works on Solar Energy with the backup facility to run uninterruptedly during the nights as well as cloudy days.'
        },
        {
          id:7,
          name1: 'ACDB/',
          name2: 'DCDB',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1605591447/ShreeAssociatesSolar/topnav-logo.svg`,
          text: 'The ACDB (Alternative Current Distribution Box) receives the AC power from the solar inverter and directs it to AC loads through the distribution board. DCDB controls the DC power from solar panel and with having necessary surge protection device (SPD) and fuses. DCDB protect the solar panel, solar inverter and solar battery from any type of damage in solar system.'
        },
        {
          id:8,
          name1: 'Net',
          name2: 'Meter',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1605591447/ShreeAssociatesSolar/topnav-logo.svg`,
          text: `Net metering solar systems are set up to send energy to your household first, before sending the excess energy back into the grid. That means only solar energy that's not used in your home is sent to the grid – and you receive a payment (or 'feed-in tariff') for that excess. It’s a Bidirectional meter which accounts and displays the units generated as well as consumed.`
        },
        {
          id:8,
          name1: 'Prefabricated',
          name2: 'Solar Structure',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1605591447/ShreeAssociatesSolar/topnav-logo.svg`,
          text: `Prefabricated solar structure is Galvanized steel structure for the panels to fit along.`
        }
      ]
    }
  },
}
</script>