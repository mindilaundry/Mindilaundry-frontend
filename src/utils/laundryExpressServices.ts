import {
  clothesIcon,
  girlSmiling,
  lady,
  laundryMachineIcon,
  laundryMachineIcon2,
  washingBasket,
} from "./images";

import {
  exploreServices,
  laundryCare,
  laundryExpressServices,
  priceItems,
} from "./types/types";

export const services: laundryExpressServices = [
  {
    Image: laundryMachineIcon,
    text: "Professional Care",
  },
  {
    Image: laundryMachineIcon2,
    text: "fast pick up and delivery",
  },
  {
    Image: clothesIcon,
    text: "excellent services",
  },
];

export const expressServices: laundryCare = [
  {
    image: washingBasket,
    text: "Discover the joy of laundry-free living",
    title: "Dry Cleaning and Laundry Made Simple",
    description:
      "Relax knowing your clothing is in good hands. Our convenient laundry and dry cleaning service offers door-to-door delivery, tailored to your schedule with minimal effort required.",
    link: "/how-it-works",
    linkTitle: "See How It Works",
  },
  {
    image: lady,
    text: "We turn up whenever u need us",
    title: "Ordering a rinse has never been easier",
    description:
      "Schedule a collection and we will pickup and deliver at your convinence ",
    link: "/order",
    linkTitle: "Schedule Collection",
  },
  {
    image: girlSmiling,
    text: "Your hapinness is our satisfaction",
    title: "Because we are a laundry that care",
    description: " We pick and deliver for free",
  },
];

export const exploreOurServices: exploreServices = [
  {
    title: "Wash",
    items: "T-shirts, trousers, bedsheets and undergarments and other daily.",
    deliveryTime: "Fast delivery 24hr",
    price: 4,
    linkTitle: "see price list",
    link: "/prices-and-services/wash/pricelist",
    buttonTitle: "Order Now",
  },
  {
    title: "Wash & Fold",
    items: "T-shirts, trousers, bedsheets and undergarments and other daily.",
    deliveryTime: "Fast delivery 24hr",
    price: 4,
    linkTitle: "see price list",
    link: "/prices-and-services/wash-and-iron/pricelist",
    buttonTitle: "Order Now",
  },
  {
    title: "Dry Cleaning",
    items: "Suits, shirts, dresses and coats.",
    deliveryTime: "48hr",
    price: 4,
    linkTitle: "see price list",
    link: "/prices-and-services/dry-cleaning/pricelist",
    buttonTitle: "Order Now",
  },
  {
    title: "Duvet & Bulky Items",
    items: "Duvets, pillows and blankets.",
    deliveryTime: "48hr",
    price: 6,
    linkTitle: "see price list",
    link: "/prices-and-services/duvets-bulky-items/pricelist",
    buttonTitle: "Order Now",
  },
];

export const pricingItems: priceItems = [
  {
    icon: "icon",
    title: "wash",
    description: "For everyday laundry, bedsheets and towels",
    keywords: ["wash", "tumble dry", "in a bag"],
    price: 4,
    link: "/prices-and-services/wash/pricelist",
  },
  {
    icon: "icon",
    title: "wash & iron",
    description: "For everyday laundry bedsheets that requires ironing",
    keywords: ["wash", "tumble dry", "ironing", "folded or on hangers"],
    price: 6,
    link: "/prices-and-services/wash-and-iron/pricelist",
  },
  {
    icon: "icon",
    title: "Dry Cleaning",
    description: "For everyday laundry bedsheets and towels",
    keywords: ["Dry Cleaning", "ironing", "on hangers"],
    price: 8,
    link: "/prices-and-services/dry-cleaning/pricelist",
  },
  {
    icon: "icon",
    title: "Duvets & Bulky Items",
    description: "For larger items that require extra care",
    keywords: ["custom cleaning"],
    price: 16,
    link: "/prices-and-services/duvets-bulky-items/pricelist",
  },
];
