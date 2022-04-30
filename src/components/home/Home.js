import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.scss";

class Home extends Component {
  render() {
    return (
      <>
        <div className="wellcome">
          <h1>Wellcome</h1>
          <Link to="/contacts">
            <div className="enterBTN">Enter</div>
          </Link>
        </div>
      </>
    );
  }
}

export default Home;
