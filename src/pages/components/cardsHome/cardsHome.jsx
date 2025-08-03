import Cards from "../../../components/cards/cards.jsx";
import { Box } from "@mui/material";

const cardData = [
  {
    title: "NO VENDES, CONECTAS: TU ROL ES IMPULSAR OPORTUNIDADES",
    number: "01",
    description:
      "En Hitpoly, el setter no vende: conecta. Tu misión es identificar, filtrar y agendar prospectos de calidad para que nuestros expertos cierren las oportunidades. Tú eres el puente que impulsa el crecimiento.",
  },
  {
    title: "GANA DESDE EL PRIMER MES CON NUESTRO SISTEMA",
    number: "02",
    description:
      "Con nuestro modelo probado, puedes comenzar a generar ingresos desde el primer mes cumpliendo objetivos simples: agendar reuniones estratégicas y mantener un flujo constante de oportunidades.",
  },
  {
    title: "FORMA Y LIDERA TU PROPIO EQUIPO DE SETTERS",
    number: "03",
    description:
      "En Hitpoly no trabajas solo: a medida que te consolidas, puedes crear y liderar tu propio equipo de setters. Cada crecimiento individual se traduce en el crecimiento colectivo y en mayores ingresos.",
  },
  {
    title: "MULTIPLICA TUS GANANCIAS MIENTRAS ESCALAS",
    number: "04",
    description:
      "No solo ganas por tu trabajo, sino también por el desempeño de tu equipo. Nuestro modelo colaborativo te permite escalar tus ingresos a medida que lideras y desarrollas nuevos talentos.",
  },
  {
    title: "GUIONES, ESTRATEGIAS Y HERRAMIENTAS LISTAS PARA USAR",
    number: "05",
    description:
      "No empiezas desde cero: te entregamos estrategias claras, scripts efectivos, herramientas digitales y acompañamiento constante para que ejecutes tu rol con profesionalismo y confianza.",
  },
  {
    title: "EVOLUCIONA EN TU CARRERA DIGITAL",
    number: "06",
    description:
      "Ser setter es solo el primer paso. En Hitpoly te guiamos para que puedas evolucionar hacia el cierre de ventas o la dirección de equipos, aumentando tu impacto y tu potencial de ingresos.",
  },
];

function CardHome() {
  const headerProps = {
    title: "SISTEMA DE SETTERS HITPOLY: CONECTA, LIDERA Y CRECE",
    subtitle:
      "Genera oportunidades reales, construye tu equipo y escala tu carrera digital. En Hitpoly, tú creces, tu equipo crece y juntos capitalizamos el futuro.",
  };

  return (
    <Box sx={{}}>
      <Cards
        headerProps={headerProps}
        cardData={cardData}
        headerStyles={{ padding: "0px" }}
        cardStyles={{
          display: "flex",
          borderRadius: "25px",
        }}
      />
    </Box>
  );
}

export default CardHome;
