import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Grid,
  colors,
  makeStyles,
  CardHeader
} from '@material-ui/core';
import FaultLevel from './FaultLevel';
import FaultDevice from './FaultDevice';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    backgroundColor: theme.palette.background.cardSection,
    color: colors.common.white,
    paddingLeft: 0,
  },
  differenceIcon: {
    color: colors.red[900]
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1)
  }
}));
const FaultContainer = ({ className, ...rest }) => {
  const classes = useStyles();
  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="告警状态" />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item sm={12} md={6} lg={6}>
            <FaultLevel />
          </Grid>
          <Grid item sm={12} md={6} lg={6}>
            <FaultDevice />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
FaultContainer.propTypes = {
  className: PropTypes.string
};

export default FaultContainer;