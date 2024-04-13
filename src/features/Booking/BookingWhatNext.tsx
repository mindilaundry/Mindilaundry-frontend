import { bookingInstructions } from "../../utils/bookingInstruction";
import BookingWhatNextContent from "./BookingWhatNextContent";

const BookingWhatNext = () => {
  return (
    <div className="item-start mt-8 flex w-full flex-col justify-between gap-y-4 rounded-md p-3">
      <h3 className="font-semibold">What happens next</h3>
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {bookingInstructions &&
          bookingInstructions.map((item, i) => (
            <BookingWhatNextContent key={i} {...item} />
          ))}
      </div>
    </div>
  );
};

export default BookingWhatNext;
