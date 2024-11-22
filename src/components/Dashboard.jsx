import React from "react";
import Sidebar from "../pages/Sidebar";
import Navbar from "../pages/Nav"
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
     <Navbar/>

      {/* Main Layout */}
      <div className="d-flex">
        <Sidebar />

        {/* Dashboard Content */}
        <div className="container-fluid py-5 dashboard-content">
          {/* Buttons Section */}
          <div className="button-container d-flex flex-column flex-sm-row justify-content-sm-start align-items-center">
            <button
              className="repo-button d-flex flex-row align-items-center justify-content-center bg-white border border-primary rounded-3 shadow-sm p-3 mb-4 mb-sm-0 me-0 me-sm-4"
              onClick={() => navigate("/device-repo")}
            >
              <i
                className="bi bi-diagram-3 mb-2 me-2"
                style={{
                  fontSize: "1rem",
                  color: "black",
                  backgroundColor: "#FFFEDA",
                  borderRadius: "50%",
                  padding: "1rem",
                }}
              ></i>
              <span className="button-text">Device Repo</span>
            </button>

            <button
              className="repo-button d-flex flex-row align-items-center justify-content-center bg-white border border-primary rounded-3 shadow-sm p-3 mb-4 mb-sm-0"
              // onClick={() => navigate("/inventory-repo")}
            >
              <i
                className="bi bi-diagram-3 mb-2 me-2"
                style={{
                  fontSize: "1rem",
                  color: "black",
                  backgroundColor: "#FFFEDA",
                  borderRadius: "50%",
                  padding: "1rem",
                }}
              ></i>
              <span className="button-text">Inventory Repo</span>
            </button>
          </div>

          {/* Registered List Table */}
          <div className="table-container">
            <h4 className="table-heading">
            <i class="bi bi-person-lines-fill me-4"></i>Registered List
            </h4>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr style={{ backgroundColor: "#FFFEDA" }}>
                    <th>Sl No</th>
                    <th>Client</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Address</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>john.doe@example.com</td>
                    <td>********</td>
                    <td>123 Street, City</td>
                    <td>Location 1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
