import React from "react";
import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile" activeClassName={classes.activeLink}>
          <p>Profiler</p>
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs" activeClassName={classes.activeLink}>
          <p>Messages</p>
        </NavLink>
      </div>
      <div className={classes.item}>
        <p>News</p>
      </div>
      <div className={classes.item}>
        <p>Music</p>
      </div>
      <div className={classes.item}>
        <p>Settings</p>
      </div>
    </nav>
  );
};

export default NavBar;
