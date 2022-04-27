import React, { Component } from "react";
import "./addContactInput.scss"

class AddContactInput extends Component {
  render() {
    const { name, family, numbers, inputsChangedHandler, addContactHandler } =
      this.props;
    return (
      <tr className="addInputContainer">
        <td></td>
        <td>
          <input
            type="text"
            value={name}
            id="name"
            onChange={inputsChangedHandler}
          />
        </td>
        <td>
          <input
            type="text"
            value={family}
            id="family"
            onChange={inputsChangedHandler}
          />
        </td>
        <td>
          <input
            type="number"
            value={numbers}
            id="numbers"
            onChange={inputsChangedHandler}
          />
        </td>
        <td>
          <button className="addButton" onClick={addContactHandler}>
            اضافه
          </button>
        </td>
      </tr>
    );
  }
}

export default AddContactInput;
