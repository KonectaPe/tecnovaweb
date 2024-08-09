"use client";

import { theme } from "@/theme/theme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createEmotionCache from "@/createEmotionCache";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import { Toolbar } from "@mui/material";
import Home from "@/components/home/Home";

const Page = () => {
  const cache = createEmotionCache();
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default Page;
