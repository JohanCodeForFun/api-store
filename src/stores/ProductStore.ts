import { defineStore } from "pinia";
import axios from "axios";
import Product from "../types/Product";

export const useProductStore = defineStore("ProductStore", {
  state: () => {
    return {
      products: [] as Product[],
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
  },
  // actions
  // getters
});
