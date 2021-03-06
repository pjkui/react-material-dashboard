import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import ApStatistics from './ApStatistics';
import EnvTrend from './EnvTrend';
import CallContainer from './CallContainer';
import VideoRgcContainer from './VideoRgcContainer';
import PowerTrend from './PowerTrend';
import FaultStatistics from './FaultContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.cardSection,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const DataCenter = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="DateCenter">
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={6} sm={12} xl={6} xs={12}>
            <FaultStatistics />
          </Grid>
          <Grid item lg={6} sm={12} xl={6} xs={12}>
            <PowerTrend />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <VideoRgcContainer />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12} sm={12}>
            <CallContainer />
          </Grid>
          <Grid item lg={5} md={6} xl={5} xs={12}>
            <EnvTrend />
          </Grid>
          <Grid item lg={7} md={12} xl={7} xs={12}>
            <ApStatistics />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default DataCenter;
