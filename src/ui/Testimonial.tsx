import { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import TestimonialContent from "./TestimonialContent";
import Button from "./Button";

const Testimonial = () => {
  const carousel = useRef<AliceCarousel>(null);
  const handlePrev = () => {
    carousel?.current?.slidePrev?.();
  };
  const handleNext = () => {
    carousel?.current?.slideNext?.();
  };

  return (
    <section className="globalPadding sectionMargin flex h-max w-full">
      <div
        className=" relative m-auto flex 
      min-h-[50vh]
      w-full flex-col items-center justify-center rounded bg-lightPrimary px-3 py-8 m:gap-y-4 md:min-h-[35vh] lg:px-6 xl:max-w-custom2"
      >
        <div>
          {" "}
          <h3 className="font-bold xxm:text-lg md:text-2xl">
            What our customers think of us
          </h3>
        </div>
        <AliceCarousel
          animationDuration={1200}
          disableButtonsControls
          infinite
          mouseTracking={true}
          autoPlay={true}
          autoPlayInterval={9000}
          autoPlayStrategy={"none"}
          disableDotsControls={true}
          ref={carousel}
          keyboardNavigation
        >
          <TestimonialContent name="" review=""></TestimonialContent>
          <TestimonialContent name="" review=""></TestimonialContent>
          <TestimonialContent name="" review=""></TestimonialContent>
        </AliceCarousel>
        <Button
          className="noBg absolute left-1 top-1/2  lg:left-12"
          onClick={handlePrev}
        >
          <FaChevronLeft className="h-6 font-thin text-bgDarkColor1 " />
        </Button>
        <Button
          className="noBg absolute right-1 top-1/2 lg:right-12"
          onClick={handleNext}
        >
          <FaChevronRight className="h-6 font-thin text-bgDarkColor1" />
        </Button>
      </div>
    </section>
  );
};

export default Testimonial;
