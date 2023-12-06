import React from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "./DarkModeContext";

const Topbar = () => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <nav
      className={`navbar ${
        isDark ? "navbar-dark bg-gradient-info" : "bg-dark text-light"
      }`}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <h1 className={`text-${isDark ? "light" : "light"}`}>
          Order Management
        </h1>
        <div>
          <Link to="/login">
            <button className="btn btn-facebook">Login</button>
          </Link>
          <Link to="/signup">
            <button className="btn btn-google ml-4">Signup</button>
          </Link>
          <button className="btn btn-light ml-4" onClick={toggleDarkMode}>
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
