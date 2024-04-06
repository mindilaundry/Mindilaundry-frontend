import { pricingItems } from "../utils/laundryExpressServices";
import CallUs from "./CallUs";
import PriceItem from "./PriceItem";

interface itemsProp {
  icon: string;
  title: string;
  description: string;
  keywords: string[];
  price: number;
  link: string;
}

const PriceItems = () => {
  return (
    <section className="globalPadding sectionMargin  !mt-6 h-max w-full">
      <div className="m-auto grid w-full max-w-custom2 auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {pricingItems &&
          pricingItems.map((items: itemsProp, i: number) => {
            return <PriceItem key={i} {...items} />;
          })}
      </div>
      <CallUs />
    </section>
  );
};

export default PriceItems;
