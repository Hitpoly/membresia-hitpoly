import { useState } from "react";
import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Navigation from "./navegation/navegation"; // Removed .tsx extension
import Logo from "../../assets/logohitpoly.png";
import BottonSuport from "./buttonSoporte/buttonSoporte"; // Removed .tsx extension
import AccessButton from "./accessbutton/accessbutton"; // Removed .tsx extension
import { useTheme, useMediaQuery } from "@mui/material";

function NavBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { label: "OPORTUNIDAD ÚNICA", sectionId: "section1" },
    { label: "NUESTRO PROPÓSITO", sectionId: "section2" },
    { label: "CONÓCENOS", sectionId: "section3" },
    { label: "TESTIMONIOS", sectionId: "section4" },
    { label: "FORMAS DE CAPITALIZAR", sectionId: "section5" },
  ];

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ padding: { xs: "10px 5px", sm: "10px 20px", md: "10px 0px" } }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          src={Logo}
          alt="Logo"
          style={{ height: isMobile ? "35px" : "40px" }}
        />

        {!isMobile ? (
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <Navigation menuItems={menuItems} />
          </Box>
        ) : (
          <IconButton
            onClick={toggleDrawer(true)}
            sx={{ color: "#6F4CE0" }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {!isMobile && (
          <>
            <AccessButton
              text="Acceder Ahora"
              onClick={() => {}}
            />
            <BottonSuport
              text="Atención al Cliente"
              onClick={() => {}}
              sx={{
                color: "#6F4CE0",
                borderColor: "#6F4CE0",
                display: { xs: "none", md: "block" },
              }}
              hoverStyles={{
                backgroundColor: "#6F4CE0",
                color: "white",
              }}
            />
          </>
        )}

        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{
              width: 250,
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <Box sx={{ display: "flex", padding: "10px" }}>
              <IconButton onClick={toggleDrawer(false)} sx={{ color: "#6F4CE0" }}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "30px 0",
              }}
            >
              <img src={Logo} alt="Logo" style={{ height: "45px" }} />
            </Box>
            <List>
              {menuItems.map((item, index) => (
                <ListItemButton
                  key={index}
                  onClick={() => {
                    const section = document.getElementById(item.sectionId);
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                      setDrawerOpen(false);
                    }
                  }}
                  sx={{
                    textAlign: "center",
                    "&:hover": {
                      backgroundColor: "#6F4CE0",
                      color: "white",
                    },
                  }}
                  component="li"
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "14px",
                      textAlign: "center",
                    }}
                  />
                </ListItemButton>
              ))}
            </List>
            <Box
              sx={{
                padding: "20px",
                marginTop: "auto",
              }}
            >
              <BottonSuport
                text="Atención al Cliente"
                onClick={() => {}}
                sx={{
                  width: "100%",
                  color: "#6F4CE0",
                  borderColor: "#6F4CE0",
                }}
                hoverStyles={{
                  backgroundColor: "#6F4CE0",
                  color: "white",
                }}
              />
            </Box>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
}

export default NavBar;