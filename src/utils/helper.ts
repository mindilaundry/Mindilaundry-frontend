import { LocationObject, ServicesProp, priceItems } from "./types/types";
import { PhoneNumberUtil } from "google-libphonenumber";

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
    if (iterator) return true;
  }
  return false;
};

export const nextStep = () => {
  let currentStep = window.location.hash.slice(-1);
  if (Number(currentStep) === 5) return;
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

const phoneUtil = PhoneNumberUtil.getInstance();

export const isPhoneValid = (phone: string) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};

export const validateExpiry = (value: string): boolean => {
  // Split the value into month and year
  const [month, year] = value.split("/").map((part) => parseInt(part));

  // Get the current date
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100; // Get last two digits of the current year
  const currentMonth = currentDate.getMonth() + 1; // Month is zero-based

  // Validate the month and year
  return (
    month >= 1 &&
    month <= 12 && // Check if month is between 1 and 12
    (year > currentYear || (year === currentYear && month >= currentMonth)) // Check if year is current year or later, and if month is valid for the current year
  );
};

export const validateCvv = (value: string): boolean => {
  // Remove any non-digit characters
  const cleanedValue = value.replace(/\D/g, "");

  // Check if the cleaned value consists of 3 or 4 digits
  return cleanedValue.length === 3 || cleanedValue.length === 4;
};

export const validateCardNumber = (value: string): boolean => {
  // Remove any non-digit characters
  const cleanedValue = value.replace(/\D/g, "");

  // Check if the value is empty or contains non-digit characters
  if (!cleanedValue || isNaN(Number(cleanedValue))) {
    return false;
  }

  // Check if the value passes the Luhn algorithm checksum
  let sum = 0;
  let isEven = false;
  for (let i = cleanedValue.length - 1; i >= 0; i--) {
    let digit = Number(cleanedValue.charAt(i));

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  if (sum % 10 !== 0) {
    return false;
  }

  // Check if the value matches known card network patterns
  const cardPatterns = {
    visa: /^4/,
    mastercard: /^5[1-5]/,
    amex: /^3[47]/,
    discover: /^6(?:011|5)/,
    diners: /^3(?:0[0-5]|[68])/,
  };

  let isValidNetwork = false;
  for (const network in cardPatterns) {
    if (cardPatterns[network as keyof typeof cardPatterns].test(cleanedValue)) {
      isValidNetwork = true;
      break;
    }
  }

  return isValidNetwork;
};
