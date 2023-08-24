<template>
  <div class="titulo">
    <h1>/*<span>{{section}}</span>*/</h1>
  </div>  
</template>

<script>
export default {
  name: "Banner",
  props: {
    section: String
  }
}
</script>

<style scoped>
  h1 {
    color: var(--blue);
  }
  span {
    color: var(--white);
  }
</style>