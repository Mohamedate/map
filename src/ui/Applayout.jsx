import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";

export default function Applayout() {
  return (
    <Main>
      <Navbar />
      <section className="overflow-y-scroll">
        <Outlet />
      </section>
      <Footer />
    </Main>
  );
}
