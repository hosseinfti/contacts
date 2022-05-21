import React, { Component } from "react";
import { ContactContext } from "../ContactContext";
import "./user.scss";
import userPhoto from "../../assets/image/user.svg";
import withRouter from "../hoc/withRouter";
import queryString from "query-string";


class User extends Component {
    constructor(props) {
        super(props);

        const { id } = queryString.parse(this.props.location.search, {
            ignoreQueryPrefix: true,
    });
    
    this.state = {
      id
    };

  }

  replaceUrl = () => {
    let queryStrings = "";
        queryStrings = {
          id: this.state.id ? this.state.id : undefined,
        };
    const queryStringsStringify = queryString.stringify(queryStrings);
    this.props.navigate(`?${queryStringsStringify}`);
  };

  componentDidMount() {
        this.replaceUrl()
  }

  componentDidUpdate(prevState) {

    if( prevState.id !== this.state.id ) {
        this.replaceUrl()
    }

  }

  render() {
    return (
      <ContactContext.Consumer>
        {({ editId, editNumbers, editFamily, editName, contacts }) => {
          return (
            <div className="userInfo">
              <div className="userInfo-sec1">
                <div className="userInfo-sec1-name infoSections">
                  <img src={userPhoto} alt={"userPhoto"} />
                  <div>
                    {editName} {editFamily}
                  </div>
                  <div>شغل</div>
                  <div>لوکیشن</div>
                </div>

                <div className="userInfo-sec1-call infoSections">
                  <a href={`tel:${editNumbers}`}>{editNumbers}</a>
                  <div>واتساپ</div>
                  <div>ایمیل</div>
                  <div>تلگرام</div>
                </div>
              </div>

              <div className="userInfo-sec2 infoSections">
                <div>شبکه های اجتماعی</div>

                <div>
                  <div>اینستا</div>
                  <div>لینکدین</div>
                </div>
              </div>
              <div className="userInfo-sec3 infoSections">سایر توضیحات</div>
            </div>
          );
        }}
      </ContactContext.Consumer>
    );
  }
}

export default withRouter(User);
