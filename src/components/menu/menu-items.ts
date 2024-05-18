import type { Menu } from "@/components/menu/menu.vue";

export const OAT_MILK = "Oat Milk";

export const MENU: Menu = {
  Bingsu: [
    {
      price: 28.5,
      name: "White Peach Oolong",
      imageName: "white-peach-oolong",
      recommendedToppings: [
        "Brown sugar jelly",
        "Peach popping boba",
        "Taroball",
      ],
    },
    {
      price: 30.0,
      name: "The Dark Knight",
      imageName: "the-dark-knight",
      recommendedToppings: [
        "White sugar jelly",
        "Soybean mochi",
        "Butter crisp",
      ],
    },
    {
      price: 26.5,
      name: "Roasted Soybean Oolong",
      imageName: "roasted-soybean-oolong",
      recommendedToppings: [
        "Brown sugar jelly",
        "Soybean mochi cube",
        "Butter crisp",
        "Cream cheese",
      ],
    },
    {
      price: 30.0,
      name: "Matcha",
      imageName: "matcha",
      recommendedToppings: [
        "Brown sugar jelly",
        "Soybean mochi cube",
        "Red Bean",
        "Cream cheese",
      ],
    },
    {
      price: 32.0,
      name: "Mango",
      imageName: "mango",
      recommendedToppings: [
        "Passionfruit popping boba",
        "Nata de coco",
        "Mango",
      ],
    },
    {
      price: 28.5,
      name: "Kamquat Jasmine",
      imageName: "kumquat-jasmine",
      recommendedToppings: [
        "Nata de coco",
        "Passionfruit popping boba",
        "Aiyu jelly",
      ],
    },
    {
      price: 32.0,
      name: "Hoji Cha Cha",
      imageName: "hoji-cha-cha",
      recommendedToppings: [
        "Brown sugar jelly",
        "Soybean mochi cube",
        "Cream cheese",
      ],
    },
  ],
  Drinks: [
    {
      price: 15.0,
      name: "Watermelon Cheezo",
      imageName: "watermelon-cheezo",
      description:
        "A refreshing blend of watermelon and cheese, perfect for a cool and creamy treat",
    },
    {
      price: 15.0,
      name: "Signature Binq Tea",
      imageName: "signature-binq-tea",
      description: "Our staple signature drink at Binq",
    },
    {
      price: 15.0,
      name: "Lychee Cheezo",
      imageName: "lychee-cheezo",
      description:
        "Exotic sweetness of lychee combined with the creamy richness of cheese",
    },
    {
      price: 15.0,
      name: "Grape Cheezo",
      imageName: "grape-cheezo",
      description:
        "Refreshing taste of grapes that cuts through the cheesey goodness",
    },
    {
      price: 13.0,
      name: "Roasted Da Hong Pao Milk Tea",
      imageName: "roasted-da-hong-pao-milk-tea",
      description: "A comforting drink that will warm your soul with every sip",
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
      description:
        "With its' chewy texture and refreshing taste, it is perfect for adding a tropical twist to your bingsu",
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
      description: "Popping sweet lychee - it can't get better than this",
    },
    {
      price: 2.0,
      name: "Waterchestnut Popping Boba",
      imageName: "waterchestnut-popping-boba",
      description:
        "Savor the unique texture and subtle sweetness of our Waterchestnut Popping Boba",
    },
    {
      price: 2.0,
      name: "Taroballs",
      imageName: "taroballs",
      description:
        "Featuring chewy taro balls that add a comforting and nostalgic touch to your bingsu",
    },
    {
      price: 2.0,
      name: "Mini Taroballs",
      imageName: "mini-taroballs",
      description:
        "Delight in bite-sized bliss with our Mini Taroballs, perfect for adding a quick chew with bingsu",
    },
    {
      price: 2.0,
      name: "Soybean Mochi Cube",
      imageName: "soybean-mochi-cube",
      description:
        "The difference in chewy profile cannot be compared when it is coated with soybean",
    },
    {
      price: 2.0,
      name: "Brown Sugar Crystal Jelly",
      imageName: "brown-sugar-crystal-jelly",
      description:
        "Indulge in the rich caramel flavor and jelly-like texture of our Brown Sugar Crystal Jelly topping",
    },
    {
      price: 2.0,
      name: "Aiyu Jelly",
      imageName: "aiyu-jelly",
      description:
        "Translucent jelly with a delicate flavor that complements your bingsu perfectly",
    },
    {
      price: 2.0,
      name: "Red Bean",
      imageName: "red-bean",
      description:
        "A classic and comforting taste; perfect for it to be eaten with any of our bingsu",
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
      description: "A crunch, plus a caramalized touch to your bingsu",
    },
    {
      price: 2.0,
      name: "Toasted Coconut",
      imageName: "toasted-coconut",
      description:
        "Featuring crispy toasted coconut flakes that transport you to paradise with every bite",
    },
    {
      price: 2.0,
      name: "Cream Cheese with Soybean Powder",
      imageName: "cream-cheese",
      description:
        "Cheese and soybean powder - creating multiple indulgent layers to your bingsu",
    },
    {
      price: 2.0,
      name: "Mango",
      imageName: "mango",
      description:
        "Delight in the sweetness of ripe mango with our Mango topping",
    },
    {
      price: 2.0,
      name: "Grapefruit",
      imageName: "grapefruit",
      description:
        "Experience a burst of citrusy freshness with our Grapefruit topping, adding a tangy and refreshing twist to your bingsu",
    },
    {
      price: 2.0,
      name: "Passionfruit Popping Boba",
      imageName: "passionfruit-popping-boba",
      description:
        "Add a zing to your bingsu with our Passionfruit Popping Boba",
    },
  ],
};
