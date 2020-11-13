import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  // useTheme,
  makeStyles,
  colors,
  ButtonGroup
} from '@material-ui/core';
import EchartRender from './EchartRender';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.cardSection,
    color: colors.common.white
  },
  dayColor: {
    color: colors.orange['900'],
    backgroundColor: theme.palette.background.selectColor,
  },
  monthColor: {
    color: colors.cyan['A200'],
    backgroundColor: theme.palette.background.cardColor,
  }
}));

const PowerTrend = ({ className, ...rest }) => {
  const classes = useStyles();

  // const theme = useTheme();
  const optionsRaw = {
    grid: {
      left: 0,
      right: 10,
      top: 10,
      bottom: 0,
      containLabel: true
    },
    xAxis: {
      type: 'category',
      axisLine: {
        lineStyle: {
          color: colors.blue['A100']
        }
      },
      textStyle: {
        color: colors.blue['A100']
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: colors.blue['A100']
        }
      },
      data: [
        {
          value: '00:00',
          textStyle: {
            color: colors.blue['A100']
          }
        },
        {
          value: '02:00',
          textStyle: {
            color: colors.blue['A100']
          }
        },
        {
          value: '04:00',
          textStyle: {
            color: colors.blue['A100']
          }
        },
        {
          value: '06:00',
          textStyle: {
            color: colors.blue['A100']
          }
        },
        {
          value: '08:00',
          textStyle: {
            color: colors.blue['A100']
          }
        },
        {
          value: '10:00',
          textStyle: {
            color: colors.blue['A100']
          }
        },
        {
          value: '12:00',
          textStyle: {
            color: colors.blue['A100']
          }
        },
        {
          value: '14:00',
          textStyle: {
            color: colors.blue['A100']
          }
        },
        {
          value: '16:00',
          textStyle: {
            color: colors.blue['A100']
          }
        },
        {
          value: '18:00',
          textStyle: {
            color: colors.blue['A100']
          }
        },
        {
          value: '20:00',
          textStyle: {
            color: colors.blue['A100']
          }
        },
        {
          value: '22:00',
          textStyle: {
            color: colors.blue['A100']
          }
        }
      ]
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: colors.blue['A100']
        }
      },
      axisLabel: {
        color: colors.blue['A100']
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: colors.blue['A100']
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
          width: 8,
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
                color: colors.purple['500'] // 0% 处的颜色
              },
              {
                offset: 0.5,
                color: colors.blue['200'] // 100% 处的颜色
              },
              {
                offset: 1,
                color: colors.blue['A400'] // 0% 处的颜色
              },
            ],
            global: false // 缺省为 false
          }
        },
        symbolSize: 0,
        smooth: true
      }
    ]
  };

  const [options, setOptions] = useState(optionsRaw);

  function showDayData(e) {
    console.log(e);
    const xData = [
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
    ];
    const dailyData = [
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
    ];
    const odata = { ...optionsRaw };
    odata.xAxis.data = xData;
    odata.series[0].data = dailyData;
    setOptions(odata);
    console.log(options);
  }
  function showMonthData(e) {
    console.log(e);
    const xData = [
      {
        value: '一月',
        textStyle: {
          color: colors.common.white
        }
      },
      {
        value: '二月',
        textStyle: {
          color: colors.common.white
        }
      },
      {
        value: '三月',
        textStyle: {
          color: colors.common.white
        }
      },
      {
        value: '4月',
        textStyle: {
          color: colors.common.white
        }
      },
      {
        value: '5月',
        textStyle: {
          color: colors.common.white
        }
      },
      {
        value: '6月',
        textStyle: {
          color: colors.common.white
        }
      },
      {
        value: '7月',
        textStyle: {
          color: colors.common.white
        }
      },
      {
        value: '8月',
        textStyle: {
          color: colors.common.white
        }
      },
      {
        value: '9月',
        textStyle: {
          color: colors.common.white
        }
      },
      {
        value: '10月',
        textStyle: {
          color: colors.common.white
        }
      },
      {
        value: '11月',
        textStyle: {
          color: colors.common.white
        }
      },
      {
        value: '12月',
        textStyle: {
          color: colors.common.white
        }
      }
    ];
    const monthData = [
      1,
      3.2,
      5.1,
      13.4,
      10.9,
      67.3,
      61.2,
      91.0,
      111.2,
      316.8,
      11.7,
      555.6
    ];
    const odata = { ...optionsRaw };
    odata.xAxis.data = xData;
    odata.series[0].data = monthData;
    setOptions(odata);
  }
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
      <CardHeader
        action={
          <ButtonGroup
            color="secondary"
            aria-label="outlined secondary button group"
          >
            <Button onClick={showDayData} data={12} className={clsx(classes.dayColor, className)}>
              日
            </Button>
            <Button onClick={showMonthData} className={clsx(classes.monthColor, className)}>月</Button>
            <Button onClick={showYearData} className={clsx(classes.monthColor, className)}>年</Button>
          </ButtonGroup>
        }
        title="用电趋势"
      />
      <CardContent>
        <Box height={300} position="relative">
          <EchartRender width={100} height={100} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};

PowerTrend.propTypes = {
  className: PropTypes.string
};

export default PowerTrend;
