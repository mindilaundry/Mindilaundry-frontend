import { MdOutlineToday } from "react-icons/md";
import { PiClockBold } from "react-icons/pi";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { useForm, SubmitHandler, FieldErrors, useWatch } from "react-hook-form";
import {
  collectionOption,
  deliveryOption,
  generateDayOptions,
  generateTimeOptions,
} from "../../utils/bookingSchedule";

import SelectInput from "../../ui/SelectInput";
import RadioInput from "../../ui/RadioInput";
import TextAreaInput from "../../ui/TextAreaInput";
import RadionInputContent from "./RadioInputContent";
import NextStepButton from "./NextStepButton";
import { useBookings } from "../../hooks/useBookings";
import { nextStep } from "../../utils/helper";

enum SelectDayEnum {
  today = "today",
  tommorrow = "tommorrow",
  other = "other",
}
enum FrequencyEnum {
  once = "once",
  weekly = "weekly",
  twoWeeks = "twoWeeks",
  fourWeeks = "fourWeeks",
}

interface IFormInput {
  collectionDay: SelectDayEnum;
  deliveryDay: SelectDayEnum | string;
  frequency: FrequencyEnum;
  driverInstruction: string | undefined;
  collectionTime: string;
  collectionMethod: string;
  deliveryTime: string;
  deliveryMethod: string;
}

