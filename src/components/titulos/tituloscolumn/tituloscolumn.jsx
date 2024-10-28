import { Box, Typography } from "@mui/material";

function TituloColumn() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", md: "flex-start" }, }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          fontFamily: "Poppins, sans-serif",
          color: "#200E24",
          width: {xs: "90%", md: "60%"},
          fontSize: { xs: "30px", sm: "30px", md: "35px", lg: "40px" },
          marginBottom: "16px",
          textAlign: {xs: "center", md: "left"}
        }}
      >
        HISTORIAS DE ÉXITO, RESULTADOS REALES
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          width: "70%",
          fontSize: "14px",
          fontFamily: "Poppins, sans-serif",
          color: "#200E24",
        }}
      >
        Otras personas como tú, están alcanzando nuevas alturas con Hitpoly.
        Descubre cómo transformamos retos en oportunidades y éxito tangible.
      </Typography>
    </Box>
  );
}

export default TituloColumn;
