<template>
  <v-app>
    <Navbar />
    <router-view class="pages"/>
    <!-- <HomeView/>
    <AboutView/>    
    <HabilidadesView/>
    <CertificadosView/>
    <ProjetosView/>
    <ContatoView/> -->
    <Footer />
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import HabilidadesView from './views/HabilidadesView.vue'
import ProjetosView from './views/ProjetosView.vue'
import CertificadosView from './views/CertificadosView.vue'
import ContatoView from './views/ContatoView.vue'

export default {
  components: {
    Navbar,
    Footer, 
    HomeView,
    AboutView,
    HabilidadesView,
    ProjetosView,
    CertificadosView,
    ContatoView,
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
    min-height: 640px;
    padding: 48px;    
  }

  h1 {
    text-align: center;
    font-size: 40px;
  }

  .black {
    background-color: var(--black);
  }

  .deep-black {
    background-color: var(--deep-black);
  }

  .pages {
  padding-top: 6.4em;
  }
</style>
