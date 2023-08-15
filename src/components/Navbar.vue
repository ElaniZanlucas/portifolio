<template>
  <nav>
    <router-link to="/" id="logo-url">
      <p id="logo">&lt; E.M.Z &gt;</p>
    </router-link>
    <router-link to="/">Início</router-link> 
    <router-link to="/about">Sobre Mim</router-link> 
    <router-link to="/habilidades">Habilidades</router-link> 
    <router-link to="/projetos">Projetos</router-link> 
    <router-link to="/certificados">Certificados</router-link> 
    <router-link to="/contato">Contato</router-link> 
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
  nav {
    background-color: var(--light-black);
    padding: 12px 120px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  #logo-url {
    margin: auto;
    margin-left: 0;
  }

  #logo {
    color: var(--light-blue);
    font-family: 'Devil Breeze', sans-serif;
    font-weight: 500;
    font-size: 28px;
  }

  nav a {
    color: var(--white);
    text-decoration: none;
    margin: 16px;
    transition: .5s;
    font-family: 'Play', sans-serif;
    font-size: 16px;
  }

  nav a:hover {
    color: var(--light-blue);
  }
</style>
