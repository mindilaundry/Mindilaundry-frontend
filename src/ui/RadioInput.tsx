import { InputHTMLAttributes, ReactNode } from "react";
import {
  DeepMap,
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

interface RadioInputProp extends InputHTMLAttributes<HTMLInputElement> {
  error: DeepMap<FieldValues, FieldErrors>;
  register: UseFormRegister<any>;
  validationSchema?: RegisterOptions;
  children: ReactNode;
}

const RadioInput = ({
  validationSchema,
  error,
  register,
  children,
  ...rest
}: RadioInputProp) => {
  return (
    <label
      className="relative flex h-14 w-full cursor-pointer items-center"
      htmlFor={rest.id}
    >
      <input
        type="radio"
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

export default RadioInput;
