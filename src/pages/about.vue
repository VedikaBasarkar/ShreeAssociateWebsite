<template>
    <div>
        <Navbar />
        <div class="mx-5 mt-10 md:mt-20 md:mx-56">
          <h1 class="text-black text-center text-4xl font-bold font-poppins">About <span class="text-primary">Us</span></h1>
          <br>
          <p class="text-center font-poppins"> A Mechanical Engineers, with the clear intentions to contribute to nature with working and increasing sustainable solutions. 
            We at Shree Associates aim to reduce and cut the dependence of humans on conventional energy resources for power and energy generation. The use of renewable energy resources 
            such as solar energy, which is available in plenty in nature can become the best substitute for power generation. We focus on all the sustainable solutions we can provide by 
            all possible means. Be it solar, wind or any other renewable energy source, Shree Associates is the one stop solution for all the problems related to renewable energy sources. 
            After acquiring considerable knowledge about the solar industry and business, the firm came into existence in January 2019.  The company strives to work and implement the solar 
            solutions in the areas namely Industrial, Commercial, Residential, Farms, Hospitals. We make sure that the services we provide are transparent in nature and always deliver keeping
            customer satisfaction in mind.</p>
            <div class="md:flex justify-center my-20">
              <div>
                <g-image src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1608536416/ShreeAssociatesSolar/About/raj_kapadia.jpg" />
                <div class="mx-6">
                  <div><h1 class="text-primary text-2xl font-bold font-poppins">Raj <span class="text-black">Kapadia</span></h1></div>
                  <div class="text-gray-600 font-poppins">Managing Partner</div>
                </div>
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
    ContactForm,
    Footer,
  },
  data(){
    return {
      facilities:[
        {
          id:1,
          Name1: 'Solar',
          Name2: 'Panel',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1605591447/ShreeAssociatesSolar/topnav-logo.svg`,
          text: 'A PV module is an assembly of photo-voltaic cells mounted in a framework for installation. Photo-voltaic cells use sunlight as a source of energy and generate direct current electricity.'
        },
        {
          id:2,
          Name1: 'Solar',
          Name2: 'Inverter',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1605591447/ShreeAssociatesSolar/topnav-logo.svg`,
          text: 'A solar inverter is a type of electrical converter which converts the variable direct current (DC) output of a photovoltaic (PV). which further can be used for many different appliances.'
        },
        {
          id:3,
          Name1: 'Solar',
          Name2: 'ON Grid System',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1605591447/ShreeAssociatesSolar/topnav-logo.svg`,
          text: 'An on-grid solar system is a grid connected solar PV System which works along with the grid. The on-grid solar system also known as grid tie or connected solar system. This is the most cost effective type for solar system compare to off grid and hybrid solar system for electricity saving or reduce bill. '
        },
        {
          id:4,
          Name1: 'Solar',
          Name2: 'OFF Grid System',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1605591447/ShreeAssociatesSolar/topnav-logo.svg`,
          text: 'In an off-grid system there is no public electricity grid. Once solar power is used by the appliances in your property, any excess power will be sent to your battery bank. Once the battery is full it will stop receiving power from the solar system.'
        },
        {
          id:5,
          Name1: 'Solar',
          Name2: 'Pump',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1605591447/ShreeAssociatesSolar/topnav-logo.svg`,
          text: 'The system operates on power generated using solar PV (photovoltaic) system which converts the solar energy into electricity, which is used for running the motor pump set. The pumping system draws water from the open well, bore well, stream, pond, canal etc.'
        },
        {
          id:6,
          Name1: 'Solar',
          Name2: 'Fence',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1605591447/ShreeAssociatesSolar/topnav-logo.svg`,
          text: 'The Solar Fencing System is similar to regular electric fence and works on Solar Energy with the backup facility to run uninterruptedly during the nights as well as cloudy days.'
        },
        {
          id:7,
          Name1: 'ACDB/',
          Name2: 'DCDB',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1605591447/ShreeAssociatesSolar/topnav-logo.svg`,
          text: 'The ACDB (Alternative Current Distribution Box) receives the AC power from the solar inverter and directs it to AC loads through the distribution board. DCDB controls the DC power from solar panel and with having necessary surge protection device (SPD) and fuses. DCDB protect the solar panel, solar inverter and solar battery from any type of damage in solar system.'
        },
        {
          id:8,
          Name1: 'Net',
          Name2: 'Meter',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1605591447/ShreeAssociatesSolar/topnav-logo.svg`,
          text: `Net metering solar systems are set up to send energy to your household first, before sending the excess energy back into the grid. That means only solar energy that's not used in your home is sent to the grid – and you receive a payment (or 'feed-in tariff') for that excess. It’s a Bidirectional meter which accounts and displays the units generated as well as consumed.`
        },
        {
          id:8,
          Name1: 'Prefabricated',
          Name2: 'Solar Structure',
          icon:  `https://res.cloudinary.com/db3h7h0pa/image/upload/v1605591447/ShreeAssociatesSolar/topnav-logo.svg`,
          text: `Prefabricated solar structure is Galvanized steel structure for the panels to fit along.`
        }
      ]
    }
  },
}
</script>
