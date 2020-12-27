<template>
  <div class="lg:h-screen flex flex-col md:flex-row">
    <div class="w-full md:w-2/5 py-20 px-5 pt-10 md:pt-40 md:pl-32">
      <div class="text-3xl md:text-5xl font-bold text-primary font-poppins">Earn with Sun</div>
      <div class="text-2xl font-light font-poppins">Ideal investment for idle rooftop</div>
      <g-image src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1608801874/ShreeAssociatesSolar/cover.svg" />
    </div>
    <div class="w-full md:w-3/5 md:px-32 md:py-24">
      <div class="shadow-md bg-primary p-5 rounded">
        <div class="text-white text-3xl font-bold text-center font-poppins">Let's Calculate</div>
        <div class="text-white text-center text-poppins px-8 font-poppins">Tell us how many average units of electricity<br>you consume per month</div>
        <ValidationObserver v-slot="{ invalid }" ref="form" @submit.prevent="submit">
          <form class="overflow-y-hidden" autocomplete="off">
            <div class="md:px-20 mt-5">
                <ValidationProvider rules="required" v-slot="{ errors }">
                  <input
                  class="block w-full textarea text-sm text-orange-500"
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  v-model="email"
                  autocomplete="off"
                  />
                <span class="text-red-700 font-base text-xs mt-4">{{ errors[0] }}</span>
                </ValidationProvider>
            </div>
            <div class="md:px-20 mt-2">
                <ValidationProvider rules="required" v-slot="{ errors }">
                  <input
                  class="block w-full textarea text-sm text-orange-500"
                  type="number"
                  name="contact"
                  placeholder="Enter your contact"
                  v-model="contact"
                  autocomplete="off"
                  />
                <span class="text-red-700 font-base text-xs mt-4">{{ errors[0] }}</span>
                </ValidationProvider>
            </div>
            <div class="md:px-20 mt-2">
                <ValidationProvider rules="required" v-slot="{ errors }">
                  <input
                  class="block w-full textarea text-sm text-orange-500"
                  type="text"
                  name="address"
                  placeholder="Enter postal address"
                  v-model="address"
                  autocomplete="off"
                  />
                <span class="text-red-700 font-base text-xs mt-4">{{ errors[0] }}</span>
                </ValidationProvider>
            </div>
            <div class="flex flex-col md:flex-row">
              <div class="md:pl-20 mt-2 md:w-1/2">
                <ValidationProvider rules="required" v-slot="{ errors }">
                  <input
                  class="block w-full textarea text-sm text-orange-500"
                  type="number"
                  name="units"
                  placeholder="Enter Units Consumed"
                  v-model="units"
                  autocomplete="off"
                  />
                <span class="text-red-700 font-base text-xs mt-4">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
              <div class="md:pr-20 md:pl-3 md:w-1/2">
                <button
                  class="submit-btn w-full"
                  :disabled="invalid"
                  :class="invalid ? 'flex justify-center w-56 text-md px-3 py-2 bg-orange-100 text-orange-500 focus:outline-none focus:shadow-outline cursor-not-allowed' : 'flex justify-center text-md w-56 px-4 py-2 bg-orange-500 text-white focus:outline-none focus:shadow-outline' "
                  type="submit"
                >
                <p>Calculate</p>
                <p v-if="loading" class="ml-2">
                    <half-circle-spinner
                        :animation-duration="1000"
                        :size="20"
                        :color="'#fff'"/>
                </p>
                </button>
              </div>
            </div>
              <div class="text-center text-white font-medium text-xl py-8 font-poppins">You will need Project of <span>{{ calculated }}</span> Kilowatt</div>
          </form>
        </ValidationObserver>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from '../axios'
export default {
    data(){
        return {
            loading: false,
            address: '',
            email:'',
            contact: '',
            units: '',
            calculated: '0'
        }
    },
    methods:{
        submit(){
            this.loading = true
            const data = {
                email: this.email,
                content: this.contact,
                address: this.address,
                units: this.units,
            }
             axios.post('/send', data)
             .then(res => {
                 this.loading = false
                //  calculated = units/4;
                //  this.$vs.notification({
                //     square: true,
                //     duration: 6000,
                //     color: 'success',
                //     position: 'bottom-center',
                //     title: '🌟 Enquiry Sent Successfully',
                //     text: `👏 Thank you for contacting! Our representative will call you on the provided number.`
                // })
              this.result();
             })
             .catch(err => {
                 this.loading = false
                 this.$vs.notification({
                    square: true,
                    duration: 6000,
                    color: 'danger',
                    position: 'bottom-center',
                    title: ' Some Error Occured',
                    text: `Some error occcured. Please try again`
                })
             })
        },
        clearFields(){
            this.address = this.email = this.contact = this.units = null
            this.$nextTick(() => {
            this.$refs.form.reset();
            });
        },
         result() {
           this.calculated = parseInt(this.units) / 4
        },
    }
}
</script>
<style scoped>
.textarea{
    background: white;
    border: 2px solid #ffc601;
    border-radius: 25px; 
    padding: 10px 15px;
    outline: none;
}
.submit-btn{
    outline: none;
    border-radius: 30px;
    padding: 8px;
    margin: 10px 0px;
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0; 
}
</style>