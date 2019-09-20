import { makeStyles } from "@material-ui/core/styles";

export const AvatarStyles = makeStyles(theme => ({
  bigAvatar: {
    margin: 10,
    width: 150,
    height: 150,
    [theme.breakpoints.down("sm")]: {
      width: 100,
      height: 100
    }
  },
  fullName: {
    [theme.breakpoints.up("sm")]: {
      fontSize: 24
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 16
    }
  },
  nickName: {
    [theme.breakpoints.up("sm")]: {
      fontSize: 20
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 12
    }
  }
}));
