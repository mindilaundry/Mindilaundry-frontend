import { InputHTMLAttributes, useState } from "react";
import { DeepMap, FieldValues, FieldErrors } from "react-hook-form";

interface PaymentInputProp extends InputHTMLAttributes<HTMLInputElement> {
  error: DeepMap<FieldValues, FieldErrors>;
  name: string;
  label: string;
  id: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

const PaymentInput = ({
  name,
  label,
  id,
  error,
  className,
  onChange,
  ...rest
}: PaymentInputProp) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="relative w-full">
      <label
        htmlFor={id || name}
        className={`absolute left-6 top-3 text-sm text-primary opacity-0 transition-all duration-100 ease-linear first-letter:capitalize m:text-[.9rem] ${
          isFocused ? "inputLabel" : ""
        }`}
      >
        {label}
      </label>
      <input
        {...rest}
        onChange={onChange}
        className={`textInput h-10 w-full rounded-md border border-lightPrimary bg-bgColor px-6 py-7 font-semibold outline-none transition-all duration-100 ease-linear first-letter:capitalize placeholder:text-sm placeholder:font-medium placeholder:text-Darkgray placeholder:text-opacity-70 focus:border focus:border-primary focus:placeholder:text-opacity-0 m:h-12 m:text-base m:placeholder:text-base md:h-12 ${isFocused ? "!pt-12" : ""}${className ? className : "capitalize "}`}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={(e) => {
          setIsFocused(!!e.target.value);
        }}
      />
      {error && error[name!] && (
        <span className="absolute -bottom-5 right-0 text-[.8rem] text-primaryRed">
          {error[name!].message}
        </span>
      )}
    </div>
  );
};

export default PaymentInput;
