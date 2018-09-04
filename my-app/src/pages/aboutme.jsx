import React, { Component } from "react";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import Jumbotron from "../components/jumbotron.jsx";

class Aboutme extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="About Me Page" subtitle="Something about me" />
        <div className="container">
          <p> Hello</p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Aboutme;
