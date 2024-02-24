import React, { createContext, useContext, useState, useMemo } from "react";
import { SERVICES } from "../constants/popular-services";

export type ServiceContextType = {
  selectedService: string;
  selectService: (val: string) => void;
  filterServices: (query: string) => void;
  filteredServices: string[];
  availableServices: typeof SERVICES;
};

export const ServicesContext = createContext<ServiceContextType | null>(null);

export const useServicesContext = () => useContext(ServicesContext);

type ServicesProviderProps = {
  children: React.ReactNode;
};

const ServicesProvider = ({ children }: ServicesProviderProps) => {
  const [selectedService, setSelectedService] = useState<string>("");
  const [filteredServices, setFilteredServices] = useState<string[]>([]);
  const [availableServices, _] = useState(SERVICES);

  const selectService = (val: string) => {
    setSelectedService(val);
  };

  const filterServices = (query: string) => {
    const matchingServices: string[] = [];

    if (query === "") {
      setFilteredServices([]);
      return matchingServices;
    }
    for (const category of availableServices.categories) {
      for (const service of category.services) {
        if (service.toLowerCase().includes(query.toLowerCase())) {
          matchingServices.push(service);
        }
      }
    }

    setFilteredServices(matchingServices);
  };

  const contextValue = useMemo(
    () => ({
      selectedService,
      selectService,
      filteredServices,
      availableServices,
      filterServices,
    }),
    [selectedService, filteredServices]
  );

  return (
    <ServicesContext.Provider value={contextValue}>
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;
