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
    color: colors.common.white,
  },
  cardContainer: {
    paddingRight: -6,
  },
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
      <CardContent className={clsx(classes.cardContainer, className)}>
        <Grid container justify="space-between" spacing={3}>
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h5"
              style={{ padding: '10px', color: colors.common.white }}
            >
              24小时接入人数
            </Typography>
            <Typography
              color="textPrimary"
              variant="h1"
              style={{ padding: '10px' }}
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
