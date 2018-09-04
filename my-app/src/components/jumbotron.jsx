import React, { Component } from "react";
import "./jumbotron.css";

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="display-3">{this.props.title}</h1>
              <p className="lead">{this.props.subtitle} </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
