import LinkButton from "./LinkButton";
import Nav from "./Nav";

interface siderBarprop {
  open: boolean;
}

const SideBar = ({ open }: siderBarprop) => {
  return (
    <div
      className={` absolute left-0 top-full z-[1000] flex w-full flex-col items-start justify-between bg-primary transition-all duration-500 ease-out lg:hidden ${open ? "translate-x-0" : "translate-x-[-120%]"}`}
      style={{ height: "calc(100vh - 80px)" }}
      data-testid="sidebar"
    >
      <Nav className=" flex w-full items-start justify-start" />
      <LinkButton
        to="/login"
        title="Login"
        className="text-bgColorSec mb-4 ml-4 text-xl"
      />
    </div>
  );
};

export default SideBar;
