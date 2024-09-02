import { image } from "./types/types";

import creditCard from "/src/assets/images/creditCard2.png";
import washAndIron from "/images/washAndIronImg.jpg";

// Services Icons Import
import laundryMachine from "/laundryServiceIcons/laundry-machine.png";
import laundryMachine2 from "/laundryServiceIcons/laundry-machine2.png";
import clothes from "/laundryServiceIcons/clothes.png";

// Laundry Care Images Import
import washingMachine from "/images/LaundryCareImages/washingMachine.png";
import girlWithClothesSmiling from "/images/LaundryCareImages/girlWithClothesSmiling.png";
import ladySitting from "/images/LaundryCareImages/ladySittingBesidesClothes.jpg";

// Banner Images Import
import schedule from "/images/LaundryBannerImages/schedule.png";

// services Icon export
export const laundryMachineIcon: image = {
  src: laundryMachine,
  altText: "laundry-machine-icon",
};
export const laundryMachineIcon2: image = {
  src: laundryMachine2,
  altText: "laundry-machine2-icon",
};
export const clothesIcon: image = {
  src: clothes,
  altText: "clothes",
};

// Laundry Care Images
export const washingBasket: image = {
  src: washingMachine,
  altText: "laundry-basket-clothes in a laundry room",
};
export const girlSmiling: image = {
  src: girlWithClothesSmiling,
  altText: "lady-holding-bunch-of-clothes-and smiling",
};
export const lady: image = {
  src: ladySitting,
  altText: "lady-sitting-and-arranging-clothes",
};

// Banner Images Export
export const scheduleBannerImage: image = {
  src: schedule,
  altText: "person-making-a-call",
};

export const paymentCard: image = {
  src: creditCard,
  altText: "credit cards",
};

export const washAndIronIcon: image = {
  src: washAndIron,
  altText: "wash and iron icon",
};
