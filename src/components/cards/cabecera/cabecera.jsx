import { Box, Typography } from "@mui/material";
import PropTypes from 'prop-types';

function CabeceraSoluciones({ title, subtitle, customStyles }) {
  return (
    <Box
      sx={{
        width: "100%",
        color: "#200E24",
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr", // Una columna para pantallas pequeñas
          md: "1fr 1fr", // Dos columnas para pantallas medianas y grandes
        },
        gap: "30px",
        alignItems: "center",
        justifyItems: {
          xs: "center", // Centrar los elementos horizontalmente en pantallas pequeñas
          md: "start", // Alinear a la izquierda para pantallas medianas y grandes
        },
        textAlign: {
          xs: "center", // Texto centrado en pantallas pequeñas
          md: "left", // Texto alineado a la izquierda para pantallas medianas y grandes
        },
        padding: {
          xs: "20px", // Padding en pantallas pequeñas
          md: "50px 0px", // Padding en pantallas medianas y grandes
        },
        ...customStyles, // Estilos personalizados proporcionados por el usuario
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: "bold",
          fontSize: {
            xs: "30px", // Tamaño de fuente reducido para pantallas pequeñas
            md: "40px", // Tamaño de fuente más grande para pantallas medianas y grandes
          },
          width: {
            xs: "90%", // Ancho del título para pantallas pequeñas
            md: "90%", // Ancho del título para pantallas medianas y grandes
          },
          margin: {
            xs: "20px 0", // Margen superior e inferior en pantallas pequeñas
            md: "30px", // Margen en pantallas medianas y grandes
          },
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fontFamily: "Poppins, sans-serif",
          fontSize: { xs: "13px", sm: "14px", md: "15px" },
          width: {
            xs: "90%", // Ancho del subtítulo para pantallas pequeñas
            md: "90%", // Ancho del subtítulo para pantallas medianas y grandes
          },
          marginRight: {
            xs: "0", // Sin margen derecho en pantallas pequeñas
            md: "100px", // Margen derecho para pantallas medianas y grandes
          },
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
}

CabeceraSoluciones.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  customStyles: PropTypes.object,
};

export default CabeceraSoluciones;
