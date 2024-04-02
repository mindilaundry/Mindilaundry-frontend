import { services } from "../utils/laundryExpressServices";

const LaundryExpressServices = () => {
  return (
    <div className="md:item-center mx-auto flex w-full max-w-[800px] flex-col items-start justify-between gap-y-6 md:flex-row md:justify-between xl:max-w-[1000px]">
      {services.map((service, i) => {
        return (
          <div
            className="ml-10 flex items-center justify-start gap-x-3 md:ml-0"
            key={i}
          >
            <div className=" flex h-12 w-12 items-center justify-center rounded-full bg-accentColor p-2">
              <img
                src={service.Image.src}
                alt={service.Image.altText}
                className="h-5/6 w-5/6"
              />
            </div>{" "}
            <p className="text-base font-bold xxm:text-lg md:text-[1.15rem]">
              {service.text}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default LaundryExpressServices;
