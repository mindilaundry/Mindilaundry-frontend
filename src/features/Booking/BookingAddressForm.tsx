import { useForm, SubmitHandler, FieldErrors, useWatch } from "react-hook-form";
import { FaLocationArrow } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { MdHotel } from "react-icons/md";
import { HiOfficeBuilding } from "react-icons/hi";
import { useBookings } from "../../hooks/useBookings";

import Button from "../../ui/Button";
import Input from "../../ui/Input";
import RadioInput from "../../ui/RadioInput";
import RadionInputContent from "./RadioInputContent";
import { nextStep } from "../../utils/helper";
import NextStepButton from "./NextStepButton";

enum AddressTypeEnum {
  home = "home",
  office = "office",
  hotel = "hotel",
}

interface IFormInput {
  address: string;
  addressDetails: string;
  addressType: AddressTypeEnum | string;
}

const BookingAddressForm = () => {
  const { bookings, setBookings } = useBookings();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IFormInput>({
    mode: "onBlur",
    defaultValues: {
      address: bookings.customerAddress.address,
      addressDetails: bookings.customerAddress.addressDetails,
      addressType: bookings.customerAddress.addressType,
    },
  });

  const value = useWatch({ control, name: "addressType" });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    nextStep();
    setBookings((prev) => {
      return { ...prev, customerAddress: data };
    });
  };

  const onError = (errors: FieldErrors<IFormInput>) => console.log(errors);

  return (
    <div className="flex flex-col items-center justify-between" id="step1">
      <h1 className="w-full max-w-[800px] text-start text-xl font-semibold m:text-3xl md:mt-8 md:text-4xl">
        Get Your Address
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="mt-8 flex w-full flex-col items-start justify-between gap-y-6 md:mt-16"
      >
        <div className="flex w-full flex-col items-start justify-between gap-y-2">
          <Input
            type="text"
            placeholder="Search for address or building"
            label="search for address or building"
            name="address"
            id="address"
            error={errors}
            register={register}
            validationSchema={{
              required: {
                value: true,
                message: "This field is required",
              },
            }}
          />

          <Button className="noBg !p-0 text-primary2">
            <span className="flex items-center justify-start gap-1 text-base">
              <FaLocationArrow />
              Map search
            </span>
          </Button>
        </div>

        <Input
          type="text"
          placeholder="Add address details (number, floor...)"
          label="Address details"
          name="addressDetails"
          id="addressDetails"
          error={errors}
          register={register}
          validationSchema={{
            required: {
              value: true,
              message: "This field is required",
            },
          }}
        />
        <div className="relative flex w-full flex-col items-start justify-between gap-y-1">
          <p className="text-left text-Darkgray text-opacity-70">
            Choose address type
          </p>

          <div className="flex w-full items-center justify-between gap-x-2 ">
            <RadioInput
              id="home"
              value="home"
              name="addressType"
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
                  icon={<MdHome />}
                  checked={value === "home"}
                  label="home"
                />
              }
            />
            <RadioInput
              id="office"
              value="office"
              name="addressType"
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
                  icon={<HiOfficeBuilding />}
                  checked={value === "office"}
                  label="office"
                />
              }
            />
            <RadioInput
              id="hotel"
              value="hotel"
              name="addressType"
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
                  icon={<MdHotel />}
                  checked={value === "hotel"}
                  label="hotel"
                />
              }
            />

            {errors && errors?.addressType && (
              <span className="absolute -bottom-5 right-0 text-[.8rem] text-primaryRed">
                {errors?.addressType?.message}
              </span>
            )}
          </div>
        </div>
        <NextStepButton />
      </form>
    </div>
  );
};

export default BookingAddressForm;
