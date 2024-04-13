import BookingPayment from "./Booking Payment/BookingPayment";
import BookingAddressForm from "./BookingAddressForm";
import BookingContact from "./BookingContact";
import BookingServiceTypeForm from "./BookingServiceTypeForm";
import BookingTimeForm from "./BookingTimeForm";

const Booking = () => {
  return (
    <div className="w-full">
      {/* <BookingAddressForm /> */}
      {/* <BookingTimeForm /> */}
      {/* <BookingServiceTypeForm /> */}
      {/* <BookingContact /> */}
      <BookingPayment />
    </div>
  );
};

export default Booking;
