import React from "react";
import { Outlet } from "react-router";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Banner from "../Pages/Home/Home/Banner/Banner";

const Rootlayout = () => {
  return (
    <div>
      <Navbar></Navbar>
     
      <Outlet> </Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Rootlayout;
