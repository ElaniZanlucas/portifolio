<template>
  <div class="main-container deep-black">
    <Banner :section="bannerSection"/>
    <div class="contato">
      <div class="email">
        <!-- Arrumar, pois o p é input e as escritas só são para mostrar oq é pra escrever -->
        <p class="text">Digite seu nome e empresa</p>
        <p class="text">Digite seu e-mail</p>
        <p class="text">Digite o assunto</p>
        <p class="text msg">Digite sua mensagem...</p>
        <button class="text">Enviar</button>
      </div>
      <div class="links">
        <a class="ctt linkedin" href="http://">
          <div class="img"></div>
          <div class="url">bla</div>
        </a>
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
      bannerSection: 'Contato'
    }
  }
}
</script>

<style scoped>
  .contato {
    /* background-color: blue; */
    display: flex;
    justify-content: space-around;
  }

  .email {
    /* background-color: blue; */
  }

  .links {

  }

  a {
    text-decoration: none;
  }

  .ctt {
    display: flex;
    align-items: center;
    /* background-color: green; */
  }

  .img {
    width: 56px;
    height: 56px;
    background-color: var(--light-black);
    border-radius: 8px;
    margin-right: 56px;
  }
</style>