import { defineStore } from "pinia";
import { useAuthUserStore } from "./AuthUserStore";
import { groupBy } from "lodash";
import Item from "../types/Item";

// interface State {
// 	items: Item[];
// 	count?: any
// }

export const useCartStore = defineStore("CartStore", {
  state: () => {
    return {
      items: <Item[]>[], // Property 'count' does not exist on type '{ items: never[]; }
    };
  },
  getters: {
    count: (state) => state.items.length,
    isEmpty: (state) => state.count === 0,
    // isEmpty({ items }) {
    // 	return (items: []) => items.length
    // },
    grouped: (state) => {
      const grouped = groupBy(state.items, (item: Item) => item.title);
      const sorted = Object.keys(grouped).sort();
      let inOrder = {};
      sorted.forEach((key) => (inOrder[key] = grouped[key]));
      return inOrder;
    },
    groupCount: (state) => (title) => state.grouped[title].length,
    // groupCount: (state) => <T>(title: T): T => state.grouped[title].length,
    total: state => state.items.reduce((acc, cur) => acc + cur.price, 0).toFixed(2)
      },
  actions: {
    checkout() {
      const AuthUserStore = useAuthUserStore();
      alert(
        `${AuthUserStore.username} just bought ${this.count} items at a total of $${this.total}.`
      );
    },
    addItems(item: Item, count) {
      for (let i = 0; i < count; i++) {
      }
      this.items.push({ ...item });
    },
    clearItem(productItem: Object) {
      this.items = this.items.filter((item) => item.title !== productItem);
    },
    setItemCount(item: Item, count: number) {
      // Pinia Fundamentals course on vueschool
      // Challenge Part 2: Setting Item Counts in the Cart
      this.clearItem(item.title);
      this.addItems(item, count);
    },
  },
});
