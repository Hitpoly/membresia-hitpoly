import { Box, Typography } from "@mui/material";

function TargetasTestimonio({ title, content, image }) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "550px",
        borderRadius: "25px",
        overflow: "hidden",
        backgroundColor: "white",
        color: "#200E24",
      }}
    >
      {/* Círculos de gradiente en las esquinas */}
      <Box
        sx={{
          position: "absolute",
          bottom: -180,
          left: -180,
          width: "350px",
          height: "350px",
          background: "radial-gradient(circle, #8831CF, #8831CF 100%)",
          borderRadius: "50%",
          filter: "blur(50px)",
          zIndex: 0, // Asegúrate de que el zIndex sea menor que el del texto
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -100,
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, #8831CF, #8831CF 100%)",
          borderRadius: "50%",
          filter: "blur(50px)",
          zIndex: 0, // Asegúrate de que el zIndex sea menor que el del texto
        }}
      />

      {/* Imagen dentro del Box utilizando la imagen pasada por props */}
      <Box
        sx={{
          width: "100%",
          height: "350px",
          zIndex: 1, // Un zIndex más bajo que el texto
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <img
          src={image} // Usamos la imagen de las props
          alt={title}
          style={{
            width: "80%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "25px",
            zIndex: 1, // Asegúrate de que el zIndex sea menor que el del texto
          }}
        />
      </Box>

      {/* Contenido de texto */}
      <Box sx={{ position: "relative", zIndex: 2, margin: "20px 20px" }}> {/* Asegúrate de que el zIndex sea más alto */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            fontFamily: "Poppins, sans-serif",
            color: "#200E24",
            fontSize: "20px",
            marginBottom: "10px",
          }}
        >
          {title} {/* Título pasado por props */}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            width: "95%",
            fontFamily: "Poppins, sans-serif",
            color: "#200E24",
            fontSize: "14px",
          }}
        >
          {content} {/* Contenido pasado por props */}
        </Typography>
      </Box>
    </Box>
  );
}

export default TargetasTestimonio;
