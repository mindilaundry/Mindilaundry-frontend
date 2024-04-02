import { FaStar } from "react-icons/fa6";

interface TestimonialContentProp {
  name: string;
  review: string;
}

const TestimonialContent = ({ name, review }: TestimonialContentProp) => {
  return (
    <div
      className="flex  w-full flex-col items-center justify-start"
      data-testid="testimonial-container"
    >
      <div className="mt-4 h-20 w-20 rounded-[50%] bg-bgDarkColor1 text-bgColor md:mt-0"></div>

      <div className="mt-3 flex flex-col items-center justify-center gap-y-2">
        <div
          className="flex items-center justify-center gap-x-2"
          data-testid="rating-container"
        >
          <FaStar className="text-base text-accentColor" data-testid="rating" />
          <FaStar className="text-base text-accentColor" data-testid="rating" />
          <FaStar className="text-base text-accentColor" data-testid="rating" />
          <FaStar className="text-base text-accentColor" data-testid="rating" />
        </div>
        <p className="font-semibold capitalize" data-testid="customer-name">
          {name || " tarry Harcourt"}
        </p>
      </div>

      <p
        className="m-auto mt-5 text-center text-sm lg:w-[60%]"
        data-testid="customer-review"
      >
        {review ||
          `The automated process starts as soon as your clothes go into the
        machine. The outcome is gleaming clothes!, and that is what we want to
        happen, but Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quae quasi rem aspernatur fuga in maiores tenetur, temporibus neque
        alias voluptate fugiat tempora eum? Minus minima dicta cum, blanditiis
        optio tempora!`}
      </p>
    </div>
  );
};

export default TestimonialContent;
