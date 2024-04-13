import { Fragment } from "react/jsx-runtime";
import CheckBoxInput from "../../ui/CheckBoxInput";
import LinkButton from "../../ui/LinkButton";
import { PriceItemsProps } from "../../utils/types/types";
import RadionInputContent from "./RadioInputContent";

import {
  DeepMap,
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import Button from "../../ui/Button";

interface ServiceTypeContentProp extends PriceItemsProps {
  error?: DeepMap<FieldValues, FieldErrors>;
  register: UseFormRegister<any>;
  validationSchema?: RegisterOptions;
  checked: boolean;
}

const ServiceTypeContent = ({
  checked,
  icon,
  title,
  description,
  keywords,
  price,
  link,
  register,
  validationSchema,
}: ServiceTypeContentProp) => {
  return (
    <div
      className={`flex w-full flex-col rounded-md border border-lightPrimary p-3 ${checked ? "border-primary bg-lightShade" : ""}`}
    >
      <div className="flex w-full flex-col items-start justify-between gap-y-2 font-semibold">
        <div className="mr-auto flex w-full items-center justify-between gap-x-2">
          <div className="h-10 w-10 rounded-full bg-purple text-center xm:h-12 xm:w-12">
            {icon}
          </div>
          <h3 className="priceTitle mr-auto  text-sm font-semibold capitalize xxm:text-base xxm:font-bold sm:font-semibold md:text-lg">
            {title}
          </h3>
          <div className="ml-auto">
            <CheckBoxInput
              validationSchema={validationSchema}
              name={title}
              register={register}
              children={
                <RadionInputContent
                  icon={checked ? "" : "+"}
                  label={checked ? "Added" : "Add"}
                  checked={checked}
                  className="font-semibold"
                />
              }
            />
          </div>
        </div>
        <p className="text-sm xxm:text-base">From ${price} per item</p>
        <div className="my-1 flex flex-wrap items-center justify-start gap-1">
          {keywords &&
            keywords.map((keyword: string, i: number) => (
              <Fragment key={i}>
                <span className="w-max rounded bg-lightBlue px-1 text-sm font-semibold xxm:text-base">
                  {keyword}
                </span>
                {i !== keywords.length - 1 && <span> + </span>}
              </Fragment>
            ))}
        </div>
        {checked ? (
          <Button
            type="button"
            className="noBg !p-0 text-left font-semibold text-primary2"
          >
            Any special requests?
          </Button>
        ) : (
          <div className="flex w-full items-center justify-between gap-1">
            <p className="w-[65%] text-sm xxm:w-[72%] xxm:text-base">
              {description}{" "}
            </p>
            <LinkButton
              to={link}
              title="See prices"
              className="w-max text-sm font-semibold text-primary xxm:text-base"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceTypeContent;
