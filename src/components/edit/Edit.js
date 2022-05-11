import React, { Component } from "react";
import { ContactContext } from "../ContactContext";
import "../modal/modal.scss";

class Edit extends Component {
  render() {
    return (
      <ContactContext.Consumer>
        {({
          inputsChangedHandler,
          contacts,
          editName,
          editFamily,
          editNumbers,
          editId,
          contactSaveEditHandler,
          mulNumHandler,
          changeOtherNum,
        }) => {
          return (
            <>
              <div>
                <div>نام</div>
                <div>
                  <input
                    value={editName}
                    id="editName"
                    onChange={(e) => inputsChangedHandler(e)}
                  />
                </div>
              </div>
              <div>
                <div>نام‌خانوادگی</div>
                <div>
                  <input
                    value={editFamily}
                    id="editFamily"
                    onChange={(e) => inputsChangedHandler(e)}
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
                    onChange={(e) => inputsChangedHandler(e)}
                  />
                </div>
                {/* eslint-disable-next-line */}
                {contacts.map((i) => {
                  if (i.id === editId) {
                    return (
                      <div key={i.id}>
                        {i.numbers.map((item, index) => {
                          return (
                            <div
                              className="modalNumberList"
                              onClick={() => changeOtherNum(item, index)}
                              key={item.id}
                            >
                              {item}
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
        }}
      </ContactContext.Consumer>
    );
  }
}

export default Edit;
