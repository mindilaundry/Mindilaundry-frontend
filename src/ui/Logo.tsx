import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="-ml-0 flex items-center justify-center">
        <div className="h-8 w-10 md:h-10 md:w-12">
          <img src="/logo/water.png" alt="logo" />
        </div>
        <div className="-ml-1 flex flex-col items-center justify-center sm:-ml-2">
          <span className=" text-x m-0 -mb-4 ml-3 block font-bold md:text-xl ">
            Mindi
          </span>
          <span className=" m-0 block text-sm capitalize text-Darkgray first-letter:text-xl md:text-base md:first-letter:text-2xl">
            Laundry
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
