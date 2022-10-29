import React, { Component } from "react";
import "./itemContact.scss";
import { Link } from "react-router-dom";
import ItemInfo from "./itemInfo/ItemInfo";


class ItemContact extends Component {
  constructor(props) {
    super(props);
    
    
    this.editRef = React.createRef();
  }

  render() {
    const { contactEditHandler, searchedContact } = this.props;
    return (
      <>
        {searchedContact.map((i, index) => {
          return (
            <Link
              key={index}
              onClick={() => contactEditHandler(i)}
              to={`/contacts/user/${i.id}`}
            >
              <ItemInfo i={i} index={index} />
            </Link>
          );
        })}
      </>
    );
  }
}

export default ItemContact;
