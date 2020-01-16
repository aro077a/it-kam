import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";

const User = ({ user, followingInProgress, follow, unFollow }) => {
  return (
    <div>
      <span>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={user.photos.small != null ? user.photos.small : userPhoto}
              alt=""
              className={styles.userPhoto}
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some(id => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              UnFollow
            </button>
          ) : (
            <button
              onClick={() => {
                unFollow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{user.id}</div>
          <div>{"u.location.city"}</div>
        </span>
      </span>
    </div>
  );
};

export default User;
