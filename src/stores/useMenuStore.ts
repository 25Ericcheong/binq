import { MenuItemType } from "@/components/menu/menu-item-type";
import { OAT_MILK } from "@/components/menu/menu-items";
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
  isNormalOrOatMilk?: string;
  hasCreamCheese?: boolean;
  hasKonjacJelly?: boolean;
  mangoToppings?: string;
  toppings: string[];
  type: MenuItemType.Bingsu;
}

export interface CartItemDrinks extends CartItemBase {
  sugarLevel?: number;
  iceLevel?: number;
  hasCreamCheese?: boolean;
  topping?: string;
}

export type CartItems = CartItemBase | CartItemBingsu;

export const OAT_MILK_PRICE = 1;
const TOPPING_PRICE = 2;

export const useMenuStore = defineStore("menu", () => {
  const cart = ref<CartItems[]>([]);

  const getItemOrderByName = computed(() => {
    return (orderedItemName: string) =>
      cart.value.find((c) => c.name === orderedItemName);
  });

  const getNumberOfItemOrderByName = computed(() => {
    return (orderedItemName: string) => {
      const orders = cart.value.filter((c) => c.name === orderedItemName);

      if (orders.length === 0) {
        return;
      }

      // toppings data structure is stored slightly differently to drinks and bingsus
      if (orders[0].type === MenuItemType.Topping) {
        return orders[0].quantity;
      } else {
        return orders.length;
      }
    };
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

  function addBingsuOrder(bingsuOrder: CartItemBingsu) {
    if (bingsuOrder.isNormalOrOatMilk === OAT_MILK) {
      bingsuOrder.price += OAT_MILK_PRICE;
    }

    cart.value.push(bingsuOrder);
  }

  function addDrinksOrder(drinksOrder: CartItemDrinks) {
    cart.value.push(drinksOrder);
  }

  function $reset() {
    cart.value = [];
  }

  return {
    cart,
    getItemOrderByName,
    getNumberOfItemOrderByName,
    addToppingOrder,
    addBingsuOrder,
    addDrinksOrder,
    $reset,
  };
});
