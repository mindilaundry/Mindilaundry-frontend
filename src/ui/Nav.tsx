import { NavLink } from "react-router-dom";
import { navlinks } from "../utils/navLinks";

interface NavProp {
  className?: string;
}

const Nav = ({ className }: NavProp) => {
  return (
    <nav className={`${className}`}>
      <ul className=" flex w-full flex-col text-sm font-semibold sm:text-base lg:w-max lg:flex-row lg:gap-x-1">
        {navlinks.map((link, i) => {
          return (
            <li
              key={i}
              className=" border-bgColorSec text-bgColorSec lg:text-textColor flex h-10 w-full items-center justify-start border-b pl-1 text-Darkgray transition-all duration-200 ease-in-out hover:text-primary sm:h-12 sm:pl-2 md:justify-center md:pl-4 lg:h-max lg:w-max lg:border-none"
            >
              <NavLink
                to={link.link}
                className=" w-full px-3 py-1 sm:pl-2 lg:w-max"
              >
                {link.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
