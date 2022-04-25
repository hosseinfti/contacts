import React, { Component } from "react";
import AddContact from "../addContact/AddContact";
import "./table.scss";
import data from "../../json/data.json";
import axios from "axios";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      family: "",
      numbers: "",
      contacts: data,
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
    axios.get("../../json/data.json").then((res) => {
      console.log(res);
    });
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
      <div className="Container">
        <table>
          <thead>
            <tr>
              <th>نام</th>
              <th>نام خانوادگی</th>
              <th>شماره تلفن</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <AddContact
              contactDeleteHandler={this.contactDeleteHandler}
              inputsChangedHandler={this.inputsChangedHandler}
              addContactHandler={this.addContactHandler}
              contacts={this.state.contacts}
              name={this.state.name}
              family={this.state.family}
              id={this.state.id}
              numbers={this.state.numbers}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
