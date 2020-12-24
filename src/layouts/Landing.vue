<template>
  <div class="lg:h-screen flex flex-col md:flex-row">
    <div class="w-full md:w-1/2 py-20 pl-5 md:pt-40 md:pl-32 ">
      <div class="text-3xl md:text-5xl font-bold text-primary">Earn with Sun</div>
      <div class="text-3xl font-light">Ideal investment for idle rooftop</div>
    </div>
    <div class="w-full md:w-1/2 md:p-20">
      <div class="shadow-md bg-primary p-5 rounded">
        <div class="text-white text-3xl font-bold text-center">Let's Calculate</div>
        <div class="text-white text-center text-bebas px-10">Tell us how many average units of electricity you consume per month</div>
        <div class="md:px-20 mt-5">
            <input
            class="block w-full textarea text-sm text-orange-500"
            type="text"
            name="email"
            placeholder="Enter your email"
            v-model="email"
            />
        </div>
        <div class="md:px-20 mt-2">
            <input
            class="block w-full textarea text-sm text-orange-500"
            type="number"
            name="contact"
            placeholder="Enter your contact"
            v-model="contact"
            />
        </div>
        <div class="md:px-20 mt-2">
            <input
            class="block w-full textarea text-sm text-orange-500"
            type="text"
            name="address"
            placeholder="Enter postal address"
            v-model="address"
            />
        </div>
        <div class="flex flex-col md:flex-row">
          <div class="md:pl-20 mt-2 md:w-1/2">
              <input
              class="block w-full textarea text-sm text-orange-500"
              type="number"
              name="units"
              placeholder="Enter Units Consumed"
              v-model="units"
              autocomplete="disable"
              />
          </div>
          <div class="md:pr-20 md:pl-3 md:w-1/2">
            <button
              class="submit-btn w-full"
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
    </div>
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
    padding: 8px;
    margin: 10px 0px;
}
</style>