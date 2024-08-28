import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import FooterV2 from "../components/FooterV2";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      {/* <Footer /> */}
      <FooterV2 />
    </>
  );
};

export default RootLayout;
