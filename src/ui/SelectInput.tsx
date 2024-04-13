import { ReactNode, SelectHTMLAttributes } from "react";
import {
  DeepMap,
  FieldValues,
  FieldErrors,
  UseFormRegister,
  RegisterOptions,
} from "react-hook-form";

interface InputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error: DeepMap<FieldValues, FieldErrors>;
  register: UseFormRegister<any>;
  validationSchema?: RegisterOptions;
  icon?: ReactNode;
  className?: string;
  options: Array<{ value: string; label: string }>;
}

const SelectInput = ({
  register,
  validationSchema,
  error,
  icon,
  label,
  className,
  options,
  ...rest
}: InputProps) => {
  return (
    <div
      className="item-start relative
    flex w-full flex-col justify-start gap-y-2"
    >
      <label htmlFor={rest.id}>{label}</label>
      <div className="relative flex w-full items-center justify-start">
        <select
          className={` textInput h-10 w-full cursor-pointer rounded-md border border-lightPrimary bg-bgColor pl-8 font-semibold capitalize outline-none transition-all first-letter:capitalize  focus:border focus:border-primary  xxm:pl-10 m:h-12 m:text-base md:h-14 md:pl-11 ${className}`}
          {...rest}
          {...register(rest.name!, validationSchema)}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="absolute left-4 top-1/2 -translate-y-1/2 transform">
          {icon}
        </span>
      </div>
    </div>
  );
};

export default SelectInput;
