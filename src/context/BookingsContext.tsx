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
  customerType: string;
  firstName: string;
  lastName: string;
  companyname?: string;
  phoneNumber: number;
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
  updateBookingData: (formData: FieldValues) => void;
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
    customerType: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "" as unknown as number,
  },
};

// Default value conforms to contextType interface
const defaultContextValue: contextType = {
  bookings: initialState,
  setBookings: () => {},
  updateBookingData: function (): void {
    throw new Error("Function not implemented.");
  },
};

export const BookingsContext = createContext(defaultContextValue);

interface BookingContextProviderProp {
  children: ReactNode;
}
const BookingsContextProvider = ({ children }: BookingContextProviderProp) => {
  const [bookings, setBookings] = useState<BookingsProps>(initialState);
  const methods = useForm();

  const updateBookingData = (formData: FieldValues) => {
    // Update context with form values
    setBookings((prev) => ({
      ...prev,
      ...formData,
    }));
  };

  return (
    <BookingsContext.Provider
      value={{ bookings, setBookings, updateBookingData }}
    >
      <FormProvider {...methods}>{children}</FormProvider>
    </BookingsContext.Provider>
  );
};

export default BookingsContextProvider;
