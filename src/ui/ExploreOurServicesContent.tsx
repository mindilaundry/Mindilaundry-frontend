import Button from "./Button";
import LinkButton from "./LinkButton";
import { IoTimeSharp } from "react-icons/io5";
import { ImPriceTags } from "react-icons/im";

interface ServicesContentProp {
  title: string;
  items: string;
  deliveryTime: string;
  price: number;
  linkTitle: string;
  link: string;
  buttonTitle: string;
}

const ExploreOurServicesContent = ({
  title,
  items,
  deliveryTime,
  price,
  linkTitle,
  link,
}: ServicesContentProp) => {
  return (
    <div className="flex  flex-col items-center justify-between space-y-4 rounded bg-bgColor p-4 pb-8 text-center">
      <div className="w-full rounded bg-lightBlue p-6 text-center ">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p>{items}</p>
      <div className="flex flex-col items-start justify-between space-y-4 ">
        <p className="flex items-center justify-center gap-1 font-semibold">
          <span className="rounded-full bg-accentColor p-1">
            <IoTimeSharp className="text-xl" />
          </span>{" "}
          {deliveryTime}
        </p>

        <div className="flex items-center justify-center gap-1">
          <div className="rounded-full bg-accentColor p-1">
            <ImPriceTags className="text-xl" />{" "}
          </div>
          <p>
            From <span className="font-bold"> ${price}</span>
          </p>
        </div>
        <LinkButton
          title={linkTitle}
          to={link}
          className="capitalize text-primary2"
        />
      </div>

      <Button className="w-full rounded-md !bg-lightBlue text-bgDarkColor1">
        Order Now
      </Button>
    </div>
  );
};

export default ExploreOurServicesContent;
