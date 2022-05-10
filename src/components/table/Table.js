import React, { Component } from "react";
import ItemContact from "../itemContact/ItemContact";
import "./table.scss";
import Modal from "../modal/Modal";
import { ContactContext } from "../ContactContext";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: "",
      editIsOpen: false,
      infoIsOpen: false,
      // editId: "",
      // editName: "",
      // editFamily: "",
      // editNumbers: "",
      // editIndexNumbers: "",
      timeout: "",
      key: "",
      inlineInput: "",
    };
  }

  mulNumHandler = () => {
    let temp = this.state.contacts.map((i) => {
      if (i.id === this.state.editId) {
        let exsistIndex = i.numbers.indexOf(this.state.editNumbers);
        if (exsistIndex === -1) {
          i.numbers.push(this.state.editNumbers);
        } else {
          alert("شماره تکراری است");
        }
        return i;
      } else {
        return i;
      }
    });
    this.setState({
      contacts: temp,
    });
  };

  /**
   *
   * @param {*} itemToBeRemove
   */
  contactDeleteHandler = (itemToBeRemove) => {
    let sureToDelete = window.confirm("مخاطب حذف شود؟");
    if (sureToDelete) {
      let newList = this.state.contacts.filter((i) => {
        return i.id !== itemToBeRemove;
      });
      this.setState({
        contacts: newList,
      });
    }
  };

  contactSaveEditHandler = () => {
    let editedList = this.state.contacts.map((i, index) => {
      if (i.id === this.state.editId) {
        i.name = this.state.editName;
        i.family = this.state.editFamily;
        i.numbers[this.state.editIndexNumbers] = this.state.editNumbers;
      }

      return i;
    });
    this.setState({
      contacts: editedList,
      editIsOpen: false,
    });
  };

  closeTheModal = () => {
    this.setState({
      editIsOpen: false,
      infoIsOpen: false,
    });
  };

  contactEditHandler = (e) => {
    console.log(e);
    this.setState((prevState) => {
      return {
        editIsOpen: !prevState.editIsOpen,
        editId: e.id,
        editName: e.name,
        editFamily: e.family,
        editNumbers: e.numbers[0],
      };
    });
  };
  contactInfoHandler = (e) => {
    this.setState((prevState) => {
      return {
        infoIsOpen: !prevState.infoIsOpen,
        editId: e.id,
        editName: e.name,
        editFamily: e.family,
        editNumbers: e.numbers[0],
      };
    });
  };

  changeOtherNum = (item1, index1) => {
    this.setState({
      editNumbers: item1,
      editIndexNumbers: index1,
    });
  };

  inlineEditHandler = (e, i) => {
    this.setState({
      [e.target.id]: i,
    });
  };

  render() {
    return (
      <ContactContext.Consumer>
        {({
          processChanges,
          inputsChangedHandler,
          contacts,
          family,
          numbers,
          name,
          searchedContact,
        }) => {
          return (
            <div className="Container">
              <div className="searchContainer">
                {/* <div>جست‌جو</div> */}
                <input
                  value={this.state.searchInput}
                  placeholder="جست‌جو..."
                  id="searchInput"
                  onChange={(e) => inputsChangedHandler(e)}
                  onKeyUp={(e) => processChanges(e)}
                />
              </div>
              <table>
                <thead>
                  <tr>
                    <th>ردیف</th>
                    <th>نام</th>
                    <th>نام خانوادگی</th>
                    <th>شماره تلفن</th>
                    <th>عملیات</th>
                  </tr>
                </thead>
                <tbody>
                  <ItemContact
                    contactInfoHandler={this.contactInfoHandler}
                    contactEditHandler={this.contactEditHandler}
                    contactDeleteHandler={this.contactDeleteHandler}
                    contacts={contacts}
                    searchedContact={searchedContact}
                    searchInput={this.state.searchInput}
                    inlineEditHandler={this.inlineEditHandler}
                  />
                </tbody>
              </table>
              {this.state.editIsOpen || this.state.infoIsOpen ? (
                <Modal
                  contacts={contacts}
                  editIsOpen={this.state.editIsOpen}
                  infoIsOpen={this.state.infoIsOpen}
                  closeTheModal={this.closeTheModal}
                  contactSaveEditHandler={this.contactSaveEditHandler}
                  inputsChangedHandler={() => inputsChangedHandler()}
                  editId={this.state.editId}
                  editName={this.state.editName}
                  editFamily={this.state.editFamily}
                  editNumbers={this.state.editNumbers}
                  name={name}
                  family={family}
                  numbers={numbers}
                  mulNumHandler={this.mulNumHandler}
                  changeOtherNum={this.changeOtherNum}
                />
              ) : null}
            </div>
          );
        }}
      </ContactContext.Consumer>
    );
  }
}

export default Table;
