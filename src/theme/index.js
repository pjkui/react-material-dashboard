import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {
      dark: '#1a2380',
      dark2: '#252ea3',
      default: colors.common.white,
      paper: colors.common.white
    },
    primary: {
      main: colors.indigo[500]
    },
    secondary: {
      main: colors.indigo[500]
    },
    text: {
      primary: colors.grey[600],
      secondary: colors.blueGrey[600],
      chartTitle: colors.blue['A400']
    }
  },
  props: {
    colors: {
      TopBarColor: '#161b74'
    }
  },
  shadows,
  typography
});

export default theme;
