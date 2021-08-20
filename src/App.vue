<template>
  <v-app>
      <Header></Header>
      <router-view/>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
export default {
  components: { 
    Header,
  },
  
}
</script>

<style lang="scss">
@import "@/assets/scss/index.scss";

</style>
