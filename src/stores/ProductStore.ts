import { defineStore } from "pinia";
import products from "../App.vue";
import Product from "../types/Product";

export const useProductStore = defineStore("ProductStore", {
  state: () => {
    return {
      products,
    };
  },
  // actions
  // getters
});
