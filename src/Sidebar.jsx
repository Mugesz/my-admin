import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div>
            {" "}
            <ul
                className="navbar-nav bg-gradient-danger sidebar sidebar-dark accordion"
                id="accordionSidebar"
            >
                <a
                    className="sidebar-brand d-flex align-items-center justify-content-center"
                    href="index.html"
                >
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">
                        Admin 
                    </div>
                </a>

                <hr className="sidebar-divider my-0" />

                <li className="nav-item active">
                    <Link className="nav-link" to="/dashboard">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>

                <hr className="sidebar-divider" />
                <li className="nav-item">
                    <Link className="nav-link" to="/order">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Order</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/listing">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Listing</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/admin">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Admin</span>
                    </Link>
                </li><li className="nav-item">
                    <Link className="nav-link" to="/settings">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Settings</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
