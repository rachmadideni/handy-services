import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ServicesContext, type ServiceContextType } from "@/provider/services";
import { Wrapper, ServiceTitle } from "./index.styled";

const ServicesPage = () => {
  const location = useLocation();
  const { selectedService } = useContext(ServicesContext) as ServiceContextType;
  return (
    <Wrapper>
      <ServiceTitle>
        {location.state ? location.state.service : selectedService}
      </ServiceTitle>
    </Wrapper>
  );
};

export default ServicesPage;
