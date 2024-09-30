import Button from "@mui/material/Button";

function CustomButton({ text, onClick, sx = {}, hoverStyles = {} }) {
  return (
    <Button
      onClick={onClick}
      sx={{
        borderRadius: "25px",
        padding: "9px 20px",
        border: "1px solid #200E24",
        transition: "all 0.3s ease",
        fontFamily: 'Poppins, sans-serif', 
        fontSize: "11px",
        fontWeight: 600,
        '&:hover': {
          backgroundColor: "#6F4CE0", // Default value
          borderColor: "#6F4CE0",
          color: "#fff",
          ...hoverStyles, // Override hover styles if passed as props
        },
        ...sx, // Apply any other additional styles passed as prop
      }}
    >
      {text}
    </Button>
  );
}

export default CustomButton;
