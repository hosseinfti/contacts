import React, { Component } from "react";
import "./addContact.scss";

class AddContact extends Component {
  constructor(props) {
    super(props)

    this.editRef = React.createRef();

  }
  render() {
    return (
      <>
        <tr>
          <td>
            <input
              type="text"
              value={this.props.name}
              id="name"
              onChange={this.props.inputsChangedHandler}
            />
          </td>
          <td>
            <input
              type="text"
              value={this.props.family}
              id="family"
              onChange={this.props.inputsChangedHandler}
            />
          </td>
          <td>
            <input
              type="number"
              value={this.props.numbers}
              id="numbers"
              onChange={this.props.inputsChangedHandler}
            />
          </td>
          <td>
            <button
              className="addButton"
              onClick={this.props.addContactHandler}
            >
              اضافه
            </button>
          </td>
        </tr>
        {this.props.contacts.map((i) => {
          return (
            <tr className="contactItem" id={i.id} key={i.numbers}>
              <td>{i.name}</td>
              <td>{i.family}</td>
              <td>{i.numbers}</td>
              <td>
                <button onClick={() => this.props.contactDeleteHandler(i.id)}>
                  X
                </button>
                <button onClick={() => this.props.contactEditHandler(i)}>
                  Edit
                </button>
              </td>
            </tr>
          );
        })}
      </>
    );
  }
}

export default AddContact;
