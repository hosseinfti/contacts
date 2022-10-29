import React, { Component } from "react";
import ItemContact from "../itemContact/ItemContact";
import "./table.scss";
import Modal from "../modal/Modal";
import { ContactContext } from "../ContactContext";
import { Link } from "react-router-dom";
import backArrow from "../../assets/image/backArrow.svg";
class Table extends Component {
  render() {
    const noResult = <div className="noResult">موردی یافت نشد</div>;
    const noContactYet = <div className="noResult">هنوز موردی اضافه نشده</div>;

    return (
      <ContactContext.Consumer>
        {({
          processChanges,
          inputsChangedHandler,
          contacts,
          family,
          numbers,
          name,
          editId,
          editName,
          editFamily,
          editNumbers,
          contactDeleteHandler,
          contactSaveEditHandler,
          contactEditHandler,
          contactInfoHandler,
          changeOtherNum,
          inlineEditHandler,
          mulNumHandler,
          editIsOpen,
          infoIsOpen,
          closeTheModal,
          searchInput,
          searchedContact,
        }) => {
          return (
            <div className="Container">
              <div className="sectionOne">
                <div className="searchContainer">
                  <input
                    value={searchInput}
                    placeholder="جست‌جو..."
                    id="searchInput"
                    onChange={(e) => inputsChangedHandler(e)}
                    onKeyUp={(e) => processChanges(e)}
                  />
                </div>
                <Link to="/">
                  <div className="previousPage">
                    <img src={backArrow} width="25px" alt="backArrow" />
                  </div>
                </Link>
              </div>
              <div className="sectionTwo table">
                <div>
                  <ItemContact
                    contactInfoHandler={contactInfoHandler}
                    contactEditHandler={contactEditHandler}
                    contactDeleteHandler={contactDeleteHandler}
                    contacts={contacts}
                    searchedContact={searchedContact}
                    searchInput={searchInput}
                    inlineEditHandler={inlineEditHandler}
                  />
                </div>
              </div>
              {searchedContact.length === 0 && searchInput
                ? noResult
                : searchedContact.length === 0 && contacts.length === 0
                ? noContactYet
                : null}
              {editIsOpen || infoIsOpen ? (
                <Modal
                  contacts={contacts}
                  editIsOpen={editIsOpen}
                  infoIsOpen={infoIsOpen}
                  closeTheModal={closeTheModal}
                  contactSaveEditHandler={() => contactSaveEditHandler()}
                  inputsChangedHandler={() => inputsChangedHandler()}
                  editId={editId}
                  editName={editName}
                  editFamily={editFamily}
                  editNumbers={editNumbers}
                  name={name}
                  family={family}
                  numbers={numbers}
                  mulNumHandler={mulNumHandler}
                  changeOtherNum={changeOtherNum}
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
