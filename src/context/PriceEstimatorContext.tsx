import { ReactNode, createContext, useState } from "react";

type ServiceItem = {
  itemName: string;
  quantity: number;
  price: number;
};

type Service = {
  service: string;
  items: ServiceItem[];
};

interface contextType {
  services: Service[];
  setService: React.Dispatch<React.SetStateAction<Service[]>>;
}

// Default value conforms to contextType interface
const defaultContextValue: contextType = {
  services: [],
  setService: () => {}, // Placeholder function
};

export const PriceEstimatorContext =
  createContext<contextType>(defaultContextValue);

interface PriceEstimatorProviderProps {
  children: ReactNode;
}
const PriceEstimatorProvider = ({ children }: PriceEstimatorProviderProps) => {
  const [services, setService] = useState<Service[]>([]);

  return (
    <PriceEstimatorContext.Provider value={{ services, setService }}>
      {children}
    </PriceEstimatorContext.Provider>
  );
};

export default PriceEstimatorProvider;
