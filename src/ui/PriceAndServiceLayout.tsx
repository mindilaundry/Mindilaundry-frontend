import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { pricingItems } from "../utils/laundryExpressServices";
import { FaAngleLeft } from "react-icons/fa6";
import Button from "./Button";
import PriceListHeader from "./PriceListHeader";
import { getPageInformation, normalizeString } from "../utils/helper";
import PriceEstimator from "../features/PriceEstimator/PriceEstimator";

const PriceAndServiceLayout = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/prices-and-services");
  };

  const location = useLocation();
  const link = location.pathname.split("/").slice(0, 3).join("/");
  const { pageTitle } = getPageInformation(location);

  const item = pricingItems.find((item) => {
    if (pageTitle === "duvets & bulky items") {
      return item.title.toLowerCase() === pageTitle.toLowerCase();
    }
    return normalizeString(item.title) === normalizeString(pageTitle);
  })!;

  return (
    <div className=" relative w-full">
      <nav className="globalPadding w-full bg-primary2">
        <ul className="m-auto flex w-full max-w-custom2 items-center justify-start gap-x-4">
          {pricingItems.map((item, i) => {
            return (
              <NavLink to={item.link} key={i}>
                <li key={i} className="rounded-full bg-lightBlue px-2 py-1">
                  {item.title}
                </li>
              </NavLink>
            );
          })}
        </ul>
      </nav>
      <div className=" w-full">
        <div className="globalPadding m-auto flex w-full max-w-custom2 items-center justify-start gap-x-4">
          <Button
            className=" noBg  flex items-center justify-start gap-2 !pl-0 text-xl font-semibold text-bgDarkColor1"
            onClick={handleNavigate}
          >
            <FaAngleLeft className="text-lg xxm:text-xl" />{" "}
            <span className="text-lg xxm:text-xl">Service List</span>
          </Button>
        </div>
      </div>
      <div className="globalPadding m-auto flex w-full max-w-custom2 flex-col items-center justify-between gap-8 ml:flex-row">
        <div className="mb-auto w-full ml:w-[55%] lg:w-[60%]">
          <div className="w-full">
            <PriceListHeader
              icon={item.icon}
              description={item.description}
              title={item.title}
              keywords={item.keywords}
              direction="flex-row-reverse"
              // textLeft is a modifier style in the index.css file with some styles tagged as !important
              className="textLeft justify-between"
            />
          </div>
          <div className="mt-8 flex w-full items-center justify-start gap-x-8 border-b border-b-lightPrimary">
            <NavLink
              to={`${link}/pricelist`}
              className="linkBorderBottom relative block py-3 text-base font-medium xxm:text-xl md:text-2xl"
            >
              Pricelist
              <span className=" absolute bottom-0 left-0 mt-auto block h-[2px] w-full origin-left scale-0 transform bg-primary2 transition-all duration-200 ease-linear"></span>
            </NavLink>
            <NavLink
              to={`${link}/service-details`}
              className="linkBorderBottom relative block py-3 text-base font-medium xxm:text-xl md:text-2xl"
            >
              Service Details
              <span className=" absolute bottom-0 left-0 mt-auto block h-[2px] w-full origin-right scale-0 transform bg-primary2 transition-all duration-200 ease-linear"></span>
            </NavLink>
          </div>
          <Outlet />
        </div>
        <div className="globalPadding fixed bottom-[0px]  left-0 flex w-full items-center justify-end bg-bgColor ml:sticky ml:top-0 ml:max-w-[380px] ml:self-start ml:p-0 lg:max-w-[400px]">
          <PriceEstimator />
        </div>
      </div>
    </div>
  );
};

export default PriceAndServiceLayout;
