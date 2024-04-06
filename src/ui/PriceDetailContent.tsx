import { usePriceEstimator } from "../hooks/usePriceEstimator";
import Button from "./Button";

interface PriceDetailContentProp {
  itemName: string;
  price: number;
  service: string;
}

const PriceDetailContent = ({
  itemName,
  price,
  service,
}: PriceDetailContentProp) => {
  const { services: serviceItems, setService } = usePriceEstimator();
  const handleUpdateServices = () => {
    const updatedServices = [...serviceItems]; // Create a copy of the services array

    // check if service already exist in the updatedServices
    const existingServiceIndex = updatedServices.findIndex(
      (item) => item.service === service,
    );
    if (existingServiceIndex !== -1) {
      // If the service exists, check if the item exists in the service's items array
      const existingItemIndex = updatedServices[
        existingServiceIndex
      ].items.findIndex(
        (item) => item.itemName.toLowerCase() === itemName.toLowerCase(),
      );
      if (existingItemIndex !== -1) {
        updatedServices[existingServiceIndex].items[existingItemIndex]
          .quantity++;
      } else {
        // If the item doesn't exist, add it to the service's items array
        updatedServices[existingServiceIndex].items.push({
          itemName,
          quantity: 1,
          price,
        });
      }
    } else {
      // If the service doesn't exist, create a new service object and add the item to its items array
      updatedServices.push({
        service,
        items: [{ itemName, quantity: 1, price }],
      });
    }

    setService(updatedServices);
  };

  return (
    <div className="flex w-full items-center justify-center border-b-[1px] border-lightPrimary py-2 xxm:py-4">
      <p className="mr-auto text-base capitalize xxm:text-lg">{itemName}</p>{" "}
      <p className="ml-auto mr-2 w-max text-base font-semibold xxm:text-lg">
        ${price}
      </p>
      <Button
        className="noBg ml-4 !flex items-center justify-center rounded-md border border-lightPrimary !p-0 text-center text-bgDarkColor1"
        onClick={handleUpdateServices}
      >
        <span className="m-auto mt-0 block !rounded-sm px-2 py-1">+</span>
      </Button>
    </div>
  );
};

export default PriceDetailContent;
