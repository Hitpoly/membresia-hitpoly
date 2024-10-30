import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Targeta from "./targeta/targeta.jsx";

// Import local images
import image1 from "../../assets/imagenUnoBaner.jpg";
import image2 from "../../assets/imagenDosBaner.jpg";
import image3 from "../../assets/imagenTresBaner.jpg";

const images = [image1, image2, image3];

// Data for the banners
const bannersData = [
  {
    title: "TU PROPIA AGENCIA DE SOLUCIONES DIGITALES",
    subtitle:
      "Impulsamos a tus clientes hacia retornos rápidos y seguros, asegurando una capitalización efectiva en plazos cortos.",
    buttonText: "Descubrir Más",
    buttonLink: "/",
  },
  {
    title: "DISFRUTA AYUDANDO A QUE OTROS VIVAN MEJOR",
    subtitle:
      "Estamos ayudando a que más personas puedan generar ingresos en línea, todo desde un centro de capitalización seguro y efectivo.",
    buttonText: "Descubrir Más",
    buttonLink: "/",
  },
  {
    title: "CONSTRUYE UN LEGADO FAMILIAR",
    subtitle:
      "Estamos asegurando el futuro de nuestros hijos y nietos, un legado en el que la unión y la colaboración cobran cada vez más fuerza.",
    buttonText: "Descubrir Más",
    buttonLink: "/",
  },
];

function CarruselBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [rippleVisible, setRippleVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const handleMouseEnter = (index) => {
    setCurrentIndex(index);
  };

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.clientX || event.touches[0].clientX);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    const currentX = event.clientX || event.touches[0].clientX;
    const diff = currentX - startX;

    if (diff > 50) {
      // Dragging right
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setIsDragging(false);
    } else if (diff < -50) {
      // Dragging left
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (event) => {
    setIsDragging(true);
    setStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    handleMouseMove(event);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setClickPosition({ x, y });
    setRippleVisible(true);
    setTimeout(() => setRippleVisible(false), 600); // Duration of the ripple effect
  };

  return (
    <Box
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
      sx={{
        position: "relative",
        width: "100%",
        height: "650px",
        overflow: "hidden",
        borderRadius: { xs: "none", md: "25px" },
      }}
    >
      {images.map((image, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: currentIndex === index ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        />
      ))}
      {/* Navigation line */}
      <Box
        sx={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            sx={{
              width: "40px",
              borderRadius: "25px",
              height: "5px",
              backgroundColor: currentIndex === index ? "#6F4CE0" : "#ddd",
              margin: "0 5px",
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </Box>
      {/* Ripple effect on click */}
      {rippleVisible && (
        <Box
          sx={{
            position: "absolute",
            top: `${clickPosition.y}px`,
            left: `${clickPosition.x}px`,
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundColor: "white",
            transform: "translate(-50%, -50%) scale(0)",
            opacity: 1,
            animation: "ripple 0.6s forwards",
          }}
        />
      )}
      {/* Pass current banner data to Targeta */}
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0px 20px",
          marginLeft: {xs: "0px", md: "100px"},
          borderRadius: "25px",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
          bottom: {xs: "50px", md: "80px"},
          width: { xs: "auto", sm: "auto", md: "50%", lg: "50%", xl: "40%" },
        }}
      >
        <Targeta
          title={bannersData[currentIndex].title}
          subtitle={bannersData[currentIndex].subtitle}
          buttonText={bannersData[currentIndex].buttonText}
          buttonLink={bannersData[currentIndex].buttonLink}
        />
      </Box>
    </Box>
  );
}

export default CarruselBanner;
