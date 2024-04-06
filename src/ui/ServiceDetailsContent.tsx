import React, { ReactNode } from "react";

interface Option {
  type: string;
  description: string;
}

interface ServiceDetailsContentProp {
  title: string;
  description?: string;
  icon: ReactNode;
  options?: Array<Option>;
}

const ServiceDetailsContent = ({
  title,
  description,
  icon,
  options,
}: ServiceDetailsContentProp) => {
  const renderDescription = () => {
    if (!description) return null;

    // Replace \n with <br /> tags
    return description.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className="flex w-full flex-col gap-y-3 border-b border-b-lightPrimary py-6 xxm:py-8">
      <div className="flex items-center justify-start gap-x-2">
        <div className="text- flex h-8 w-8 items-center justify-center rounded-full border border-lightPrimary bg-lightShade ">
          {icon}
        </div>
        <h3 className="text-lg font-semibold first-letter:capitalize xxm:text-xl">
          {title}
        </h3>
      </div>
      {options?.length ? (
        <div className="flex w-full flex-col gap-y-4">
          {options.map((option, i) => (
            <div className="flex w-full flex-col gap-1 text-start" key={i}>
              <h4 className="font-semibold first-letter:capitalize">
                {option.type}
              </h4>
              <p className="text-sm xxm:text-base">{option.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-start text-sm xxm:text-base">
          {renderDescription()}
        </p>
      )}
    </div>
  );
};

export default ServiceDetailsContent;
