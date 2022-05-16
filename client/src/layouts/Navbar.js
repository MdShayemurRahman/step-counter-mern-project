import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <Link to="/home" className="nav-link">
        Home
      </Link>
      <Link to="/dashboard" className="nav-link">
        Dashboard
      </Link>
      <Link to="/profile" className="nav-link">
        Profile
      </Link>
    </nav>
  );
}

export default Navbar
