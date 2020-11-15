<template>
        <div class="w-full bg-gray-300 h-screen">
            <div class="container md:mx-auto h-full flex justify-center items-center">
                <div class="w-full mx-10 md:w-1/3">
                    <div class="text-center">
                         <div class="mx-auto flex justify-center">
                            <!-- <img src="../assets/images/error-page.svg" alt="" class="w-64"> -->
                            </div>
                            <p class="text-2xl mt-4 mb-4 font-mono">404 - Page Not Found</p>
                            <p class="text-xl font-bold text-red mt-4 mb-4">Psst, You're lost. This page doesn't exists</p>
                            <button class="bg-gray-900 mx-auto rounded-lg inline-block px-4 py-2 font-mono text-white" @click="checkout()">Back to Home</button>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    methods:{
        checkout(){
            this.$router.push({path: '/'})
        }
    }
}
</script>
