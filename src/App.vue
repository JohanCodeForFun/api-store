<template>
  <div class="app">
    <NavBar />
    <SearchBar />
    <!-- <HeroMessage title="Sale, up to 70% off!" />
    <HeroInspiration title="Get the spring look" />
    <HeroProduct title="Find your perfect jacket for this spring!" /> -->

    <div class="container">
      <div class="row">
        <div class="col-4">
          <button @click="handleClickProducts('id')" class="btn btn-secondary">Order by id</button>
        </div>
        <div class="col-4">
          <button @click="handleClickProducts('title')" class="btn btn-secondary">Order by title</button>
        </div>
        <div class="col-4">
          <button @click="handleClickProducts('price')" class="btn btn-secondary">Order by price</button>
        </div>
        <ProductList :order="orderProduct" />
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ProductList from './components/ProductList.vue';
import NavBar from './components/NavBar.vue';
import SearchBar from './components/SearchBar.vue'
import OrderTermProducts from './types/OrderTermProducts';
import HeroProduct from './components/HeroProduct.vue';
import HeroInspiration from './components/HeroInspiration.vue';
import HeroMessage from './components/HeroMessage.vue';
import FooterComponent from './components/FooterComponent.vue';
import { useProductStore } from './stores/ProductStore';

export default defineComponent({
  name: 'App',
  components: { HeroInspiration, HeroMessage, HeroProduct, NavBar, ProductList, FooterComponent, SearchBar },
  setup() {
    const productStore = useProductStore();
    productStore.fill();

    const orderProduct = ref<OrderTermProducts>('id')
    const handleClickProducts = (term: OrderTermProducts) => {
      orderProduct.value = term
    }
    
    return { orderProduct, handleClickProducts }
  },
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
