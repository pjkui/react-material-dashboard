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
    color: theme.palette.background.paper,
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.dark,
    border: '1px solid #ced4da',
    fontSize: 16,
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

  const optionsPeopleRaw = {
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
        show: false,
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
                color: colors.purple['300'] // 0% 处的颜色
              },
              {
                offset: 1,
                color: colors.purple['A700'] // 100% 处的颜色
              }
            ],
            global: false // 缺省为 false
          }
        },
        symbolSize: 0,
        smooth: true
      }
    ]
  };
  const [optionsPeople, setOptionPeople] = useState(optionsPeopleRaw);

  const optionsMotorRaw = {
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
        show: false,
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
        type: 'bar',
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
                color: colors.yellow['200'] // 0% 处的颜色
              },
              {
                offset: 1,
                color: colors.orange['800'] // 100% 处的颜色
              }
            ],
            global: false // 缺省为 false
          }
        },
        symbolSize: 0,
        smooth: true
      }
    ]
  };
  const [optionsMotor, setOptionMotor] = useState(optionsMotorRaw);
  const optionsNonMotorRaw = {
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
        show: false,
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
        type: 'bar',
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
                color: colors.blue['100'] // 0% 处的颜色
              },
              {
                offset: 1,
                color: colors.blue['700'] // 100% 处的颜色
              }
            ],
            global: false // 缺省为 false
          }
        },
        symbolSize: 0,
        smooth: true
      }
    ]
  };
  const [optionsNonMotor, setOptionNonMotor] = useState(optionsNonMotorRaw);
  const SwitchVideoSource = (evt) => {
    console.log(evt);
    const optionsPeople1 = { ...optionsPeopleRaw };
    ///TODO:修改新的接入人数
    // optionsPeople1.xAxis.data = xData;
    let datas = optionsPeople1.series[0].data;
    for (let index = 0; index < datas.length; index++) {
      datas[index] = Math.random() * 60;
    }

    setOptionPeople(optionsPeople1);
    const optionsMotor1 = { ...optionsMotorRaw };
    ///TODO:修改新的信息量吞吐率
    datas = optionsMotor1.series[0].data;
    for (let index = 0; index < datas.length; index++) {
      datas[index] = Math.random() * 60;
    }

    setOptionMotor(optionsMotor1);
    const optionsNonMotor1 = { ...optionsNonMotorRaw };
    ///TODO:修改新的上网时长
    datas = optionsNonMotor1.series[0].data;
    for (let index = 0; index < datas.length; index++) {
      datas[index] = Math.random() * 60;
    }
    setOptionNonMotor(optionsNonMotor1);
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
                  <ApDayAccess options={optionsPeople} />
                </Box>
              </Grid>
              <Grid item sm={12} md={4} lg={5}>
                <Box height={300} position="relative">
                  <EchartRender options={optionsMotor} />
                </Box>
              </Grid>
              <Grid item sm={12} md={4} lg={5}>
                <Box height={300} position="relative">
                  <EchartRender options={optionsNonMotor} />
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
