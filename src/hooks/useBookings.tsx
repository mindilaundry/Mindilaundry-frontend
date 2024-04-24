import { useContext } from "react";
import { BookingsContext } from "../context/BookingsContext";

const useBookings = () => {
  const context = useContext(BookingsContext);

  if (!context) {
    throw new Error(
      "bookings context was used outside of bookingsContextProvider",
    );
  }

  return context;
};

export { useBookings };
