import { Outlet } from "react-router-dom";

const BookingLayOut = () => {
  return (
    <section className="relative flex w-full">
      <div className="globalPadding m-auto flex w-full max-w-custom2 flex-col items-center justify-between gap-8 ml:flex-row">
        <div className="mb-auto w-full ml:w-[55%] lg:w-[60%]">
          <Outlet />
        </div>
        <div className="globalPadding fixed bottom-[0px]  left-0 flex w-full items-center justify-end bg-bgColor ml:sticky ml:top-0 ml:max-w-[380px] ml:self-start ml:p-0 lg:max-w-[400px]">
          this is guage
        </div>
      </div>
    </section>
  );
};

export default BookingLayOut;
