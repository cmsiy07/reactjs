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
          <nav className="nav nav-pills flex-column flex-sm-row nav-justified" id="projectsTab" role="tablist">
            <a data-toggle="pill" role="tab" id="pills-laravel-tab" href="#pills-laravel" 
              aria-controls="pills-laravel" aria-selected="true" 
              className="flex-sm-fill text-sm-center nav-item nav-link active">PHP Laravel</a>
            
            <a data-toggle="pill" role="tab" id="pills-codeigntier-tab" href="#pills-codeigniter"
              aria-controls="pills-codeigniter" aria-selected="false" 
              className="flex-sm-fill text-sm-center nav-item nav-link">PHP Codeigniter</a>
            
            <a data-toggle="pill" role="tab" id="pills-django-tab" href="#pills-django" 
              aria-controls="pills-django" aria-selected="false" 
              className="flex-sm-fill text-sm-center nav-item nav-link">Django</a>
            
            <a data-toggle="pill" role="tab" id="pills-arduino-tab" href="#pills-arduino" 
              aria-controls="pills-arduino" aria-selected="false" 
              className="flex-sm-fill text-sm-center nav-item nav-link">Arduino</a>
          </nav>
          <hr/>
          <div className="tab-content" id="pill-tabContent">
            <div className="tab-pane fade show active" id="pills-laravel" role="tabpanel" 
              aria-labelledby="pills-laravel-tab">
              <div className="d-flex align-content-stretch flex-row bd-highlight" id="flexbox">
                <div className="p-2 flex-fill border bd-highlight">
                  <div className="d-flex flex-wrap justify-content-start align-items-center">
                    <img src={require('../images/laravel.png')} className="project-logo align-middle" />
                    <h4>Laravel Project 1</h4>
                  </div>
                  <hr/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non augue quam. Mauris auctor aliquam urna, vitae gravida quam egestas eget. Nam in posuere lacus. Curabitur dapibus molestie felis sed dapibus. Aliquam suscipit purus quis metus lobortis sodales a a dui. Duis interdum tincidunt dapibus. </p>
                </div>
                <div className="p-2 flex-fill border bd-highlight">
                <div className="d-flex flex-wrap justify-content-start align-items-center">
                    <img src={require('../images/laravel.png')} className="project-logo align-middle" />
                    <h4>Laravel Project 2</h4>
                  </div>
                  <hr/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non augue quam. Mauris auctor aliquam urna, vitae gravida quam egestas eget. Nam in posuere lacus. Curabitur dapibus molestie felis sed dapibus. Aliquam suscipit purus quis metus lobortis sodales a a dui. Duis interdum tincidunt dapibus. </p>
                </div>
                <div className="p-2 flex-fill border bd-highlight">
                <div className="d-flex flex-wrap justify-content-start align-items-center">
                    <img src={require('../images/laravel.png')} className="project-logo align-middle" />
                    <h4>Laravel Project 3</h4>
                  </div>
                  <hr/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non augue quam. Mauris auctor aliquam urna, vitae gravida quam egestas eget. Nam in posuere lacus. Curabitur dapibus molestie felis sed dapibus. Aliquam suscipit purus quis metus lobortis sodales a a dui. Duis interdum tincidunt dapibus. </p>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-codeigniter" role="tabpanel" 
              aria-labelledby="pills-codeigniter-tab">
              codeigniter
            </div>
            <div className="tab-pane fade" id="pills-django" role="tabpanel" 
              aria-labelledby="pills-django-tab">
              django
            </div>
            <div className="tab-pane fade" id="pills-arduino" role="tabpanel" 
              aria-labelledby="pills-arduino-tab">
              arduino  
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Projects;
