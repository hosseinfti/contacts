import React, { Component } from "react";
import "./itemContact.scss";

class ItemContact extends Component {
  constructor(props) {
    super(props)

    this.editRef = React.createRef();

  }
  render() {
    const {contactDeleteHandler,contactEditHandler, contacts, searchedContact, searchInput} = this.props;
    const finalList = searchInput ? searchedContact : contacts;
    const noResult = <tr className="noResult"><td colSpan={5}>یافت نشد</td></tr>
    return (
      <>
        { 
        finalList === "" ? noResult : finalList.map((i, index) => {
          return (
            <tr className="contactItem" id={i.id} key={i.numbers}>
              <td>{String(index + 1).padStart(2, '0')}).</td>
              <td>{i.name}</td>
              <td>{i.family}</td>
              {/* <td>{String(i.numbers).replace((String(i.numbers).substring(5,8)),"***")}</td> */}
              <td>{(String(i.numbers).substring(6,10)) + "***" + (String(i.numbers).substring(0,5)) }</td>
              <td className="itemBTNS">
                <button className="deleteBTN" onClick={() => contactDeleteHandler(i.id)}>
                  X
                </button>
                <button className="editBTN" onClick={() => contactEditHandler(i)}>
                  Edit
                </button>
              </td>
            </tr>
          );
        })}
      </>
    );
  }
}

export default ItemContact;