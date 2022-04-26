import React, { Component } from "react";
import "./modal.scss";

class Modal extends Component {
  constructor(props) {
    super(props) 

    this.state = {

    }
  }
  render() {
    return (
      <div
        className={` ${
          this.props.isOpen ? "modalContainer" : "modalDisplayNone"
        }`}
      >
        <div>
          <div>نام</div>
          <input value={this.props.editName} id="editName" onChange={this.props.inputsChangedHandler} />
        </div>
        <div>
          <div>نام‌خانوادگی</div>
          <input value={this.props.editFamily} id="editFamily" onChange={this.props.inputsChangedHandler} />
        </div>
        <div>
          <div>شماره‌تلفن</div>
          <div>
            <button>+</button>
            <input value={this.props.editNumbers} id="editNumbers" onChange={this.props.inputsChangedHandler} />
          </div>
        </div>
        <div>
          <button onClick={this.props.contactSaveEditHandler}>ذخیره</button>
        </div>
        <button onClick={this.props.contactEditHandler} className="closeModal">
          x
        </button>
      </div>
    );
  }
}

export default Modal;
