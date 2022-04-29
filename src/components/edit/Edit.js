import React, { Component } from "react";
// import Modal from "../modal/Modal";

class Edit extends Component {



  // changeOtherNum = (e) => {
  //   this.setState({
  //     editNumbers: 
  //   })
  // }


  render() {
    const {
      inputsChangedHandler,
      contacts,
      editName,
      editFamily,
      editNumbers,
      editId,
      contactSaveEditHandler,
      mulNumHandler,
      changeOtherNum,
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
          {contacts.map((i) => {
            if (i.id === editId) {
              return (
                <div key={i.id}>
                  {i.numbers.map((i,index) => {
                    return (
                      <div
                        onClick={() => changeOtherNum(i,index)}
                        key={i.id}
                        // id="editNumbers"
                        // onClick={(e) => inputsChangedHandler(i.numbers)}
                      >
                        {i}
                      </div>
                    );
                  })}
                </div>
              );
            }
          })}
        </div>
        <div className="saveModalBTN">
          <button onClick={contactSaveEditHandler}>ذخیره</button>
        </div>
      </>
    );
  }
}

export default Edit;
