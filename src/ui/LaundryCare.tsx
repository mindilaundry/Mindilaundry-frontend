import { expressServices } from "../utils/laundryExpressServices";
import LaundryCareContent from "./LaundryCareContent";

const LaundryCare = () => {
  return (
    <section className="globalPadding sectionMargin">
      <div className="nth-child-even md:gap-y[5rem] m-auto flex flex-col gap-y-[3rem] xl:max-w-custom2">
        {expressServices.map((services, i) => (
          <LaundryCareContent key={i} {...services} />
        ))}
      </div>
    </section>
  );
};

export default LaundryCare;
