import React, { Component } from "react";
import { ContactContext } from "../ContactContext";
import "../modal/modal.scss";

class Info extends Component {
  render() {
    return (
      <ContactContext.Consumer>
        {({ editName, editFamily, editId, contacts }) => {
          return (
              <div className="infoModal">
                <div>
                  <div>نام</div>
                  <div>{editName}</div>
                </div>
                <div>
                  <div>نام‌خانوادگی</div>
                  <div>{editFamily}</div>
                </div>
                <div>
                  <div>شماره‌تلفن</div>
                  {/* eslint-disable-next-line */}
                  {contacts.map((i) => {
                    if (i.id === editId) {
                      return (
                        <div key={i.id}>
                          {i.numbers.map((i, index) => {
                            return (
                              <div className="modalNumberList" key={i.id}>
                                {i}
                              </div>
                            );
                          })}
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
          );
        }}
      </ContactContext.Consumer>
    );
  }
}

export default Info;
