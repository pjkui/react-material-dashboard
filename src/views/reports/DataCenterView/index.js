import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import ApStatistics from './ApStatistics';
import EnvTrend from './EnvTrend';
import CallTimes from './CallTimes';
import VideoRcg from './VideoRcg';
import PowerTrend from './PowerTrend';
import FaultStatistics from './FaultStatistics';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
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
            <VideoRcg />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12} sm={12}>
            <CallTimes />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <EnvTrend />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <ApStatistics />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default DataCenter;
