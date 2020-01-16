import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = props => {
  return (
    <header className={classes.header}>
      <img
        src="https://images.ctfassets.net/xny2w179f4ki/7uDL7EG8t1Yi5D5hv7eBMR/009d1bc629930a0f014cd4e1ebf87ff3/All-in-one-icon.png"
        alt=""
      />
      <div className={classes.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout}>Logout</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
