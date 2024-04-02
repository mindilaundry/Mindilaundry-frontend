import { exploreOurServices } from "../utils/laundryExpressServices";
import ExploreOurServicesContent from "./ExploreOurServicesContent";

const ExploreOurServices = () => {
  return (
    <section className="globalPadding sectionMargin  h-max w-full bg-bgDarkColor">
      <div className="m-auto mt-8 flex w-full max-w-custom2 flex-col items-center  justify-between">
        <h2 className="w-full max-w-[800px] text-center text-2xl font-bold m:text-3xl md:text-4xl">
          <span className="text-accentColor">Explore</span>
          <span> our services</span>
        </h2>
      </div>
      <div className="m-auto my-8 flex w-full max-w-custom2 flex-col items-center justify-between ">
        <div className="grid w-full auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {exploreOurServices &&
            exploreOurServices.map((services, i) => {
              return <ExploreOurServicesContent key={i} {...services} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default ExploreOurServices;
