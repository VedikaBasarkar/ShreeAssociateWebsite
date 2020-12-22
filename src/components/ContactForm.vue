<template>
    <div>
        <h1 class="text-black text-center text-3xl font-bold mb-5">Drop <span class="text-primary">Enquiry</span></h1>
        <form class="overflow-y-hidden">
            <div class="flex flex-wrap md:mx-56 md:px-32">
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
                        class="submit-btn"
                        :disabled="invalid"
                        :class="invalid ? 'w-full text-sm cursor-not-allowed bg-orange-400' : 'flex justify-center w-full bg-orange-500 text-white' "
                        type="submit"
                    >
                    <p>Submit</p>
                    <p v-if="loading" class="ml-2">
                        <half-circle-spinner
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
</style>