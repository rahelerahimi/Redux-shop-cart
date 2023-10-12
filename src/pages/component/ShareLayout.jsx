import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "../footer/Footer";

const ShareLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  );
};

export default ShareLayout;
