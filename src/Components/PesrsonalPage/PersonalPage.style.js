import { makeStyles } from "@material-ui/core/styles";

export const PersonalPageStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  profileCover: {
    paddingBottom: "30px !important"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    background: "#dcdcdc",
    height: 500
  }
}));
