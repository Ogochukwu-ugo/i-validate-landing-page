import React from "react";
import './headerFooter.css'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-box">
      <div className="container-fluid navbar-changes">
        <a className="navbar-brand" href={"/"}>
          Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href={"/"}>
                Expert View
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={"/"}>
                Analytics
              </a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link" href={"/"}>
                    Blog
                </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href={"/"}>
                Sign Up
              </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href={"/"}>
                Log In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
