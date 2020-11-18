import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";


export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`
    },
    primary: {
      main: `${arcBlue}`
    },
    secondary: {
      main: `${arcOrange}`
    },
    background: {
      paper: "white",
      default: "white",
    },
    Typography: {
      color: "yellow"
    }
  },
  Toolbar: {
    background: "white",
    default: "lightGrey",
    color: "green"
  },
  AppBar: {
    background: "white",
    default: "lightGrey",
    color: "green"
  },

  typography: {
    h3: {
      fontWeight: 300
    }
  },



});