import LaundryExpressServices from "./LaundryExpressServices";

const Pricing = () => {
  return (
    <section>
      <div className="globalPadding flex w-full items-center justify-center bg-primary2 md:gap-y-10">
        <div className="m-auto flex w-full max-w-custom2 flex-col items-center justify-between">
          <h1 className="space-y-1 py-8  text-center text-2xl font-medium xxm:text-3xl xm:space-y-4 xm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl">
            <span className="block font-bold">Simple pricing</span>
            <span className="block text-base text-accentColor m:text-xl">
              No hidden charges
            </span>
          </h1>
        </div>
      </div>
      <div className="m-auto my-8 w-full max-w-custom2">
        <LaundryExpressServices />
      </div>
    </section>
  );
};

export default Pricing;
