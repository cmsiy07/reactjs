import React, { Component } from "react";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import Jumbotron from "../components/jumbotron.jsx";

class Resume extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Resume Page" subtitle="Welcome to the Resume Page!" />
        <div className="container">
          <h2> Welcome</h2>
          <p />
          <p />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Resume;
