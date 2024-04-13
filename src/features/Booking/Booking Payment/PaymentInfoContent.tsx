import { ReactNode } from "react";

interface PaymentInfoContentProp {
  icon: ReactNode;
  info: string;
}

const PaymentInfoContent = ({ icon, info }: PaymentInfoContentProp) => {
  return (
    <div className="flex w-full items-center justify-start gap-x-2 xxm:gap-x-4">
      <div className="h-6 w-6 rounded-full bg-purple">{icon}</div>
      <p className="w-[85%] text-[0.75rem] m:text-sm">{info}</p>
    </div>
  );
};

export default PaymentInfoContent;
