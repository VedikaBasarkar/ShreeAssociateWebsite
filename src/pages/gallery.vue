<template>
  <div>
    <Navbar />
    <div class="mx-5 mt-10 md:mt-20 ">
      <h1 class="text-black text-center text-4xl font-bold">
        Project <span class="text-primary">Gallery</span>
      </h1>
      <br />
      <div class="text-2xl font-bold text-black ">
        50 <span class="text-primary">KiloWatt</span>
      </div>
      <div>
        <CoolLightBox :items="first" :index="index" @close="index = null">
        </CoolLightBox>
        <div class="flex flex-wrap">
            <div v-for="(image, imageIndex) in first"
            :key="imageIndex"
            @click="index = imageIndex" class="w-1/2 md:w-1/4 flex flex-col justify-center items-center text-center pb-4 px-2 md:px-1">
                <div class="h-40 bg-gray-200 w-full">
                 <img :src="image" class="h-full w-full object-conver shadow-md rounded-md">
                </div>
            </div>
        </div>
      </div>
      <br />
      <div class="text-2xl font-bold text-black">
        15 <span class="text-primary">KiloWatt</span>
      </div>
      <div>
        <CoolLightBox :items="second" :index="index" @close="index = null">
        </CoolLightBox>

         <div class="flex flex-wrap">
            <div v-for="(image, imageIndex) in second"
            :key="imageIndex"
            @click="index = imageIndex" class="w-1/2 md:w-1/4 flex flex-col justify-center items-center text-center pb-4 px-2 md:px-1">
                <div class="h-40 bg-gray-200 w-full">
                 <img :src="image" class="h-full w-full object-conver shadow-md rounded-md">
                </div>
            </div>
        </div>
      </div>
      <br />
      <div class="text-2xl font-bold text-black">
        12 <span class="text-primary">KiloWatt</span>
      </div>
      <div>
        <CoolLightBox :items="third" :index="index" @close="index = null">
        </CoolLightBox>

        <div class="flex flex-wrap">
            <div v-for="(image, imageIndex) in third"
            :key="imageIndex"
            @click="index = imageIndex" class="w-1/2 md:w-1/4 flex flex-col justify-center items-center text-center pb-4 px-2 md:px-1">
                <div class="h-40 bg-gray-200 w-full">
                 <img :src="image" class="h-full w-full object-conver shadow-md rounded-md">
                </div>
            </div>
        </div>
      </div>
      <br />
      <div class="text-2xl font-bold text-black">
        5 <span class="text-primary">KiloWatt</span>
      </div>
      <div>
        <CoolLightBox :items="forth" :index="index" @close="index = null">
        </CoolLightBox>

        <div class="flex flex-wrap">
            <div v-for="(image, imageIndex) in forth"
            :key="imageIndex"
            @click="index = imageIndex" class="w-1/2 md:w-1/4 flex flex-col justify-center items-center text-center pb-4 px-2 md:px-1">
                <div class="h-40 bg-gray-200 w-full">
                 <img :src="image" class="h-full w-full object-conver shadow-md rounded-md">
                </div>
            </div>
        </div>
      </div>
      <br />
      <div class="text-2xl font-bold text-black">
        3 <span class="text-primary">KiloWatt</span>
      </div>
      <div>
        <CoolLightBox :items="fifth" :index="index" @close="index = null">
        </CoolLightBox>

        <div class="flex flex-wrap">
            <div v-for="(image, imageIndex) in fifth"
            :key="imageIndex"
            @click="index = imageIndex" class="w-1/2 md:w-1/4 flex flex-col justify-center items-center text-center pb-4 px-2 md:px-1">
                <div class="h-40 bg-gray-200 w-full">
                 <img :src="image" class="h-full w-full object-conver shadow-md rounded-md">
                </div>
            </div>
        </div>
      </div>
      <br />
      <div class="text-2xl font-bold text-black">
        Solar <span class="text-primary">Ready Sites</span>
      </div>
      <div>
        <CoolLightBox :items="solarSites" :index="index" @close="index = null">
        </CoolLightBox>

        <div class="flex flex-wrap">
            <div v-for="(image, imageIndex) in solarSites"
            :key="imageIndex"
            @click="index = imageIndex" class="w-1/2 md:w-1/4 flex flex-col justify-center items-center text-center pb-4 px-2 md:px-1">
                <div class="h-40 bg-gray-200 w-full">
                 <img :src="image" class="h-full w-full object-conver shadow-md rounded-md">
                </div>
            </div>
        </div>
      </div>
      <br />
    </div>
    <ContactForm />
    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
import ContactForm from "~/components/ContactForm.vue";
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";

