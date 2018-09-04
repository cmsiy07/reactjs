import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <span className="text-muted">My Website</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
