import { defineStore } from "pinia";
import { useAuthUserStore } from "./AuthUserStore";
import { groupBy } from "lodash";
import Item from "../types/Item";

export const useCartStore = defineStore("CartStore", {
  state: () => {
    return {
      items: <Item[]>[],
    };
  },
  getters: {
    count: (state) => state.items.length,
    isEmpty: (state) => state.items.length === 0,
    grouped: (state) => {
      const grouped = groupBy(state.items, (item: Item) => item.title);
      return grouped
    },
    total: state => state.items.reduce((acc, cur) => acc + cur.price, 0).toFixed(2)
      },
  actions: {
    checkout() {
      const AuthUserStore = useAuthUserStore();
      alert(
        `${AuthUserStore.username} just bought ${this.count} items at a total of $${this.total}.`
      );
    },
    addItems(item: Item) {
      this.items.push({ ...item });
    },
    clearItem(productItem: Object) {
      this.items = this.items.filter((item) => item.title !== productItem);
    },
    setItemCount(item: Item) {
      this.clearItem(item.title);
      this.addItems(item);
    },
  },
});
