import React, { Component } from "react";
// import Modal from "../modal/Modal";

class Edit extends Component {
  render() {
    const {
        inputsChangedHandler,
        // contacts,
        editName,
        editFamily,
        editNumbers,
        // editId,
        contactSaveEditHandler,
        mulNumHandler,
        // closeTheModal,
        // editIsOpen,
      } = this.props;
    return (

      <>
        <div>
          <div>نام</div>
          <div>
            <input
              value={editName}
              id="editName"
              onChange={inputsChangedHandler}
            />
          </div>
        </div>
        <div>
          <div>نام‌خانوادگی</div>
          <div>
            <input
              value={editFamily}
              id="editFamily"
              onChange={inputsChangedHandler}
            />
          </div>
        </div>
        <div>
          <div>شماره‌تلفن</div>
          <div className="addPhoneContainer">
            <button onClick={mulNumHandler}>+</button>
            <input
              value={editNumbers}
              id="editNumbers"
              onChange={inputsChangedHandler}
            />
          </div>
          {/* {contacts.map((i) => {
              return <div> {i.id === editId} </div>
          })} */}
        </div>
        <div className="saveModalBTN">
          <button onClick={contactSaveEditHandler}>ذخیره</button>
        </div>
      </>
    );
  }
}

export default Edit;
