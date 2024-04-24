import { bookingInfo } from "../../../utils/bookingInstruction";
import PaymentInfoContent from "./PaymentInfoContent";

const PaymentInfo = () => {
  return (
    <div className="md:12 mt-10 w-full overflow-hidden rounded-md">
      <div className="w-full bg-lightBlue p-3 text-left xxm:p-4">
        <p className="font-semibold">How much do I pay?</p>
      </div>
      <div className="flex w-full flex-col  items-start justify-between gap-y-4 bg-lightShade p-3 xxm:p-4">
        {bookingInfo &&
          bookingInfo.map((info, i) => (
            <PaymentInfoContent key={i} {...info} />
          ))}
      </div>
    </div>
  );
};

export default PaymentInfo;
