import React, { Component } from "react";

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      family: "",
      numbers: "",
    };
  }
  addContactHandler = () => {

  }
  nameChangeHandler = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  familyChangeHandler = (e) => {
    this.setState({
      family: e.target.value,
    });
  };
  numberChangeHandler = (e) => {
    this.setState({
      numbers: e.target.value,
    });
  };
  render() {
    return (
      <tr>
        <td>
          <input
            type="text"
            value={this.state.contactInput}
            onChange={this.nameChangeHandler}
          />
        </td>
        <td>
          <input
            type="text"
            value={this.state.contactInput}
            onChange={this.familyChangeHandler}
          />
        </td>
        <td>
          <input
            type="text"
            value={this.state.contactInput}
            onChange={this.numberChangeHandler}
          />
        </td>
        <button className="addButton" onSubmit={this.addContactHandler} > اضافه </button>
      </tr>
    );
  }
}

export default AddContact;
