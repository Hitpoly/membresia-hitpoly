import AddIcon from "@mui/icons-material/Add";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";
import React from "react";

const PreguntasFrecuentes = ({ preguntas }) => {
  return (
    <Container
      maxWidth="md"
      sx={{
        padding: { xs: "10px", sm: "20px" }, // Responsive padding
        borderRadius: "10px",
        color: "white", // Text color
      }}
    >
      <Box textAlign="center" sx={{ mb: 5 }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "#200E24",
            fontWeight: "bold",
            fontSize: { xs: "28px", sm: "36px", md: "40px" }, // Responsive font size
          }}
        >
          ¿TIENES PREGUNTAS? <br /> ¡TENEMOS RESPUESTAS!
        </Typography>
      </Box>

      {preguntas.map((item, index) => (
        <Accordion
          key={index}
          sx={{
            backgroundColor: "#6F4CE0",
            color: "white",
            mb: 2,
            borderRadius: "10px",
            border: "1px solid #200E24",
          }}
        >
          <AccordionSummary
            expandIcon={
              <AddIcon
                sx={{
                  color: "#ffffff",
                  backgroundColor: "#8C2DCC",
                  borderRadius: "20%",
                  padding: "0px",
                }}
              />
            }
          >
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontSize: { xs: "14px", sm: "15px" }, // Responsive font size
              }}
            >
              {item.pregunta}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontSize: { xs: "12px", sm: "14px" }, // Responsive font size
              }}
            >
              {item.respuesta}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default PreguntasFrecuentes;
