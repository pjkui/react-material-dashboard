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
// import { color } from 'echarts/lib/export';
import CalendarToday from '@material-ui/icons/CalendarToday';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    backgroundColor: colors.purple['700']
  },
  avatar: {
    backgroundColor: colors.purple['A100'],
    height: 80,
    width: 80
  },
  differenceIcon: {
    color: colors.red[900]
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1)
  }
}));

const CallTimesMonth = ({ className, ...rest }) => {
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
              30天紧急呼叫(次)
            </Typography>
            <Typography
              color="textPrimary"
              variant="h1"
              style={{ paddingTop: 10 }}
            >
              123456
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <CalendarToday />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

CallTimesMonth.propTypes = {
  className: PropTypes.string
};

export default CallTimesMonth;
