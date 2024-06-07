import React from "react";
import "../styles/Static.css";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Support() {
    return (
      <>
        <div className="page">
          
          <Navbar/>

          <Outlet/>

          <Footer/>

        </div>
      </>
    );
  }

export default Support;