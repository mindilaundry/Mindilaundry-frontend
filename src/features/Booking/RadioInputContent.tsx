import { ReactNode } from "react";

interface RadioInputContentProp {
  icon?: ReactNode;
  label: string;
  checked: boolean;
  className?: string;
}

const RadionInputContent = ({
  icon,
  label,
  checked,
  className,
}: RadioInputContentProp) => {
  return (
    <div
      className={`flex h-full w-full items-center justify-center rounded-md border border-lightPrimary px-4 py-3 text-sm xxm:px-5 xxm:py-4 xxm:text-base ${checked ? "border-primary bg-lightShade text-primary" : ""} ${className}`}
    >
      <span
        className={`flex w-max items-center justify-between gap-x-[2px] capitalize ${checked ? "font-bold text-primary" : ""}`}
      >
        {icon} {label}
      </span>
    </div>
  );
};

export default RadionInputContent;
