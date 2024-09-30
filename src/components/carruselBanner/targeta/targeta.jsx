import { Box, Typography } from "@mui/material";
import ButtonBaner from "../buttonBaner/buttonBaner.jsx"; // Cambiar a .jsx si es necesario

function Targeta({ title, subtitle, buttonText, buttonLink }) {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(32, 14, 36, 0.4)",
        backdropFilter: "blur(10px)",
        padding: { xs: "20px 10px", md: "30px 20px" },
        borderRadius: "25px",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 1,
          fontFamily: "Poppins, sans-serif",
          fontSize: { xs: "30px", sm: "30px", md: "35px", lg: "40px" }, // Ajustar tamaño de fuente del título
          fontWeight: "bold",
          width: "90%",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          width: "90%",
          mb: 2,
          fontFamily: "Poppins, sans-serif",
          fontSize: { xs: "13px", sm: "14px", md: "15px" }, // Ajustar tamaño de fuente del subtítulo
        }}
      >
        {subtitle}
      </Typography>
      <ButtonBaner
        text={buttonText} // Texto del botón dinámico
        href={buttonLink} // Enlace del botón dinámico
        buttonStyles={{ marginTop: "10px" }} // Si necesitas estilos adicionales
      />
    </Box>
  );
}

export default Targeta;
