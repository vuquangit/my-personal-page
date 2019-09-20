import React from "react";
import { Avatar, Grid, Typography } from "@material-ui/core";
import { AvatarStyles } from "./Avatar.style";

const UserAvatar = ({
  AvatarImage = "",
  FirstName = "",
  MiddleName = "",
  LastName = "",
  NickName = ""
}) => {
  const classes = AvatarStyles();
  const FullName = LastName.concat(" ", FirstName, " ", MiddleName);

  return (
    <Grid container justify="flex-start" alignItems="center">
      <Avatar alt={FullName} src={AvatarImage} className={classes.bigAvatar} />
      <div>
        <Typography
          align="left"
          variant="h5"
          component="h2"
          // className={classes.fullName}
        >
          {FullName}
        </Typography>
        <Typography
          align="left"
          variant="h6"
          component="h3"
          // className={classes.nickName}
        >
          {NickName ? `(${NickName})` : ""}
        </Typography>
      </div>
    </Grid>
  );
};

export default UserAvatar;
