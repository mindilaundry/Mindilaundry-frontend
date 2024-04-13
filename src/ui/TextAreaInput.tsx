import { TextareaHTMLAttributes, useState } from "react";
import {
  FieldErrors,
  UseFormRegister,
  FieldValues,
  RegisterOptions,
  DeepMap,
} from "react-hook-form";

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error: DeepMap<FieldValues, FieldErrors>;
  register: UseFormRegister<any>;
  validationSchema?: RegisterOptions;
  className?: string;
}

const TextAreaInput = ({
  label,
  register,
  validationSchema,
  error,
  className,
  ...rest
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full">
      <label
        htmlFor={rest.id || rest.name}
        className={`absolute left-6 top-3 text-sm text-primary opacity-0 transition-all duration-100 ease-linear first-letter:capitalize m:text-[.9rem] ${
          isFocused ? "inputLabel" : ""
        }`}
      >
        {label}
      </label>
      <textarea
        {...rest}
        {...register(rest.name!, validationSchema)}
        className={`textInput h-32 w-full rounded-md border border-lightPrimary bg-bgColor px-6 py-7 font-semibold capitalize outline-none transition-all duration-100 ease-linear first-letter:capitalize placeholder:text-sm placeholder:font-medium placeholder:text-Darkgray placeholder:text-opacity-70 focus:border focus:border-primary focus:placeholder:text-opacity-0 m:h-32 m:text-base m:placeholder:text-base md:h-32 ${isFocused ? "pt-8" : ""}${className}`}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={(e) => {
          setIsFocused(!!e.target.value);
        }}
      />
      {error && error[rest.name!] && (
        <span className="absolute -bottom-5 right-0 text-[.8rem] text-primaryRed">
          {error[rest.name!].message}
        </span>
      )}
    </div>
  );
};

export default TextAreaInput;
