import React, { Component } from "react";
import { Link } from "react-router-dom";
import userPhoto from "../../../assets/image/user.svg";
// import queryString from "query-string";
import withRouter from "../../hoc/withRouter";

class UserRouter extends Component {
  constructor(props) {
    super(props);

    const userRouter = this.props.contacts.filter((item) => {
      return item.id === this.props.params.id;
    });

    this.state = {
      userRouter: userRouter,
    };
  }
  HandleChangeUrl = () => {
    const userRouter = this.props.contacts.filter((item) => {
      return item.id === this.props.params.id;
    });

    this.setState({
      userRouter: userRouter,
    });
  };

  componentDidMount() {
    console.log("didmount");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log("update", prevProps, this.props);
    if (
      prevProps.params.id !== this.props.params.id ||
      !this.state.userRouter
    ) {
      this.HandleChangeUrl();
    }
  }

  render() {
    return (
      <div className="userInfo">
        <Link to={"/contacts/user/09377978021"}>دکتر علی شریعتی</Link>
        <div className="userInfo-sec1">
          <div className="userInfo-sec1-name infoSections">
            <img src={userPhoto} alt={"userPhoto"} />
            <div>
              {this.state.userRouter[0].name} {this.state.userRouter[0].family}
            </div>
            <div>شغل</div>
            <div>لوکیشن</div>
          </div>

          <div className="userInfo-sec1-call infoSections">
            <a href={`tel:${this.state.userRouter[0].numbers[0]}`}>
              {this.state.userRouter[0].numbers[0]}
            </a>
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
  }
}

export default withRouter(UserRouter);
