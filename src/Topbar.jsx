import React from "react";
import { Link } from "react-router-dom";


const Topbar = () => {


  return (
    <nav
      className= "bg-gradient-info text-light"
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <h1 className="light">
          Order Management
        </h1>
        <div>
          <Link to="/login">
            <button className="btn btn-facebook">Login</button>
          </Link>
          <Link to="/signup">
            <button className="btn btn-google ml-4">Signup</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
