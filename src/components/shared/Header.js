import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../../src/logo.svg'


const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav className="App-header">
        
         <img src={logo} className="App-logo" alt="logo" />
         <div class = "nav">
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
       {" |"}
      <NavLink to="/Courses" activeStyle={activeStyle}>
        Courses
      </NavLink>
      {" | "}
      <NavLink to="/About" activeStyle={activeStyle}>
        About
      </NavLink> </div>
    </nav>
   
  );
};

export default Header;