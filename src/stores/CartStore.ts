import { defineStore } from "pinia";
import { groupBy } from 'lodash';
// import Item from "../types/Item";

interface Item {
	title: string,
	image: string,
	price: number,
	description: string,
	category: string,
	id: number,
	rating: {
		rate: number,
		count: number
	}
  count?: string;
  grouped?: string;
}

interface State {
	items: Item[];
	count?: any
}

export const useCartStore = defineStore('CartStore', {
	state: () => {
		return {
			items: <Item[]> [], // Property 'count' does not exist on type '{ items: never[]; } 
		};
	},
	getters: {
		count: state => state.items.length,
		isEmpty: state => state.count === 0,
		// isEmpty({ items }) {
		// 	return (items: []) => items.length
		// },
		grouped: state => {
			const grouped = groupBy(state.items, (item: Item) => item.title);
			const sorted = Object.keys(grouped).sort();
			let inOrder = {};
			sorted.forEach((key => (inOrder[key] = grouped[key])))
			return inOrder
		},
		groupCount: state => <T> (title: T): T => state.grouped[title].length,
	},
	actions: {
		addItems(item: Item) {
			this.items.push({ ...item });
		},
		clearItem(productItem) {
			this.items = this.items.filter((item) => item.title !== productItem)
		}
	}
});