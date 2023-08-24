<template>
  <div class="about main-container deep-black">
    <Banner :section="bannerSection"/>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue"

export default {
  name: "About",
  components: {
    Banner
  },
  data() {
    return {
      bannerSection: 'Sobre mim'
    }
  }
}
</script>

<style scoped>
  
</style>