import CabeceraSoluciones from "./cabecera/cabecera";
import Targeta from "./targetas/targetas";
import { Box } from "@mui/material";
import PropTypes from 'prop-types';

function Cards({ headerProps, cardData, headerStyles, cardStyles }) {
  return (
    <Box sx={{ width: "100%" }}>
      {/* Cabecera con título y subtítulo */}
      <CabeceraSoluciones
        title={headerProps.title}
        subtitle={headerProps.subtitle}
        customStyles={headerStyles} // Estilos personalizados para la cabecera
      />
      <Box
        sx={{
          paddingTop: "50px",
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr', // 1 columna para pantallas muy pequeñas
            sm: 'repeat(1, 1fr)', // 2 columnas para pantallas pequeñas
            md: 'repeat(2, 1fr)', // 3 columnas para pantallas medianas
            lg: 'repeat(3, 1fr)', // 4 columnas para pantallas grandes
          },
          gap: '55px', // Espacio entre las tarjetas
          justifyItems: 'center', // Alinear las tarjetas horizontalmente
        }}
      >
        {/* Mapeo de datos para generar las tarjetas */}
        {cardData.map((card, index) => (
          <Targeta
            key={index}
            title={card.title}
            number={card.number}
            description={card.description}
            customStyles={{
              ...cardStyles,
              height: 'auto', // La tarjeta ocupará el alto del contenedor del grid
              width: '100%', // La tarjeta ocupará el ancho del contenedor del grid
              maxWidth: { xs: '400px', sm: '600px' }, // Limitar el ancho máximo para evitar tarjetas demasiado grandes
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

Cards.propTypes = {
  headerProps: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
  cardData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  headerStyles: PropTypes.object,
  cardStyles: PropTypes.object,
};

export default Cards;
