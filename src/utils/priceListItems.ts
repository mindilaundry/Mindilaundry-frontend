type PriceItem = {
  itemName: string;
  price: number;
  type?: string; // Optional type for Dry Cleaning items, Silk, etc.
};

type ItemWithPrices = {
  item: string;
  prices: PriceItem[];
};

type ItemsPrices = {
  [key: string]: ItemWithPrices[];
};

const washItemPrices: ItemWithPrices[] = [
  {
    item: "shirts",
    prices: [
      {
        itemName: "shirt",
        price: 3,
      },
      {
        itemName: "linen shirt",
        price: 4,
      },
    ],
  },
  {
    item: "top",
    prices: [
      { itemName: "Cardigan", price: 7 },
      { itemName: "Sweater", price: 4 },
      { itemName: "Heavy Sweater", price: 5 },
      { itemName: "Top/Blouse", price: 4.2 },
      { itemName: "T-shirt", price: 3 },
      { itemName: "Polo Shirt", price: 3 },
    ],
  },
  {
    item: "bottoms",
    prices: [
      { itemName: "Pants/Jeans", price: 6 },
      { itemName: "Shorts", price: 6 },
      { itemName: "Skirt", price: 7 },
    ],
  },
  {
    item: "dresses",
    prices: [
      { itemName: "Dress", price: 14 },
      { itemName: "Dress/Gown-evening", price: 20.8 },
      { itemName: "Jumpsuit", price: 11 },
    ],
  },
  {
    item: "outerwear",
    prices: [
      { itemName: "Coat", price: 15.95 },
      { itemName: "Jacket/Blazer", price: 7.4 },
      { itemName: "Vest", price: 7.95 },
      { itemName: "Winter/Down Coat", price: 25 },
      { itemName: "Outer Jacket", price: 11.35 },
    ],
  },
  {
    item: "accessories & homewear",
    prices: [{ itemName: "Scarf", price: 4 }],
  },
  {
    item: "bed sheet",
    prices: [{ itemName: "Bed Sheets", price: 14 }],
  },
  {
    item: "duvet covers",
    prices: [{ itemName: "Duvet Cover - All Sizes", price: 14 }],
  },
  {
    item: "pillow cases & cushion covers",
    prices: [{ itemName: "Pillow Case", price: 5 }],
  },
  {
    item: "bathroom items",
    prices: [{ itemName: "Bathroom Mat", price: 6 }],
  },
  {
    item: "dining",
    prices: [
      { itemName: "Apron", price: 4 },
      { itemName: "Napkin", price: 3 },
      { itemName: "Tablecloth (up to 4m)", price: 20 },
    ],
  },
];

const washIronItemPrices: ItemWithPrices[] = [
  {
    item: "shirts",
    prices: [
      {
        itemName: "shirt",
        price: 3,
      },
      {
        itemName: "linen shirt",
        price: 4,
      },
    ],
  },
  {
    item: "top",
    prices: [
      { itemName: "Cardigan", price: 11 },
      { itemName: "Sweater", price: 9 },
      { itemName: "Heavy Sweater", price: 10 },
      { itemName: "Top/Blouse", price: 9.2 },
      { itemName: "T-shirt on Hanger", price: 5 },
      { itemName: "T-shirt folded", price: 4.6 },
      { itemName: "Polo Shirt on Hanger", price: 5 },
      { itemName: "Polo Shirt folded", price: 4.6 },
    ],
  },
  {
    item: "bottoms",
    prices: [
      { itemName: "Pants/ Jeans", price: 9 },
      { itemName: "Shorts", price: 9 },
      { itemName: "Skirt", price: 10 },
    ],
  },
  {
    item: "Dresses",
    prices: [
      { itemName: "Dress", price: 19 },
      { itemName: "Dress/Gown-evening", price: 25.8 },
      { itemName: "Jumpsuit", price: 15 },
    ],
  },
  {
    item: "Outerwear",
    prices: [
      { itemName: "Coat", price: 19.95 },
      { itemName: "Jacket/Blazer", price: 11.4 },
      { itemName: "Vest", price: 11.95 },
      { itemName: "Winter/Down Coat", price: 30 },
      { itemName: "Outer Jacket", price: 14.45 },
    ],
  },
  {
    item: "Accessories & Homewear",
    prices: [{ itemName: "Scarf", price: 6 }],
  },
  {
    item: "Bed Sheet",
    prices: [{ itemName: "Bed Sheets", price: 17.5 }],
  },
  {
    item: "Duvet Covers",
    prices: [{ itemName: "Duvet Cover - All Sizes", price: 18 }],
  },
  {
    item: "Pillow Cases & Cushion covers",
    prices: [{ itemName: "Pillow Case", price: 7 }],
  },
  {
    item: "Bathroom Items",
    prices: [{ itemName: "Bathroom Mat", price: 8.7 }],
  },
  {
    item: "Dining",
    prices: [
      { itemName: "Apron", price: 6 },
      { itemName: "Napkin", price: 4.5 },
      { itemName: "Tablecloth (up t0 4m)", price: 29 },
    ],
  },
];

