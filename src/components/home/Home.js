import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddContactInput from "../addContactInput/AddContactInput";
import Logo from "../logo/Logo";
import "./home.scss";

class Home extends Component {
  render() {
    // const { name, family, numbers, inputsChangedHandler, addContactHandler } =
    //   this.props;
    return (
      <>
        <div className="wellcome">
          <Logo />
          {/* <h1>Wellcome</h1> */}
          {/* <AddContactInput /> */}
          {/* <Link to="/contacts">
            <div className="enterBTN">دفتر‌تلفن</div>
          </Link> */}
        </div>
      </>
    );
  }
}

export default Home;
