import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap"
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Login from "./Login";
import Signup from "./Signup";
import Forgetpassword from "./Forgetpassword";
import Order from "./Order";
import Listing from "./Listing";
import Admin from "./Admin";
import Setting from "./Setting";
import CreateOrder from "./CreateOrder";

function App() {
  return (
   <div>
      <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <Topbar />
          <div className="container-fluid">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forget-password" element={<Forgetpassword />} />
              <Route path="/order" element={<Order />} />
              <Route path="/listing" element={<Listing />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/settings" element={<Setting />} />
              <Route path="/create-order" element={<CreateOrder />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
   </div>
  );
}

export default App;
