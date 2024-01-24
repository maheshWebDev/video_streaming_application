// Body.js
import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex bg-gray-100">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
