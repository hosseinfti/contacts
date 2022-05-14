import React, { Component } from "react";
import "./itemContact.scss";
import noProfile from "../../assets/image/user.svg";

class ItemContact extends Component {
  constructor(props) {
    super(props);

    this.editRef = React.createRef();
  }

  render() {
    const {
      contactDeleteHandler,
      contactEditHandler,
      searchedContact,
      inlineEditHandler,
      contactInfoHandler,
    } = this.props;

    return (
      <>
        {searchedContact.map((i, index) => {
          return (
            <div key={i.id} className="contactItem">
              <div>{String(index + 1).padStart(2, "0")}).</div>
              <div className="profilePicture">
                <img src={noProfile} alt="profilePicture"/>
              </div>
              <div className="nameFamily">
                <div
                  id="editName"
                  onClick={(e) => inlineEditHandler(e, i.name)}
                >
                  {i.name}
                </div>
                <div
                  id="editFamily"
                  onClick={(e) => inlineEditHandler(e, i.family)}
                >
                  {i.family}
                </div>
              </div>
              <div>
                {String(i.numbers[0]).substring(7, 11) +
                  "***" +
                  String(i.numbers[0]).substring(0, 4)}
              </div>
              <div className="itemBTNS">
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
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default ItemContact;
