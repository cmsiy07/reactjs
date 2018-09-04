import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";

import Home from "./pages/home.jsx";
import Resume from "./pages/resume.jsx";
import Contact from "./pages/contact.jsx";
import Project from "./pages/projects.jsx";
import Aboutme from "./pages/aboutme.jsx";

library.add(faStroopwafel);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Project} />
          <Route path="/aboutme" component={Aboutme} />
        </div>
      </Router>
    );
  }
}

export default App;
