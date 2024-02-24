import { useContext } from "react";
import { ServicesContext, type ServiceContextType } from "@/provider/services";

const ServicesPage = () => {
  const { selectedService } = useContext(ServicesContext) as ServiceContextType;
  return (
    <div className="space-y-12">
      <div className="bg-aqua py-[66px] space-y-8">
        <div className="flex flex-col w-full items-center">
          <h1 className="font-koulen text-3xl sm:text-5xl text-center">
            {selectedService}
          </h1>
          <p className="font-circular text-lg">{selectedService}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
