import Cards from '../../../components/cards/cards.jsx';
import { Box } from '@mui/material';

const cardData = [
  {
    title: "IMPULSA TU ÉXITO CON UN SISTEMA EFECTIVO",
    number: "01",
    description: "Construye un negocio rentable y flexible utilizando un sistema diseñado para maximizar tu rendimiento. Te brindamos las herramientas necesarias para que alcances tus metas de manera efectiva.",
  },
  {
    title: "TRANSFORMA TU NEGOCIO CON HERRAMIENTAS POTENTES",
    number: "02",
    description: "Aprovecha las herramientas avanzadas a tu disposición para optimizar tus operaciones. Descubre cómo podemos facilitar tus procesos y liberar tiempo para lo que realmente importa.",
  },
  {
    title: "ESTRATEGIAS DE CRECIMIENTO ONLINE",
    number: "03",
    description: "Te ayudamos con estrategias de marketing digital efectivas para aumentar tu presencia en línea. Atrae más tráfico y convierte a los visitantes en aliados leales.",
  },
  {
    title: "CREA UNA CULTURA DE INNOVACIÓN",
    number: "04",
    description: "Fomentamos un entorno creativo que potencie el desarrollo de ideas frescas e innovadoras. Estás en una cultura organizacional donde la innovación es parte de nuestro ADN.",
  },
  {
    title: "IMPULSA TU MARCA PERSONAL",
    number: "05",
    description: "Te ayudamos a desarrollar tu marca personal para destacar en el mercado. Te enseñamos a utilizar las herramientas y estrategias a tu alcance para construir una presencia fuerte y auténtica.",
  },
  {
    title: "GANA MUCHO DINERO Y PREMIOS POR LOGROS ALCANZADOS",
    number: "06",
    description: "Somos un mundo de oportunidades. Con cada meta alcanzada, no solo incrementarás tus ingresos, sino que también te podrás llevar increíbles premios.",
  },
];

function CardHome() {
  const headerProps = {
    title: "SOMOS UN ENTORNO DE CAPITALIZACIÓN EFECTIVO",
    subtitle: "En Hitpoly, no solo ofrecemos acceso a herramientas; te brindamos un enfoque integral y personalizado. Nuestro compromiso es acompañarte en cada paso, desarrollando estrategias innovadoras y adaptadas a tus necesidades específicas para maximizar tu crecimiento y tu éxito."
  };

  return (
    <Box sx={{}}>
      <Cards
        headerProps={headerProps}
        cardData={cardData}
        headerStyles={{ padding: "0px" }} // Estilos personalizados para la cabecera
        cardStyles={{
          display: 'flex',
          borderRadius: '25px', // Bordes redondeados
        }} 
      />
    </Box>
  );
}

export default CardHome;
