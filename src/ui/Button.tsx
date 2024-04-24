import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
}

const Button = ({
  onClick,
  children,
  className,
  disabled = false,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      className={` rounded-full bg-primary px-5 py-2 text-sm font-bold text-bgColor transition-all duration-200 ease-in hover:cursor-pointer hover:bg-primaryHover md:px-5 md:py-2 md:text-base ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
