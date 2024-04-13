import { useForm, SubmitHandler, FieldErrors, useWatch } from "react-hook-form";

import Button from "../../../ui/Button";
import PaymentInput from "./PaymentInput";
import PaymentInfo from "./PaymentInfo";

interface IFormInput {
  cardNumber: number;
  expiryDate: Date;
  cvc: number;
}

const BookingPayment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  const onError = (errors: FieldErrors<IFormInput>) => console.log(errors);
  return (
    <div className="flex flex-col items-center justify-between" id="step5">
      <h1 className="w-full max-w-[800px] text-start text-xl font-semibold m:text-3xl md:mt-8 md:text-4xl">
        Payment
      </h1>
      <form
        className="mt-8 flex w-full flex-col items-start justify-between gap-y-6 md:mt-16"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <PaymentInput
          type="number"
          name="cardNumber"
          id="cardName"
          label="Card number"
          error={errors}
          register={register}
          placeholder="0000 0000 0000 0000"
          validationSchema={{
            required: {
              value: true,
              message: "This field is required",
            },
          }}
        />

        <div className="grid w-full grid-cols-3 gap-2">
          <PaymentInput
            type="date"
            name="expiryDate"
            id="expiryDate"
            label="Expiry date"
            error={errors}
            register={register}
            className="col-span-2"
            placeholder="mm/yr"
            validationSchema={{
              required: {
                value: true,
                message: "This field is required",
              },
            }}
          />

          <PaymentInput
            type="number"
            name="cvc"
            id="cvc"
            label="CVC"
            error={errors}
            register={register}
            placeholder="123"
            className="col-span-1"
            validationSchema={{
              required: {
                value: true,
                message: "This field is required",
              },
              maxLength: {
                value: 3,
                message: "Incorrect number",
              },
              minLength: {
                value: 3,
                message: "Incorrect number",
              },
            }}
          />
        </div>
        <PaymentInfo />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default BookingPayment;
