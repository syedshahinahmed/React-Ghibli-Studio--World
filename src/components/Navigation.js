import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">Ghibli Studio</div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span />
            <span />
            <span />
          </label>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
