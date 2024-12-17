import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

function Targeta({ title, number, description, customStyles }) {
  return (
    <Box
      sx={{
        color: "white",
        height: "280px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#800080",
        position: "relative",
        borderRadius: "25px",
        ...customStyles,
        // padding: "30px 20px",
        overflow: "hidden", // Evita que el hover salga del contenedor
        transition: "transform 0.9s ease, all 0.9s ease",
        "&:hover": {
          height: "350px",
          transform: "scale(1.01)",
          transition: "transform 1.5s ease, all 1.5s ease",
          "& .description": {
            marginLeft: "10px",
            marginBottom: "10px",
            marginRight: "10px",
            transform: "translateY(0)",
            transition: "transform 1.5s ease",
          },
          "& .title": {
            transform: "translateY(-20px)",
            transition: "transform 1.5s ease",
          },
        },
      }}
    >
      {/* Efectos de fondo */}
      <Box
        sx={{
          position: "absolute",
          bottom: 150,
          right: -150,
          width: "250px",
          height: "250px",
          background: "radial-gradient(circle, #A018BF, #6F4CE0)",
          borderRadius: "50%",
          filter: "blur(50px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 150,
          left: -150,
          width: "250px",
          height: "250px",
          background: "radial-gradient(circle, #A018BF, #6F4CE0)",
          borderRadius: "50%",
          filter: "blur(50px)",
          zIndex: 0,
        }}
      />

      {/* Contenido del título */}
      <Box
        className="title"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          zIndex: 1,
          transition: "transform 0.9s ease",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontFamily: "Poppins, sans-serif",
            fontSize: "16px",
            maxWidth: "50%",
            wordWrap: "break-word",
            transition: "transform 0.9s ease",
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontSize: "6rem",
            fontWeight: "bold",
            fontFamily: "Poppins, sans-serif",
            transition: "transform 0.9s ease",
          }}
        >
          {number}
        </Typography>
      </Box>

      {/* Descripción en hover */}
      <Box
        className="description"
        sx={{
          position: "absolute",
          bottom: "0px",
          left: "0px",
          width: "calc(100% - 20px)", // Adjust width to account for margin
          minHeight: "60%",
          padding: "20px",
          marginRight: "10px", // Add right margin
          backgroundColor: "white",
          color: "#200E24",
          textAlign: "center",
          borderRadius: "25px 25px 0 0", // Round only the top corners
          transform: "translateY(100%)", // Initially hide
          transition: "transform 1.5s ease",
          zIndex: 1,
          overflowWrap: "break-word", // Prevent text overflow
          boxSizing: "border-box", // Include padding and border in the element's total width and height
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "14px",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

Targeta.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  customStyles: PropTypes.object,
};

export default Targeta;
