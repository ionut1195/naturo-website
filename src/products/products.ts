export type PurchaseType = "piece" | "kg";
export type ProductType = {
  type: PurchaseType;
  price: number;
  name: string;
  img: string;
  qty: number;
  category: "fruit" | "legume";
};

export const PRODUCTS: ProductType[] = [
  {
    category: "legume",
    type: "piece",
    price: 1,
    name: "Aubergines",
    img: "/aubergine.jpg",
    qty: 0,
  },
  {
    category: "legume",

    type: "kg",
    price: 4.5,
    name: "Bell peppers",
    img: "/bell-pepper.jpg",
    qty: 0,
  },
  {
    category: "legume",

    type: "kg",
    price: 1.5,
    name: "Carrots",
    img: "/carrot.jpg",
    qty: 0,
  },
  {
    category: "legume",

    type: "piece",
    price: 2,
    name: "Celery",
    img: "/celery.jpg",
    qty: 0,
  },
  {
    category: "legume",

    type: "kg",
    price: 5.5,
    name: "Cucumbers",
    img: "/cucumber.jpg",
    qty: 0,
  },
  {
    category: "legume",

    type: "kg",
    price: 2.5,
    name: "Potatoes",
    img: "/potatoes.jpg",
    qty: 0,
  },
  {
    category: "legume",

    type: "kg",
    price: 3.5,
    name: "Red radishes",
    img: "/radish.jpg",
    qty: 0,
  },
  {
    category: "legume",

    type: "kg",
    price: 3,
    name: "White radishes",
    img: "/white-radish.jpg",
    qty: 0,
  },
  {
    category: "legume",

    type: "kg",
    price: 5,
    name: "Red hot pepper",
    img: "/red-hot-pepper.jpg",
    qty: 0,
  },
  {
    category: "legume",

    type: "kg",
    price: 3,
    name: "Red onion",
    img: "/red-onion.jpg",
    qty: 0,
  },
  {
    category: "legume",

    type: "kg",
    price: 3,
    name: "Yellow onion",
    img: "/yellow-onion.jpg",
    qty: 0,
  },

  {
    category: "fruit",

    type: "kg",
    name: "Apples",
    price: 4,
    img: "apples.jpg",
    qty: 0,
  },
  {
    category: "fruit",

    type: "kg",
    name: "Cherries",
    price: 8,
    img: "cherries.jpg",
    qty: 0,
  },
  {
    category: "fruit",

    type: "kg",
    name: "Pears",
    price: 5,
    img: "pear.jpg",
    qty: 0,
  },
  {
    category: "fruit",

    type: "kg",
    name: "Strawberries",
    price: 7.5,
    img: "strawberry.jpg",
    qty: 0,
  },
];
