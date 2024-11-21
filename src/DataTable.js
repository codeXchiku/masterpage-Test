import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DataTable({ data }) {
  const navigate = useNavigate();
  const [deviceName, setDeviceName] = useState("");
  const [accountId, setAccountId] = useState("");
  const [filteredData, setFilteredData] = useState(data || []);

  if (!data || data.length === 0) {
    return <p>No device data available.</p>;
  }

  // Dynamically get the headers based on the keys of the first object in the data array
  const headers = Object.keys(data[0]);

  // Handle search by device name
  const handleDeviceNameSearch = () => {
    const searchResults = data.filter((item) =>
      item.device_name?.toLowerCase().includes(deviceName.toLowerCase())
    );
    setFilteredData(searchResults);
  };

  // Handle search by account ID
  const handleAccountIdSearch = () => {
    const searchResults = data.filter((item) =>
      item.account_id?.toString().includes(accountId)
    );
    setFilteredData(searchResults);
  };

  return (
    <div className="container py-5">
      <h1 className="text-dark text-center mb-4">Device Data</h1>

      {/* Back Button */}
      <div className="mb-4">
        <button onClick={() => navigate(-1)} className="btn btn-dark">
          Back
        </button>
      </div>

      {/* Search Bars */}
      <div className="d-flex align-items-center mb-4">
        {/* Search by Device Name */}
        <div className="d-flex me-3">
          <input
            type="text"
            placeholder="Search by device name"
            className="form-control me-2"
            value={deviceName}
            onChange={(e) => setDeviceName(e.target.value)}
            style={{ maxWidth: "300px" }}
          />
          <button
            onClick={handleDeviceNameSearch}
            className="btn btn-primary btn-sm"
          >
            Search
          </button>
        </div>

        {/* Search by Account ID */}
        <div className="d-flex">
          <input
            type="text"
            placeholder="Search by account ID"
            className="form-control me-2"
            value={accountId}
            onChange={(e) => setAccountId(e.target.value)}
            style={{ maxWidth: "300px" }}
          />
          <button
            onClick={handleAccountIdSearch}
            className="btn btn-primary btn-sm"
          >
            Search
          </button>
        </div>
      </div>

      {/* Data Table */}
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>
                {/* Rename 'created_at' to 'started_at' */}
                {header === "created_at" ? "started_at" : header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <tr key={index}>
                {headers.map((header, headerIndex) => (
                  <td key={headerIndex}>
                    {/* Rename 'created_at' field value to 'started_at' */}
                    {header === "created_at" ? item[header] : item[header] || "N/A"}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headers.length} className="text-center">
                No matching data found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
