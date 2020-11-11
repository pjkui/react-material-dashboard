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
  ButtonGroup,
  Button
} from '@material-ui/core';
import EchartRender from './EchartRender';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    backgroundColor: theme.palette.background.cardColor,
    color: theme.palette.primary
  },
  differenceIcon: {
    color: colors.red[900]
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1)
  }
}));

const VideoRcg = ({ className, ...rest }) => {
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
  const [optionsNonMotor, setOptionNonMotor] = useState(optionsNonMotorRaw);
  const SwitchVideoSource = (evt) => {
    console.log(evt);
    const optionsPeople1 = { ...optionsPeopleRaw };
    ///TODO:修改新的人流数据
    // optionsPeople1.xAxis.data = xData;
    let datas = optionsPeople1.series[0].data;
    for (let index = 0; index < datas.length; index++) {
      datas[index] = Math.random() * 60;
    }

    setOptionPeople(optionsPeople1);
    const optionsMotor1 = { ...optionsMotorRaw };
    ///TODO:修改新的车流数据
    datas = optionsMotor1.series[0].data;
    for (let index = 0; index < datas.length; index++) {
      datas[index] = Math.random() * 60;
    }

    setOptionMotor(optionsMotor1);
    const optionsNonMotor1 = { ...optionsNonMotorRaw };
    ///TODO:修改新的非车流数据
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
          <ButtonGroup
            color="secondary"
            aria-label="outlined secondary button group"
          >
            <Button onClick={SwitchVideoSource}>视频切换源</Button>
          </ButtonGroup>
        }
        title="视频识别(24小时)"
      />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item sm={12} md={4} lg={4}>
            <EchartRender options={optionsPeople} />
          </Grid>
          <Grid item sm={12} md={4} lg={4}>
            <EchartRender options={optionsMotor} />
          </Grid>
          <Grid item sm={12} md={4} lg={4}>
            <EchartRender options={optionsNonMotor} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

VideoRcg.propTypes = {
  className: PropTypes.string
};

export default VideoRcg;
