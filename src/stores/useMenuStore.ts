import { defineStore } from "pinia";
import { ref } from "vue";

export interface CartItemBase {
  index: number;
  price: number;
  name: string;
  quantity: number;
  instructions?: string;
}

export const useMenuStore = defineStore("menu", () => {
  const cart = ref<CartItemBase[]>([]);
});
