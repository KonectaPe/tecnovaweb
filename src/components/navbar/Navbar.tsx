import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import MuiLink from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import React from "react";
import Link from "next/link";
import ScrollTop from "@/components/scroll/ScrollTop";

type Props = {
  window?: () => Window;
};

const navItems = [
  "inicio",
  "precios",
  "cursos",
  "servicio",
  "portafolio",
  "blog",
  "contacto",
];

const Navbar = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <MuiLink
        component={Link}
        href="/"
        sx={{ my: 2 }}
        underline="none"
        color="inherit"
        prefetch={true}
      >
        <Typography variant="h6">Tecnova web</Typography>
      </MuiLink>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Link
              href={item === "inicio" ? "/" : `/${item}`}
              passHref
              prefetch={false}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.toUpperCase()} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar color="inherit" component="nav">
        <Container maxWidth="lg">
          <Toolbar>
            <MuiLink
              color="inherit"
              component={Link}
              underline="none"
              href="/"
              sx={{ flexGrow: 1, display: { xs: "none", lg: "block" } }}
              prefetch={false}
            >
              <Typography variant="h6">Tecnova web</Typography>
            </MuiLink>
            <Box sx={{ display: { xs: "none", lg: "flex" }, gap: "1rem" }}>
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={item === "inicio" ? "/" : `/${item}`}
                  passHref
                  prefetch={false}
                >
                  <Button LinkComponent={Link} color="inherit">
                    {item.toUpperCase()}
                  </Button>
                </Link>
              ))}
            </Box>
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { lg: "none" } }}
              LinkComponent={Link}
              href="/"
            >
              <RocketLaunchIcon />
            </IconButton>
            <Box sx={{ display: { lg: "none" }, flexGrow: 1 }} />
            <IconButton
              size="small"
              edge="start"
              onClick={handleDrawerToggle}
              color="inherit"
              aria-label="menu"
              sx={{ display: { lg: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          variant="temporary"
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Box>
  );
};

export default Navbar;
