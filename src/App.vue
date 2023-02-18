<template>
  <div class="app">
    <NavBar />
    <SearchBar />

    <router-view></router-view>

    <FooterComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import NavBar from './components/NavBar.vue';
import SearchBar from './components/SearchBar.vue'
import FooterComponent from './components/FooterComponent.vue';

export default defineComponent({
  name: 'App',
  components: { NavBar, FooterComponent, SearchBar },
  setup() {},
})
</script>


<style scoped>
/* Colors */
/* 
Hot Pink, 
#EF7C8E
Cream
#FAE8E0
Spearmint
#B6E2D3
Rosewater
#D8A7B1 */
</style>
