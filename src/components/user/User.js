import React, { Component } from "react";
import { ContactContext } from "../ContactContext";
import "./user.scss";
import withRouter from "../hoc/withRouter";
import UserRouter from "./userRouter/UserRouter";

class User extends Component {
  render() {
    return (
      <ContactContext.Consumer>
        {({
          // editId,
          // editNumbers,
          // editFamily,
          // editName,
          contacts,
          // contactEditHandler,
        }) => {
          return (
            <>
              <UserRouter
                contacts={contacts}
                // editId={editId}
                // editName={editName}
                // editFamily={editFamily}
                // editNumbers={editNumbers}
                // contactEditHandler={contactEditHandler}
              />
            </>
          );
        }}
      </ContactContext.Consumer>
    );
  }
}

export default withRouter(User);
