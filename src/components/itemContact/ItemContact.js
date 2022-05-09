import React, { Component } from "react";
import "./itemContact.scss";

/**
 * 
 */
class ItemContact extends Component {
  constructor(props) {
    super(props);

    this.editRef = React.createRef();
  }
  /**
   * 
   * @returns 
   */
  render() {
    const {
      contactDeleteHandler,
      contactEditHandler,
      contacts,
      searchedContact,
      searchInput,
      inlineEditHandler,
      contactInfoHandler,
    } = this.props;
    const finalList = searchInput ? searchedContact : contacts;
    const noResult = (
      <tr className="noResult">
        <td colSpan={5}>یافت نشد</td>
      </tr>
    );
    return (
      <>
        {finalList.length === 0
          ? noResult
          : finalList.map((i, index) => {
              return (
                <tr className="contactItem" id={i.id} key={i.id}>
                  <td>{String(index + 1).padStart(2, "0")}).</td>
                  <td id="editName" onClick={(e) => inlineEditHandler(e, i.name)}>{i.name}</td>
                  <td id="editFamily" onClick={(e) => inlineEditHandler(e, i.family)}>{i.family}</td>
                  {/* <td>{String(i.numbers).replace((String(i.numbers).substring(5,8)),"***")}</td> */}
                  <td>
                    {String(i.numbers[0]).substring(7, 11) +
                      "***" +
                      String(i.numbers[0]).substring(0, 4)}
                      {/* <span className="quickAddNumber">+</span> */}
                  </td>
                  <td className="itemBTNS">
                    <button
                      className="deleteBTN"
                      onClick={() => contactDeleteHandler(i.id)}
                    >
                      X
                    </button>
                    <button
                      className="editBTN"
                      onClick={() => contactEditHandler(i)}
                    >
                      Edit
                    </button>
                    <button
                      className="infoBTN"
                      onClick={() => contactInfoHandler(i)}
                    >
                      i
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
