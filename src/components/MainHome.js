import React from "react";
import "./MainHome.css";
import MessageSender from "./MessageSender";
import Navbar from "../Navbar";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import Feed from "./Feed";
function MainHome() {
  return (
    <div className="mainHome">
      {/* <Navbar /> */}
      <div className="mainHome__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}

export default MainHome;
