import { Outlet } from "react-router-dom";
import BookingCart from "./Bookingcart/BookingCart";
import BookingsContextProvider from "../../context/BookingsContext";

const BookingLayOut = () => {
  return (
    <BookingsContextProvider>
      <section className="relative flex w-full">
        <div className="globalPadding relative m-auto flex w-full max-w-custom2 flex-col items-center justify-between gap-8 ml:flex-row">
          <div className="mb-auto w-full ml:w-[55%] lg:w-[60%]">
            <Outlet />
          </div>
          <div className=" sticky bottom-[0px]  left-0 flex w-full items-center justify-end bg-bgColor ml:top-0 ml:max-w-[380px] ml:self-start ml:p-0 lg:max-w-[400px]">
            <BookingCart />
          </div>
        </div>
      </section>
    </BookingsContextProvider>
  );
};

export default BookingLayOut;
