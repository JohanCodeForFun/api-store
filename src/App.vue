<template>
  <div class="app">
    <NavBar />

    <div class="hero-content">
      <HeroMessage title="Sale, up to 70% off!"/>
      <HeroInspiration title="Get the spring look"/>
      <HeroProduct title="Find your jacket for the spring season"/>
    </div>
      
    <div class="container">
      <div class="row">
        <ProductList :products="products" :orderProduct="order"/>
      </div>
    </div>



      <div class="order">
        <button @click="handleClick('title')">Order by Title</button>
        <button @click="handleClick('salary')">Order by Salary</button>
        <button @click="handleClick('location')">Order by Location</button>
      </div>

    <JobList :jobs="jobs" :order="order" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import JobList from './components/JobList.vue';
import ProductList from './components/ProductList.vue';
import NavBar from './components/NavBar.vue';
import Job from './types/Job'
import OrderTerm from './types/OrderTerm'
import OrderTermProducts from './types/OrderTermProducts';
import HeroProduct from './components/HeroProduct.vue';
import HeroInspiration from './components/HeroInspiration.vue';
import HeroMessage from './components/HeroMessage.vue';

import { useProductStore } from './stores/ProductStore';
    // remeber to add store below in return statement

export default defineComponent({
  name: 'App',
  components: { HeroInspiration, HeroMessage, HeroProduct, JobList, NavBar, ProductList },
  setup() {
    const store = useProductStore();

    const jobs = ref<Job[]>([
      { title: 'farm worker', location: 'lon lon ranch', salary: 30000, id: '1' },
      { title: 'quarryman', location: 'death mountain', salary: 40000, id: '2' },
      { title: 'flute player', location: 'the lost woods', salary: 35000, id: '3' },
      { title: 'fisherman', location: 'lake hylia', salary: 21000, id: '4' },
      { title: 'prison guard', location: 'gerudo valley', salary: 32000, id: '5' }
    ])

    const order = ref<OrderTerm>('title');

    const orderProduct = ref<OrderTermProducts>('name')

    const handleClickProducts = (term: OrderTermProducts) => {
      orderProduct.value = term
    }

    const handleClick = (term: OrderTerm) => {
      order.value = term
    }

    const products = ref<[]>([]);
    // fix products type & syntax
    async function fetchAllProducts() {
      const res = await fetch('https://fakestoreapi.com/products')
      const data = await res.json();
      products.value = await data
      console.log(products)
      return {products};
    }


    fetchAllProducts()

    // remeber to add store below
  return { jobs, handleClick, order, products, /* add store */ }
  },
  // data() {
  //   return {
  //     name: 'Link',
  //     age: 25 as number | string
  //   }
  // },
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

.hero-content {
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}
header {
  text-align: center;
}

header .order {
  margin-top: 20px;
}

button {
  margin: 0 10px;
  color: #1195c9;
  border: 3px solid #1195c9;
  background: #d5f0ff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
header .title{
    display: flex;
    justify-content: center;
  }
  header img {
    width: 60px;
    margin-right: 20px;
  }
  header h1 {
    font-size: 3em;
  }
</style>
