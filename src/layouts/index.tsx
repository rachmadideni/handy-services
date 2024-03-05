import { Outlet } from "react-router-dom";
import Header from "@/components/header";

import { styled } from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
`;

const HomeLayout = () => {
  return (
    <Wrap>
      <Header title="Handy Services" contactNo="020 3793 4888" />
      <Outlet />
    </Wrap>
  );
};

export default HomeLayout;
