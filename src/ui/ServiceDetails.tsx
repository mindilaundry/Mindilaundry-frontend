import { useLocation } from "react-router-dom";
import ServiceDetailsContent from "./ServiceDetailsContent";
import { getPageInformation, normalizeString } from "../utils/helper";
import { AllServices } from "../utils/serviceDetailsItem";

const ServiceDetails = () => {
  const location = useLocation();
  const { pageTitle } = getPageInformation(location);
  const services = AllServices[normalizeString(pageTitle)];

  return (
    <section className="mb-28 w-full ml:mb-0">
      {services &&
        services.map((service, i) => (
          <ServiceDetailsContent {...service} key={i} />
        ))}
    </section>
  );
};

export default ServiceDetails;
