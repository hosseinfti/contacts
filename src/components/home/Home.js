import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddContactInput from "../addContactInput/AddContactInput";
import Logo from "../logo/Logo";
import "./home.scss";

class Home extends Component {
  render() {
    return (
      <>
        <div className="wellcome">
          <div className="wellcomeContainer">
            <Logo />
            <h1 className="wellcomeTxt">Wellcome</h1>
          </div>
          <AddContactInput />
          <Link className="enterBTN" to="/contacts">
            <div className="txtEnterBTN">دفتر‌تلفن</div>
            <div className="arrowEnterBTN"></div>
          </Link>
        </div>
      </>
    );
  }
}

export default Home;
