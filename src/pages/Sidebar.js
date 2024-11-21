import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faEnvelope,
  faUser,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/images/logo.jpg";
// import "./Sidebar.css";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Hamburger Menu (Mobile Only) */}
      <button
        className="btn btn-primary d-lg-none position-fixed top-0 start-0 m-3 z-3"
        onClick={toggleSidebar}
        style={{ zIndex: 1050 }}
      >
        ☰
      </button>

      {/* Sidebar */}
      <nav
        className={`sidebar ${
          isSidebarOpen ? "sidebar-open" : ""
        } d-flex flex-column align-items-center text-white py-3`}
        onMouseEnter={() => setIsSidebarOpen(true)}
        onMouseLeave={() => setIsSidebarOpen(false)}
      >
        {/* Close Button for Mobile */}
        <button
          className="btn btn-danger d-lg-none align-self-end m-2"
          onClick={toggleSidebar}
        >
          ✕
        </button>

        {/* Logo Section */}
        <div className="logo-section text-center mb-1">
          <img src={logo} alt="Logo" className="img-fluid rounded-5 w-75" />
        </div>

        {/* Menu Items */}
        <ul className="list-unstyled w-100 text-center p-0 d-flex flex-column justify-content-center align-items-center">
          <li className="menu-item py-2 mt-auto">
            <FontAwesomeIcon icon={faUser} className="fa-lg mt-3" />
          </li>
          <li className="menu-item py-2">
            <FontAwesomeIcon icon={faHouse} className="fa-lg mt-3" />
          </li>
          <li className="menu-item py-2">
            <FontAwesomeIcon icon={faYoutube} className="fa-lg mt-3" />
          </li>
          <li className="menu-item py-2">
            <FontAwesomeIcon icon={faInstagram} className="fa-lg mt-3" />
          </li>
          <li className="menu-item py-2">
            <FontAwesomeIcon icon={faEnvelope} className="fa-lg mt-3" />
          </li>

          <li className="menu-item py-2">
            <FontAwesomeIcon icon={faSignOutAlt} className="fa-2x mt-3" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
