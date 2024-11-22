import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableColumns, faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div
      style={{
        backgroundColor: "#AFDAFA",
        height: "100vh",
        width: "200px",

        display: "flex",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      {/* Menu Items */}
      <ul style={{ listStyleType: "none", padding: "10px", margin: 0 }}>
        {/* Dashboard */}
        <li
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon
            icon={faTableColumns}
            style={{ fontSize: "20px", marginRight: "10px", color: "black" }}
          />
          <span style={{ fontSize: "16px", fontWeight: "bold", color: "black" }}>
            Dashboard
          </span>
        </li>

        {/* New Register */}
        <li
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon
            icon={faUserPlus}
            style={{ fontSize: "20px", marginRight: "10px", color: "black" }}
          />
          <span style={{ fontSize: "16px", fontWeight: "bold", color: "black" }}>
            New Register
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
