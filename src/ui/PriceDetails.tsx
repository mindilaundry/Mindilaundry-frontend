import { useLocation, useParams } from "react-router-dom";
import PriceDetailContent from "./PriceDetailContent";
import { getPageInformation, normalizeString } from "../utils/helper";
import { AllItemsPrices } from "../utils/priceListItems";

const PriceDetails = () => {
  const location = useLocation();
  const { slug } = useParams();
  const { pageTitle } = getPageInformation(location);
  const itemsArray = AllItemsPrices[normalizeString(pageTitle)];
  const title = pageTitle.replace(/and/i, "&").replace(/-/g, " ");

  const itemPrice = itemsArray.find((item) => {
    return item.item.toLowerCase() === slug?.split("-").join(" ").toLowerCase();
  });

  return (
    <div className="mt-4 flex w-full flex-col items-start justify-center">
      {itemPrice &&
        itemPrice.prices.map((item, i) => {
          return <PriceDetailContent {...item} service={title} key={i} />;
        })}
    </div>
  );
};

export default PriceDetails;
