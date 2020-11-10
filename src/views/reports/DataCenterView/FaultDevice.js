import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
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
import EchartRender from './EchartRender';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    backgroundColor: theme.palette.background.dark2
  }
}));

const FaultDevice = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  const devices = [
    {
      title: '摄像头',
      value: 24568,
      color: colors.cyan['A400'],
      textColor: colors.common.white
    },
    {
      title: '户外屏',
      value: 12345,
      color: colors.purple['A200'],
      textColor: colors.common.white
    },
    {
      title: '单灯控制器',
      value: 9875,
      color: colors.orange['700'],
      textColor: colors.common.white
    },
    {
      title: '其他',
      value: 4253,
      color: colors.common.white,
      textColor: colors.common.white
    }
  ];
  const options = {
    tooltip: {
      trigger: 'item',
      formatter: '{a}<br />{b}:{c}({d}%)'
    },
    legend: {
      show: false,
      orient: 'vertical',
      left: 10,
      data: [
        { value: 24568, name: '摄像头' },
        { value: 12345, name: '户外屏' },
        { value: 9875, name: '单灯控制器' },
        { value: 4253, name: '其他' }
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
        name: '故障设备分布',
        type: 'pie',
        radius: ['80%', '98%'],
        avoidLabelOverlap: true,
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
            name: '摄像头',
            itemStyle: {
              color: colors.cyan['A400'],
              shadowColor: 'rgba(255, 255, 255, 0.5)',
              shadowBlur: 1
            }
          },
          {
            value: 12345,
            name: '户外屏',
            itemStyle: {
              color: colors.purple['A200'],
              shadowColor: 'rgba(255, 255, 255, 0.5)',
              shadowBlur: 1
            }
          },
          {
            value: 9875,
            name: '单灯控制器',
            itemStyle: {
              color: colors.orange['700'],
              shadowColor: 'rgba(255, 255, 255, 0.5)',
              shadowBlur: 1
            }
          },
          {
            value: 4253,
            name: '其他',
            itemStyle: {
              color: colors.common.white,
              shadowColor: 'rgba(255, 255, 255, 0.5)',
              shadowBlur: 1
            }
          }
        ]
      }
    ]
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="故障设备分布(个)" />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item sm={6} md={6} lg={6}>
            <Box height={200} position="relative">
              <EchartRender height={100} width={100} options={options} />
            </Box>
          </Grid>
          <Grid item sm={6} md={6} lg={6}>
            {devices.map(({ color, title, value, textColor }) => (
              <Box key={title} p={1} textAlign="center">
                <Grid container spacing={1}>
                  <Grid item sm={6} md={6} lg={6}>
                    <Typography color="textPrimary" variant="h6">
                      <span
                        style={{
                          width: '8px',
                          height: '8px',
                          display: 'inline-block',
                          marginRight: '6px',
                          backgroundColor: color
                        }}
                      >
                        {' '}
                      </span>
                      {title}
                    </Typography>
                  </Grid>
                  <Grid item sm={6} md={6} lg={6}>
                    <Typography style={{ color: textColor }} variant="h6">
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

FaultDevice.propTypes = {
  className: PropTypes.string
};

export default FaultDevice;
