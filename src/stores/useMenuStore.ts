import { MenuItemType } from "@/components/menu/menu-item-type";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export interface CartItemBase {
  price: number;
  name: string;
  quantity: number;
  instructions?: string;
  type: MenuItemType;
}

export interface CartItemBingsu extends CartItemBase {
  isNormalMilk?: boolean;
  hasCreamCheese?: boolean;
  hasKonjacJelly?: boolean;
  mangoToppings?: string;
  toppings: string[];
}

export type CartItems = CartItemBase | CartItemBingsu;

const TOPPING_PRICE = 2;
export const OAT_MILK_PRICE = 1;

export const useMenuStore = defineStore("menu", () => {
  const cart = ref<CartItems[]>([]);

  const getItemOrderByName = computed(() => {
    return (orderedItemName: string) =>
      cart.value.find((c) => c.name === orderedItemName);
  });

  function addToppingOrder(quantity: number, toppingName: string) {
    let toppingItem = cart.value.find((c) => c.name === toppingName);

    if (toppingItem === undefined) {
      cart.value.push({
        price: TOPPING_PRICE,
        name: toppingName,
        quantity: quantity,
        type: MenuItemType.Topping,
      });
    } else {
      toppingItem.quantity += quantity;
    }
  }

  function $reset() {
    cart.value = [];
  }

  return { cart, getItemOrderByName, addToppingOrder, $reset };
});