const BookingTimeForm = () => {
  const { bookings, setBookings } = useBookings();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IFormInput>({
    mode: "onBlur",
    defaultValues: {
      collectionDay:
        SelectDayEnum.today ||
        bookings.collectionAndDeliveryTime.collectiontDay,
      collectionTime:
        "09:00 AM - 12:00 PM" ||
        bookings.collectionAndDeliveryTime.collectionTime,
      collectionMethod:
        "Collect from me in person" ||
        bookings.collectionAndDeliveryTime.collectionMethod,
      deliveryDay:
        generateDayOptions("delivery")[0].value ||
        bookings.collectionAndDeliveryTime.deliveryDay,
      deliveryTime:
        "09:00 AM - 12:00 PM" ||
        bookings.collectionAndDeliveryTime.deliveryTime,
      deliveryMethod:
        "Deliver to me in person" ||
        bookings.collectionAndDeliveryTime.deliveryMethod,
      driverInstruction: bookings.collectionAndDeliveryTime.driverInstruction,
      frequency:
        FrequencyEnum.once || bookings.collectionAndDeliveryTime.frequency,
    },
  });
  const value = useWatch({
    control,
    name: ["frequency", "collectionDay", "deliveryDay"],
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    nextStep();
    setBookings((prev) => {
      return { ...prev, collectionAndDeliveryTime: data };
    });
  };
  const onError = (errors: FieldErrors<IFormInput>) => console.log(errors);

  return (
    <div className="flex flex-col items-center justify-between" id="step2">
      <h1 className="w-full max-w-[800px] text-start text-xl font-semibold m:text-3xl md:mt-8 md:text-4xl">
        Collection & delivery
      </h1>
      <form
        className="mt-8 flex w-full flex-col items-start justify-between gap-y-6"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <div className="flex w-full flex-col items-start justify-start gap-y-2 border-b border-lightPrimary pb-8">
          <h2 className="font-semibold">Collection Time</h2>
          <div className="flex w-full items-center justify-between gap-x-4">
            {" "}
            <SelectInput
              label="Select day"
              id="collectionDay"
              name="collectiontDay"
              error={errors}
              register={register}
              validationSchema={{
                required: { value: true, message: "This field is required" },
              }}
              options={generateDayOptions()}
              icon={<MdOutlineToday className="text-lg" />}
            />
            <SelectInput
              label="Select time"
              id="collectionTime"
              name="collectionTime"
              error={errors}
              register={register}
              validationSchema={{
                required: { value: true, message: "This field is required" },
              }}
              options={generateTimeOptions(
                new Date(`${value[1]},${new Date().getFullYear()}`),
              )}
              icon={<PiClockBold className="text-lg" />}
            />
          </div>
          <SelectInput
            label="Driver instruction"
            id="collectionMethod"
            name="collectionMethod"
            error={errors}
            register={register}
            validationSchema={{
              required: { value: true, message: "This field is required" },
            }}
            options={collectionOption}
            icon={<FaPersonCircleQuestion className="text-xl" />}
          />
        </div>
        <div className="flex w-full flex-col items-start justify-start gap-y-2 border-b border-lightPrimary pb-8">
          <h2 className="font-semibold">Delivery Time</h2>
          <div className="flex w-full items-center justify-between gap-x-4">
            {" "}
            <SelectInput
              label="Select day"
              id="deliveryDay"
              name="deliveryDay"
              error={errors}
              register={register}
              validationSchema={{
                required: { value: true, message: "This field is required" },
              }}
              options={generateDayOptions("delivery")}
              icon={<MdOutlineToday className="text-lg" />}
            />
            <SelectInput
              label="Select time"
              id="deliveryTime"
              name="deliveryTime"
              error={errors}
              register={register}
              validationSchema={{
                required: { value: true, message: "This field is required" },
              }}
              options={generateTimeOptions(
                new Date(`${value[2]},${new Date().getFullYear()}`),
              )}
              icon={<PiClockBold className="text-lg" />}
            />
          </div>
          <SelectInput
            label="Driver instruction"
            id="deliveryMethod"
            name="deliveryMethod"
            error={errors}
            register={register}
            validationSchema={{
              required: { value: true, message: "This field is required" },
            }}
            options={deliveryOption}
            icon={<FaPersonCircleQuestion className="text-xl" />}
          />
        </div>
        <div className="flex w-full flex-col items-start justify-start gap-y-2 border-b border-lightPrimary pb-8">
          <TextAreaInput
            rows={4}
            cols={50}
            label="Instructions for driver"
            id="driverInstruction"
            name="driverInstruction"
            placeholder="Any special instruction for driver"
            error={errors}
            register={register}
            className="!px-4"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-start gap-y-2 border-b border-lightPrimary pb-8">
          <h2 className="font-semibold">Frequency</h2>
          <div className="grid w-full grid-cols-2 gap-4">
            <RadioInput
              id="once"
              value="once"
              name="frequency"
              error={errors}
              register={register}
              validationSchema={{
                required: {
                  value: true,
                  message: "This field is required",
                },
              }}
              children={
                <RadionInputContent
                  label="Just Once"
                  checked={value[0] === "once"}
                />
              }
            />
            <RadioInput
              id="weekly"
              value="weekly"
              name="frequency"
              checked={value[0] === "weekly"}
              error={errors}
              register={register}
              validationSchema={{
                required: {
                  value: true,
                  message: "This field is required",
                },
              }}
              children={
                <RadionInputContent
                  label="Weekly"
                  checked={value[0] === "weekly"}
                />
              }
            />
            <RadioInput
              id="twoWeeks"
              value="twoWeeks"
              name="frequency"
              error={errors}
              register={register}
              validationSchema={{
                required: {
                  value: true,
                  message: "This field is required",
                },
              }}
              children={
                <RadionInputContent
                  label="Every Two Weeks"
                  checked={value[0] === "twoWeeks"}
                />
              }
            />
            <RadioInput
              id="fourWeeks"
              value="fourWeeks"
              name="frequency"
              checked={value[0] === "fourWeeks"}
              error={errors}
              register={register}
              validationSchema={{
                required: {
                  value: true,
                  message: "This field is required",
                },
              }}
              children={
                <RadionInputContent
                  label="Every Four Weeks"
                  checked={value[0] === "fourWeeks"}
                />
              }
            />
          </div>
        </div>
        <NextStepButton />
      </form>
    </div>
  );
};

export default BookingTimeForm;
