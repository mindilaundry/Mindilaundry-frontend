import { ReactNode } from "react";

interface BookingWhatNextContentProp {
  icon: ReactNode;
  title: string;
  instruction: string;
}

const BookingWhatNextContent = ({
  icon,
  title,
  instruction,
}: BookingWhatNextContentProp) => {
  return (
    <div className="flex flex-col items-center justify-start rounded-md bg-lightShade p-3">
      <div className="h-8 w-8 rounded-full bg-purple">{icon}</div>
      <p className="my-0 text-center font-semibold">{title}</p>
      <p className="text-center text-sm">{instruction}</p>
    </div>
  );
};

export default BookingWhatNextContent;
