import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";
import BannerContent from "./BannerContent";
import Button from "./Button";
import DownloadFromStoreButtonContent from "./DownloadFromStoreButtonContent";
import { scheduleBannerImage } from "../utils/images";

const LaundryAppStore = () => {
  return (
    <section className="sectionMargin flex h-max w-full items-center justify-center">
      <BannerContent
        image={scheduleBannerImage.src}
        title1="Order Laundry and Dry "
        title2="Cleaning on Your Phone"
        text="free collection and delivery"
        className="translate-x-0 transition-none"
      >
        <div className="mt-1 flex  flex-col xxm:flex-row xxm:gap-3 m:gap-4">
          <Button className=" downloadApp mt-5 px-3  py-1 xm:px-8 xm:py-4 sm:mt-8 md:px-5 md:py-3">
            <DownloadFromStoreButtonContent
              text1="Download on the"
              text2="App Store"
              icon={<FaApple className="h-full w-full" />}
            />
          </Button>
          <Button className=" downloadApp mt-5 px-3  py-1 xm:px-8 xm:py-4 sm:mt-8 md:px-5 md:py-3 ">
            <DownloadFromStoreButtonContent
              text1="Get It On"
              text2="Google Play"
              icon={<FaGooglePlay className="h-full w-[90%]" />}
            />
          </Button>
        </div>
      </BannerContent>
    </section>
  );
};

export default LaundryAppStore;
