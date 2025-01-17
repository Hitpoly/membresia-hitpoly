import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

function Targeta({ title, number, description, customStyles }) {
  return (
    <Box
      sx={{
        color: "white",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#6F4CE0",
        position: "relative",
        borderRadius: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        overflow: "hidden",
        padding: "20px",
        ...customStyles,
      }}
    >
      {/* Fondo de efectos de color */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "150px",
          height: "150px",
          background: "radial-gradient(circle, #A018BF, #6F4CE0)",
          borderRadius: "50%",
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "150px",
          height: "150px",
          background: "radial-gradient(circle, #A018BF, #6F4CE0)",
          borderRadius: "50%",
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />

      {/* Contenido del título y número */}
      <Box
        sx={{
          zIndex: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Título */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontFamily: "Poppins, sans-serif",
            fontSize: "16px",
            color: "white",
            textAlign: "left",
          }}
        >
          {title}
        </Typography>

        {/* Número */}
        <Typography
          variant="h3"
          sx={{
            fontSize: "4rem",
            fontWeight: "bold",
            fontFamily: "Poppins, sans-serif",
            textAlign: "right",
            marginLeft: "20px",
          }}
        >
          {number}
        </Typography>
      </Box>

      {/* Descripción estática */}
      <Box
        sx={{
          zIndex: 1,
          backgroundColor: "white",
          color: "#200E24",
          textAlign: "center",
          padding: "10px 20px",
          borderRadius: "15px",
          marginTop: "10px",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "14px",
            overflowWrap: "break-word",
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
