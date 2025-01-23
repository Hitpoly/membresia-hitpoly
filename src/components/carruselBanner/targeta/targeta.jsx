import { Box, Typography } from "@mui/material";
import { useState } from "react"; // Importa useState
import ButtonBaner from "../buttonBaner/buttonBaner.jsx"; // Cambiar a .jsx si es necesario
import VideoModal from "../../../pages/components/emergentes/videoemergente.jsx"; // Importar el componente VideoModal

function Targeta({ title, subtitle }) {
  const [open, setOpen] = useState(false); // Estado para abrir/cerrar el modal

  // Función que maneja el clic en el botón
  const manejarClic = () => {
    setOpen(true); // Cambiar el estado a true para abrir el modal
  };

  // Función para cerrar el modal
  const cerrarModal = () => {
    setOpen(false); // Cambiar el estado a false para cerrar el modal
  };

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
          fontSize: { xs: "30px", sm: "30px", md: "35px", lg: "40px" },
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
          fontSize: { xs: "1rem", md: "1rem" },
        }}
      >
        {subtitle}
      </Typography>
      <ButtonBaner
        text="Ver más"
        onClick={manejarClic} // Llamada a la función al hacer clic
        buttonStyles={{ marginTop: "10px" }}
      />

      {/* Renderizamos VideoModal cuando el estado es true */}
      <VideoModal
        open={open}
        onClose={cerrarModal} // Pasamos la función para cerrar el modal
        videoUrl="https://www.youtube.com/embed/ADLdqwDCS1A" // URL del video
        title="Somos el primer sistema de network marketing basado en soluciones de Marketing Digital y desarrollo de software."
        description="Ayudamos a que profesionales como tú, puedan capitalizar en internet, ayudando a que tanto marcas y empresas puedan crecer de forma sostenible en esta nueva era digital"
      />
    </Box>
  );
}

export default Targeta;
