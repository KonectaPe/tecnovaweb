import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
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
    fontFamily: roboto.className,
  },
});
