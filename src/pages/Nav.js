import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      
      {/* <div className="navbar-brand ms-3">
        <img
          src="https://static.vecteezy.com/system/resources/previews/022/123/337/original/user-icon-profile-icon-account-icon-login-sign-line-vector.jpg"
          alt="Logo"
          className="rounded-circle"
          style={{ height: '40px', width: '40px' }}
        />
      </div> */}

      {/* Right Section */}
      <div className="ms-auto d-flex align-items-center me-3">
        {/* User Icon and Dropdown */}
        <Dropdown>
      <Dropdown.Toggle
        variant="light"
        id="dropdown-user"
        className="d-flex align-items-center border-0"
        style={{ backgroundColor: 'transparent', boxShadow: 'none' }} // Remove default button style
      >
        <FontAwesomeIcon icon={faUserCircle} className="fs-5" />
        <span className="visually-hidden">User Menu</span>
      </Dropdown.Toggle>

      <Dropdown.Menu align="end">
        <Dropdown.Item href="#">Devices</Dropdown.Item>
        <Dropdown.Item href="#">Log Out</Dropdown.Item>
        <Dropdown.Item href="#">Profile</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </div>
    </nav>
  );
};

export default Nav;
