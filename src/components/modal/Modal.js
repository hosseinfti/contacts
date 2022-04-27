import React, { Component } from "react";
import "./modal.scss";

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div
        className={` ${
          this.props.isOpen ? "modalContainer" : "modalDisplayNone"
        }`}
      >
        <div className="modalBody">
          <div>
            <div>نام</div>
            <div>
              <input
                value={this.props.editName}
                id="editName"
                onChange={this.props.inputsChangedHandler}
              />
            </div>
          </div>
          <div>
            <div>نام‌خانوادگی</div>
            <div>
              <input
                value={this.props.editFamily}
                id="editFamily"
                onChange={this.props.inputsChangedHandler}
              />
            </div>
          </div>
          <div>
            <div>شماره‌تلفن</div>
            <div className="addPhoneContainer">
              <button>+</button>
              <input
                value={this.props.editNumbers}
                id="editNumbers"
                onChange={this.props.inputsChangedHandler}
              />
            </div>
          </div>
          <div className="saveModalBTN">
            <button onClick={this.props.contactSaveEditHandler}>ذخیره</button>
          </div>
          <button onClick={this.props.closeTheModal} className="closeModalBTN">
            x
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
