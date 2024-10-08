import { Roboto } from "next/font/google";
import createTheme from "@mui/material/styles/createTheme";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        // disableRipple: true,
        // disableTouchRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    mode: "light",
  },
});
