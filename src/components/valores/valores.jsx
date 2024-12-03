import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Box, IconButton, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";

// Component that displays a carousel of cards
const Valores = ({
  cards, // List of cards to be displayed
  interval = 10000, // Interval for automatic card change
  styles = {}, // Optional custom styles for various parts of the carousel
}) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0); // State for the current card index
  const [fade, setFade] = useState(true); // Controls the fade animation

  const theme = useTheme(); // Hook to access the current Material UI theme
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); // Detect if the screen is small

  // Function to change the current card
  const handleCardChange = (index) => {
    setFade(false); // Start fade-out effect
    setTimeout(() => {
      setCurrentCardIndex(index); // Change the card index
      setFade(true); // Start fade-in effect for the new card
    }, 300); // Wait for transition
  };

  // Function to go to the next card
  const handleNextClick = () => {
    if (currentCardIndex < cards.length - 1) {
      handleCardChange(currentCardIndex + 1);
    } else {
      handleCardChange(0); // Go back to the first card if on the last
    }
  };

  // Function to go back to the previous card
  const handleBackClick = () => {
    if (currentCardIndex > 0) {
      handleCardChange(currentCardIndex - 1);
    }
  };

  // Effect to automatically change the card after an interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextClick();
    }, interval);
    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, [currentCardIndex, interval]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        minHeight: "400px",
        ...styles.container, // Apply custom styles
      }}
    >
      {/* Main container for the carousel */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Card image */}
        <Box
          sx={{
            width: isSmallScreen ? "100%" : "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={cards[currentCardIndex].imageUrl}
            alt={cards[currentCardIndex].title}
            style={{
              width: isSmallScreen ? "90%" : "600px",
              height: isSmallScreen ? "auto" : "380px",
              borderRadius: "25px",
              opacity: fade ? 1 : 0, // Control the fade animation
              transition: "opacity 0.5s ease",
              ...styles.image,
            }}
          />
        </Box>

        {/* Text and button container */}
        <Box
          sx={{
            width: isSmallScreen ? "100%" : "50%",
            padding: isSmallScreen ? "10px" : "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: isSmallScreen ? "center" : "flex-start",
            position: "relative",
            marginTop: isSmallScreen ? "20px" : "0",
          }}
        >
          {/* Navigation buttons (previous and next) */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: isSmallScreen ? "center" : "flex-end",
              marginBottom: "20px",
              position: "relative",
              right: { xs: "0px", md: "100px" },
            }}
          >
            <IconButton
              onClick={handleBackClick}
              disabled={currentCardIndex === 0}
              sx={{
                marginRight: "10px",
                backgroundColor: "#6F4CE0",
                color: "white",
                borderRadius: "50%",
                "&:hover": {
                  backgroundColor: "#800080",
                },
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <IconButton
              onClick={handleNextClick}
              disabled={currentCardIndex === cards.length - 1}
              sx={{
                backgroundColor: "#6F4CE0",
                color: "white",
                borderRadius: "50%",
                "&:hover": {
                  backgroundColor: "#A018BF",
                },
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Box>

          {/* Card content container (text and link) */}
          <Box
            sx={{
              backgroundColor: "white",
              padding: "20px",
              width: isSmallScreen ? "90%" : "450px",
              height: "300px",
              borderRadius: "25px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              position: "relative",
              right: { xs: "0px", md: "50px" },
              top: "10px",
              overflow: "hidden",
              opacity: fade ? 1 : 0,
              transition: "opacity 0.5s ease",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                width: "100%",
                zIndex: 99,
                marginBottom: "16px",
                fontFamily: "Poppins, sans-serif",
                fontSize: isSmallScreen ? "24px" : "40px",
                color: "#200E24",
                fontWeight: "bold",
                ...styles.title,
              }}
            >
              {cards[currentCardIndex].title}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                width: "100%",
                zIndex: 99,
                marginBottom: "10px",
                fontFamily: "Poppins, sans-serif",
                color: "#200E24",
                fontSize: isSmallScreen ? "12px" : "14px",
                opacity: fade ? 1 : 0,
                transition: "opacity 0.5s ease",
                ...styles.description,
              }}
            >
              {cards[currentCardIndex].description}
            </Typography>
            <Link
              href={cards[currentCardIndex].linkHref}
              sx={{
                color: "#6F4CE0",
                textDecoration: "none",
                fontWeight: "bold",
                opacity: fade ? 1 : 0,
                transition: "opacity 0.5s ease",
                marginTop: "10px",
                ...styles.link,
              }}
            >
              Leer Más
            </Link>
          </Box>
        </Box>
      </Box>

      {/* Page indicators (dots to show active card) */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        {cards.map((_, index) => (
          <IconButton
            key={index}
            onClick={() => handleCardChange(index)}
            sx={{
              color: index === currentCardIndex ? "#6F4CE0" : "#CCCCCC",
              transition: "color 0.3s ease",
              fontSize: "10px",
            }}
          >
            <FiberManualRecordIcon fontSize="small" />
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export default Valores;
