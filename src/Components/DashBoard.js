import React from "react";
import AddListing from "./AddListing";
import Navbar from "./NavBar";

const DashBoard = () => {

  return (
    <>
    <Navbar />
    <div className="dashboard">
      <AddListing />
    </div>
    </>
  );
};

export default DashBoard;
