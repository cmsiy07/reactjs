import React, { Component } from "react";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import Jumbotron from "../components/jumbotron.jsx";

class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron
          title="Contact Page"
          subtitle="Welcome to the Contact Page!"
        />
        <div className="container">
          <p> Hello</p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
