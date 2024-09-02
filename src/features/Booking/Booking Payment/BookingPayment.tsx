import {
  useForm,
  SubmitHandler,
  FieldErrors,
  useController,
} from "react-hook-form";
import PaymentInfo from "./PaymentInfo";
import Button from "../../../ui/Button";
import {
  validateCardNumber,
  validateCvv,
  validateExpiry,
} from "../../../utils/helper";
import { ChangeEvent } from "react";
import PaymentInput from "./PaymentInput";
import { paymentCard } from "../../../utils/images";
import NextStepButton from "../NextStepButton";

interface IFormInput {
  cardNumber: string;
  cvv: string;
  expiryDate: string;
}

const BookingPayment = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm<IFormInput>({ mode: "onBlur" });

  const { field: expiryField } = useController({
    name: "expiryDate",
    control,
    rules: {
      required: {
        value: true,
        message: "Expiry date is required",
      },
      maxLength: {
        value: 5,
        message: "Ivalid expiry date",
      },
      validate: (value) => validateExpiry(value) || "Invalid expiry date",
    },
  });
  const { field: CVVField } = useController({
    name: "cvv",
    control,
    rules: {
      required: {
        value: true,
        message: "Cvv number is required",
      },
      maxLength: {
        value: 4,
        message: "Invalid cvv number",
      },
      minLength: {
        value: 3,
        message: "Invalid cvv number",
      },
      validate: (value) => validateCvv(value) || "Invalid Cvv number",
    },
  });
  const { field: CardField } = useController({
    name: "cardNumber",
    control,
    rules: {
      required: {
        value: true,
        message: "card number is required",
      },
      maxLength: {
        value: 19,
        message: "Invalid card number",
      },
      minLength: {
        value: 16,
        message: "Invalid card number",
      },
      validate: (value) => validateCardNumber(value) || "Invalid card number",
    },
  });
  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    let value = event.target.value;

    // Remove any non-digit characters
    value = value.replace(/\D/g, "");

    // Insert space after every four digits
    value = value
      .replace(/\s/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();

    // Limit the length to 19 characters (standard for credit/debit card numbers)
    value = value.slice(0, 19);

    // Set the value using React Hook Form setValue
    setValue("cardNumber", value);
  };

  const handleExpiryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;

    // Only allow digits and slash
    value = value.replace(/[^\d/]/g, "");

    // Insert slash after 2nd character if not already present
    if (value.length > 2 && value.indexOf("/") === -1) {
      value = value.slice(0, 2) + "/" + value.slice(2);
    }

    // Limit the length to 5 characters (MM/YY format)
    value = value.slice(0, 5);

    // Set the value using React Hook Form setValue
    setValue("expiryDate", value, { shouldValidate: true });
  };

  const handleCvvChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;

    // Only allow digits
    value = value.replace(/\D/g, "");

    // Limit the length to 4 characters (CVV format)
    value = value.slice(0, 4);

    // Set the value using React Hook Form setValue
    setValue("cvv", value, { shouldValidate: true });
  };

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  const onError = (errors: FieldErrors<IFormInput>) => console.log(errors);
  return (
    <div className="flex flex-col items-center justify-between" id="step5">
      <h1 className="w-full max-w-[800px] text-start text-xl font-semibold m:text-3xl md:mt-8 md:text-4xl">
        Payment
      </h1>
      <div className="mt-8 h-auto w-full overflow-hidden rounded-md md:mt-16">
        <img
          src={paymentCard.src}
          alt={paymentCard.altText}
          className="w-full"
        />
      </div>
      <form
        className="mt-4 flex w-full flex-col items-start justify-between gap-y-6 md:mt-8"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <PaymentInput
          label={"card Number"}
          value={CardField.value}
          name={CardField.name}
          id={CardField.name}
          type="text"
          placeholder="0000 0000 0000 0000"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            handleCardNumberChange(e);
          }}
          error={errors}
        />

        <div className="grid w-full grid-cols-2 gap-4 ml:gap-8 ">
          <PaymentInput
            label={"Exp Date (MM/YY)"}
            value={expiryField.value}
            name={expiryField.name}
            id={expiryField.name}
            type="text"
            placeholder="Expiry Date"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              handleExpiryChange(e);
            }}
            error={errors}
            className="col-span-3"
          />

          <PaymentInput
            type="password"
            name={CVVField.name}
            id={CVVField.name}
            value={CVVField.value}
            label="CVV"
            error={errors}
            placeholder="CVV ****"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              handleCvvChange(e);
            }}
            className="col-span-3"
          />
        </div>
        <NextStepButton />
        <PaymentInfo />
      </form>
    </div>
  );
};

export default BookingPayment;
