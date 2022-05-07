import React, { Component } from "react";
import "../modal/modal.scss"

class Edit extends Component {
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
          <div className="modalAddNumber">
            <button onClick={mulNumHandler}>+</button>
            <input
              value={editNumbers}
              id="editNumbers"
              onChange={inputsChangedHandler}
            />
          </div>
          {/* eslint-disable-next-line */}
          {contacts.map((i) => {
            if (i.id === editId) {
              return (
                <div key={i.id}>
                  {i.numbers.map((i, index) => {
                    return (
                      <div className="modalNumberList" onClick={() => changeOtherNum(i, index)} key={i.id}>
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
