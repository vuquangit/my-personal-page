import { makeStyles } from "@material-ui/core/styles";

export const ProfileCoverStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%"
  },
  sliderItem: {
    height: "100%",
    width: "100%"
  },
  avatar: {
    position: "absolute",
    top: 250,
    color: "#fff",
    paddingLeft: 16,
    [theme.breakpoints.down("sm")]: {
      top: 275,
      paddingLeft: 10
    }
  }
}));
