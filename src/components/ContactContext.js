import React, { Component } from "react";
import Routing from "./routing/Routing";
import axios from "axios";

export const ContactContext = React.createContext();

class ContactProvider extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      family: "",
      numbers: [],
      contacts: [],
      searchedContact: [],
      editId: "",
      editName: "",
      editFamily: "",
      editNumbers: "",
      editIndexNumbers: "",
    };
  }

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

  // debounce start

  /**
   *
   * @param {function} func
   * @param {number} timeout
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

  inputsChangedHandler = (e) => {
    this.setState(
      {
        [e.target.id]: e.target.value,
      },
      this.processChanges()
    );
  };

  render() {
    return (
      <ContactContext.Provider
        value={{
          inputsChangedHandler: (e) => {
            this.inputsChangedHandler(e);
          },
          addContactHandler: (e) => {
            this.addContactHandler(e);
          },
          processChanges: (e) => {
            this.processChanges(e);
          },
          name: this.state.name,
          family: this.state.family,
          numbers: this.state.numbers,
          contacts: this.state.contacts,
        }}
      >
        <Routing />
      </ContactContext.Provider>
    );
  }
}

export default ContactProvider;
