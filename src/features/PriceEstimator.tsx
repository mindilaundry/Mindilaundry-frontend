import { usePriceEstimator } from "../hooks/usePriceEstimator";
import Button from "../ui/Button";
import PriceEstimatorItem from "../ui/PriceEstimatorItem";

const PriceEstimator = () => {
  const { services } = usePriceEstimator();
  const totalPrice =
    services &&
    services.reduce((acc, service) => {
      service.items.forEach((item) => (acc += item.price * item.quantity));
      return acc;
    }, 0);

  return (
    <article className="flex w-full flex-col rounded-md border border-lightPrimary">
      <div className="flex w-full flex-col items-start justify-between gap-y-1 border-b-[1px] border-b-lightPrimary p-3">
        <p className="font-bold md:text-lg">
          {`${services.length} service${services.length > 1 ? "s" : ""}`}{" "}
          selected
        </p>
        <div className="flex w-full items-center justify-between ">
          <p className=" text-xs font-medium text-Darkgray">
            Do I need to list every item?
          </p>{" "}
          <Button className="noBg w-max rounded-none !p-0 !text-[0.65rem] font-medium text-primary2">
            <span className="w-max text-nowrap text-primary2"> Learn More</span>
          </Button>
        </div>
      </div>

      <div className="flex w-full px-3 pt-3">
        {services && services.length ? (
          <div className="w-full">
            {services.map((service, i) => {
              return (
                <PriceEstimatorItem
                  service={service.service}
                  items={service.items}
                  key={i}
                />
              );
            })}
          </div>
        ) : (
          <div className="lg:12 m-auto flex h-11 w-full rounded-md bg-accentColor px-3 text-center text-opacity-75 xxm:h-12 md:h-11">
            <span className="m-auto text-nowrap text-sm">
              Add items to start estimation.
            </span>
          </div>
        )}
      </div>

      {services.length ? (
        <div className="flex w-full px-3">
          <div className="mx-auto mt-3 flex w-full items-center justify-between gap-3 rounded-md bg-lightShade p-3 text-center text-opacity-75">
            <div className="mb-auto flex h-4 w-4 items-center justify-center rounded-full bg-accentColor">
              <span className="m-auto block h-4 w-4 text-center text-sm">
                *
              </span>
            </div>

            <span className=" ml-auto w-[95%] text-left text-[.65rem] xxm:text-[.74rem]">
              {totalPrice <= 35
                ? `Your items are under our $35 minimum order, you can continue the booking or add more.`
                : `The estimate is for your information only. The final price will be calculated once we clean your items.`}
            </span>
          </div>
        </div>
      ) : (
        ""
      )}

      {services.length ? (
        <div className="my-2 flex w-full items-center justify-between px-3">
          <p className="font-bold md:text-lg">Estimated Price</p>
          <p className="font-bold md:text-lg">
            ${Number(totalPrice).toFixed(2)}
          </p>
        </div>
      ) : (
        ""
      )}

      <div className="flex w-full p-3">
        <Button className="md:12 h-12 w-full rounded-md !p-0 !px-3 font-medium xxm:h-14 lg:h-14">
          <span className="w-max text-nowrap text-sm font-bold uppercase">
            Schedule An Order
          </span>
        </Button>
      </div>
    </article>
  );
};

export default PriceEstimator;
