// import BookingPayment from "./Booking Payment/BookingPayment";
import { useEffect, useState } from "react";
import BookingAddressForm from "./BookingAddressForm";
import BookingContact from "./BookingContact";
import BookingServiceTypeForm from "./BookingServiceTypeForm";
import BookingTimeForm from "./BookingTimeForm";
import BookingPayment from "./Booking Payment/BookingPayment";

const Booking = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    // Function to handle hash change
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    // Add event listener for hashchange
    window.addEventListener("hashchange", handleHashChange);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="w-full">
      {currentHash === "#step1" && <BookingAddressForm />}
      {currentHash === "#step2" && <BookingTimeForm />}
      {currentHash === "#step3" && <BookingServiceTypeForm />}
      {currentHash === "#step4" && <BookingContact />}
      {currentHash === "#step5" && <BookingPayment />}
    </div>
  );
};

export default Booking;
