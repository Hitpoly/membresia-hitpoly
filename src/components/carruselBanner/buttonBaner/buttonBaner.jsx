import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; // Importa el ícono
import { Box, Button } from "@mui/material";

function ButtonBaner({ text, href, buttonStyles }) {
  return (
    <Box>
      <Button
        href={href}
        sx={{
          backgroundColor: "#fff",
          width: "100%",
          color: "#6F4CE0",
          display: "flex",
          alignItems: "center",
          borderRadius: "25px",
          padding: "3px 20px",
          paddingLeft: "5px",
          fontSize: "15px",
          fontWeight: 600,
          textTransform: "none",
          zIndex: 2,
          pointerEvents: "click",
          transition: "background-color 0.3s ease, color 0.3s ease",
          "&:hover": {
            backgroundColor: "#6F4CE0",
            color: "#fff",
            "& .circle": {
              backgroundColor: "#fff", // Cambia el color de fondo del círculo al hacer hover
            },
            "& .icon": {
              color: "#6F4CE0", // Cambia el color del ícono al hacer hover
            },
          },
          ...buttonStyles,
        }}
      >
        <Box
          className="circle"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "35px",
            height: "35px",
            borderRadius: "50%",
            backgroundColor: "#6F4CE0",
            marginRight: "15px",
            transition: "background-color 0.3s ease",
          }}
        >
          <ArrowForwardIcon
            className="icon"
            sx={{ color: "white", transition: "color 0.3s ease" }}
          />
        </Box>
        {text}
      </Button>
    </Box>
  );
}

export default ButtonBaner;
