import Navbar from "@/components/manual/Navbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default AppLayout;
