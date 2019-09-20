import React from "react";
import { ProfileCoverStyle } from "./ProfileCover.style";
import CoverPhoto from "./CoverPhoto";
import Avatar from "./Avatar";

const ProfileCover = ({
  AvatarCover = [],
  AvatarImage = "",
  FirstName = "",
  MiddleName = "",
  LastName = "",
  NickName = ""
}) => {
  const classes = ProfileCoverStyle();

  return (
    <div className={classes.root}>
      <CoverPhoto items={AvatarCover} />
      <div className={classes.avatar}>
        <Avatar
          AvatarImage={AvatarImage}
          FirstName={FirstName}
          MiddleName={MiddleName}
          LastName={LastName}
          NickName={NickName}
        />
      </div>
    </div>
  );
};

export default ProfileCover;
