import React, { useState } from 'react';
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
import EchartRender from './EchartRender';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark
  }
}));

const PeopleStream = ({ className, ...rest }) => {
  const classes = useStyles();

  const theme = useTheme();
  const optionsRaw = {
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
      data: [
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
          shadowColor: '#000',
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

  const [options, setOptions] = useState(optionsRaw);

  function showYearData(e) {
    console.log(e);
    const xData = [
      {
        value: '2016',
        textStyle: {
          color: colors.common.white
        }
      },
      {
        value: '2017',
        textStyle: {
          color: colors.common.white
        }
      },
      {
        value: '2018',
        textStyle: {
          color: colors.common.white
        }
      },
      {
        value: '2019',
        textStyle: {
          color: colors.common.white
        }
      },
      {
        value: '2020',
        textStyle: {
          color: colors.common.white
        }
      }
    ];
    const yearData = [3.2, 13.4, 10.9, 61.2, 11.7];
    const odata = { ...optionsRaw };
    odata.xAxis.data = xData;
    odata.series[0].data = yearData;
    setOptions(odata);
  }

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Box height={300} position="relative">
          <EchartRender width={100} height={100} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};

PeopleStream.propTypes = {
  className: PropTypes.string
};

export default PeopleStream;
