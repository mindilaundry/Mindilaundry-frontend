import { Fragment } from "react";

interface PriceListHeaderProp {
  icon: {
    src: string;
    altText: string;
  };
  title: string;
  description: string;
  keywords: string[];
  direction: string;
  className?: string;
}

const PriceListHeader = ({
  icon,
  keywords,
  title,
  description,
  direction,
  className,
}: PriceListHeaderProp) => {
  return (
    <div
      className={`flex w-full items-center justify-start ${className} ${direction ? direction : "flex-col"}`}
    >
      <div className="h-20 w-20 rounded-full bg-purple text-center xm:h-28 xm:w-28">
        <img src={icon.src} alt={icon.altText} className="h-full w-full" />
      </div>
      <div className="width space-y-3 px-4 text-center">
        <h3 className="priceTitle text-xl font-semibold  capitalize">
          {title}
        </h3>
        <p className="description text-sm xxm:text-base">{description}</p>
        <p className=" mt-2 flex flex-wrap items-center justify-center gap-1 text-sm font-semibold uppercase">
          {keywords &&
            keywords.map((keyword: string, i: number) => (
              <Fragment key={i}>
                <span className="rounded bg-lightBlue px-1 font-bold">
                  {keyword}
                </span>
                {i !== keywords.length - 1 && <span> + </span>}
              </Fragment>
            ))}
        </p>
      </div>
    </div>
  );
};

export default PriceListHeader;
