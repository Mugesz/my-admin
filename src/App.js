import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from "./Sidebar";
import Login from "./Login";
import Signup from "./Signup";
import Forgetpassword from "./Forgetpassword";
import Order from "./Order";
import Setting from "./Setting";
import CreateOrder from "./CreateOrder";
import EditOrder from "./EditOrder";

function App() {
  return (
  
      <Router>
        <div className="" id="wrapper">
          <Sidebar />      
          <div id="content-wrapper" className="d-flex flex-column">
            <div className="container-fluid">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forget-password" element={<Forgetpassword />} />
                <Route path="/" element={<Order />} />
                <Route path="/settings" element={<Setting />} />
                <Route path="/create-order" element={<CreateOrder />} />
                <Route path="/edit-order/:id" element={<EditOrder />} />
              </Routes>
            </div>
          </div>
          </div>
      
      </Router>
  
  );
}

export default App;
