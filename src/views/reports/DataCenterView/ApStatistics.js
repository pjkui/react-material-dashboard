import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Grid,
  colors,
  makeStyles,
  CardHeader,
  Box,
  InputBase,
  NativeSelect,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import EchartRender from './EchartRender';
import ApDayAccess from './ApDayAccess';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    backgroundColor: theme.palette.background.cardSection,
    color: colors.common.white,
    CardContent: {
      height: '100%'
    }
  },
  cardContent: {
    backgroundColor: theme.palette.background.cardColor,
  },
  differenceIcon: {
    color: colors.red[900]
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1)
  }
}));

const BootstrapInput = withStyles((theme) => ({
  root: {
    marginTop: '0 !important',
    'label + &': {
      marginTop: theme.spacing(3)
    }
  },
  // select: {
  //   marginTop: '0 !important',
  // },
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
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
    }
  }
}))(InputBase);

const ApStatistics = ({ className, ...rest }) => {
  const classes = useStyles();

  const flowOptionsRaw = {
    grid: {
      left: 0,
      right: 10,
      bottom: 0,
      containLabel: true
    },
    title: {
      text: '总流量吞吐率(最近五分钟)',
      // subtext: '纯属虚构',
      textStyle: {
        color: colors.common.white
      }
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: [
        {
          name: '发送',
          icon: 'circle'
        },
        {
          name: '接收',
          icon: 'circle'
        }
      ],
      textStyle: {
        color: colors.common.white
      },
      right: '10%',
      // icon:'circle'
    },
    toolbox: {
      show: false,
      feature: {
        dataView: { show: false, readOnly: false },
        magicType: { show: false, type: ['line', 'bar'] },
        restore: { show: false },
        saveAsImage: { show: false }
      }
    },
    calculable: false,
    xAxis: [
      {
        type: 'category',
        data: ['15:10', '15:11', '15:12', '15:13', '15:14'],
        axisLine: {
          lineStyle: {
            color: colors.blue['A100']
          }
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: colors.blue['A100']
          }
        }
      },
    ],
    yAxis: [
      {
        type: 'value',
        data: ['0', '50', '100', '150'],
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
      }
    ],
    series: [
      {
        name: '发送',
        type: 'bar',
        data: [100, 70, 55, 20.0, 6.4],
        barCategoryGapGap: '100%',
        barGap: '80%',
        barMaxWidth: '12%',
        itemStyle: {
          barBorderRadius: [5, 5, 0, 0], //（顺时针左上，右上，右下，左下）
        },
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: colors.blue['400'] // 50% 处的颜色
            },
            {
              offset: 1,
              color: colors.blue['A700']// 100% 处的颜色
            }
          ],
          global: false // 缺省为 false
        },
        animationDelay(idx) {
          return idx * 10 + 100;
        },
        // markPoint: {
        //   data: [
        //     { type: 'max', name: '最大值' },
        //     { type: 'min', name: '最小值' }
        //   ]
        // },
        // markLine: {
        //     data: [
        //         {type: 'average', name: '平均值'}
        //     ]
        // }
      },
      {
        name: '接收',
        type: 'bar',
        data: [130, 90, 60, 48.7, 18.8,],
        barCategoryGapGap: '100%',
        barGap: '80%',
        barMaxWidth: '12%',
        itemStyle: {
          barBorderRadius: [5, 5, 0, 0], //（顺时针左上，右上，右下，左下）
        },
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: colors.orange['A200'] // 50% 处的颜色
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
        },
        // markPoint: {
        //   data: [
        //     { name: '年最高', value: 182.2, xAxis: 7, yAxis: 183 },
        //     { name: '年最低', value: 2.3, xAxis: 11, yAxis: 3 }
        //   ]
        // },
        // markLine: {
        //     data: [
        //         {type: 'average', name: '平均值'}
        //     ]
        // }
      }
    ]
  };
  const [flowOptions, setFlowOptions] = useState(flowOptionsRaw);

  const onlineOptionsRaw = {
    grid: {
      left: 0,
      right: 10,
      bottom: 0,
      containLabel: true
    },
    title: {
      text: '上网时长',
      textStyle: {
        color: colors.common.white
      }
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
        show: false,
        lineStyle: {
          color: colors.blue['A100']
        }
      },
      data: [
        {
          value: '0~10min',
          textStyle: {
            color: colors.blue['A100']
          }
        },
        {
          value: '10~30min',
          textStyle: {
            color: colors.blue['A100']
          }
        },
        {
          value: '30min~2h',
          textStyle: {
            color: colors.blue['A100']
          }
        },
        {
          value: '2~4h',
          textStyle: {
            color: colors.blue['A100']
          }
        },
        {
          value: '>10h',
          textStyle: {
            color: colors.blue['A100']
          },
        },
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
          200,
          300,
          390,
          550,
          250,
          200,
        ],
        type: 'bar',
        barMaxWidth: '20%',
        itemStyle: {
          barBorderRadius: [5, 5, 0, 0], //（顺时针左上，右上，右下，左下）
        },
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: colors.cyan['A200'] // 50% 处的颜色
            },
            {
              offset: 1,
              color: colors.cyan['600']// 100% 处的颜色
            }
          ],
          global: false // 缺省为 false
        },
        // symbolSize: 0,
        smooth: true
      }
    ]
  };
  const [onlineOptions, setOnlineOptions] = useState(onlineOptionsRaw);

  const peopleNumOptionsRaw = {
    data: 1234567,
  }
  const [peopleNumOptions, setPeopleNumOptions] = useState(peopleNumOptionsRaw);

  const SwitchVideoSource = (evt) => {
    console.log(evt);
    const newFlowOptions = { ...flowOptionsRaw };
    ///TODO:修改新的信息量吞吐率
    // optionsPeople1.xAxis.data = xData;
    let datas = newFlowOptions.series[0].data;
    for (let index = 0; index < datas.length; index++) {
      datas[index] = Math.random() * 60;
    }
    setFlowOptions(newFlowOptions);

    const newOnlineOptions = { ...onlineOptionsRaw };
    ///TODO:修改新的上网时长
    datas = newOnlineOptions.series[0].data;
    for (let index = 0; index < datas.length; index++) {
      datas[index] = Math.random() * 60;
    }
    setOnlineOptions(newOnlineOptions);

    const NewPeopleNumOptions = { ...peopleNumOptionsRaw };
    ///TODO:修改新的接入人数
    let oldData = NewPeopleNumOptions.data;
    oldData = Math.random() * 600000;
    console.log(oldData);
    setPeopleNumOptions(NewPeopleNumOptions);
  };
  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader
        action={
          <NativeSelect
            id="demo-customized-select-native"
            onChange={SwitchVideoSource}
            input={<BootstrapInput />}
          >
            <option value={10}>设备来源1</option>
            <option value={20}>设备来源2</option>
            <option value={30}>设备来源3</option>
          </NativeSelect>
        }
        title="AP统计"
      />
      <Grid container spacing={3}>
        <Grid item sm={12} md={12} lg={12}>
          <CardContent className={clsx(classes.cardContent, className)}>
            <Grid container spacing={3}>
              <Grid item sm={12} md={4} lg={2}>
                <Box height={300} position="relative">
                  <ApDayAccess options={peopleNumOptions} />
                </Box>
              </Grid>
              <Grid item sm={12} md={4} lg={5}>
                <Box height={300} position="relative">
                  <EchartRender options={flowOptions} />
                </Box>
              </Grid>
              <Grid item sm={12} md={4} lg={5}>
                <Box height={300} position="relative">
                  <EchartRender options={onlineOptions} />
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </Card >
  );
};

ApStatistics.propTypes = {
  className: PropTypes.string
};

export default ApStatistics;
