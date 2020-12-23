<template>
    <div class="mt-20 py-10 bg-yellow-100">
        <h1 class="text-black text-center text-3xl font-bold mb-5">Drop <span class="text-primary">Enquiry</span></h1>
        <form class="overflow-y-hidden">
            <div class="flex flex-wrap md:container">
                <div class="w-full md:w-1/2">
                    <div class="px-5 mt-2">
                        <input
                        class="block w-full textarea text-sm text-orange-500"
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        v-model="name"
                        />
                    </div>
                    <div class="px-5 mt-2">
                        <input
                        class="block w-full textarea text-sm text-orange-500"
                        type="text"
                        name="email"
                        placeholder="Enter your email"
                        v-model="email"
                        />
                    </div>
                    <div class="px-5 mt-2">
                        <input
                        class="block w-full textarea text-sm text-orange-500"
                        type="number"
                        name="contact"
                        placeholder="Enter your contact"
                        v-model="contact"
                        />
                    </div>
                </div>
                <div class="w-full md:w-1/2">
                    <div class="px-5 mt-2">
                        <textarea style="resize: none;" 
                            name="message" 
                            v-model="message" 
                            placeholder="Write your message"
                            cols="20" rows="5" 
                            class="w-full textarea text-sm text-orange-500">
                        </textarea>
                    </div>
                    <div class="px-5">
                          <button
                            :disabled="!isValid"
                            class="mx-2 mt-4 mb-5"
                            :class="!isValid ? 'flex justify-center w-full text-sm px-3 py-2 rounded-full bg-orange-300 text-gray-900 focus:outline-none focus:shadow-outline cursor-not-allowed' : 'flex justify-center w-full px-4 py-2 bg-orange-500 text-white rounded-full focus:outline-none focus:shadow-outline' "
                            type="submit"
                            @click.prevent="submit()"
                    >
                    <p>Submit</p>
                    <p v-if="loading" class="ml-2"><half-circle-spinner
                            :animation-duration="1000"
                            :size="20"
                            :color="'#fff'"/>
                    </p>
                    </button>
                    </div>
                </div>
            </div>
        </form>
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
    computed: {
        isValid(){
            if(this.email && this.name && this.contact && this.message != ''){
                return true
            } else {
                return false
            }
        }
    },
    methods:{
        submit(){
            this.loading = true
            const data = {
                name: this.name,
                email: this.email,
                content: this.contact,
                message: this.message
            }
             axios.post('/', data)
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
        }
    }
}
</script>>
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
</style>