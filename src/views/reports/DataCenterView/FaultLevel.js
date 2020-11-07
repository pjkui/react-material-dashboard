import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  colors,
  makeStyles,
  useTheme,
  Grid
} from '@material-ui/core';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import PhoneIcon from '@material-ui/icons/Phone';
import TabletIcon from '@material-ui/icons/Tablet';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    backgroundColor: theme.palette.background.dark2
  }
}));

const FaultLevel = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [24568, 12345, 9875, 4253],
        backgroundColor: [
          colors.orange[900],
          colors.yellow[500],
          colors.green[500],
          colors.blue[600]
        ],
        borderWidth: 0,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white
      }
    ],
    labels: ['紧急', '重要', '次要', '提示']
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.default,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  const devices = [
    {
      title: '紧急',
      value: 24568,
      icon: LaptopMacIcon,
      color: colors.common.white
    },
    {
      title: '重要',
      value: 12345,
      icon: TabletIcon,
      color: colors.common.white
    },
    {
      title: '次要',
      value: 9875,
      icon: PhoneIcon,
      color: colors.common.white
    },
    {
      title: '次要',
      value: 4253,
      icon: PhoneIcon,
      color: colors.common.white
    }
  ];

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="故障级别分布(个)" />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item lg={6} sm={12} md={6}>
            <Box height={200} position="relative">
              <Doughnut data={data} options={options} />
            </Box>
          </Grid>
          <Grid item lg={6} sm={6} md={6}>
            {devices.map(({ color, icon: Icon, title, value }) => (
              <Box key={title} p={1} textAlign="center">
                <Grid container spacing={1}>
                  <Grid item lg={4} sm={4} md={4}>
                    <Icon color="action" />
                  </Grid>
                  <Grid item lg={4} sm={4} md={4}>
                    <Typography color="textPrimary" variant="h6">
                      {title}
                    </Typography>
                  </Grid>
                  <Grid item lg={4} sm={4} md={4}>
                    <Typography style={{ color }} variant="h6">
                      {value}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

FaultLevel.propTypes = {
  className: PropTypes.string
};

export default FaultLevel;