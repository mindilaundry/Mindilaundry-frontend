import { FaAngleRight } from "react-icons/fa6";
import Button from "../../ui/Button";

interface NextStepButtonProp {
  disabled?: boolean;
}

const NextStepButton = ({ disabled }: NextStepButtonProp) => {
  return (
    <Button
      type="submit"
      className="noBg !pl-0 text-primary2"
      disabled={disabled}
    >
      <div className="flex items-center justify-between gap-x-1">
        <p className="-mt-1 ">Next</p> <FaAngleRight />
      </div>
    </Button>
  );
};

export default NextStepButton;
