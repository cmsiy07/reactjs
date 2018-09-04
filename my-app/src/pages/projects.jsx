import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import Jumbotron from "../components/jumbotron.jsx";
import "./projects.css";

class Projects extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron
          title="Projects"
          subtitle="Tiles of my Projects!"
          id="test"
        />
        <div className="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-12">
              <Link id="project1" to="//facebook.com" target="_blank" />
              One of four Columns
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">One of four columns</div>
            <div class="col-lg-3 col-md-6 col-sm-12">One of four columns</div>
            <div class="col-lg-3 col-md-6 col-sm-12">One of four columns</div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-12">One of four columns</div>
            <div class="col-lg-3 col-md-6 col-sm-12">One of four columns</div>
            <div class="col-lg-3 col-md-6 col-sm-12">One of four columns</div>
            <div class="col-lg-3 col-md-6 col-sm-12">One of four columns</div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-12">One of four columns</div>
            <div class="col-lg-3 col-md-6 col-sm-12">One of four columns</div>
            <div class="col-lg-3 col-md-6 col-sm-12">One of four columns</div>
            <div class="col-lg-3 col-md-6 col-sm-12">One of four columns</div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-12">One of four columns</div>
            <div class="col-lg-3 col-md-6 col-sm-12">One of four columns</div>
            <div class="col-lg-3 col-md-6 col-sm-12">One of four columns</div>
            <div class="col-lg-3 col-md-6 col-sm-12">One of four columns</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Projects;
