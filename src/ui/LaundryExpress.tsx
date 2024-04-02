import LaundryExpressServices from "./LaundryExpressServices";

const LaundryExpress = () => {
  return (
    <section className="globalPadding sectionMargin flex w-full flex-col gap-y-7 md:gap-y-10">
      <div className="m-auto flex w-full max-w-custom2 flex-col items-center justify-between space-y-8">
        <h2 className="w-full max-w-[800px] text-center text-2xl font-bold m:text-3xl md:text-4xl">
          We collect, meticulously clean, and promptly deliver your laundry and
          dry cleaning.
        </h2>
        <LaundryExpressServices />
      </div>
    </section>
  );
};

export default LaundryExpress;
