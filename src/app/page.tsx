"use client";

import { theme } from "@/theme/theme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createEmotionCache from "@/createEmotionCache";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";

const Page = () => {
  const cache = createEmotionCache();
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <h1>Hola desde home</h1>
        <h1>Hola desde home</h1>
        <h1>Hola desde home</h1>
        <h1>Hola desde home</h1>
        <h1>Hola desde home</h1>
        <h1>Hola desde home</h1>
        <h1>Hola desde home</h1>
        <h1>Hola desde home</h1>
        <h1>Hola desde home</h1>
        <h1>Hola desde home</h1>
        <h1>Hola desde home</h1>
        <h1>Hola desde home</h1>
        <h1>Hola desde home</h1>
        <h1>Hola desde home</h1>
        <h1>Hola desde home</h1>
        <h1>Hola desde home</h1>
        <h1>Hola desde home</h1>
        <h1>Hola desde home</h1>
        <h1>Hola desde home</h1>
        <h1>Hola desde home</h1>
        <h1>Hola desde home</h1>
        <h1>Hola desde home</h1>
        <h1>Hola desde home</h1>
        <h1>Hola desde home</h1>
        <h1>Hola desde home</h1>
        <h1>Hola desde home</h1>
        <h1>Hola desde home</h1>
        <h1>Hola desde home</h1>
        <h1>Hola desde home</h1>
        <h1>Hola desde home</h1>
        <h1>Hola desde home</h1>
        <h1>Hola desde home</h1>
        <h1>Hola desde home</h1>
        <h1>Hola desde home</h1>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default Page;
