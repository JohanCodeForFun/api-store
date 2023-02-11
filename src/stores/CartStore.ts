import { defineStore } from "pinia";
import { groupBy } from 'lodash';
import Item from "../types/Item";
import Product from "../types/Product";
export const useCartStore = defineStore('CartStore', {
	state: () => {
		return {
			items: [] as Item[],
		};
	},
	getters: {
		count: state => state.items.length,
		isEmpty: state => state.count === 0,
		grouped: state => groupBy(state.items, (item: Item) => item.title)
	},
	actions: {
		addItems(item: Product) {
			this.items.push({ ...item });
		}
	}
});