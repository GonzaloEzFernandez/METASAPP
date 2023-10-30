import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Head from "./Head";
import MainPart from "./MainPart";

function Layout() {
  return (
    <>
      <Head />
      <MainPart>
        <Outlet />
      </MainPart>
      <Footer />
    </>
  );
}

export default Layout;
