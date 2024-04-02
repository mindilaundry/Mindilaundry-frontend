import { image } from "../utils/types/types";
import LinkButton from "./LinkButton";

interface CareContentProp {
  image: image;
  text: string;
  title: string;
  description: string;
  link?: string;
  linkTitle?: string;
}

const LaundryCareContent = ({
  image,
  text,
  title,
  description,
  link,
  linkTitle,
}: CareContentProp) => {
  return (
    <div className="md:start flex flex-col items-center justify-between gap-4 md:flex-row md:gap-12">
      <div className="afterParentGradient relative h-auto w-full overflow-hidden md:w-1/2 lg:w-2/5">
        <img src={image.src} alt={image.altText} className=" w-full rounded" />
      </div>
      <div className="md:w-[40%]">
        <h3 className="mb-2 text-base font-semibold text-primaryHover md:mb-3">
          {text}
        </h3>
        <p className="text-2xl font-bold  m:text-3xl">{title}</p>
        <p className="mt-2 font-semibold m:text-[1.25rem] md:mt-3 md:text-base">
          {description}
        </p>
        {link ? (
          <LinkButton
            to={link}
            title={linkTitle!}
            className="mt-3 block font-bold text-primary hover:text-primaryHover"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default LaundryCareContent;
