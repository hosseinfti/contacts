import React, { Component } from "react";
import "./modal.scss";

class Modal extends Component {
  render() {
    return (
      <div
        className={` ${
          this.props.isOpen ? "modalContainer" : "modalDisplayNone"
        }`}
      >
        <div>
          <div>نام</div>
          <input />
        </div>
        <div>
          <div>نام‌خانوادگی</div>
          <input />
        </div>
        <div>
          <div>شماره‌تلفن</div>
          <div>
            <button>+</button>
            <input />
          </div>
        </div>
        <div>
          <button onClick={this.props.contactEditHandler}>ذخیره</button>
        </div>
        <button onClick={this.props.contactEditHandler} className="closeModal">
          x
        </button>
      </div>
    );
  }
}

export default Modal;
