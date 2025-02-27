import React from "react";
import { Link } from "react-router-dom";
import "../../Style/SideBar.css";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <img className="logo" src={require("../../Assets/Logo.svg")} alt="" />
      <li className="items">
        <Link to="/dashbored">
          {" "}
          <img
            className="icons"
            src={require("../../Assets/chart.svg")}
            alt=""
          />{" "}
          <span className="nav-item-txt">Dashboard</span>
        </Link>
      </li>
      <li className="items">
        <Link to="/account-statement">
          {" "}
          <img
            className="icons"
            src={require("../../Assets/accounting.svg")}
            alt=""
          />
          <span className="nav-item-txt">Account statement</span>
        </Link>
      </li>
      <li className="items">
        <Link to="/settings">
          {" "}
          <img
            className="icons"
            src={require("../../Assets/gears.svg")}
            alt=""
          />
          <span className="nav-item-txt">Settings</span>
        </Link>
      </li>

      <li className="logout">
        <Link to="/login">
          <button className="logout button">LOGOUT</button>
        </Link>
      </li>
    </nav>
  );
};

export default Sidebar;
