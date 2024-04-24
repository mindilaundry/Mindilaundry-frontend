import { ReactNode } from "react";
import { FaCheck } from "react-icons/fa6";
import { verifyFormValues } from "../../../utils/helper";

interface BookingCartContentProp {
  title: string;
  children?: ReactNode;
  obj?: object;
}

const BookingCartContent = ({
  title,
  obj,
  children,
}: BookingCartContentProp) => {
  // const verifyFormValues: boolean = verifyFormValues(obj);
  const verify: boolean = verifyFormValues?.(obj);
  return (
    <div className="borderBottomNone bordertop m-auto flex w-full border-b border-lightPrimary p-2 xxm:p-3">
      <div className="m-auto flex w-full flex-col items-start justify-between gap-1 text-sm font-[450]">
        <div className="flex w-full items-center justify-start gap-x-2">
          {/* <div className="h-8 w-8 rounded-full bg-purple"></div> */}
          <div
            className={`rounded-full p-1 ${verify ? "bg-primary2" : "bg-lightGray"}`}
          >
            <FaCheck className="text-xs text-bgColor" />
          </div>
          <p className="text-left font-bold capitalize">{title}</p>
        </div>
        <div className="w-full pl-7 font-semibold">{children}</div>
      </div>
    </div>
  );
};

export default BookingCartContent;
