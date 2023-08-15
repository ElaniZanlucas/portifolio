<template>
  <Navbar />
  <router-view/>
  <Footer />
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
  @import url('https://fonts.cdnfonts.com/css/play');
  @import url('https://fonts.cdnfonts.com/css/devil-breeze?styles=14357,14354');

  :root { 
    --deep-black: #121212;
    --black: #1A1A1A;
    --light-black: #262626;
    --gray: #595959;
    --white: #F2F2F2;
    --blue: #81D4FA;
    --light-blue: #B3E5FC;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .main-container {
    min-height: 480px;
  }

  h1 {
    text-align: center;
    font-size: 42px;
    padding: 30px 0;
  }

  .black {
    background-color: var(--black);
  }

  .deep-black {
    background-color: var(--deep-black);
  }
</style>
