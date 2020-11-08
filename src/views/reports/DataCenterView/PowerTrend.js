import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  useTheme,
  makeStyles,
  colors,
  ButtonGroup
} from '@material-ui/core';
import FaultLevelPieChart from './FaultLevePieChart';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark
  }
}));

const PowerTrend = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const options = {
    xAxis: {
      type: 'category',
      axisLine: {
        lineStyle: {
          color: colors.common.white
        }
      },
      textStyle: {
        color: colors.common.white
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: colors.common.white
        }
      },
      boundaryGap: ['20%', '50%'],
      data: [
        {
          value: '00:00',
          textStyle: {
            color: colors.common.white
          }
        },
        {
          value: '00:00',
          textStyle: {
            color: colors.common.white
          }
        },
        {
          value: '02:00',
          textStyle: {
            color: colors.common.white
          }
        },
        {
          value: '04:00',
          textStyle: {
            color: colors.common.white
          }
        },
        {
          value: '06:00',
          textStyle: {
            color: colors.common.white
          }
        },
        {
          value: '08:00',
          textStyle: {
            color: colors.common.white
          }
        },
        {
          value: '10:00',
          textStyle: {
            color: colors.common.white
          }
        },
        {
          value: '12:00',
          textStyle: {
            color: colors.common.white
          }
        },
        {
          value: '14:00',
          textStyle: {
            color: colors.common.white
          }
        },
        {
          value: '16:00',
          textStyle: {
            color: colors.common.white
          }
        },
        {
          value: '18:00',
          textStyle: {
            color: colors.common.white
          }
        },
        {
          value: '20:00',
          textStyle: {
            color: colors.common.white
          }
        },
        {
          value: '22:00',
          textStyle: {
            color: colors.common.white
          }
        }
      ]
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: colors.common.white
        }
      },
      axisLabel: {
        color: colors.common.white
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: colors.common.white
        }
      }
    },
    tooltip: {
      show: true,
      trigger: 'item',
      position: 'top',
      formatter: '{c0} <b>{b0}</b>',
      backgroundColor: '#ff0',
      borderColor: '#333',
      borderWidth: 2,
      textStyle: {
        color: '#f0f'
      }
    },
    series: [
      {
        data: [
          0,
          10.2,
          20.1,
          13.4,
          10.9,
          30.3,
          6.2,
          9.0,
          11.2,
          36.8,
          11.7,
          5.6
        ],
        type: 'line',
        lineStyle: {
          width: 6,
          shadowColor: '#f00',
          shadowOffsetX: 1,
          shadowOffsetY: 2,
          shadowBlur: 4,
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
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
          }
        },

        smooth: true
      }
    ]
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader
        action={
          <ButtonGroup
            color="secondary"
            aria-label="outlined secondary button group"
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        }
        title="用电趋势"
      />
      <CardContent>
        <Box height={300} position="relative">
          <FaultLevelPieChart width={100} height={100} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};

PowerTrend.propTypes = {
  className: PropTypes.string
};

export default PowerTrend;
