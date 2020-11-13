import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  makeStyles,
  colors,
  NativeSelect,
  InputBase
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import EchartRender from './EchartRender';
// import theme from 'src/theme';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.cardSection,
    color: colors.common.white
  }
}));

const EnvTrend = ({ className, ...rest }) => {
  const classes = useStyles();

  const BootstrapInput = withStyles((theme) => ({
    root: {
      marginTop: '0 !important',
      'label + &': {
        marginTop: theme.spacing(3)
      }
    },
    select: {
      marginTop: '0 !important',
    },
    input: {
      color: colors.orange['900'],
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.selectColor,
      opacity: 0.2,
      border: '1px solid #e6511055',
      fontSize: 20,
      padding: '10px 26px 10px 12px',
      marginTop: '0',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#e65110',
        boxShadow: '0 0 0 0.2rem #e6511055'
      }
    }
  }))(InputBase);

  const xAxisData = [
    '00:00',
    '02:00',
    '04:00',
    '06:00',
    '08:00',
    '10:00',
    '12:00',
    '14:00',
    '16:00',
    '18:00',
    '20:00',
    '22:00'
  ];
  const yData = [
    -10,
    -7,
    -3,
    5,
    7,
    12,
    27,
    11,
    8,
    5,
    3,
    -2
  ];

  const optionsRaw = {
    tooltip: {},
    xAxis: {
      data: xAxisData,
      axisLine: {
        lineStyle: {
          color: colors.blue['A100']
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: colors.blue['A100']
        }
      }
    },
    yAxis: {
      axisLine: {
        lineStyle: {
          color: colors.blue['A100']
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: colors.blue['A100']
        }
      }
    },
    series: [
      {
        name: 'bar',
        type: 'bar',
        data: yData,
        barMaxWidth: '30%',
        itemStyle: {
          barBorderRadius: [5, 5, 0, 0], //（顺时针左上，右上，右下，左下）
        },
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: colors.orange['300'] // 50% 处的颜色
            },
            {
              offset: 1,
              color: colors.orange['900']// 100% 处的颜色
            }
          ],
          global: false // 缺省为 false
        },
        animationDelay(idx) {
          return idx * 10 + 100;
        }
      }
    ],
    animationEasing: 'elasticOut',
    animationDelayUpdate(idx) {
      return idx * 5;
    }
  };

  const [options, setOptions] = useState(optionsRaw);
  const [optionsValue, setOptionsValue] = useState(10);

  const handleChage = (evt) => {
    if (evt == null || evt.target == null) {
      return;
    }
    const newOptionsValue = parseInt(evt.target.value, 10);
    setOptionsValue(newOptionsValue);
    const newOptionsRaw = { ...optionsRaw };
    const datas = newOptionsRaw.series[0].data;
    for (let index = 0; index < datas.length; index++) {
      datas[index] = (Math.random() - 0.5) * 200;
      setOptions(newOptionsRaw);
    }
  }

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader
        action={
          <NativeSelect
            id="demo-customized-select-native"
            input={<BootstrapInput />}
            onChange={handleChage}
            value={optionsValue}
          >
            <option value={10} >温度</option>
            <option value={20}>降水量</option>
            <option value={30}>季节</option>
          </NativeSelect>
        }
        title="环境变化趋势(24小时)"
      />
      <CardContent>
        <Box height={300} position="relative">
          <EchartRender width={100} height={100} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
}

EnvTrend.propTypes = {
  className: PropTypes.string
};

export default EnvTrend;
