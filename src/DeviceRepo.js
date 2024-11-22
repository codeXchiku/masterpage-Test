import React, { useState } from "react";
import Nav from "./pages/Nav";
import Sidebar from "./pages/Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DeviceRepo() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Function to handle device data fetching
  const fetchDeviceData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_IP}/device_details/`);
      console.log("API Response Data: ", response.data);
      setData(response.data);
      setError(null);

      // Navigate and pass the data to the next page using location.state
      navigate("/device-repo-data", { state: { data: response.data } });
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch data. Please try again.");
      setData([]);
    }
  };

  const handleButtonClick = (buttonName) => {
    alert(`Button ${buttonName} clicked!`);
  };

  return (
    <div>
      {/* Navbar */}
      <Nav />
      <div className="d-flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div
          className="container mt-5 w-75 h-75"
          style={{
            border: "1px solid #e0e0e0",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <button
            onClick={fetchDeviceData}
            className="btn btn-light w-100 text-start border-bottom"
            style={{
              margin: "0",
              padding: "10px 20px",
              fontSize: "1.5rem",
              fontWeight: "bold",
              borderBottom: "1px solid #e0e0e0",
              border: "none",
              borderRadius: "0",
              backgroundColor: "transparent",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            Device Repo
          </button>

          <div className="row justify-content-center align-items-center mt-4">
            {/* DEVICE */}
            <div className="col-12 col-md-3 d-flex justify-content-center">
              <div
                className="card text-center shadow-sm"
                style={{
                  width: "200px",
                  height: "150px",
                  borderRadius: "10px",
                  border: "1px solid #e0e0e0",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                }}
                onClick={fetchDeviceData}
              >
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <img
                    src="/icons/device-icon.png"
                    alt="Device Icon"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <h6 className="mt-2 fw-bold">Device</h6>
                </div>
              </div>
            </div>

            {/* INVENTORY */}
            <div className="col-12 col-md-3 d-flex justify-content-center">
              <div
                className="card text-center shadow-sm"
                style={{
                  width: "200px",
                  height: "150px",
                  borderRadius: "10px",
                  border: "1px solid #e0e0e0",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                }}
                onClick={() => handleButtonClick("Inventory")}
              >
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <img
                    src="/icons/inventory-icon.png"
                    alt="Inventory Icon"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <h6 className="mt-2 fw-bold">Inventory</h6>
                </div>
              </div>
            </div>

            {/* WBR */}
            <div className="col-12 col-md-3 d-flex justify-content-center">
              <div
                className="card text-center shadow-sm"
                style={{
                  width: "200px",
                  height: "150px",
                  borderRadius: "10px",
                  border: "1px solid #e0e0e0",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                }}
                onClick={() => handleButtonClick("WBR")}
              >
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <img
                    src="/icons/wbr-icon.png"
                    alt="WBR Icon"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <h6 className="mt-2 fw-bold">WBR</h6>
                </div>
              </div>
            </div>

            {/* AQUA */}
            <div className="col-12 col-md-3 d-flex justify-content-center">
              <div
                className="card text-center shadow-sm"
                style={{
                  width: "200px",
                  height: "150px",
                  borderRadius: "10px",
                  border: "1px solid #e0e0e0",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                }}
                onClick={() => handleButtonClick("Aqua")}
              >
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <img
                    src="/icons/aqua-icon.png"
                    alt="Aqua Icon"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <h6 className="mt-2 fw-bold">Aqua</h6>
                </div>
              </div>
            </div>
          </div>

          {/* Display Error */}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default DeviceRepo;
