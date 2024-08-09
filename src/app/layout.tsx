"use client";

import Navbar from "@/components/navbar/Navbar";
import "@/app/global.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="es">
        <body>
          {<Navbar />}
          {children}
        </body>
      </html>
    </>
  );
}
