import { ReactNode } from "react";

interface ContentProps {
  text1: string;
  text2: string;
  icon: ReactNode;
}
const DownloadFromStoreButtonContent = ({
  text1,
  text2,
  icon,
}: ContentProps) => {
  return (
    <div className="m-auto flex h-full w-full items-center justify-start gap-x-1">
      <div className="h-8 w-8">{icon}</div>

      <p className="my-auto flex h-8 w-max flex-col items-start justify-center m:gap-[3px]">
        <span className="my-0 flex h-1/2 items-end justify-start text-[.6rem] m:text-xs md:text-[.7rem]">
          {text1}
        </span>
        <span className="my-0 flex h-1/2 items-end justify-start text-[1.1rem] font-semibold m:text-[1.3rem]">
          {text2}
        </span>
      </p>
    </div>
  );
};

export default DownloadFromStoreButtonContent;
