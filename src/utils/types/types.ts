export type image = {
  src: string;
  altText: string;
};

export interface PriceItemsProps {
  icon: string
    | {
        src: string;
        altText: string;
      };
  title: string;
  description: string;
  keywords: string[];
  price: number;
  link: string;
}

export interface ServicesProp {
  wash: boolean;
  "wash & iron": boolean;
  "Dry Cleaning": boolean;
  "Duvets & Bulky Items": boolean;
}

export type LocationObject = {
  pathname: string;
  search: string;
  hash: string;
  state: any;
  key: string;
};

export type links = {
  title: string;
  link: string;
}[];

export type laundryExpressServices = {
  Image: image;
  text: string;
}[];

export type laundryCare = {
  image: image;
  text: string;
  title: string;
  description: string;
  link?: string | undefined;
  linkTitle?: string | undefined;
}[];

export type exploreServices = {
  title: string;
  items: string;
  deliveryTime: string;
  price: number;
  linkTitle: string;
  link: string;
  buttonTitle: string;
}[];

export type BookingInstructions = {
  icon: string;
  title: string;
  instruction: string;
}[];

export type priceItems = PriceItemsProps[];
