import { LocationObject } from "./types/types";

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
