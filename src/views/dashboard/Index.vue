<template>
  <v-app>
    <toolbar />
    <setting />
    <router-view />
  </v-app>
</template>

<script>
import Setting from './components/Setting.vue'
import Toolbar from './components/Toolbar.vue'
export default {
  components: { Toolbar, Setting },

}
</script>

<style>

</style>