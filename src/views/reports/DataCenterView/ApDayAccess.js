import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    backgroundColor: theme.palette.background.cardColor,
    color: colors.common.white
  },
  // avatar: {
  //   backgroundColor: colors.orange['A200'],
  //   height: 80,
  //   width: 80
  // },
  differenceIcon: {
    color: colors.common.white
  },
  differenceValue: {
    color: colors.common.white,
    marginRight: theme.spacing(1)
  }
}));

const ApDayAccess = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Grid container justify="space-between" spacing={3}>
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h5"
              style={{ paddingTop: 10 }}
            >
              24小时接入人数
            </Typography>
            <Typography
              color="textPrimary"
              variant="h1"
              style={{ paddingTop: 10 }}
            >
              1234567
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

ApDayAccess.propTypes = {
  className: PropTypes.string
};

export default ApDayAccess;
