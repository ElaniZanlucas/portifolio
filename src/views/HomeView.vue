<template>
  <div class="home main-container black">
    <div class="description">
      <h1>Élani Zanlucas</h1>
      <h2>FRONTEND DEV &amp; AN. DE DADOS</h2>
      <div class="contatos">
        <div class="linkedin"></div>
        <div class="github"></div>
      </div>
    </div>
    <div id="circulo"></div>
  </div>
</template>

<script>
export default {
  name: "Home",
}

</script>

<style scoped>
  .home {
    display: flex;
    /* background-color: blue; */
    align-items: center;
    justify-content: space-around;
  }

  h1 {
    display: flex;
    justify-content: flex-start;
    color: var(--white);
    font-family: 'Play', sans-serif;
    font-size: 64px;
  }

  h2 {
    font-family: 'Devil Breeze', sans-serif;
    color: var(--light-blue);
    font-weight: 500;
    font-size: 32px;
    margin: 20px 0;
  }

  #circulo {
    width: 320px;
    height: 320px;
    background-color: var(--light-black);
    margin: 50px;
    border-radius: 50%;
  }

  .contatos {
    display: flex;
  }

  .linkedin {
    width: 56px;
    height: 56px;
    background-color: var(--light-black);
    margin: 50px;
    border-radius: 8px;
    margin: 0;
  }

  .github {
    width: 56px;
    height: 56px;
    background-color: var(--light-black);
    margin: 50px;
    border-radius: 8px;
    margin: 0 24px;
  }
</style>