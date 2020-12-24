<template>
    <div>
        <Navbar />
        <div class="mx-5 mt-10 md:mt-20 md:mx-56">
          <h1 class="text-black text-center text-4xl font-bold">Contact <span class="text-primary">Us</span></h1>
          <br>
          <div class="flex flex-wrap md:justify-between">
            <div class="w-full md:w-1/3 p-4">
              <div class="shadow-lg rounded p-4 flex flex-col justify-center">
                <g-image src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1608572387/ShreeAssociatesSolar/Contact/email.svg"/>
                <div class="text-center text-2xl font-bold mt-5 mb-2">Email</div>
                <div class="text-center mb-8">shreeassociatessolar@gmail.com</div>
              </div>
            </div>
            <div class="w-full md:w-1/3 p-4">
              <div class="shadow-lg rounded p-4 flex flex-col justify-center">
                <g-image class="" src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1608572387/ShreeAssociatesSolar/Contact/location.svg"/>
                <div class="text-center text-2xl font-bold mt-5 mb-2">Location</div>
                <p class="text-center text-sm mb-4">Shop no - 4, Nishigandha, Rana Nagar, Aurangabad, Maharashtra - 431003</p>
              </div>
            </div>
            <div class="w-full md:w-1/3 p-4">
              <div class="shadow-lg rounded p-4 flex flex-col justify-center">
                <g-image src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1608572387/ShreeAssociatesSolar/Contact/contact.svg"/>
                <div class="text-center text-2xl font-bold mt-5 mb-2">Contact</div>
                <p class="text-center mb-8">8975707571  and  9420234355</p>
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
}
</script>