import { MdOutlineWifiCalling3 } from "react-icons/md";
import Button from "./Button";

export const CallUs = () => {
  return (
    <div className="m-auto  mt-12 flex w-full max-w-custom2 flex-col items-center justify-between gap-8 rounded-md bg-lightBlue p-4 md:flex-row">
      <div>
        <p className="font-semibold">
          Have a questions about our services and prices?
        </p>
        <p>Please reach-out to us!</p>
        <p className="mt-2 font-semibold">Contact Information:</p>
        <p>Email: info@example.com</p>
        <p>Phone: +123-456-7890</p>
      </div>

      <Button className="ml-auto flex items-center justify-center gap-2">
        <MdOutlineWifiCalling3 className="text-2xl" />
        Call Us
      </Button>
    </div>
  );
};

export default CallUs;
