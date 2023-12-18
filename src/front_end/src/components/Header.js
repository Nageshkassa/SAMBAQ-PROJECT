import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
      <div className="data-container">
        <h2>WIT</h2>
        <div id="menu-time" className="menu-data animate__animated">
        <Link to="/">
            Home
          </Link>
          <Link to="/login" >
            SignIn
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Nav;
