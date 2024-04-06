import { useContext } from "react";
import { PriceEstimatorContext } from "../context/PriceEstimatorContext";

const usePriceEstimator = () => {
  const context = useContext(PriceEstimatorContext);

  if (!context) {
    throw new Error(
      "priceEstimator context was used outside priceEstimatorProvider",
    );
  }
  return context;
};

export { usePriceEstimator };
