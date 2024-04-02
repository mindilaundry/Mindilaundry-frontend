import { Fade as Hamburger } from "hamburger-react";
import Nav from "./Nav";
import LinkButton from "./LinkButton";
import { useState } from "react";
import Logo from "./Logo";
import SideBar from "./SideBar";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="globalPadding relative flex w-full items-center justify-center">
      <div className=" m-auto flex w-full max-w-custom items-center justify-between">
        <Logo />
        <Nav className="hidden md:ml-5 lg:ml-14 lg:block" />

        <LinkButton
          to="/login"
          title="Log in"
          className="ml-auto hidden font-semibold  hover:text-primary lg:block lg:text-Darkgray"
        />

        <LinkButton
          to="/order"
          title="Order"
          className=" ml-auto rounded-full bg-primary px-4 py-2 text-sm font-semibold text-bgColor transition-all duration-300 ease-in hover:bg-primaryHover sm:font-bold md:px-5 md:py-2 md:text-base lg:ml-4"
        />

        <div className=" ml-1 flex h-4 w-max items-center justify-end md:ml-4 lg:hidden">
          <Hamburger
            distance="sm"
            rounded
            color="#6B7280 "
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
      </div>
      <SideBar open={isOpen} />
    </header>
  );
};

export default Header;
