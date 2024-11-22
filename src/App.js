import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import DeviceRepo from "./components/DeviceRepo"
import DataTablePage from "./components/DataTablePage"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={} /> */}
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/device-repo" element={<DeviceRepo/>} />
          <Route path="/device-repo-data" element = {<DataTablePage/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
