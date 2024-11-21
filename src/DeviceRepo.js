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
        <div className="container py-5">
          <h1 className="text-dark text-center mb-5">Device Repository</h1>
          
          {/* First Row of Buttons */}
          <div className="row justify-content-center align-items-center" style={{marginTop: "100px"}}>
            <div className="col-12 col-lg-6 mb-1 d-flex justify-content-center">
              <button
                className="btn btn-light custom-hover w-75"
                style={{
                  background: "#D3E1FF",
                  color: "#000000",
                  
                  height: "100px",
                  border: "none",
                }}
                onClick={fetchDeviceData} 
              >
                DEVICE
              </button>
            </div>
            <div className="col-12 col-lg-6 mb-1 d-flex justify-content-center">
              <button
                className="btn btn-light custom-hover w-75"
                style={{
                  background: "#D3E1FF",
                  color: "#000000",
                  height: "100px",
                  border: "none",
                }}
                onClick={() => handleButtonClick("Inventory")} 
              >
                INVENTORY
              </button>
            </div>
          </div>

          {/* Second Row of Buttons */}
          <div className="row justify-content-center align-items-center mt-4">
            <div className="col-12 col-lg-6 mb-1 d-flex justify-content-center">
              <button
                className="btn btn-light custom-hover w-75"
                style={{
                  background: "#D3E1FF",
                  color: "#000000",
                  height: "100px",
                  border: "none",
                }}
                onClick={() => handleButtonClick("WBR")} 
              >
                WBR
              </button>
            </div>
            <div className="col-12 col-lg-6 mb-1 d-flex justify-content-center">
              <button
                className="btn btn-light custom-hover w-75"
                style={{
                  background: "#D3E1FF",
                  color: "#000000",
                  height: "100px",
                  border: "none",
                }}
                onClick={() => handleButtonClick("Aqua")} 
              >
                AQUA
              </button>
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
