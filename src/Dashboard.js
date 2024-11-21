import React from "react";
import "./Dashboard.css";
import Nav from "./pages/Nav";
import Sidebar from "./pages/Sidebar";
import { useNavigate } from "react-router-dom";




function Dashboard() {
  const navigate = useNavigate(); // This should be at the top of your Dashboard component.

  return (
    <div>
      {/* Navbar */}
      <Nav />

      {/* Main Layout */}
      <div className="d-flex">

        {/* Sidebar */}
        <Sidebar />

        {/* Dashboard Content */}
        <div className="container-fluid py-5 bg-white text-white">
          <div
            className="row align-items-center"
            style={{ marginTop: "60px", height: "400px" }}
          >
            {/* Buttons Section */}
            <div className="col-12 text-center text-lg-start mb-4 mb-lg-0">
              <div className="dashboard-buttons d-flex flex-column align-items-center align-items-lg-center">
                <button
                  className="btn main-button btn-light btn-lg mb-3 mb-5"
                  style={{ height: "100px" }}
                  onClick={() => navigate("/device-repo")} // Navigate to DeviceRepo
                >
                  Device Repo
                </button>
                <button
                  className="btn main-button btn-light btn-lg"
                  style={{ height: "100px" }}
                >
                  Customer Repo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
