import React, { Component } from "react";
// import Modal from "../modal/Modal";

class Info extends Component {
  render() {
    const {
        name,
        family,
        numbers,
        // closeTheModal,
        // infoIsOpen,
      } = this.props;
    return (
      <div>
        <div>
          <div>نام</div>
          <div>{name}</div>
        </div>
        <div>
          <div>نام‌خانوادگی</div>
          <div>{family}</div>
        </div>
        <div>
          <div>شماره‌تلفن</div>
          <div>{numbers.map((i) => {
              return <div> i </div>
          })}</div>
        </div>
      </div>
    );
  }
}

export default Info;
