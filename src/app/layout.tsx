"use client";

import Navbar from "@/components/navbar/Navbar";
import "@/app/global.css";
import { theme } from "@/theme/theme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";
import createEmotionCache from "@/createEmotionCache";
import { CacheProvider } from "@emotion/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CacheProvider value={createEmotionCache()}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <html lang="es">
            <body>
              {<Navbar />}
              {children}
            </body>
          </html>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}
