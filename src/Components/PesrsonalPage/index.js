import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {PersonalPageStyle} from './PersonalPage.style';
import ProfileCover from './ProfileCover';

const HomePage = () => {
  const classes = PersonalPageStyle();

  return (
    <Container maxWidth="md" minWidth="xs">
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ProfileCover />
          </Grid>
          <Grid item md={6} xs={12}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item md={6} xs={12}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default HomePage;
