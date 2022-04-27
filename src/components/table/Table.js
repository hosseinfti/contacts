import React, { Component } from "react";
import ItemContact from "../itemContact/ItemContact";
import "./table.scss";
// import data from "../../json/data.json";
import axios from "axios";
import Modal from "../modal/Modal";
import AddContactInput from "../addContactInput/AddContactInput";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      family: "",
      numbers: "",
      contacts: [],
      searchInput: "",
      searchedContact: [],
      isOpen: false,
      editId: "",
      editName: "",
      editFamily: "",
      editNumbers: "",
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

  contactSaveEditHandler = () => {
    let editedList = this.state.contacts.map((i) => {
      if (i.id === this.state.editId) {
        i.name = this.state.editName;
        i.family = this.state.editFamily;
        i.numbers = this.state.editNumbers;
      }

      return i;
    });
    this.setState({
      contacts: editedList,
      isOpen: false,
    });
  };

  closeTheModal = () => {
    this.setState({
      isOpen: false,
    });
  };

  contactEditHandler = (e) => {
    this.setState((prevState) => {
      return {
        isOpen: !prevState.isOpen,
        editId: e.id,
        editName: e.name,
        editFamily: e.family,
        editNumbers: e.numbers,
      };
    });
  };

  searchKeyHandler = (e, key) => {

    let searched = this.state.contacts.filter((i) => {
      return (
        i.numbers.includes(e.target.value) ||
        i.name.includes(e.target.value) ||
        i.family.includes(e.target.value)
      );
    });

    let timout;
    clearTimeout(timout);
    console.log("down");
    
      timout = setTimeout(() => {
        console.log("up");
        this.setState({
          searchInput: e.target.value,
          searchedContact: searched,
        });
      }, 1000);
   
      
    

    // switch (key) {
    //   case "up":
    //     timout = setTimeout(() => {
    //       console.log("up");
    //       this.setState({
    //         searchInput: e.target.value,
    //         searchedContact: searched,
    //       });
    //     }, 1000);
    //     break;

    //   case "down":
    //     clearTimeout(timout);
    //     break;
        
    //   default:
    //     break;
    // }
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
          <div>جست‌جو</div>
          <input
            value={this.state.searchInput}
            id="searchInput"
            onChange={this.inputsChangedHandler}
            onKeyUp={(e) => this.searchKeyHandler(e, "up")}
            // onKeyDown={(e) => this.searchKeyHandler(e, "down")}
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
            <AddContactInput
              addContactHandler={this.addContactHandler}
              inputsChangedHandler={this.inputsChangedHandler}
              name={this.state.name}
              family={this.state.family}
              numbers={this.state.numbers}
            />
            <ItemContact
              contactEditHandler={this.contactEditHandler}
              contactDeleteHandler={this.contactDeleteHandler}
              contacts={this.state.contacts}
              searchedContact={this.state.searchedContact}
              searchInput={this.state.searchInput}
              name={this.state.name}
              family={this.state.family}
              id={this.state.id}
              numbers={this.state.numbers}
            />
          </tbody>
        </table>
        <Modal
          isOpen={this.state.isOpen}
          closeTheModal={this.closeTheModal}
          contactSaveEditHandler={this.contactSaveEditHandler}
          inputsChangedHandler={this.inputsChangedHandler}
          editId={this.state.editId}
          editName={this.state.editName}
          editFamily={this.state.editFamily}
          editNumbers={this.state.editNumbers}
        />
      </div>
    );
  }
}

export default Table;
