import React, { Component } from "react";
import { ContactContext } from "../ContactContext";

import "./addContactInput.scss";

class AddContactInput extends Component {
  render() {
    return (
      <>
        <ContactContext.Consumer>
          {({
            inputsChangedHandler,
            addContactHandler,
            name,
            family,
            numbers,
          }) => {
            return (
              <div className="wellcomeAddNumber">
                <div>
                  <div>نام</div>
                  <input
                    type="text"
                    value={name}
                    id="name"
                    onChange={(e) => inputsChangedHandler(e)}
                  />
                </div>
                <div>
                  <div>نام‌خانوادگی</div>
                  <input
                    type="text"
                    value={family}
                    id="family"
                    onChange={(e) => inputsChangedHandler(e)}
                  />
                </div>
                <div>
                  <div>شماره‌تلفن</div>
                  <input
                    type="number"
                    value={numbers}
                    id="numbers"
                    onChange={(e) => inputsChangedHandler(e)}
                  />
                </div>

                <button
                  className="addButton"
                  onClick={(e) => addContactHandler(e)}
                >
                  اضافه
                </button>
              </div>
            );
          }}
        </ContactContext.Consumer>
      </>
    );
  }
}

export default AddContactInput;
