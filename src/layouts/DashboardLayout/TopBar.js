import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
  colors,
  NativeSelect,
  InputLabel,
  InputBase
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';
// import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
// import InputIcon from '@material-ui/icons/Input';
// import Logo from 'src/components/Logo';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

const BootstrapInput = withStyles((theme) => ({
  root: {
    marginTop: '0 !important',
    'label + &': {
      marginTop: theme.spacing(3),
    },
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
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.props.colors.TopBarColor,
    oldColor: colors.blue[100]
  },
  avatar: {
    width: 60,
    height: 60
  }
}));

const TopBar = ({
  className,
  onMobileNavOpen,
  ...rest
}) => {
  const classes = useStyles();
  const [notifications] = useState([]);
  const [address, setAddress] = useState(10);
  const handleChange = (event) => {
    console.log(event);
    setAddress(event.target.value);
  };

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar>
        <RouterLink to="/">
          {/* <Logo /> */}
          <DashboardIcon />
        </RouterLink>
        <Typography variant="h4" component="h4">
          &nbsp;大数据
        </Typography>
        <Box flexGrow={1} />
        {/* <FormControl1 className={classes.margin}> */}
        <InputLabel htmlFor="demo-customized-select-native">域切换</InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          value={address}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option value={10}>上海市闵行区莘庄镇七莘路1号</option>
          <option value={20}>上海市闵行区莘庄镇七莘路2号</option>
          <option value={30}>上海市闵行区莘庄镇七莘路3号</option>
        </NativeSelect>
        {/* </FormControl> */}
        <Hidden smDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <AccountCircleIcon />
              <Typography variant="h6" component="h6">
                &nbsp;sys_admin
              </Typography>
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <PowerSettingsNewIcon />
          </IconButton>
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <AccountCircleIcon />
            <PowerSettingsNewIcon />
            {/* <MenuIcon /> */}
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
