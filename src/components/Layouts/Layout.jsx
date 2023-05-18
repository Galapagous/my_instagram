import React from "react";
import "./layout.scss"
import { Outlet } from "react-router-dom";
import LeftSide from "../LeftSide/Leftside";
import Rightside from "../RightSide/Rightside";
const Layout = ()=>{
  return(
    <div className="main">
    <div className="left">
      <LeftSide/>
    </div>
    <div className="middle">
      <Outlet/>
    </div>
    <div className="right">
      <Rightside/>
    </div>
    </div>
  )
}

export default Layout