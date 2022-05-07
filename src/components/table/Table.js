import React, { Component } from "react";
import ItemContact from "../itemContact/ItemContact";
import "./table.scss";
// import data from "../../json/data.json";
import axios from "axios";
import Modal from "../modal/Modal";
// import AddContactInput from "../addContactInput/AddContactInput";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      family: "",
      numbers: [],
      contacts: [],
      searchInput: "",
      searchedContact: [],
      editIsOpen: false,
      infoIsOpen: false,
      editId: "",
      editName: "",
      editFamily: "",
      editNumbers: "",
      editIndexNumbers: "",
      timeout: "",
      key: "",
      inlineInput: "",
    };
  }

  addContactHandler = () => {
    let uniqID = new Date().valueOf();
    let newContact = {
      id: uniqID,
      name: this.state.name,
      family: this.state.family,
      numbers: [String(this.state.numbers)],
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

  // debounce start

  /**
   * 
   * @param {*} func 
   * @param {*} timeout 
   * @returns 
   */
  debounce = (func, timeout = 1000) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };
  saveInput = () => {
    let searched = this.state.contacts.filter((i) => {
      return (
        i.numbers.includes(this.state.searchInput) ||
        i.name.includes(this.state.searchInput) ||
        i.family.includes(this.state.searchInput)
      );
    });
    this.setState({
      searchedContact: searched,
    });
  };
  processChanges = this.debounce(() => this.saveInput());

  // debounce end

  /**
   * 
   * @param {*} e 
   */
  inputsChangedHandler = (e) => {
    this.setState(
      {
        [e.target.id]: e.target.value,
      },
      this.processChanges()
    );
  };

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

  componentDidMount() {
    axios.get("http://localhost:8880").then((res) => {
      let version = localStorage.getItem("version");
      let data = res.data;
      if (version === data.version) {
        let lastContact = localStorage.getItem("contact");
        let t = [];
        try {
          t = JSON.parse(lastContact);
        } catch (e) {}
        this.setState({
          contacts: t || [],
          searchedContact: t || [],
        });
      } else {
        localStorage.setItem("version", data.version);

        this.setState({
          contacts: data.phones,
          searchedContact: data.phones,
        });
      }
    });
  }
  componentDidUpdate() {
    localStorage.setItem("contact", JSON.stringify(this.state.contacts));
  }

  render() {
    return (
      <div className="Container">
        <div className="searchContainer">
          {/* <div>جست‌جو</div> */}
          <input
            value={this.state.searchInput}
            placeholder="جست‌جو..."
            id="searchInput"
            onChange={this.inputsChangedHandler}
            onKeyUp={this.processChanges()}
          />
        </div>
        <table>
          <thead>
            <tr>
              <td>ردیف</td>
              <th>نام</th>
              <th>نام خانوادگی</th>
              <th>شماره تلفن</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* <AddContactInput
              addContactHandler={this.addContactHandler}
              inputsChangedHandler={this.inputsChangedHandler}
              name={this.state.name}
              family={this.state.family}
              numbers={this.state.numbers}
            /> */}
            <ItemContact
              contactInfoHandler={this.contactInfoHandler}
              contactEditHandler={this.contactEditHandler}
              contactDeleteHandler={this.contactDeleteHandler}
              contacts={this.state.contacts}
              searchedContact={this.state.searchedContact}
              searchInput={this.state.searchInput}
              name={this.state.name}
              family={this.state.family}
              id={this.state.id}
              numbers={this.state.numbers}
              inlineEditHandler={this.inlineEditHandler}
            />
          </tbody>
        </table>
        {this.state.editIsOpen || this.state.infoIsOpen ? <Modal
          contacts={this.state.contacts}
          editIsOpen={this.state.editIsOpen}
          infoIsOpen={this.state.infoIsOpen}
          closeTheModal={this.closeTheModal}
          contactSaveEditHandler={this.contactSaveEditHandler}
          inputsChangedHandler={this.inputsChangedHandler}
          editId={this.state.editId}
          editName={this.state.editName}
          editFamily={this.state.editFamily}
          editNumbers={this.state.editNumbers}
          name={this.state.name}
          family={this.state.family}
          numbers={this.state.numbers}
          mulNumHandler={this.mulNumHandler}
          changeOtherNum={this.changeOtherNum}
        /> : null}
      </div>
    );
  }
}

export default Table;
