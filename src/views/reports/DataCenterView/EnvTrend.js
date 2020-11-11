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
    backgroundColor: theme.palette.background.cardSection
  }
}));

const EnvTrend = ({ className, ...rest }) => {
  const classes = useStyles();

  // const theme = useTheme();
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
  // var data1 = [];
  const data2 = [
    -15,
    -10,
    -8,
    -7,
    -5,
    -3,
    3,
    5,
    4,
    7,
    8,
    12,
    20,
    27,
    20,
    11,
    10,
    8,
    7,
    5,
    4,
    3,
    -1
  ];
  // for (let i = 0; i < 100; i++) {
  // xAxisData.push(`类目${i}`);
  // data1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
  //   data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
  // }

  const optionsRaw = {
    // title: {
    //   text: '环境变化趋势(24小时)'
    // },
    // legend: {
    //   data: ['bar']
    // },
    // toolbox: {
    //   // y: 'bottom',
    //   feature: {
    //     magicType: {
    //       type: ['stack', 'tiled']
    //     },
    //     dataView: {},
    //     saveAsImage: {
    //       pixelRatio: 2
    //     }
    //   }
    // },
    tooltip: {},
    xAxis: {
      data: xAxisData,
      splitLine: {
        show: false
      }
    },
    yAxis: {},
    series: [
      //     {
      //     name: 'bar',
      //     type: 'bar',
      //     data: data1,
      //     animationDelay: function (idx) {
      //         return idx * 10;
      //     }
      // },
      {
        name: 'bar2',
        type: 'bar',
        data: data2,
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

  // options = options_raw;
  // setOptions(options_raw);
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
            <Button onClick={showDayData} data={12}>
              日
            </Button>
            <Button onClick={showMonthData}>月</Button>
            <Button onClick={showYearData}>年</Button>
          </ButtonGroup>
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
};

EnvTrend.propTypes = {
  className: PropTypes.string
};

export default EnvTrend;
