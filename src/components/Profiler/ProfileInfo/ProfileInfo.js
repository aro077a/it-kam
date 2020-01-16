import React from "react";
// import img1 from "../../../assets/1.png";

import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      {/* <div>
        <img src={img1} alt="" className={classes.content_image} />
      </div> */}
      <div className={classes.descriptionBlock}>
        {/* <img src={profile.photo.large} alt="" /> */}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};
export default ProfileInfo;
