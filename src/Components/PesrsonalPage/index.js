import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { PersonalPageStyle } from "./PersonalPage.style";
import ProfileCover from "./ProfileCover";
import DataUser from "./mock.json";
import Introduction from "./Introduction";
import Timeline from "./Timeline";

const HomePage = () => {
  const classes = PersonalPageStyle();

  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} className={classes.profileCover}>
            <ProfileCover {...DataUser} />
          </Grid>
          <Grid item md={5} xs={12}>
            <Paper className={classes.paper}>
              <h5>Introduction</h5>
              <Introduction />
            </Paper>
          </Grid>
          <Grid item md={7} xs={12}>
            <Paper className={classes.paper}>
              <h5>Timeline</h5>
              <Timeline />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default HomePage;
