import { defineStore } from "pinia";
import products from '../App.vue'

export const useProductStore = defineStore('ProductStore', {
	state: () => {
		return {
			products,
		}
	}
	// actions 
	// getters
})