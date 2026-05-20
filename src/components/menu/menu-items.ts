import type { Menu } from "@/components/menu/menu.vue";

export const OAT_MILK = "Oat Milk";

export const MENU: Menu = {
  Bingsu: [
    {
      price: 23,
      priceSmall: 17,
      name: "Roasted Soybean Oolong",
      imageName: "roasted-soybean-oolong",
      recommendedToppings: [
        "Butter Crisps",
        "Soybean Mochi",
        "Brown Sugar Jelly",
        "Cream Cheese w/ Soybean Powder",
      ],
    },
    {
      price: 23,
      priceSmall: 17,
      name: "White Peach Oolong",
      imageName: "white-peach-oolong",
      recommendedToppings: [
        "Brown Sugar Jelly",
        "Peach Popping Boba",
        "Taro Ball",
      ],
    },
    {
      price: 26,
      priceSmall: 18.5,
      name: "Mango Sago",
      imageName: "mango",
      recommendedToppings: [
        "Nata De Coco",
        "Passionfruit Popping Boba",
        "Mango",
      ],
    },
    {
      price: 26,
      priceSmall: 18.5,
      name: "Thai Milk Tea",
      imageName: "thai-milk-tea",
      recommendedToppings: [
        "Water Chestnut Popping Boba",
        "Ondeh-ondeh Mochi",
        "Lotus Biscoff",
      ],
    },
    {
      price: 33,
      priceSmall: 23.5,
      name: "Pistachio",
      imageName: "pistachio",
      recommendedToppings: [
        "Chocolate Butter Crisps",
        "Glazed Pistachio Crumbs",
        "White Sugar Jelly",
      ],
    },
    {
      price: 26,
      priceSmall: 18.5,
      name: "Dark Chocolate",
      imageName: "the-dark-knight",
      recommendedToppings: [
        "Butter Crisps",
        "Dark Chocolate Mochi",
        "White Sugar Jelly",
      ],
    },
    {
      price: 28,
      priceSmall: 20,
      name: "Matcha",
      imageName: "matcha",
      recommendedToppings: [
        "Brown Sugar Jelly",
        "Red Bean",
        "Soybean Mochi",
        "Cream Cheese",
      ],
    },
    {
      price: 28,
      priceSmall: 20,
      name: "Hoji Cha Cha",
      imageName: "hoji-cha-cha",
      recommendedToppings: [
        "Brown Sugar Jelly",
        "Red Bean",
        "Soybean Mochi",
        "Cream Cheese",
      ],
    },
    {
      price: 23,
      priceSmall: 17,
      name: "Kumquat Jasmine",
      imageName: "kumquat-jasmine",
      recommendedToppings: [
        "Nata De Coco",
        "Passionfruit Popping Boba",
        "Aiyu Jelly",
      ],
    },
    {
      price: 28,
      priceSmall: 20,
      name: "Tiramisu",
      imageName: "tiramisu",
      recommendedToppings: [
        "Brown Sugar Jelly",
        "Chocolate Butter Crisps",
        "Mascarpone Cream",
      ],
    },
    {
      price: 25,
      priceSmall: 18,
      name: "Soybean Longan",
      imageName: "soybean-longan",
      recommendedToppings: [
        "Water Chestnut Popping Boba",
        "Brown Sugar Jelly",
        "Longan",
      ],
    },
    {
      // TODO: verify small price from POS
      price: 30,
      priceSmall: 22,
      name: "Matcha Creme Brulee",
      imageName: "matcha-creme-brulee",
      recommendedToppings: [
        "Brown Sugar Jelly",
        "Red Bean",
        "Soybean Mochi",
        "Cream Cheese",
      ],
    },
    {
      // TODO: verify small price from POS
      price: 29,
      priceSmall: 21,
      name: "Dark Chocolate Pistachio Kunafa",
      imageName: "dark-chocolate-pistachio-kunafa",
      recommendedToppings: [
        "Dark Chocolate Mochi",
        "White Sugar Jelly",
        "Pistachio Kunafa",
      ],
    },
  ],
  Drinks: [
    {
      price: 13,
      name: "Da Hong Pao Milk Tea",
      imageName: "roasted-da-hong-pao-milk-tea",
      description: "Our TOP 1 drink — a comforting roasted milk tea with cream cheese and crystal jelly",
    },
    {
      price: 15,
      name: "Signature Binq Tea",
      imageName: "signature-binq-tea",
      description: "Our TOP 2 signature — jasmine tea with watermelon cube, mango cube, and crystal jelly",
    },
    {
      price: 15,
      name: "Watermelon Cheezo",
      imageName: "watermelon-cheezo",
      description: "Refreshing watermelon with jasmine tea, watermelon cube, and crystal jelly",
    },
    {
      price: 15,
      name: "Lychee Cheezo",
      imageName: "lychee-cheezo",
      description: "Exotic sweetness of lychee with jasmine tea, lychee cube, and crystal jelly",
    },
    {
      price: 9,
      name: "Chamomile Tea",
      imageName: "chamomile-tea",
      description: "Hot — gentle and floral. A calming cup to end your meal",
    },
    {
      price: 9,
      name: "Green Tea",
      imageName: "green-tea",
      description: "Hot — classic and light. Clean and refreshing",
    },
    {
      price: 9,
      name: "English Breakfast Tea",
      imageName: "english-breakfast-tea",
      description: "Hot — full-bodied and robust. Perfect with or without milk",
    },
  ],
  Topping: [
    {
      price: 2.0,
      name: "White Crystal Jelly",
      imageName: "white-crystal-jelly",
      description: "Add a burst of sweetness to your bingsu with this topping",
    },
    {
      price: 2.0,
      name: "Cream Cheese",
      imageName: "cream-cheese",
      description: "Adds richness and flavor to every bite - just pour it over",
    },
    {
      price: 2.0,
      name: "Nata De Coco",
      imageName: "nata-de-coco",
      description: "Chewy texture and refreshing taste — perfect for a tropical twist",
    },
    {
      price: 2.0,
      name: "Peach Popping Boba",
      imageName: "peach-popping-boba",
      description: "Bursting with juicy peach flavor with every pop",
    },
    {
      price: 2.0,
      name: "Passionfruit Popping Boba",
      imageName: "passionfruit-popping-boba",
      description: "Delivering a burst of tangy passionfruit goodness",
    },
    {
      price: 2.0,
      name: "Lychee Popping Boba",
      imageName: "lychee-popping-boba",
      description: "Popping sweet lychee — it can't get better than this",
    },
    {
      price: 2.0,
      name: "Waterchestnut Popping Boba",
      imageName: "waterchestnut-popping-boba",
      description: "Unique texture and subtle sweetness in every pop",
    },
    {
      price: 2.0,
      name: "Taroballs",
      imageName: "taroballs",
      description: "Chewy taro balls that add a comforting and nostalgic touch",
    },
    {
      price: 2.0,
      name: "Mini Taroballs",
      imageName: "mini-taroballs",
      description: "Bite-sized bliss — perfect for adding a quick chew",
    },
    {
      price: 2.0,
      name: "Soybean Mochi Cube",
      imageName: "soybean-mochi-cube",
      description: "The difference in chewy profile cannot be compared when coated with soybean",
    },
    {
      price: 2.0,
      name: "Dark Chocolate Mochi Cube",
      imageName: "dark-chocolate-mochi-cube",
      description: "Rich dark chocolate coating with a satisfying mochi chew",
    },
    {
      price: 2.0,
      name: "Brown Sugar Crystal Jelly",
      imageName: "brown-sugar-crystal-jelly",
      description: "Rich caramel flavor with a jelly-like texture",
    },
    {
      price: 2.0,
      name: "Aiyu Jelly",
      imageName: "aiyu-jelly",
      description: "Translucent jelly with a delicate flavor that complements your bingsu perfectly",
    },
    {
      price: 2.0,
      name: "Red Bean",
      imageName: "red-bean",
      description: "A classic and comforting taste — pairs perfectly with any bingsu",
    },
    {
      price: 2.0,
      name: "Butter Crisp",
      imageName: "butter-crisp",
      description: "Add a crunchy and buttery twist to your bingsu",
    },
    {
      price: 2.0,
      name: "Lotus Biscoff",
      imageName: "lotus-biscoff",
      description: "A crunch, plus a caramelised touch to your bingsu",
    },
    {
      price: 2.0,
      name: "Toasted Coconut",
      imageName: "toasted-coconut",
      description: "Crispy toasted coconut flakes that transport you to paradise",
    },
    {
      price: 2.0,
      name: "Mango",
      imageName: "mango",
      description: "Delight in the sweetness of ripe mango",
    },
    {
      price: 2.0,
      name: "Grapefruit",
      imageName: "grapefruit",
      description: "A burst of citrusy freshness — tangy and refreshing",
    },
  ],
};
