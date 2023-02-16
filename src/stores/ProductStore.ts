import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
import Product from "../types/Product";



export const useProductStore = defineStore("ProductStore", {
  state: () => {
    const filteredProducts = ref([]);
    // const products = ref([])

    return {
      products: [] as Product[],
      filteredProducts: [] as Product[],
    };
  },
  actions: {
    async fill() {
      this.products = (
        await axios
        .get("https://fakestoreapi.com/products")
        .then(response => (this.products = response.data))
        .catch(error => console.log(error)));
    },
    search(searchQuery: string) {
        if (searchQuery === '') return this.filteredProducts = this.products;
        this.filteredProducts = this.products.filter(product => {
          return (product.title.toLowerCase().includes(searchQuery.toLowerCase()))
        })
      }
    } 
  // getters
});
