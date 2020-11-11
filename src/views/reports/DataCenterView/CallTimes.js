import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Card, CardContent, Grid, colors, makeStyles } from '@material-ui/core';
import CallTimesDay from './CallTimesDay';
import CallTimesMonth from './CallTimesMonth';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    backgroundColor: theme.palette.background.cardSection,
    color: theme.palette.primary
  },
  // avatar: {
  //   backgroundColor: colors.red[600],
  //   height: 56,
  //   width: 56
  // },
  differenceIcon: {
    color: colors.red[900]
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1)
  }
}));

const FaultStatistics = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item sm={12} md={12} lg={12}>
            <CallTimesDay />
          </Grid>
          <Grid item sm={12} md={12} lg={12}>
            <CallTimesMonth />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

FaultStatistics.propTypes = {
  className: PropTypes.string
};

export default FaultStatistics;
