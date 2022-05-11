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
      searchInput: "",
      searchedContact: [],
      editIsOpen: false,
      infoIsOpen: false,
      editId: "",
      editName: "",
      editFamily: "",
      editNumbers: "",
      editIndexNumbers: 0,
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
          searchedContact: [],
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
      () => {
        this.processChanges();
      }
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
        searchedContact: newList,
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

  closeTheModal = () => {
    this.setState({
      editIsOpen: false,
      infoIsOpen: false,
    });
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
          contactDeleteHandler: (e) => {
            this.contactDeleteHandler(e);
          },
          contactSaveEditHandler: (e) => {
            this.contactSaveEditHandler(e);
          },
          contactEditHandler: (e) => {
            this.contactEditHandler(e);
          },
          contactInfoHandler: (e) => {
            this.contactInfoHandler(e);
          },
          changeOtherNum: (item, index) => {
            this.changeOtherNum(item, index);
          },
          closeTheModal: (e) => {
            this.closeTheModal(e);
          },
          inlineEditHandler: (e, i) => {
            this.inlineEditHandler(e, i);
          },
          mulNumHandler: (e) => {
            this.mulNumHandler(e);
          },
          processChanges: (e) => {
            this.processChanges(e);
          },
          name: this.state.name,
          family: this.state.family,
          numbers: this.state.numbers,
          contacts: this.state.contacts,
          searchInput: this.state.searchInput,
          searchedContact: this.state.searchedContact,
          editIsOpen: this.state.editIsOpen,
          infoIsOpen: this.state.infoIsOpen,
          editId: this.state.editId,
          editName: this.state.editName,
          editFamily: this.state.editFamily,
          editNumbers: this.state.editNumbers,
          editIndexNumbers: this.state.editIndexNumbers,
        }}
      >
        <Routing />
      </ContactContext.Provider>
    );
  }
}

export default ContactProvider;
