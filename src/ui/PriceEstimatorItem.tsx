import { usePriceEstimator } from "../hooks/usePriceEstimator";
import Button from "./Button";
interface PriceEstimatorItemProp {
  service: string;
  items: { itemName: string; quantity: number; price: number }[];
}

const PriceEstimatorItem = ({ service, items }: PriceEstimatorItemProp) => {
  const { services, setService } = usePriceEstimator();

  const handleIncreaseDecreaseQuantity = (
    direct: string,
    itemToUpdate: string,
  ) => {
    const updatedServices = [...services]; // Copy services array to avoid mutating state

    // Find the particular service index that contains the item to increment/decrement
    const serviceToUpdateIndex = updatedServices.findIndex(
      (item) => item.service.toLowerCase() === service.toLowerCase(),
    );

    if (serviceToUpdateIndex !== -1) {
      const serviceToUpdate = updatedServices[serviceToUpdateIndex];
      const itemToUpdateIndex = serviceToUpdate.items.findIndex(
        (item) => item.itemName.toLowerCase() === itemToUpdate.toLowerCase(),
      );

      if (itemToUpdateIndex !== -1) {
        if (direct === "incr") {
          // Increment item quantity
          serviceToUpdate.items[itemToUpdateIndex].quantity++;
        } else if (direct === "decr") {
          // Decrement item quantity
          serviceToUpdate.items[itemToUpdateIndex].quantity--;

          // If item quantity is zero or less, remove the item
          if (serviceToUpdate.items[itemToUpdateIndex].quantity <= 0) {
            serviceToUpdate.items.splice(itemToUpdateIndex, 1);
          }
        }

        // If service has no items left, remove the service
        if (serviceToUpdate.items.length === 0) {
          updatedServices.splice(serviceToUpdateIndex, 1);
        }

        // Update the state with the modified services array
        setService(updatedServices);
      }
    }
  };

  return (
    <div className="flex w-full flex-col items-start justify-between gap-y-2 border-b-[1px] border-b-lightPrimary pb-4 pt-2">
      <div className="mb-2 flex items-center justify-start gap-2">
        <div className="h-8 w-8 rounded-full bg-bgDarkColor1"></div>
        <h3 className="text-base font-bold capitalize">{service}</h3>
      </div>
      {items &&
        items.map((item, i) => (
          <div
            className=" relative mt-2 flex w-full items-center justify-between"
            key={i}
          >
            <p className="max-w-[45%] text-sm capitalize xxm:text-base md:max-w-[50%]">
              {item.itemName}
            </p>
            <div className="ml:left-[50%] absolute left-[42%] top-1/2 flex -translate-y-1/2 transform items-center justify-start gap-3 text-sm xxm:left-[52%] sm:gap-4 md:left-[60%] xl:left-[50%]">
              <Button
                className="noBg !flex items-center justify-center rounded-md border border-lightPrimary !p-0 text-center text-bgDarkColor1"
                onClick={() =>
                  handleIncreaseDecreaseQuantity("decr", item.itemName)
                }
              >
                <span className="m-auto mt-0 block !rounded-sm px-2 py-[1px]">
                  -
                </span>
              </Button>
              <p>{item.quantity}</p>
              <Button
                className="noBg !flex items-center justify-center rounded-md border border-lightPrimary !p-0 text-center text-bgDarkColor1"
                onClick={() =>
                  handleIncreaseDecreaseQuantity("incr", item.itemName)
                }
              >
                <span className="m-auto mt-0 block !rounded-sm px-2 py-[1px]">
                  +
                </span>
              </Button>
            </div>
            <p className="text-sm xxm:text-base">
              ${(Number(item.price) * Number(item.quantity)).toFixed(2)}
            </p>
          </div>
        ))}
    </div>
  );
};

export default PriceEstimatorItem;
