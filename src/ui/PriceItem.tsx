import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Fragment } from "react/jsx-runtime";
interface itemsProp {
  icon: string;
  title: string;
  description: string;
  keywords: string[];
  price: number;
}

const PriceItem = ({
  icon,
  title,
  description,
  keywords,
  price,
}: itemsProp) => {
  return (
    <div className="pricingItemHover flex flex-col items-center justify-start gap-y-6 overflow-hidden rounded-md border-[1px] border-lightGray pt-8 transition-all duration-200 ease-out">
      <div className="h-20 w-20 rounded-full bg-purple text-center xm:h-28 xm:w-28">
        {icon}
      </div>
      <div className="space-y-3 px-4 text-center">
        <h3 className="text-xl font-semibold  capitalize">{title}</h3>
        <p className="text-sm xxm:text-base">{description}</p>
        <p className=" mt-2 flex flex-wrap items-center justify-center gap-1 font-semibold uppercase xxm:text-base">
          {keywords &&
            keywords.map((keyword: string, i: number) => (
              <Fragment key={i}>
                <span className="rounded bg-lightBlue px-1">{keyword}</span>
                {i !== keywords.length - 1 && <span> + </span>}
              </Fragment>
            ))}
        </p>
      </div>
      <div className="price mt-auto flex w-full items-center justify-between bg-lightShade p-4 transition-all  duration-200 ease-out">
        <div>
          <p className="uppercase">Price Per item</p>
          <p className="capitalize">
            from <span className="font-bold">{price}$</span>
          </p>
        </div>
        <div>
          <MdOutlineKeyboardArrowRight className="text-5xl font-extrabold" />
        </div>
      </div>
    </div>
  );
};

export default PriceItem;
