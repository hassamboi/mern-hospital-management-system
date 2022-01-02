import colors from "./colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primaryBlue,
    },
    secondary: {
      main: colors.secondaryBlue,
    },
  },
});

export default theme;
