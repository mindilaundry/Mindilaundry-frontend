import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { getPageInformation, normalizeString } from "../utils/helper";
import { AllItemsPrices } from "../utils/priceListItems";
import { Fragment } from "react/jsx-runtime";

const PriceListLayout = () => {
  const location = useLocation();
  const { pageTitle } = getPageInformation(location);
  const pagePriceList = AllItemsPrices[normalizeString(pageTitle)];

  return (
    <section className="flex h-max w-full flex-col items-center justify-between">
      <div className="mt-4 w-full">
        <AliceCarousel
          animationType="fadeout"
          animationDuration={200}
          animationEasingFunction="ease"
          disableButtonsControls
          mouseTracking
          disableDotsControls={true}
          keyboardNavigation
          // responsive={responsive}
          autoWidth
        >
          {pagePriceList &&
            pagePriceList.map((list, i) => {
              return (
                <Fragment key={i}>
                  <NavLink
                    to={`${list.item.toLowerCase().split(" ").join("-")}`}
                    key={i}
                    className="priceItemTag flex w-max cursor-pointer items-center justify-center rounded-full bg-lightShade px-2 py-1 font-medium capitalize !text-bgDarkColor1"
                  >
                    {list.item}
                  </NavLink>
                </Fragment>
              );
            })}
        </AliceCarousel>
      </div>
      <Outlet />
    </section>
  );
};

export default PriceListLayout;
