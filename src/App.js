import React, { Component } from "react";
import NavBar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { compose } from "redux";
import { initializeApp } from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import { WithSuspense } from "./HOC/withSuspense";

// import ProfileContainer from "./components/Profiler/ProfileContainer";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profiler/ProfileContainer")
);

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <NavBar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={WithSuspense(DialogsContainer)} />
          <Route
            path="/profile/:userId?"
            render={WithSuspense(ProfileContainer)}
          />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  initialized: state.app.initialized
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
