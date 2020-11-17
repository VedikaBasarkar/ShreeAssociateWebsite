<template>
    <div>
        <Navbar />
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