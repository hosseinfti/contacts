import React, { Component } from "react";

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      family: "",
      numbers: "",
      contacts: this.props.contacts,
    };
  }

  addContactHandler = () => {
    let uniqID = new Date().valueOf();
    let newContact = {
      id: uniqID,
      name: this.state.name,
      family: this.state.family,
      numbers: this.state.numbers,
    };
    if (!this.state.name || !this.state.family || !this.state.numbers) {
      alert("تمامی فیلد‌ها پر شود");
    } else {
      let newList = this.state.contacts;
      newList.push(newContact);

      this.setState(
        {
          contacts: newList,
        },
        () => {
          this.setState({
            name: "",
            family: "",
            numbers: "",
          });
        }
      );
    }
  };

  inputsChangedHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  contactDeleteHandler = (itemToBeRemove) => {
    let newList = this.state.contacts.filter((i) => {
      return i.id !== itemToBeRemove;
    });
    this.setState({
      contacts: newList,
    });
  };

  contactEditHandler = () => {};

  componentDidMount() {
    let lastContact = localStorage.getItem("contact");
    this.setState({
      contacts: ("contact", JSON.parse(lastContact)),
    });
  }
  componentDidUpdate() {
    localStorage.setItem("contact", JSON.stringify(this.state.contacts));
  }

  render() {
    return (
      <>
        <tr>
          <td>
            <input
              type="text"
              value={this.state.name}
              id="name"
              onChange={this.inputsChangedHandler}
            />
          </td>
          <td>
            <input
              type="text"
              value={this.state.family}
              id="family"
              onChange={this.inputsChangedHandler}
            />
          </td>
          <td>
            <input
              type="number"
              value={this.state.numbers}
              id="numbers"
              onChange={this.inputsChangedHandler}
            />
          </td>
          <td>
            <button className="addButton" onClick={this.addContactHandler}>
              اضافه
            </button>
          </td>
        </tr>
        <tr>
        <td><input type="text" /></td>
        <td><input type="text" /></td>
        <td><input type="number" /></td>
        <td></td>
        </tr>
        {this.state.contacts.map((i) => {
          return (
            <tr id={i.id} key={i.numbers}>
              <td>{i.name}</td>
              <td>{i.family}</td>
              <td>{i.numbers}</td>
              <td>
                <button onClick={() => this.contactDeleteHandler(i.id)}>
                  X
                </button>
                <button onClick={() => this.contactEditHandler(i.id)}>
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
