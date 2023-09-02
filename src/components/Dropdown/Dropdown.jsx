import React, { useState } from "react";
import "./dropdown.css";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        Search Options
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <Link
            onClick={toggleDropdown}
            to="/"
          >
            Search manager
          </Link>
          <Link
            to="/searchCompany"
          >
            Search company
          </Link>
          <Link
            to="/searchCoworker"
          >
            Search coworker
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