const DryCleaningItemPrices: ItemWithPrices[] = [
  {
    item: "shirts",
    prices: [
      {
        itemName: "shirt on Hanger",
        price: 3.45,
      },
      {
        itemName: "delicate shirt on Hanger",
        type: "Silk or other delicate material",
        price: 7,
      },
      {
        itemName: "linen shirt on hanger",
        price: 4.95,
      },
    ],
  },
  {
    item: "top",
    prices: [
      { itemName: "Cardigan", price: 11 },
      { itemName: "Sweater", price: 9 },
      { itemName: "Heavy Sweater", price: 10 },
      { itemName: "Top/Blouse", price: 9.2 },
      {
        itemName: "Top/Blouse",
        type: "silk or other delicate material",
        price: 9.2,
      },
      { itemName: "T-shirt on Hanger", price: 5 },
      { itemName: "Polo Shirt on Hanger", price: 5 },
    ],
  },
  {
    item: "bottoms",
    prices: [
      { itemName: "Pants/ Jeans", price: 9.5 },
      {
        itemName: "Pants/ Jeans",
        type: "Silk or other delicate material",
        price: 13.5,
      },
      { itemName: "Shorts", price: 9.95 },
      { itemName: "Skirt", price: 9.95 },
      {
        itemName: "Skirt",
        type: "Silk or other delicate material",
        price: 9.95,
      },
    ],
  },
  {
    item: "Suits",
    prices: [
      { itemName: "2-piece Suit", price: 23 },
      { itemName: "3-piece Suit", price: 29.8 },
    ],
  },
  {
    item: "Dresses",
    prices: [
      { itemName: "Dress", price: 18.79 },
      {
        itemName: "Dress",
        type: "Silk or other delicate materia",
        price: 18.79,
      },
      { itemName: "Dress/Gown-evening", price: 25.8 },
      { itemName: "Jumpsuit", price: 15 },
    ],
  },
  {
    item: "Outerwear",
    prices: [
      { itemName: "Coat", price: 19.95 },
      { itemName: "Jacket/Blazer", price: 11.95 },
      { itemName: "Puffer/Down Coat", price: 20 },
      { itemName: "Vest", price: 11.95 },
      { itemName: "Winter/Down Coat", price: 30 },
      { itemName: "Outer Jacket", price: 14.45 },
    ],
  },
  {
    item: "Accessories & Homewear",
    prices: [
      { itemName: "Scarf", price: 6 },
      { itemName: "Tie", price: 6 },
    ],
  },
  {
    item: "Bed Sheet",
    prices: [{ itemName: "Bed Sheets", price: 17.5 }],
  },
  {
    item: "Duvet Covers",
    prices: [{ itemName: "Duvet Cover - All Sizes", price: 18 }],
  },
  {
    item: "Pillow Cases & Cushion covers",
    prices: [{ itemName: "Pillow Case", price: 7 }],
  },
  {
    item: "Bathroom Items",
    prices: [{ itemName: "Bathroom Mat", price: 8.7 }],
  },
];

const DuvetAndBulkyItemsPrices: ItemWithPrices[] = [
  {
    item: "Feather Comforter",
    prices: [{ itemName: "Feather Comforter - All Sizes", price: 44.7 }],
  },
  {
    item: "Synthetic Comforter",
    prices: [{ itemName: "Synthetic Comforter - All Sizes", price: 39.95 }],
  },
  {
    item: "Blankets & Bedspreads",
    prices: [
      { itemName: "Blanket - Single - Washable", price: 24.5 },
      { itemName: "Blanket - Double - Washable", price: 26.5 },
      { itemName: "Blanket - king - Washable", price: 28.5 },
      { itemName: "Bedspreads - Washable", price: 15 },
    ],
  },
  {
    item: "Pillows",
    prices: [
      { itemName: "Pillow-Synthetic", price: 24.95 },
      { itemName: "Pillow-Feather", price: 29.95 },
    ],
  },

  {
    item: "Mattress pads",
    prices: [
      { itemName: "Mattress Pad - Single", price: 20.5 },
      { itemName: "Mattress Pad - Double", price: 22.5 },
      { itemName: "Mattress Pad - king", price: 25.5 },
    ],
  },
];

export const AllItemsPrices: ItemsPrices = {
  wash: washItemPrices,
  "wash-and-iron": washIronItemPrices,
  "dry-cleaning": DryCleaningItemPrices,
  "duvets-and-bulky-items": DuvetAndBulkyItemsPrices,
};
