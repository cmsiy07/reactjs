import React, { Component } from "react";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import Jumbotron from "../components/jumbotron.jsx";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Cheryl M. Siy" subtitle="Full Stack Web Developer" />
        <div className="container" id="social">
          <Link to="//www.google.com" target="_blank">
            <i class="fab fa-linkedin" />
          </Link>
          <Link to="//www.facebook.com/cheryl.siy" target="_blank">
            <i class="fab fa-facebook-square" />
          </Link>
          <Link to="//www.instagram.com/chesiy07" target="_blank">
            <i class="fab fa-instagram" />
          </Link>
          <Link to="//www.github.com/cmsiy07" target="_blank">
            <i class="fab fa-github-square" />
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
