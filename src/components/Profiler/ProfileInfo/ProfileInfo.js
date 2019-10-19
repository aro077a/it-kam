import React from "react";
import img1 from "../../../assets/1.png";

import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src={img1} alt="" className={classes.content_image} />
      </div>
      <div className={classes.descriptionBlock}>
        <p>Description</p>
      </div>
    </div>
  );
};
export default ProfileInfo;
