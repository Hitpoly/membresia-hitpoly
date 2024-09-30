import { Box, Typography } from "@mui/material";

function TituloRow() {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          fontFamily: "Poppins, sans-serif",
          color: "#200E24",
          width: "50%",
          fontSize: "40px",
          marginBottom: "16px",
        }}
      >
        RESULTADOS REALES, HISTORIAS EXTRAORDINARIAS
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fontFamily: "Poppins, sans-serif",
          color: "#200E24",
          width: "40%",
          fontSize: "14px",
          marginLeft: "50px",
        }}
      >
        Otras personas como tú, están alcanzando nuevas alturas con Hitpoly.
        Descubre cómo transformamos retos en oportunidades y éxito tangible.
      </Typography>
    </Box>
  );
}

export default TituloRow;
