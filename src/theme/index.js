import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {
      cardSection: '#1a2380',
      cardColor: '#252ea3',
      TopBarColor: '#161b74',
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
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
      chartTitle: colors.blue['A400']
    }
  },
  shadows,
  typography
});

export default theme;
