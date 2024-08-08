import { createTheme } from "@mui/material";

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
});
