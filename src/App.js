import React from "react";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Profile from "./components/Profiler/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

const App = props => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => <Dialogs store={props.store} />}
          />
          <Route
            path="/profile"
            render={() => (
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />
            )}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
