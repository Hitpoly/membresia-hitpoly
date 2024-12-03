import { Box, Typography } from "@mui/material";
import PropTypes from 'prop-types';

function Targeta({ title, number, description, customStyles }) {
  return (
    <Box
      sx={{
        color: "white",
        height: '280px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#800080',
        position: 'relative',
        borderRadius: '25px',
        ...customStyles,
        padding: '30px 20px',
        overflow: 'hidden',
        transition: 'transform 0.9s ease, all 0.9s ease', // Transición para transformación suave
        '&:hover': {
          height: '300px',
          transform: 'scale(1.01)', // Escala suave para agrandar el tamaño de la tarjeta sin afectar otras
          '& .description': {
            borderRadius: "25px",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            position: "absolute",
            right: "0px",
            textAlign: "center",
            width: "100%",
            height: "55%",
            bottom: "0px",
            backgroundColor: 'white',
            color: '#200E24',
            transition: 'transform 0.3s ease', // Transición para la descripción
          },
          '& .title': {
            transform: 'translateY(-20px)',
            transition: 'transform 0.3s ease', // Transición para el título
          },
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          bottom: 150,
          right: -150,
          width: '250px',
          height: '250px',
          transition: 'all 0.3s ease',
          background: 'radial-gradient(circle, #A018BF, #6F4CE0)',
          borderRadius: '50%',
          filter: 'blur(50px)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 150,
          left: -150,
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, #A018BF, #6F4CE0)',
          borderRadius: '50%',
          filter: 'blur(50px)',
          zIndex: 0,
        }}
      />

      <Box
        className="title"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          zIndex: 1,
          transition: 'transform 0.9s ease',
          flexWrap: 'wrap',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            fontFamily: 'Poppins, sans-serif',
            fontSize: "16px",
            maxWidth: "50%",
            overflowWrap: 'break-word',
            transition: 'all 0.9s ease',
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontSize: '6rem',
            fontWeight: 'bold',
            fontFamily: 'Poppins, sans-serif',
            transition: 'all 0.6s ease',
          }}
        >
          {number}
        </Typography>
      </Box>

      <Box className="description" sx={{ zIndex: 1, borderRadius: "25px", transition: 'transform 0.9s ease' }}>
        <Typography variant="subtitle1" sx={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: "14px",
          padding: "0px 25px",
        }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

Targeta.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  customStyles: PropTypes.object,
};

export default Targeta;
