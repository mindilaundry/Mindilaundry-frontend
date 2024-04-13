import { InputHTMLAttributes } from "react";
import {
  FieldErrors,
  UseFormRegister,
  FieldValues,
  RegisterOptions,
  DeepMap,
} from "react-hook-form";

interface PaymentInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label: string;
  error: DeepMap<FieldValues, FieldErrors>;
  register: UseFormRegister<any>;
  validationSchema?: RegisterOptions;
}

const PaymentInput = ({
  label,
  register,
  validationSchema,
  error,
  className,
  ...rest
}: PaymentInputProps) => {
  return (
    <div
      className={`relative flex w-full flex-col items-start justify-between gap-y-1 ${className}`}
    >
      <label htmlFor={rest.id} className="text-Darkgray">
        {label}
      </label>
      <input
        {...rest}
        {...register(rest.name!, validationSchema)}
        className={`textInput h-10 w-full rounded-md border border-lightPrimary bg-bgColor px-6 py-7 font-semibold capitalize outline-none transition-all duration-100 ease-linear first-letter:capitalize placeholder:text-sm placeholder:font-medium placeholder:text-Darkgray placeholder:text-opacity-70 focus:border focus:border-primary m:h-12 m:text-base m:placeholder:text-base md:h-14`}
      />
      {error && error[rest.name!] && (
        <span className="absolute -bottom-5 right-0 text-[.8rem] text-primaryRed">
          {error[rest.name!].message}
        </span>
      )}
    </div>
  );
};

export default PaymentInput;
