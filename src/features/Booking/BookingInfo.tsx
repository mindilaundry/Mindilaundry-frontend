const BookingInfo = () => {
  return (
    <div className="mt-7 flex w-full items-center justify-start gap-3 rounded-md bg-primaryHover p-3">
      <div className="h-10 w-10 rounded-full bg-purple"></div>
      <div className="w-[85%] space-y-1 text-left xxm:w-[90%]">
        <p className="text-left text-sm font-semibold xxm:text-base">
          Do I need to list each item?
        </p>
        <p className="text-left text-[0.7rem] xxm:text-sm">
          Item listing is not required, Simply book your choice of services,
          then pack one bag per service.
        </p>
      </div>
    </div>
  );
};

export default BookingInfo;
