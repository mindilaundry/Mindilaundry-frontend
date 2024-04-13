import { InputHTMLAttributes } from "react";
import {
  DeepMap,
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

interface CustomerTypeInputProp extends InputHTMLAttributes<HTMLInputElement> {
  error: DeepMap<FieldValues, FieldErrors>;
  register: UseFormRegister<any>;
  validationSchema?: RegisterOptions;
}

const CustomerTypeInput = ({
  validationSchema,
  error,
  register,
  ...rest
}: CustomerTypeInputProp) => {
  return (
    <div className="cursor-pointer space-x-1">
      <input
        type="radio"
        value={rest.value}
        {...rest}
        {...register(rest.name!, validationSchema)}
        className="cursor-pointer"
      />
      <label htmlFor={rest.id} className="cursor-pointer capitalize">
        {rest.id}
      </label>
    </div>
  );
};

export default CustomerTypeInput;
