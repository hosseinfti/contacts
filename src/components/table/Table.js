import React, { Component } from "react";
import AddContact from "../addContact/AddContact";
import "./table.css";
import data from "../../json/data.json";
import axios from "axios"

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: data
    };
  
  }

  componentDidMount() {
    axios.get(data)
    .then((res) => {
      console.log(res);
    })
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>نام</th>
            <th>نام خانوادگی</th>
            <th>شماره تلفن</th>
          </tr>
        </thead>
        <tbody>
          <AddContact />
          {this.state.contacts.map((i) => {
            return (
              <tr key={i.numbers}>
                <td>{i.name}</td>
                <td>{i.family}</td>
                <td>{i.numbers}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