export default {
  components: {
    Navbar,
    ContactForm,
    Footer,
    CoolLightBox,
  },
  data: function() {
    return {
      first: [
        "https://res.cloudinary.com/db3h7h0pa/image/upload/v1608366139/ShreeAssociatesSolar/Gallery/50k/IMG-20190619-WA0012_gd9ph3.jpg",
        "https://res.cloudinary.com/db3h7h0pa/image/upload/v1608366138/ShreeAssociatesSolar/Gallery/50k/IMG-20190619-WA0013_lrgzir.jpg",
        "https://res.cloudinary.com/db3h7h0pa/image/upload/v1608366138/ShreeAssociatesSolar/Gallery/50k/IMG-20190619-WA0017_yay4g6.jpg",
        "https://res.cloudinary.com/db3h7h0pa/image/upload/v1608366138/ShreeAssociatesSolar/Gallery/50k/IMG-20190619-WA0016_mnofly.jpg",
      ],
      second: [
        "https://res.cloudinary.com/db3h7h0pa/image/upload/v1608366050/ShreeAssociatesSolar/Gallery/15k/IMG_20200825_115314_gf1lbg.jpg",
        "https://res.cloudinary.com/db3h7h0pa/image/upload/v1608366047/ShreeAssociatesSolar/Gallery/15k/IMG_20200207_125123_yenyqt.jpg",
        "https://res.cloudinary.com/db3h7h0pa/image/upload/v1608366047/ShreeAssociatesSolar/Gallery/15k/IMG_20200825_115400_evyhza.jpg",
        "https://res.cloudinary.com/db3h7h0pa/image/upload/v1608366047/ShreeAssociatesSolar/Gallery/15k/IMG_20200825_115404_ujroph.jpg",
        "https://res.cloudinary.com/db3h7h0pa/image/upload/v1608366047/ShreeAssociatesSolar/Gallery/15k/IMG_20200917_120732_zvdvmg.jpg",
      ],
      third: [
        "https://res.cloudinary.com/db3h7h0pa/image/upload/v1608366815/ShreeAssociatesSolar/Gallery/12k/IMG-20191116-WA0036_avbotu.jpg",
        "https://res.cloudinary.com/db3h7h0pa/image/upload/v1608366815/ShreeAssociatesSolar/Gallery/12k/IMG-20191105-WA0025_rv1e7l.jpg",
        "https://res.cloudinary.com/db3h7h0pa/image/upload/v1608366815/ShreeAssociatesSolar/Gallery/12k/IMG-20191105-WA0023_cqdfva.jpg",
        "https://res.cloudinary.com/db3h7h0pa/image/upload/v1608366815/ShreeAssociatesSolar/Gallery/12k/IMG-20191116-WA0032_dnr0ky.jpg",
      ],
      forth: [
        "https://res.cloudinary.com/db3h7h0pa/image/upload/v1608366975/ShreeAssociatesSolar/Gallery/5k/IMG_20190507_141757_lztqzc.jpg",
        "https://res.cloudinary.com/db3h7h0pa/image/upload/v1608366974/ShreeAssociatesSolar/Gallery/5k/IMG_20190429_130911_rxcyyb.jpg",
        "https://res.cloudinary.com/db3h7h0pa/image/upload/v1608366974/ShreeAssociatesSolar/Gallery/5k/IMG_20190425_180107_bbpiyy.jpg",
        "https://res.cloudinary.com/db3h7h0pa/image/upload/v1608366974/ShreeAssociatesSolar/Gallery/5k/IMG_20190425_182123_moey8d.jpg",
      ],
      fifth: [
        "https://res.cloudinary.com/db3h7h0pa/image/upload/v1608367020/ShreeAssociatesSolar/Gallery/3k/IMG_20190314_110944_aoam6k.jpg",
        "https://res.cloudinary.com/db3h7h0pa/image/upload/v1608367014/ShreeAssociatesSolar/Gallery/3k/IMG_20190419_124411_tgqfln.jpg",
        "https://res.cloudinary.com/db3h7h0pa/image/upload/v1608367013/ShreeAssociatesSolar/Gallery/3k/IMG_20190314_110942_uhznrk.jpg",
      ],
      solarSites: [
        "https://res.cloudinary.com/db3h7h0pa/image/upload/v1608366093/ShreeAssociatesSolar/Gallery/solar_ready_sites/IMG_20191003_135256_lrizq2.jpg",
        "https://res.cloudinary.com/db3h7h0pa/image/upload/v1608366093/ShreeAssociatesSolar/Gallery/solar_ready_sites/IMG_20190928_114724_erj0vt.jpg",
        "https://res.cloudinary.com/db3h7h0pa/image/upload/v1608366093/ShreeAssociatesSolar/Gallery/solar_ready_sites/IMG_20190811_161632_nnkslw.jpg",
        "https://res.cloudinary.com/db3h7h0pa/image/upload/v1608366092/ShreeAssociatesSolar/Gallery/solar_ready_sites/IMG-20190924-WA0027_pkddov.jpg",
        "https://res.cloudinary.com/db3h7h0pa/image/upload/v1608366092/ShreeAssociatesSolar/Gallery/solar_ready_sites/IMG-20190924-WA0026_icxdr3.jpg",
      ],
      index: null,
    };
  },
};
</script>
