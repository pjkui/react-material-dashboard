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
  InputBase,
  NativeSelect
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import VideoRcg from './VideoRcg';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    backgroundColor: theme.palette.background.cardSection,
    color: theme.palette.primary
  },
  // avatar: {
  //   backgroundColor: colors.red[600],
  //   height: 56,
  //   width: 56
  // },
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

const VideoRgcContainer = ({ className, ...rest }) => {
  const classes = useStyles();
  const [videoSource, setVideoSource] = useState(10);
  const handleChange = (event) => {
    console.log(event);
    if (event == null || event.target == null) {
      return;
    }
    setVideoSource(parseInt(event.target.value, 10));
  };
  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader
        title="视频识别(24小时)"
        action={
          <NativeSelect
            id="demo-customized-select-native"
            value={videoSource}
            onChange={handleChange}
            input={<BootstrapInput />}
          >
            <option value={10}>视频源切换1</option>
            <option value={20}>视频源切换2</option>
            <option value={30}>视频源切换3</option>
          </NativeSelect>
        }
      />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item sm={12} md={12} lg={12}>
            <VideoRcg sourcetype={videoSource} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

VideoRgcContainer.propTypes = {
  className: PropTypes.string
};

export default VideoRgcContainer;
