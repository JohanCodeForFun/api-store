<template>
  <div class="app">
    <Header />
    <header>
      <div class="title">
        <img src="./assets/heart.svg" alt="site logo">
        <h1>Amazing Store</h1>
      </div>
      <div class="order">
        <button @click="handleClick('title')">Order by Title</button>
        <button @click="handleClick('salary')">Order by Salary</button>
        <button @click="handleClick('location')">Order by Location</button>
      </div>
    </header>

    <ProductList :products="products" :order="order"/>


    <JobList :jobs="jobs" :order="order" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import JobList from './components/JobList.vue';
import ProductList from './components/ProductList.vue';
import Header from './components/Header.vue';
import Job from './types/Job'
import OrderTerm from './types/OrderTerm'

export default defineComponent({
  name: 'App',
  components: { JobList, Header },
  setup() {
    let products = ref<[]>;

    const jobs = ref<Job[]>([
      { title: 'farm worker', location: 'lon lon ranch', salary: 30000, id: '1' },
      { title: 'quarryman', location: 'death mountain', salary: 40000, id: '2' },
      { title: 'flute player', location: 'the lost woods', salary: 35000, id: '3' },
      { title: 'fisherman', location: 'lake hylia', salary: 21000, id: '4' },
      { title: 'prison guard', location: 'gerudo valley', salary: 32000, id: '5' }
    ])

    const order = ref<OrderTerm>('title');

    const handleClick = (term: OrderTerm) => {
      order.value = term
    }

    // fix products type & syntax
    async function fetchAllProducts() {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      products = await data
      console.log(products)
      return data;
    }


    fetchAllProducts()

    return { jobs, handleClick, order, products }
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
