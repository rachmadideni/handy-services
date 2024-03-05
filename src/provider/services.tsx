import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";

import fetcher from "@/utils/fetcher";

export type ServiceContextType = {
  selectedService: string;
  selectService: (val: string) => void;
  availableServices: Record<string, any>;
  loading: boolean;
};

export const ServicesContext = createContext<ServiceContextType | null>(null);

export const useServicesContext = () => useContext(ServicesContext);

type ServicesProviderProps = {
  children: React.ReactNode;
};

const ServicesProvider = ({ children }: ServicesProviderProps) => {
  const [selectedService, setSelectedService] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [availableServices, setAvailableServices] = useState<
    Record<string, any>
  >({});

  const selectService = (val: string) => {
    setSelectedService(val);
  };

  const fetchServices = async () => {
    try {
      const response = await fetcher();
      setAvailableServices(response);
      setLoading(false);
    } catch (err) {}
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const contextValue = useMemo(
    () => ({
      selectedService,
      selectService,
      availableServices,
      loading,
    }),
    [selectedService, fetchServices]
  );

  return (
    <ServicesContext.Provider value={contextValue}>
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;
