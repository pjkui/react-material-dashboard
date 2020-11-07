import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {
      dark: '#ccc',
      default: colors.common.blueGrey,
      paper: colors.common.black
    },
    primary: {
      main: colors.indigo[500]
    },
    secondary: {
      main: colors.indigo[500]
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600]
    },

  },
  props: {
    colors: {
      TopBarColor: '#ff0000',
      TopBarColor1: '#f00',
    }
  },
  shadows,
  typography
});

export default theme;
