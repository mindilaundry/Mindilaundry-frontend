import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import BannerContent from "./BannerContent";
import Button from "./Button";

import bgImage2 from "/images/happyFamily.jpg";

const Banner = () => {
  return (
    <section className="flex h-max w-full flex-col items-center justify-between">
      <AliceCarousel
        animationType="fadeout"
        animationDuration={1500}
        disableButtonsControls
        infinite
        mouseTracking
        autoPlay={true}
        autoPlayInterval={5000}
        autoPlayStrategy={"none"}
        disableDotsControls={true}
      >
        <BannerContent
          title1="Save Time for More"
          title2="Important Things"
          text="We will take care about"
          image={bgImage2}
        >
          <Button
            className="mt-5 px-6 py-3 xm:px-8 xm:py-4 sm:mt-8 md:px-10 md:py-5 md:text-base"
            onClick={() => {
              console.log("clicked");
            }}
          >
            Book Now
          </Button>
        </BannerContent>
      </AliceCarousel>
      <div className="globalPadding flex h-max w-full bg-primary2">
        <div className=" m-auto flex min-h-[10vh] w-full max-w-custom2 flex-col items-center justify-between gap-y-7 xxm:gap-y-9 md:flex-row ">
          <div className="flex h-full flex-col items-start justify-center gap-y-2">
            <p className="w-full text-center text-xl font-bold text-accentColor xxm:text-2xl m:text-[1.525rem] md:text-left">
              Ranked #1 by customers
            </p>
            <p className="w-full text-center text-[0.9rem] text-bgColor xxm:text-lg m:w-[380px] md:w-[320px] md:text-left md:text-[1.15rem] lg:w-full">
              {/* In categories Dry cleaner, Laundry service and Laundrette */}
              For Dry cleaner, Laundry service, and Laundrette needs, we're the
              go-to choice.
            </p>
          </div>
          <div className="h-8 w-64 bg-accentColor"></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
