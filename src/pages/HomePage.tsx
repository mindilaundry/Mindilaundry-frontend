import Banner from "../ui/Banner";
import CallUs from "../ui/CallUs";
import ExploreOurServices from "../ui/ExploreOurServices";
import LaundryAppStore from "../ui/LaundryAppStore";
import LaundryCare from "../ui/LaundryCare";
import LaundryExpress from "../ui/LaundryExpress";
import Testimonial from "../ui/Testimonial";

const HomePage = () => {
  return (
    <>
      <Banner />
      <LaundryExpress />
      <LaundryCare />
      <ExploreOurServices />
      <CallUs />
      <LaundryAppStore />
      <Testimonial />
    </>
  );
};

export default HomePage;
