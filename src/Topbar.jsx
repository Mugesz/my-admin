import React from "react";
import { Link } from "react-router-dom";
import order from "./asserts/orders.jpg";

const Topbar = () => {
  return (
    <nav className="bg-gradient-info text-light">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <img src={order} style={{ height: "80px", width: "200px" }} alt="" />

        <div>
          <Link to="/login">
            <button className="btn btn-facebook mr-5">Logout</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
