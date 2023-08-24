<template>
  <footer>
    <p>Última atualização: 15/08/2023</p>
    <p>&copy; Feito por Élani Zanlucas</p>
    <p id="logo">&lt;/ E.M.Z &gt;</p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
  footer {
    background-color: var(--light-black);
    padding: 28px 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    bottom: 0;
  }

  #logo {
    color: var(--light-blue);
    font-family: 'Devil Breeze', sans-serif;
    font-weight: 500;
    font-size: 28px;
  }

  p {
    color: var(--white);
    font-family: 'Play', sans-serif;
    font-size: 16px;
  }
</style>