import React, { useEffect, useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import MenuList from "@mui/material/MenuList";
import ListItemText from "@mui/material/ListItemText";
import { Box } from "@mui/system";

// Define a custom styled MenuList
const CustomMenuList = styled(MenuList)(() => ({
  margin: 0,
  padding: "10px 0",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "25px",
  gap: 10,
  position: "relative",
  width: "100%",
}));

const EfectoSpan = styled("span")(({ width, left }) => ({
  position: "absolute",
  top: 0,
  left: `${left}px`,
  width: `${width}px`,
  height: "100%",
  background: "linear-gradient(45deg, #6F4CE0, #6F4CE0)",
  borderRadius: "25px",
  transition: "left 0.3s ease, width 0.3s ease",
  zIndex: 1,
}));

const EfectoSpanHover = styled("span")(({ width, left }) => ({
  position: "absolute",
  top: 0,
  left: `${left}px`,
  width: `${width}px`,
  height: "100%",
  background: "linear-gradient(45deg, #8A6FFF, #8A6FFF)",
  borderRadius: "25px",
  transition: "left 0.3s ease, width 0.3s ease",
  zIndex: 0,
}));

function Navegation({ menuItems, sx = {} }) {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [itemWidths, setItemWidths] = useState([]);
  const itemRefs = useRef([]);

  useEffect(() => {
    const updateWidths = () => {
      const widths = itemRefs.current.map(
        (ref) => ref?.getBoundingClientRect().width || 0
      );
      setItemWidths(widths);
    };

    updateWidths(); // Initialize widths on mount

    window.addEventListener("resize", updateWidths);
    return () => {
      window.removeEventListener("resize", updateWidths);
    };
  }, [menuItems]);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const handleClick = (index, sectionId) => {
    setSelectedIndex(index);
    scrollToSection(sectionId);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const calculateLeft = (index) => {
    return index !== null ? itemRefs.current[index]?.offsetLeft || 0 : 0;
  };

  return (
    <Box
      sx={{
        border: "1px solid #200E24",
        padding: "1px 1px",
        borderRadius: "25px",
        position: "relative",
      }}
    >
      <CustomMenuList onMouseLeave={handleMouseLeave}>
        {menuItems.map((item, index) => (
          <ListItemText
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onClick={() => handleClick(index, item.sectionId)}
            ref={(el) => (itemRefs.current[index] = el)}
            primaryTypographyProps={{
              sx: {
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                color:
                  selectedIndex === index || hoverIndex === index
                    ? "#fff"
                    : sx.color || "#200E24",
                fontSize: {
                  xs: "10px", // Extra pequeño
                  sm: "10px", // Pequeño
                  md: "10px", // Mediano
                  lg: "11px", // Grande
                  xl: "11px", // Extra grande
                },
              },
            }}
            sx={{
              margin: 0,
              zIndex: 99,
              padding: { md: "0px 10px", xl: "0px 20px" },
              cursor: "pointer",
              position: "relative",
              ...sx,
            }}
          >
            {item.label}
          </ListItemText>
        ))}
        {hoverIndex !== null && (
          <EfectoSpanHover
            width={itemWidths[hoverIndex] || 0}
            left={calculateLeft(hoverIndex)}
          />
        )}
        <EfectoSpan
          width={itemWidths[selectedIndex] || 0}
          left={calculateLeft(selectedIndex)}
        />
      </CustomMenuList>
    </Box>
  );
}

export default Navegation;
