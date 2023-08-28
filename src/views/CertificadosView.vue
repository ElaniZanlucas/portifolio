<template>
  <div class="about main-container black">
    <Banner :section="bannerSection"/>
    <div class="cards">
      <div class="card" v-for="certificado in certificados" :key="certificado.id">
        <h2 class="titulo">{{certificado.nome}}</h2>
        <p class="carga">Carga:&ensp;<span>{{certificado.carga}}</span></p>
        <p class="emissor">Emissor:&ensp;<span>{{certificado.emissor}}</span></p>
        <p class="certificado">Certificado:&ensp;<a :href="certificado.link" target="_blank">Clique aqui</a></p>
        <p class="habilidades">Habilidades:<span>{{certificado.habilidades}}</span></p>
      </div>
    </div>
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
      bannerSection: 'Certificados',
      certificados_id: null,
      certificados: null
    }
  },
  methods: {
    async getCertificados() {
      const req = await fetch("http://localhost:3000/certificados");
      const data = await req.json(); 

      this.certificados = data;
      console.log(data);
    }
  },
  mounted() {
    this.getCertificados();
  }
}
</script>

<style scoped>
  .card {
    padding: 36px;
    background-color: var(--light-black);
    height: 320px;
    width: 280px;
    border: 2px solid var(--blue);
    border-radius: 8px;
  }

  h2 {
    color: var(--light-blue);
    font-family: 'Devil Breeze', sans-serif;
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 16px;
    display: flex;
    justify-content: center;
  }

  p {
    color: var(--light-blue);
    font-family: 'Play', sans-serif;
    font-size: 16px;
    padding-top: 24px;
    display: flex;
  }

  span {
    color: var(--white);
  }

  a {
    color: var(--white);
    text-decoration: none;
  }
  
</style>