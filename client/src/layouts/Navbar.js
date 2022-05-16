import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <NavLink to="/home" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/dashboard" className="nav-link">
        Dashboard
      </NavLink>
      <NavLink to="/profile" className="nav-link">
        Profile
      </NavLink>
    </nav>
  );
};

export default Navbar;
