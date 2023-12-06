import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./cssFile/Components.css";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="text-center">
      <ul
        className="navbar-nav  sidebar sidebar-dark accordion topsie text-center"
        id="accordionSidebar"
      >
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-text text-black-50 mx-3">ORDER</div>
        </Link>

        <hr className="sidebar-divider my-0" />
        <hr className="sidebar-divider" />

        <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
          <Link className="nav-link  " to="/">
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
  );
};

export default Sidebar;
