interface PriceItemsProps {
  icon: string;
  title: string;
  description: string;
  keywords: string[];
  price: number;
  link: string;
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

export type image = {
  src: string;
  altText: string;
};

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

export type priceItems = PriceItemsProps[];
