<template>
  <div>
       <ValidationObserver v-slot="{ invalid }" ref="form">
            <form class="overflow-y-hidden" @submit.prevent="submitContact">
                <div class="flex flex-wrap">
                <div class="w-full px-2"
                >
                    <div class="mt-2">
                        <ValidationProvider rules="required" v-slot="{ errors }">
                        <label class="text-purple-700 text-xs font-base" for="name">
                            Full Name
                        </label>
                        <input
                        class="block appearance-none w-full bg-purple-200 text-xs text-purple-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        v-model="name"
                        />
                        <span class="text-red-700 font-base text-xs mt-4">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="mt-2">
                        <ValidationProvider rules="required|email" v-slot="{ errors }">
                        <label class="text-purple-700 text-xs font-base" for="email">
                            Email
                        </label>
                        <input
                        class="block appearance-none w-full bg-purple-200 text-xs text-purple-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="text"
                        name="email"
                        placeholder="Enter your email"
                        v-model="email"
                        />
                        <span class="text-red-700 font-base text-xs mt-4">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="mt-2">
                        <ValidationProvider rules="required|digits:10" v-slot="{ errors }">
                        <label class="text-purple-700 text-xs font-base" for="contact">
                            Contact
                        </label>
                        <input
                        class="block appearance-none w-full bg-purple-200 text-xs text-purple-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="number"
                        name="contact"
                        placeholder="Enter your contact"
                        v-model="contact"
                        />
                        <span class="text-red-700 font-base text-xs mt-4">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="mt-2">
                        <ValidationProvider rules="" v-slot="{ errors }">
                        <label class="text-purple-700 text-xs font-base" for="message">
                            Message
                        </label>
                            <textarea style="resize: none;"
                            name="message" v-model="message" cols="20" rows="3" class="w-full bg-purple-200 text-xs text-purple-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-purple-500"></textarea>
                            <span class="text-red-500 font-base text-xs mt-4">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>
                <button
                    class="mx-2 mt-4 mb-5"
                    :disabled="invalid"
                    :class="invalid ? 'flex justify-center w-full text-sm px-3 py-2 bg-purple-200 text-purple-500 rounded focus:outline-none focus:shadow-outline cursor-not-allowed' : 'flex justify-center w-full px-4 py-2 bg-purple-600 text-white rounded focus:outline-none focus:shadow-outline' "
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
        return{
            loading: false,
            name: '',
            email: '',
            contact: '',
            message: ''
        }
    },
    methods:{
        submitContact(){
            this.loading = true
            axios.post('/contact/add', {
                name: this.name,
                email: this.email,
                contact: this.contact,
                message: this.message,
            })
            .then(res => {
                this.loading = false
                this.$vs.notification({
                    square: true,
                    duration: 6000,
                    color: 'success',
                    position: 'bottom-center',
                    title: '🌟 Contact Successful',
                    text: `👏 Thank you for contacting! Our representative will call you on the provided number.`
                })
                this.clearFields()
            })
            .catch(err =>{
                console.log(err)
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
    },
}
</script>

<style>

</style>