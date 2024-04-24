import Button from "../../ui/Button";
import { useForm, SubmitHandler, FieldErrors, useWatch } from "react-hook-form";
import ServiceTypeContent from "./ServiceTypeContent";
import { pricingItems } from "../../utils/laundryExpressServices";
import BookingInfo from "./BookingInfo";
import BookingWhatNext from "./BookingWhatNext";
import { nextStep } from "../../utils/helper";
import { useBookings } from "../../hooks/useBookings";
import NextStepButton from "./NextStepButton";

interface IFormInput {
  wash: boolean;
  "wash & iron": boolean;
  "Dry Cleaning": boolean;
  "Duvets & Bulky Items": boolean;
}

const BookingServiceTypeForm = () => {
  const { setBookings } = useBookings();
  const { register, handleSubmit, control } = useForm<IFormInput>({
    // defaultValues: {
    //   wash: false,
    //   "wash & iron": false,
    //   "Dry Cleaning": false,
    //   "Duvets & Bulky Items": false,
    // },
  });
  const value = useWatch({
    control,
    name: ["wash", "wash & iron", "Dry Cleaning", "Duvets & Bulky Items"],
  });

  // const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    nextStep();
    setBookings((prev) => {
      return { ...prev, services: data };
    });
  };
  const onError = (errors: FieldErrors<IFormInput>) => console.log(errors);

  return (
    <div className="flex flex-col items-center justify-between" id="step3">
      <h1 className="w-full max-w-[800px] text-start text-lg font-semibold xxm:text-xl m:text-3xl md:mt-8 md:text-4xl">
        What Service Do You Need
      </h1>
      <form
        className="mt-8 flex w-full flex-col items-start justify-between gap-y-6"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        {pricingItems &&
          pricingItems.map((item, i) => (
            <ServiceTypeContent
              register={register}
              key={i}
              {...item}
              checked={!!value[i]}
            />
          ))}

        <NextStepButton />
      </form>
      <BookingInfo />
      <BookingWhatNext />
    </div>
  );
};

export default BookingServiceTypeForm;
