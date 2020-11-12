import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Grid,
  colors,
  makeStyles,
  Box
} from '@material-ui/core';
import CallTimesDay from './CallTimesDay';
import CallTimesMonth from './CallTimesMonth';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    backgroundColor: theme.palette.background.cardSection,
    color: colors.common.white
  },
  differenceIcon: {
    color: colors.red[900]
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1)
  }
}));
const CallTimes = ({ className, ...rest }) => {
  const classes = useStyles();
  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Box height={300} position="relative">
          <Grid container spacing={3}>
            <Grid item sm={12} md={12} lg={12}>
              <Box height={180} position="relative" marginBottom={2}>
                <CallTimesDay />
              </Box>
            </Grid>
            <Grid item sm={12} md={12} lg={12}>
              <Box height={180} position="relative">
                <CallTimesMonth />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};
CallTimes.propTypes = {
  className: PropTypes.string
};

export default CallTimes;