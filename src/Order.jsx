import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./cssFile/Components.css";
import axios from "axios";
import { TablePagination } from "@mui/material";
import Topbar from "./Topbar";
import { useDarkMode } from "./DarkModeContext";

const UserList = () => {
  const [myData, setMyData] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [perPage, setPerpage] = useState(10);
 
  const { isDark } = useDarkMode();

  const handleChangeperPage = (e, newPage) => {
    setPage(newPage);
  };

  const handleperChange = (e) => {
    setPerpage(e.target.value);
    setPage(0);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://65630c3eee04015769a6bb77.mockapi.io/orders/${id}`
      );

      setMyData((prevData) => prevData.filter((item) => item.id !== id));
      alert("Order has been deleted successfully");
    } catch (error) {
      console.error("Error deleting data:", error);
      console.log("API Response:", error.response);
    }
  };

 

  const allData = async () => {
    try {
      const response = await axios.get(
        "https://65630c3eee04015769a6bb77.mockapi.io/orders"
      );
      setMyData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    allData();
  }, []);
  return (
    <div className={isDark ? "bg-light" : "bg-dark"}>
      {" "}
      <Topbar />
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-2 text-warning">ORDERS TABLE </h1>
        <Link
          to="/create-order"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Create Order
        </Link>
      </div>
      <div className="input-group mb-3">
        <button className="btn btn-outline-secondary" type="button">
          Order Number
        </button>
        <input
          type="number"
          className="form-control "
          aria-label="Text input with dropdown button"
          placeholder="Search here ..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div
        className={
          isDark ? "card shadow mb-4 bg-dark " : "card shadow mb-4 bg-light"
        }
      >
        <div
          className={
            isDark
              ? "card-header bg-light py-3 "
              : "card-header bg-dark py-3 text-light"
          }
          style={{ maxHeight: "650px" }}
        >
          <div className="card-body ">
            <div className="table-responsive" style={{ maxHeight: "650px" }}>
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
              >
                <thead className="position-sticky">
                  <tr>
                    <th>ORDER ID</th>
                    <th>ORDER NUMBER</th>
                    <th>ITEM</th>
                    <th>CUSTOMER NAME</th>
                    <th>TRACKING CODE</th>
                    <th>status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {myData
                    .slice(page * perPage, page * perPage + perPage)
                    .filter((item) => {
                      if (search === "") {
                        return item;
                      } else if (item.orderNumber.toString().includes(search)) {
                        return item;
                      }
                    })
                    .map((item, index) => (
                      <tr key={index}>
                        <td>{item.orderId}</td>
                        <td>{item.orderNumber}</td>
                        <td>{item.item}</td>
                        <td>{item.customerName}</td>
                        <td>{item.trackingCode}</td>
                        <td>{item.status}</td>
                        <td>
                          <div className="text-center">
                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() => handleDelete(item.id)}
                            >
                              delete
                            </button>
                            <Link to={`/edit-order/${item.id}`}>
                              <button
                                className="btn btn-sm btn-warning ml-2"                             
                              >
                                edit
                              </button>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <TablePagination
                rowsPerPageOptions={[10]}
                page={page}
                count={myData.length}
                rowsPerPage={perPage}
                component="div"
                onPageChange={handleChangeperPage}
                onRowsPerPageChange={handleperChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
