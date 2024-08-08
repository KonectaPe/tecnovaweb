"use client";

import Navbar from "@/components/navbar/Navbar";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CssBaseline>
        <html lang="es">
          <body>
            {<Navbar />}
            {children}
          </body>
        </html>
      </CssBaseline>
    </>
  );
}
