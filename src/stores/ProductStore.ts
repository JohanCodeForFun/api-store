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
        await axios.get("https://fakestoreapi.com/products")
      ).data;
      // const res = await axios
      //   .get("https://fakestoreapi.com/products")
      //   .then((response) => (products.value = response.data));
      // return { products };
    },
  },
  // actions
  // getters
});
