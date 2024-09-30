import { Box } from "@mui/system";
import PreguntasFrecuentes from "../../../components/preguntasFrecuentes/preguntasFrecuentes";

function PreguntasFrecuentesHome() {
  // Definir las preguntas y respuestas aquí
  const preguntas = [
    {
      pregunta: "¿Cómo puede Hitpoly ayudarme a capitalizar en internet?",
      respuesta: "Hitpoly ofrece un entorno diseñado para que aproveches tus habilidades y generes ingresos a través de la conexión con empresas que buscan soluciones digitales efectivas.",
    },
    {
      pregunta: "¿Qué beneficios obtengo al unirme a Hitpoly?",
      respuesta: "Al unirte, accedes a oportunidades de trabajo, recursos de capacitación y una comunidad de apoyo que te impulsa a crecer y alcanzar tus objetivos financieros.",
    },
    {
      pregunta: "¿Hay oportunidades ilimitadas para aumentar mis ingresos?",
      respuesta: "Sí, puedes generar ingresos de manera constante al conectar con nuevos miembros y clientes que necesitan servicios de Marketing Digital o Desarrollo IT.",
    },
    {
      pregunta: "¿Qué tipo de servicios puedo ofrecer a través de Hitpoly?",
      respuesta: "Puedes ofrecer servicios en todas las áreas de Marketing Digital y Desarrollo IT, adaptando tu propuesta a las necesidades del cliente.",
    },
    {
      pregunta: "¿Hitpoly proporciona capacitación a sus miembros?",
      respuesta: "Sí, ofrecemos formación continua para que desarrolles habilidades de marketing y maximices tus oportunidades de éxito en la plataforma.",
    },
    {
      pregunta: "¿Es fácil unirse a Hitpoly?",
      respuesta: "Unirte es simple y rápido; solo necesitas registrarte y empezar a explorar las oportunidades disponibles desde el primer día.",
    },
    {
      pregunta: "¿Cómo puedo colaborar con otros miembros en Hitpoly?",
      respuesta: "La plataforma fomenta la colaboración, permitiéndote conectar con otros profesionales para trabajar de manera conjunta y potenciar tus ingresos.",
    },
    {
      pregunta: "¿Qué tipo de apoyo recibiré como nuevo miembro?",
      respuesta: "Recibirás asistencia personalizada a todo tipo de educación de marketing, ventas y acceso a una comunidad activa dispuesta a ayudarte a alcanzar tus metas financieras.",
    },
    {
      pregunta: "¿Puedo trabajar desde cualquier lugar al ser miembro de Hitpoly?",
      respuesta: "Sí, nuestro modelo es completamente remoto, permitiéndote trabajar desde donde desees y gestionar tu propio tiempo.",
    },
    {
      pregunta: "¿Cuál es la clave para ser exitoso en Hitpoly?",
      respuesta: "Aprovechar las herramientas y la comunidad de Hitpoly es fundamental para crear un flujo constante de ingresos y lograr tus metas.",
    },
  ];

  return (
    <Box>
      <PreguntasFrecuentes preguntas={preguntas} />
    </Box>
  );
}

export default PreguntasFrecuentesHome;
