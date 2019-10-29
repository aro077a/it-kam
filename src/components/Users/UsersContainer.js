import React from "react";
import { connect } from "react-redux";
import Users from "../Users/Users";
import { followAC, unFollowAC, setUsersAC } from "../../redux/userReducer";

const mapStateToProps = state => {
  return {
    users: state.usersPage.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    follow: userid => {
      dispatch(followAC(userid));
    },

    unfollow: userid => {
      dispatch(unFollowAC(userid));
    },

    setUsers: users => {
      dispatch(setUsersAC(users));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
