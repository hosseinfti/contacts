import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.scss";

class Home extends Component {
  render() {
    const { name, family, numbers, inputsChangedHandler, addContactHandler } =
      this.props;
    return (
      <>
        <div className="wellcome">
          <h1>Wellcome</h1>

          <div className="wellcomeAddNumber">
            <div>
              <div>نام</div>
              <input
                type="text"
                value={name}
                id="name"
                onChange={inputsChangedHandler}
              />
            </div>
            <div>
              <div>نام‌خانوادگی</div>
              <input
                type="text"
                value={family}
                id="family"
                onChange={inputsChangedHandler}
              />
            </div>
            <div>
              <div>شماره‌تلفن</div>
              <input
                type="number"
                value={numbers}
                id="numbers"
                onChange={inputsChangedHandler}
              />
            </div>

            <button className="addButton" onClick={addContactHandler}>
              اضافه
            </button>
          </div>
          <Link to="/contacts">
            <div className="enterBTN">دفتر‌تلفن</div>
          </Link>
        </div>
      </>
    );
  }
}

export default Home;
