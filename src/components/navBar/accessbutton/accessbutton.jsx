import { Box } from "@mui/material";

const AccessButton = ({ text, onClick }) => (
  <Box
    sx={{
      backgroundColor: "#8A6FF9",
      boxShadow: 2,
      borderRadius: "25px",
      margin: "0 20px",
      padding: "0 20px",
      transition: "background-color 0.3s, color 0.3s", // Smooth transition
      "&:hover": {
        backgroundColor: "#6F4CE0",
        color: "white",
      },
    }}
    onClick={onClick}
  >
    <Box
      sx={{
        padding: "11px 15px",
        textAlign: "center",
        cursor: "pointer",
        fontFamily: "Poppins, sans-serif",
        fontSize: "11px",
        textTransform: "uppercase", // Converts text to uppercase
        fontWeight: 600,
      }}
    >
      {text}
    </Box>
  </Box>
);

export default AccessButton;
