import { Outlet } from "react-router-dom";
import Header from "@/components/header";

const HomeLayout = () => {
  return (
    <div className="flex flex-col w-full">
      <Header title="Handy Services" contactNo="020 3793 4888" />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
