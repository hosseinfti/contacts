import React, { Component } from "react";
import Edit from "../edit/Edit";
import Info from "../info/Info";
import "./modal.scss";

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const {
      contacts,
      name,
      family,
      numbers,
      inputsChangedHandler,
      editName,
      editFamily,
      editNumbers,
      editId,
      contactSaveEditHandler,
      closeTheModal,
      editIsOpen,
      infoIsOpen,
      mulNumHandler,
    } = this.props;
    return (
      <div
        className={` ${
          editIsOpen || infoIsOpen ? "modalContainer" : "modalDisplayNone"
        }`}
      >
        <div className="modalBody">
          {editIsOpen ? (
            <Edit
              editId={editId}
              contacts={contacts}
              closeTheModal={closeTheModal}
              editIsOpen={editIsOpen}
              contactSaveEditHandler={contactSaveEditHandler}
              editNumbers={editNumbers}
              editFamily={editFamily}
              editName={editName}
              inputsChangedHandler={inputsChangedHandler}
              mulNumHandler={mulNumHandler}
            />
          ) : infoIsOpen ? (
            <Info
              infoIsOpen={infoIsOpen}
              closeTheModal={closeTheModal}
              name={name}
              family={family}
              numbers={numbers}
            />
          ) : null}

          <button onClick={closeTheModal} className="closeModalBTN">
            x
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
