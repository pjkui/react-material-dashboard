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
// import LaptopMacIcon from '@material-ui/icons/LaptopMac';
// import PhoneIcon from '@material-ui/icons/Phone';
// import TabletIcon from '@material-ui/icons/Tablet';
import CropSquare from '@material-ui/icons/CropSquare';
import FaultLevelPieChart from './FaultLevePieChart';
// import { Widgets } from '@material-ui/icons';
// import PieChart from './PieChart';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    backgroundColor: theme.palette.background.dark2
  }
}));

const FaultLevel = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  const devices = [
    {
      title: '紧急',
      value: 24568,
      icon: CropSquare,
      color: colors.common.white
    },
    {
      title: '重要',
      value: 12345,
      icon: CropSquare,
      color: colors.common.white
    },
    {
      title: '次要',
      value: 9875,
      icon: CropSquare,
      color: colors.common.white
    },
    {
      title: '提示',
      value: 4253,
      icon: CropSquare,
      color: colors.common.white
    }
  ];
  const options = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      show: false,
      orient: 'vertical',
      left: 10,
      data: [
        { value: 24568, name: '紧急' },
        { value: 12345, name: '重要' },
        { value: 9875, name: '次要' },
        { value: 4253, name: '提示' }
      ],
      // 使用回调函数
      // eslint-disable-next-line func-names
      formatter: (name) => {
        // debugger;
        console.log(options, this);
        const datas = options.legend.data;
        for (let index = 0; index < datas.length; index++) {
          const element = datas[index];
          if (element && element.name === name) {
            const newName = `${name} ${element.value}`;
            return newName;
          }
        }
        return name;
      }
    },
    title: {
      text: '12345',
      subtext: '总数',
      left: 'center',
      top: 'middle',
      textStyle: {
        color: theme.palette.text.chartTitle,
        fontSize: 30
      }
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['80%', '98%'],
        avoidLabelOverlap: false,
        hoverOffset: 1,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: false,
            fontSize: '30',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          {
            value: 24568,
            name: '紧急',
            itemStyle: {
              // 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
              color: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.5,
                colorStops: [
                  {
                    offset: 0,
                    color: 'red' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'blue' // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              },
              shadowColor: 'rgba(255, 255, 255, 0.5)',
              shadowBlur: 1
              // borderColor: '#FFFFFF88',
              // borderWidth: 1
            }
          },
          { value: 12345, name: '重要' },
          { value: 9875, name: '次要' },
          { value: 4253, name: '提示' }
        ]
      }
    ]
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="故障级别分布(个)" />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item lg={6} sm={12} md={6}>
            <Box height={200} position="relative">
              {/* <Doughnut data={data} options={options} /> */}
              <FaultLevelPieChart height={200} width={200} options={options} />
            </Box>
            {/* <Box height={200} position="relative"> */}
            {/* <PieChart /> */}
            {/* </Box> */}
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
