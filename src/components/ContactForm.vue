<template>
    <div class="mt-20 py-10 bg-yellow-100">
        <h1 class="text-black text-center text-3xl font-bold mb-5 font-poppins">Drop <span class="text-primary">Enquiry</span></h1>
       <ValidationObserver v-slot="{ invalid }" ref="form" @submit.prevent="submit">
        <form class="overflow-y-hidden" autocomplete="off">
            <div class="flex flex-wrap mx-5 md:mx-56">
                <div class="w-full md:w-1/2">
                    <div class="px-5 mt-2">
                        <ValidationProvider rules="required" v-slot="{ errors }">
                        <input
                        class="block w-full textarea text-sm text-orange-500"
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        v-model="name"
                        />
                        <span class="text-red-700 font-base text-xs mt-4">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="px-5 mt-2">
                        <ValidationProvider rules="required|email" v-slot="{ errors }">
                        <input
                        class="block w-full textarea text-sm text-orange-500"
                        type="text"
                        name="email"
                        placeholder="Enter your email"
                        v-model="email"
                        />
                        <span class="text-red-700 font-base text-xs mt-4">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="px-5 mt-2">
                        <ValidationProvider rules="required|digits:10" v-slot="{ errors }">
                        <input
                        class="block w-full textarea text-sm text-orange-500"
                        type="number"
                        name="contact"
                        placeholder="Enter your contact"
                        v-model="contact"
                        />
                        <span class="text-red-700 font-base text-xs mt-4">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="w-full md:w-1/2">
                    <div class="px-5 mt-2">
                        <ValidationProvider rules="" v-slot="{ errors }">
                        <textarea style="resize: none;" 
                            name="message" 
                            v-model="message" 
                            placeholder="Write your message"
                            cols="20" rows="6" 
                            class="w-full textarea text-sm text-orange-500">
                        </textarea>
                        <span class="text-red-500 font-base text-xs mt-4">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>
            </div>
            <div class="flex justify-center flex-row w-full px-5 py-3">
                <button
                :disabled="invalid"
                class="mx-2 mt-4 mb-5 submit-btn font-poppins"
                :class="invalid ? 'flex justify-center w-56 text-md px-3 py-2 bg-orange-200 text-orange-500 focus:outline-none focus:shadow-outline cursor-not-allowed' : 'flex justify-center text-md w-56 px-4 py-2 bg-orange-500 text-white focus:outline-none focus:shadow-outline' "
                type="submit"
                >
                    <p>Submit</p>
                    <p v-if="loading" class="ml-2"><half-circle-spinner
                            :animation-duration="1000"
                            :size="20"
                            :color="'#fff'"/>
                    </p>
                </button>
            </div>
        </form>
       </ValidationObserver>
    </div>
</template>
<script>
import axios from '../axios'
export default {
    data(){
        return {
            loading: false,
            name: '',
            email:'',
            contact: '',
            message: ''
        }
    },
    methods:{
        submit(){
            this.loading = true
            const data = {
                name: this.name,
                email: this.email,
                contact: this.contact,
                message: this.message
            }
             axios.post('/send', data)
             .then(res => {
                 this.loading = false
                 this.$vs.notification({
                    square: true,
                    duration: 6000,
                    color: 'success',
                    position: 'bottom-center',
                    title: '🌟 Enquiry Sent Successfully',
                    text: `👏 Thank you for contacting! Our representative will call you on the provided number.`
                })
                this.clearFields()
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
            this.name = this.email = this.contact = this.message = null
            this.$nextTick(() => {
            this.$refs.form.reset();
            });
        }
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
    padding: 10px;
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