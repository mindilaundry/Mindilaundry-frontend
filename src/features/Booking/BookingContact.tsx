import { useForm, SubmitHandler, FieldErrors, useWatch } from "react-hook-form";
import Input from "../../ui/Input";
import CustomerTypeInput from "../../ui/CustomerTypeInput";
import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";

interface IFormInput {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  email: string;
  customerType: "company" | "individual";
}

const BookingContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IFormInput>({
    mode: "onBlur",
    defaultValues: { customerType: "individual" },
  });

  const value = useWatch({ control, name: "customerType" });

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  const onError = (errors: FieldErrors<IFormInput>) => console.log(errors);
  return (
    <div className="flex flex-col items-center justify-between" id="step4">
      <h1 className="w-full max-w-[800px] text-start text-xl font-semibold m:text-3xl md:mt-8 md:text-4xl">
        Contact
      </h1>
      <div className="mt-8 flex w-full items-center justify-between rounded-md bg-lightBlue p-3">
        <div className="flex flex-col items-start justify-between ">
          <p className="font-semibold">Already Have An Account?</p>
          <LinkButton to="#" title="Log in now" />
        </div>
        <div className="h-10 w-10 rounded-full bg-purple"></div>
      </div>
      <div className="mr-auto mt-4 flex flex-col items-start justify-between">
        <p className="text-left font-semibold">How can we contact you?</p>
        <p className="text-left text-sm text-primary">
          We need your contact information to keep you updated about your order.
        </p>
      </div>
      <form
        className="mt-4 flex w-full flex-col items-start justify-between gap-y-6 "
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <div className="flex items-center justify-between gap-x-8">
          <CustomerTypeInput
            id="individual"
            name="customerType"
            value="individual"
            register={register}
            error={errors}
          />
          <CustomerTypeInput
            id="company"
            name="customerType"
            value="company"
            register={register}
            error={errors}
          />
        </div>

        <div className="flex w-full flex-col items-start justify-between gap-y-8">
          <Input
            type="text"
            placeholder="First Name"
            label="First Name"
            name="firstName"
            id="firstName"
            error={errors}
            register={register}
            validationSchema={{
              required: {
                value: true,
                message: "This field is required",
              },
            }}
          />
          <Input
            type="text"
            placeholder="Last Name"
            label="Last Name"
            name="lastName"
            id="lastName"
            error={errors}
            register={register}
            validationSchema={{
              required: {
                value: true,
                message: "This field is required",
              },
            }}
          />
          {value === "company" ? (
            <Input
              type="text"
              placeholder="Company Name"
              label="Company Name"
              name="lastName"
              id="CompanyName"
              error={errors}
              register={register}
              validationSchema={{
                required: {
                  value: true,
                  message: "This field is required",
                },
              }}
            />
          ) : (
            ""
          )}
          <Input
            type="email"
            placeholder="Email"
            label="Email"
            name="email"
            id="email"
            error={errors}
            register={register}
            validationSchema={{
              required: {
                value: true,
                message: "This field is required",
              },
            }}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default BookingContact;
