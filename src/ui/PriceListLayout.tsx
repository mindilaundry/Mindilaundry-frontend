import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { getPageInformation, normalizeString } from "../utils/helper";
import { AllItemsPrices } from "../utils/priceListItems";
import { Fragment } from "react/jsx-runtime";
import CallUs from "./CallUs";
import LinkButton from "./LinkButton";
import { useEffect } from "react";

const PriceListLayout = () => {
  const location = useLocation();
  const { pageTitle } = getPageInformation(location);
  const pagePriceList = AllItemsPrices[normalizeString(pageTitle)];
  const link = `${location.pathname.split("/").slice(0, -2).join("/")}/service-details`;
  const pageName = pageTitle.replace(/-/g, " ").replace(/and/, "&");
  const navigate = useNavigate();

  useEffect(() => {
    const pathnameParts = location.pathname.split("/");
    if (
      pathnameParts.length === 4 &&
      pathnameParts[pathnameParts.length - 1] === "pricelist"
    ) {
      const itemLink = pagePriceList[0].item.toLowerCase().replace(" ", "-");
      const priceLink = `${location.pathname}/${itemLink}`;
      navigate(priceLink, { replace: true });
    }
  }, [location.pathname, pagePriceList, navigate]);

  return (
    <section className="mb-28 flex h-max w-full flex-col items-center justify-between ml:mb-0">
      <div className="mt-4 w-full">
        <AliceCarousel
          animationType="fadeout"
          animationDuration={200}
          animationEasingFunction="ease"
          disableButtonsControls
          mouseTracking
          disableDotsControls={true}
          keyboardNavigation
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
      <CallUs />
      <div className="mt-3 flex w-full items-center justify-between rounded-md border-lightPrimary bg-lightShade p-3">
        <div className="max-w-[85%]">
          <p className="mb-2 font-medium">
            Curious which clothes are suitable for {pageName}?
          </p>
          <LinkButton
            to={link}
            title="Check service Details"
            className="text-sm font-bold text-primary2"
          />
        </div>
        <div className="h-8 w-8 rounded-full bg-purple"></div>
      </div>
    </section>
  );
};

export default PriceListLayout;
