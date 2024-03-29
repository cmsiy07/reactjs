import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

class Navbar extends Component {
  render() {
    
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <div id="logo-img" alt="Logo image" />
          </Link>
          <Link className="navbar-brand" to="/">
            My Portfolio
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink exact activeClassName="active" className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName="active" className="nav-link" to="/resume">
                  Resume
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName="active" className="nav-link" to="/aboutme">
                  About Me
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName="active" className="nav-link" to="/projects">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName="active" className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
