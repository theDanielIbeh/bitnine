import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CssBaseline } from "@mui/material";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = window.outerWidth;
const navItems = [
  "USE CASES",
  "SERVICES",
  "RESOURCES",
  "BLOG",
  "COMPANY",
  "IR",
];

export default function NavBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        <ListItem key="products" disablePadding>
          <ListItemButton sx={{ textAlign: "left", color: "#fac433" }}>
            <ListItemText primary="PRODUCTS" />
          </ListItemButton>
        </ListItem>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "left" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem key="try-free">
          <Button
            sx={{
              backgroundColor: "blue",
              color: "#FFF",
              fontFamily: "inherit",
            }}
          >
            TRY FREE
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{
          backgroundColor: "#FFFFFF",
          boxShadow: "none",
          display: "flex",
          paddingY: "10px",
        }}
        component="nav"
      >
        {/* <div
          style={{
            backgroundColor: alpha("#000000", 0.15),
          }}
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: alpha("#000000", 0.5) }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="CONTACT"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </div> */}
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              mr: "auto",
              flexShrink: 0.5,
            }}
          >
            <img
              src="https://bitnine.net/wp-content/uploads/2021/02/b_logo.png"
              alt="bitnine-logo"
              width="200px"
            />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button sx={{ color: "#fac433", fontFamily: "inherit" }}>
              PRODUCTS
            </Button>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#000", fontFamily: "inherit" }}>
                {item}
              </Button>
            ))}
            <Button
              sx={{
                backgroundColor: "blue",
                color: "#FFF",
                fontFamily: "inherit",
              }}
            >
              TRY FREE
            </Button>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ ml: "auto", display: { sm: "none" } }}
          >
            <MenuIcon
              sx={{
                color: "#000",
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="top"
          container={container}
          variant="persistent"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              marginTop: "80px",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
