import { ReactNode, createContext, useState } from "react";

import { useForm, FormProvider, FieldValues } from "react-hook-form";

interface AddressProp {
  address: string;
  addressDetails: string;
  addressType: string;
}

interface CollectionTimeProp {
  collectiontDay: string;
  collectionTime: string;
  collectionMethod: string;
  deliveryDay: string;
  deliveryTime: string;
  deliveryMethod: string;
  driverInstruction?: string;
  frequency: string;
}

interface ServicesProp {
  wash: boolean;
  "wash & iron": boolean;
  "Dry Cleaning": boolean;
  "Duvets & Bulky Items": boolean;
}

interface ContactProp {
  customerType: "individual" | "company";
  firstName: string;
  lastName: string;
  companyName?: string;
  phoneNumber: string;
  email: string;
}

interface BookingsProps {
  customerAddress: AddressProp;
  collectionAndDeliveryTime: CollectionTimeProp;
  services: ServicesProp;
  contact: ContactProp;
}

interface contextType {
  bookings: BookingsProps;
  setBookings: React.Dispatch<React.SetStateAction<BookingsProps>>;
}

// initial State
const initialState: BookingsProps = {
  customerAddress: {
    address: "",
    addressDetails: "",
    addressType: "",
  },
  collectionAndDeliveryTime: {
    collectiontDay: "",
    collectionTime: "",
    collectionMethod: "",
    deliveryDay: "",
    deliveryTime: "",
    deliveryMethod: "",
    driverInstruction: "",
    frequency: "",
  },
  services: {
    wash: false,
    "wash & iron": false,
    "Dry Cleaning": false,
    "Duvets & Bulky Items": false,
  },
  contact: {
    customerType: "individual",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  },
};

// Default value conforms to contextType interface
const defaultContextValue: contextType = {
  bookings: initialState,
  setBookings: () => {},
};

export const BookingsContext = createContext(defaultContextValue);

interface BookingContextProviderProp {
  children: ReactNode;
}
const BookingsContextProvider = ({ children }: BookingContextProviderProp) => {
  const [bookings, setBookings] = useState<BookingsProps>(initialState);
  const methods = useForm();

  return (
    <BookingsContext.Provider value={{ bookings, setBookings }}>
      <FormProvider {...methods}>{children}</FormProvider>
    </BookingsContext.Provider>
  );
};

export default BookingsContextProvider;
