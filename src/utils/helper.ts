import { LocationObject, ServicesProp, priceItems } from "./types/types";

export const normalizeString = (str: string) => {
  return str.toLowerCase().replace(/ /g, "-").replace(/&/g, "and");
};

export const getPageInformation = (location: LocationObject) => {
  const pathNameArray = location.pathname && location.pathname.split("/");
  let pageTitle = pathNameArray[2];
  const page = pathNameArray[3];

  // Preprocess pageTitle to match the format in pricingItems
  if (pageTitle === "duvets-bulky-items") {
    pageTitle = pageTitle.replace("duvets-bulky-items", "duvets & bulky items");
  }
  return { pageTitle, page };
};

export const verifyFormValues = (obj: object = {}) => {
  if (!Object.values(obj).length) return false;
  for (const iterator of Object.values(obj)) {
    if (!iterator) return false;
  }
  return true;
};

export const nextStep = () => {
  return (window.location.hash =
    window.location.hash.slice(0, -1) +
    (Number(window.location.hash.slice(-1)) + 1));
};

export const getSelectedSevices = (
  bookings: ServicesProp,
  items: priceItems,
) => {
  // Extract selected services from the bookings object
  const selectedServices = Object.entries(bookings)
    .filter(([_, isSelected]) => isSelected)
    .map(([service]) => service);

  // Filter pricingItems based on selected services
  const services = items.filter((item) =>
    selectedServices.includes(item.title),
  );

  return services;
};
