import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';
import AccessTime from '@material-ui/icons/AccessTime';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    borderRadius: 10,
    boxShadow: '-4px -4px 10px orange',
    backgroundColor: colors.orange['800'],
    color: colors.common.white
  },
  avatar: {
    backgroundColor: colors.orange['A200'],
    height: 80,
    width: 80
  },
  differenceIcon: {
    color: colors.common.white
  },
  differenceValue: {
    color: colors.common.white,
    marginRight: theme.spacing(1)
  }
}));

const CallTimeDay = ({ className, ...rest }) => {
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
              style={{ paddingTop: 10, color: colors.common.white }}
            >
              24小时紧急呼叫(次)
            </Typography>
            <Typography
              color="textPrimary"
              variant="h1"
              style={{ paddingTop: 10, color: colors.common.white }}
            >
              123456
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <AccessTime />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

CallTimeDay.propTypes = {
  className: PropTypes.string
};

export default CallTimeDay;
