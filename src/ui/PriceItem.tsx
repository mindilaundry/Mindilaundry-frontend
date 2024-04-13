import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Fragment } from "react/jsx-runtime";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import PriceListHeader from "./PriceListHeader";
interface itemsProp {
  icon: string;
  title: string;
  description: string;
  keywords: string[];
  price: number;
  link: string;
}

const PriceItem = ({
  icon,
  title,
  description,
  keywords,
  price,
  link,
}: itemsProp) => {
  const navigate = useNavigate();
  const handleNavigate = (link: string) => {
    navigate(link);
  };

  return (
    <div className="pricingItemHover flex items-center justify-center overflow-hidden rounded-md border-[1px] border-lightGray transition-all duration-200 ease-out">
      <Button
        onClick={() => handleNavigate(link)}
        className="noBg flex  h-full w-full flex-col items-center justify-start gap-y-6 rounded-sm !p-0 font-normal text-bgDarkColor1"
      >
        {/* <div className="mt-8 h-20 w-20 rounded-full bg-purple text-center xm:h-28 xm:w-28">
          {icon}
        </div>
        <div className="space-y-3 px-4 text-center">
          <h3 className="text-xl font-semibold  capitalize">{title}</h3>
          <p className="text-sm xxm:text-base">{description}</p>
          <p className=" mt-2 flex flex-wrap items-center justify-center gap-1 text-sm font-semibold uppercase">
            {keywords &&
              keywords.map((keyword: string, i: number) => (
                <Fragment key={i}>
                  <span className="rounded bg-lightBlue px-1 font-semibold">
                    {keyword}
                  </span>
                  {i !== keywords.length - 1 && <span> + </span>}
                </Fragment>
              ))}
          </p>
        </div> */}
        <PriceListHeader
          icon={icon}
          title={title}
          description={description}
          keywords={keywords}
          direction={"flex-col"}
          className="pt-8"
        />
        <div className="price mt-auto flex w-full items-center justify-between bg-lightShade p-4 transition-all  duration-200 ease-out">
          <div>
            <p className="text-left uppercase">Price Per item</p>
            <p className="text-left capitalize">
              from <span className="font-bold">{price}$</span>
            </p>
          </div>
          <div>
            <MdOutlineKeyboardArrowRight className="text-4xl font-extrabold" />
          </div>
        </div>
      </Button>
    </div>
  );
};

export default PriceItem;
