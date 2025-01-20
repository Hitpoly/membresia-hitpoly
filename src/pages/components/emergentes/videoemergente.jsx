import React from "react";
import { Box, Button, Typography, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import VideoPersonalizado from "../../../components/videos/videoDeYoutube"; // Importa tu componente de video

const VideoModal = ({ open, onClose, videoUrl, title, description }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: "70%", md: "50%" },
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: 2,
          overflow: "hidden",
          p: 3,
          color: "black"
        }}
      >
        {/* Cerrar */}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Video */}
        <VideoPersonalizado url={videoUrl} borderRadius={8} />

        {/* Título */}
        <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
          {title}
        </Typography>

        {/* Descripción */}
        <Typography variant="body1" sx={{ mt: 1, mb: 2 }}>
          {description}
        </Typography>

        {/* Botón para cerrar */}
        <Button variant="outlined" color="secondary" onClick={onClose} fullWidth>
          Cerrar
        </Button>
      </Box>
    </Modal>
  );
};

export default VideoModal;
