import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
}

const Button = ({
  onClick,
  children,
  className,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      className={` rounded-full bg-primary px-5 py-2 text-sm font-bold text-bgColor transition-all duration-200 ease-in hover:cursor-pointer hover:bg-primaryHover md:px-5 md:py-2 md:text-base ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
