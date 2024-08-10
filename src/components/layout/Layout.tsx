import { Box, Container, Toolbar } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { LayoutProps } from "./type";

const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar />
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
};

export default Layout;
