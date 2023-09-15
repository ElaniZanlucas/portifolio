<template>
  <div class="main-container deep-black">
    <Banner :section="bannerSection"/>
    <div class="about">
      <div id="circulo"></div>
      <div class="description">
        <p>
          Olá! Sou Élani Zanlucas, estudante de Ciência da Computação na UFMS, <br>
          Desenvolvedora Frontend e Designer na EJ Mega Júnior e autodidata em <br>
          finanças e marketing nas horas vagas.
        </p>
        <br> <br>
        <p>
          Já trabalhei com projetos envolvendo API's, designs e dashboards. <br>
          Atualmente, estou estudando Análise de Dados e Desenvolvimento Frontend.
        </p>
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
      bannerSection: 'Sobre mim'
    }
  }
}
</script>

<style scoped>
  .about {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  p {
    font-family: 'Play', sans-serif;
    color: var(--white);
    word-wrap: break-word;
    font-size: 20px;
  }

  #circulo {
    width: 280px;
    height: 280px;
    background-color: var(--light-black);
    margin: 50px;
    border-radius: 50%;
  }
</style>