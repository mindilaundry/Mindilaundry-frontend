import { InputHTMLAttributes, ReactNode } from "react";
import {
  DeepMap,
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

interface CheckInputProp extends InputHTMLAttributes<HTMLInputElement> {
  error?: DeepMap<FieldValues, FieldErrors>;
  register: UseFormRegister<any>;
  validationSchema?: RegisterOptions;
  children: ReactNode;
}

const CheckBoxInput = ({
  validationSchema,
  error,
  register,
  children,
  ...rest
}: CheckInputProp) => {
  return (
    <label
      className="relative flex h-4 w-full cursor-pointer items-center"
      htmlFor={rest.id}
    >
      <input
        type="checkbox"
        className="absolute left-0 top-0 hidden h-1/3 w-1/3"
        id={rest.id}
        value={rest.value}
        {...rest}
        {...register(rest.name!, validationSchema)}
      />
      {children}
    </label>
  );
};

export default CheckBoxInput;
