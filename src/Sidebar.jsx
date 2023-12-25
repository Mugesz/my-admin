import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./cssFile/Components.css";

const Sidebar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav  sidebar sidebar-dark accordion topsie text-center">
          <Link
            className="sidebar-brand d-flex align-items-center justify-content-center"
            to="/"
          >
            <div className="sidebar-brand-text text-white-50 mx-3">ORDER</div>
          </Link>

          <hr className="sidebar-divider my-0" />
          <hr className="sidebar-divider" />

          <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
            <Link className="nav-link" to="/">
              <span className="orders">Order</span>
            </Link>
          </li>

          <li className={`nav-item ${location.pathname === '/settings' ? 'active' : ''}`}>
            <Link className="nav-link" to="/settings">
              <span className="orders">Settings</span>
            </Link>
          </li>

          <li className={`nav-item ${location.pathname === '/login' ? 'active' : ''}`}>
            <Link className="nav-link" to="/login">
              <span className="orders">Login</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
