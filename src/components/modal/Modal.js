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
      changeOtherNum,
    } = this.props;

    let modalContent;
    
    if (editIsOpen) {
      modalContent = (
        <Edit
          editId={editId}
          contacts={contacts}
          editIsOpen={editIsOpen}
          contactSaveEditHandler={contactSaveEditHandler}
          editNumbers={editNumbers}
          editFamily={editFamily}
          editName={editName}
          inputsChangedHandler={inputsChangedHandler}
          mulNumHandler={mulNumHandler}
          changeOtherNum={changeOtherNum}
        />
      );
    } else if (infoIsOpen) {
      modalContent = (
        <Info
          contacts={contacts}
          editId={editId}
          infoIsOpen={infoIsOpen}
          editFamily={editFamily}
          editName={editName}
        />
      );
    } else {
      modalContent = null;
    }

    return (
      <div className="modalContainer">
        <div className="modalBody">
          {modalContent}

          <button onClick={closeTheModal} className="closeModalBTN">
            x
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
