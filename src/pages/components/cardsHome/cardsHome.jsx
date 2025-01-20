import Cards from "../../../components/cards/cards.jsx";
import { Box } from "@mui/material";

const cardData = [
  {
    title: "¡GANA DINERO DESDE EL MES 1 CON EL SISTEMA MÁS INNOVADOR!",
    number: "01",
    description:
      "Únete a nuestra red global y empieza a ganar dinero desde el primer mes. Con nuestro sistema único de marketing digital, tendrás todo lo necesario para comenzar. No necesitas experiencia previa, solo compromiso y el respaldo de nuestra plataforma.",
  },
  {
    title: "GENERA INGRESOS AUTOMÁTICOS CON ESTRATEGIAS DIGITALES AVANZADAS",
    number: "02",
    description:
      "Usa nuestras herramientas exclusivas para captar clientes y generar ventas. Con campañas automáticas y contenido listo para usar, tendrás todo lo necesario para aumentar tus ingresos sin perder tiempo en lo complicado.",
  },
  {
    title: "CRECE EN LA INDUSTRIA DIGITAL Y MULTIPLICA TUS GANANCIAS",
    number: "03",
    description:
      "Es el momento de construir tu propio imperio digital. Con nuestra capacitación y soporte, aprenderás a atraer clientes y liderar tu equipo, generando ingresos pasivos con una estructura simple pero potente.",
  },
  {
    title: "CONVIÉRTETE EN UN LÍDER Y MULTIPLICA TUS OPORTUNIDADES DE GANAR",
    number: "04",
    description:
      "Gana dinero no solo por tu trabajo, sino también por el esfuerzo de tu equipo. Conviértete en líder, enseña a tu red a tener éxito y genera ingresos pasivos mientras otros crecen junto a ti.",
  },
  {
    title: "CREA UNA MARCA PERSONAL Y CONQUISTA EL MERCADO",
    number: "05",
    description:
      "Construye una presencia digital única y destaca como líder en marketing multinivel. Te enseñamos a crear tu marca personal, atraer seguidores leales y convertirte en un referente en tu industria.",
  },
  {
    title: "GANANCIAS EXPONENCIALES Y PREMIOS POR CADA LOGRO",
    number: "06",
    description:
      "Cada paso que das te acerca más a mayores ingresos. No solo ganarás dinero por tus ventas, sino que también recibirás premios exclusivos por alcanzar tus metas. Tu esfuerzo será recompensado de forma continua.",
  },
];


function CardHome() {
  const headerProps = {
    title: "SOMOS UN ENTORNO DE CAPITALIZACIÓN SEGURA",
    subtitle:
      "En Hitpoly, no solo ofrecemos acceso a herramientas; te brindamos un enfoque integral y personalizado. Nuestro compromiso es acompañarte en cada paso, desarrollando estrategias innovadoras y adaptadas a tus necesidades específicas para maximizar tu crecimiento y tu éxito.",
  };

  return (
    <Box sx={{}}>
      <Cards
        headerProps={headerProps}
        cardData={cardData}
        headerStyles={{ padding: "0px" }} // Estilos personalizados para la cabecera
        cardStyles={{
          display: "flex",
          borderRadius: "25px", // Bordes redondeados
        }}
      />
    </Box>
  );
}

export default CardHome;
