import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F3F1F1",
    },
    secondary: {
      main: "#E76F53",
    },
  },
  typography: {
    fontFamily: ["'M PLUS Rounded 1c', sans-serif"].join(","),
    // fontFamily: ["Noto Sans Japanese"].join(",")
  },
});
export default theme;
