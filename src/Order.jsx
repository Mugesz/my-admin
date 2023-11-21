import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./cssFile/Components.css";

const UserList = () => {
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-2 text-gray-800">ORDERS TABLE </h1>
        <Link
          to="/create-order"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Create Order
        </Link>
      </div>
      <div className="input-group mb-3">
        <button
          className="btn btn-outline-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          Order ID
        </button>
        <input
          type="text"
          className="form-control m-"
          aria-label="Text input with dropdown button"
          placeholder="Search"
        />
      </div>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>ORDER ID</th>
                    <th>ORDER NUMBER</th>
                    <th>STATUS</th>
                    <th>ITEM</th>
                    <th>CUSTOMER NAME</th>
                    <th>SHIPING SERVICE</th>
                    <th>TRACKING CODE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>name</td>
                    <td>tion</td>
                    <td>ce</td>
                    <td></td>
                    <td>tDate</td>
                    <td>ry</td>
                    <td>
                      <Link to="/view-user" className="btn btn-sm btn-info ">
                        view
                      </Link>

                      <button className="btn btn-sm btn-danger ml-2">
                        delete
                      </button>
                      <button className="btn btn-sm btn-warning ml-2">
                        edit
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
