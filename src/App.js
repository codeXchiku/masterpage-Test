import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import QRCodeComponent from "./pages/QRCode";

import Dashboard from "./Dashboard";
import DeviceRepo from "./DeviceRepo";
import DataTablePage from "./DataTablePage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          
        <Route path="/qr-code" element={<QRCodeComponent />} />

          <Route path="/" element={<Dashboard />} />
          
          
          <Route path="/device-repo" element={<DeviceRepo />} />
          
        
          <Route path="/device-repo-data" element={<DataTablePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
