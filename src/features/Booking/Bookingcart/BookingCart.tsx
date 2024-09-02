import { useState } from "react";
import { useBookings } from "../../../hooks/useBookings";
import Button from "../../../ui/Button";
import { getSelectedSevices } from "../../../utils/helper";
import { pricingItems } from "../../../utils/laundryExpressServices";
import BookingCartContent from "./BookingCartContent";
import { FaAngleDown } from "react-icons/fa6";

const BookingCart = () => {
  const [showCartItems, setShowCartItems] = useState(false);
  const { bookings } = useBookings();

  const HandleShowcartItems = () => {
    setShowCartItems(!showCartItems);
  };

  const servicesArray = getSelectedSevices(bookings.services, pricingItems);

  return (
    <div className="flex w-full flex-col-reverse rounded-md border border-lightPrimary ml:flex-col">
      <div className="w-full p-2 xxm:p-3">
        <Button
          className="noBg mb-3 flex h-6 w-full items-center justify-between !border-none !p-0 ml:hidden "
          onClick={HandleShowcartItems}
        >
          <p className="font-bold text-primary2">
            {showCartItems ? "Hide Order" : "Show Order"}
          </p>
          <FaAngleDown
            className={`md mt-[2px] h-5 w-5 rotate-0 transform text-lg text-primary2 transition-transform duration-200 ease-linear ${showCartItems ? "!-rotate-180" : ""}`}
          />
        </Button>

        <Button
          className={`h-10 w-full rounded-md uppercase disabled:bg-lightGray xxm:h-14`}
          type="submit"
          disabled={true}
        >
          Place Order
        </Button>
      </div>
      <div
        className={`hidden w-full flex-col-reverse ml:flex ml:flex-col ${showCartItems ? "!flex" : ""}`}
      >
        <div className="flex w-full flex-col">
          <div className="flex w-full flex-col gap-y-1 p-3 text-sm">
            <div className="flex w-full items-center justify-between font-bold">
              <p>Pay Now</p>
              <p>$39</p>
            </div>
            <div className="flex w-full items-center justify-between">
              <p>Minimum Order</p>
              <p>$35</p>
            </div>
            <div className="flex w-full items-center justify-between">
              <p>Collection & Delivery</p>
              <p className="rounded-md bg-lightBlue px-1 font-semibold capitalize">
                free
              </p>
            </div>
            <div className="flex w-full items-center justify-between">
              <p>Service Fee</p>
              <p>$4</p>
            </div>

            <Button className="noBg w-max !p-0 !text-sm text-primary2">
              How Charges Work?
            </Button>
          </div>
          <div className="flex w-full flex-col gap-y-1 p-3 text-sm">
            <p className="mr-auto text-left font-bold">Order Total</p>
            <p>
              If order total exceeds minimum charge, you will be charged the
              difference
            </p>
            <Button className="noBg w-max !p-0 !text-sm text-primary2">
              Learn More
            </Button>
          </div>
        </div>

        <div className="flex w-full flex-col ">
          <BookingCartContent title="Address" obj={bookings.customerAddress}>
            <p className="text-sm">{bookings.customerAddress.address}</p>
          </BookingCartContent>
          <BookingCartContent
            title="Collection time"
            obj={bookings.collectionAndDeliveryTime}
          >
            <p>
              {`${bookings.collectionAndDeliveryTime.collectiontDay} ${bookings.collectionAndDeliveryTime.collectionTime}`}
            </p>
            <p>{bookings.collectionAndDeliveryTime.collectionMethod}</p>
          </BookingCartContent>
          <BookingCartContent
            title="Delivery time"
            obj={bookings.collectionAndDeliveryTime}
          >
            <p>{`${bookings.collectionAndDeliveryTime.deliveryDay} ${bookings.collectionAndDeliveryTime.deliveryTime}`}</p>
            <p>{bookings.collectionAndDeliveryTime.deliveryMethod}</p>
          </BookingCartContent>
          <BookingCartContent title="Select services" obj={bookings.services}>
            {servicesArray &&
              servicesArray.map((service, i) => (
                <div
                  key={i}
                  className="mb-2 flex items-center justify-start gap-x-2"
                >
                  <div className="h-6 w-6 rounded-full bg-purple">
                    {service.icon}
                  </div>
                  <p>{service.title}</p>
                </div>
              ))}
          </BookingCartContent>
          <BookingCartContent title="Contact" obj={bookings.contact}>
            <p className="capitalize">{`${bookings.contact.firstName} ${bookings.contact.lastName}`}</p>
            <p>{bookings.contact.phoneNumber}</p>
          </BookingCartContent>
          <BookingCartContent title="Payment" />
        </div>
      </div>
    </div>
  );
};

export default BookingCart;
