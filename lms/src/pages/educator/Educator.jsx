import React from "react";
import Sidebar from "../../components/educator/Sidebar";
import Navbar from "../../components/educator/Navbar";
import Footer from "../../components/educator/Footer"; // 👈 Add this

import { Outlet } from "react-router-dom";

const Educator = () => (
  <div className="flex flex-col min-h-screen">
    <div className="flex flex-1">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
    <Footer /> {/* 👈 Footer added here */}
  </div>
);

export default Educator;
