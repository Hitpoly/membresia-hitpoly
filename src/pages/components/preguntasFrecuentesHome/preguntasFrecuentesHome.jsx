import { Box } from "@mui/system";
import PreguntasFrecuentes from "../../../components/preguntasFrecuentes/preguntasFrecuentes";

function PreguntasFrecuentesHome() {
  const preguntas = [
    {
      pregunta: "¿Qué es el sistema de Setters de Hitpoly?",
      respuesta:
        "Es un modelo diseñado para generar oportunidades reales de negocio. Los setters no venden, sino que conectan prospectos con soluciones digitales de alto impacto, convirtiéndose en el puente entre quienes buscan crecer y las herramientas que necesitan.",
    },
    {
      pregunta: "¿Necesito experiencia previa para ser parte?",
      respuesta:
        "No. Nuestro sistema está pensado para que cualquier persona, incluso sin experiencia, pueda empezar. Recibirás capacitación práctica, guiones listos para usar y acompañamiento constante de nuestro equipo y comunidad.",
    },
    {
      pregunta: "¿Cómo puedo ganar dinero como setter?",
      respuesta:
        "Generas ingresos conectando prospectos de calidad con nuestros closers. A medida que agendas reuniones exitosas, aumentan tus ganancias. Además, puedes formar tu propio equipo de setters y escalar tus ingresos exponencialmente.",
    },
    {
      pregunta: "¿Cuánto tiempo necesito dedicarle?",
      respuesta:
        "El sistema es flexible: puedes empezar dedicando unas pocas horas al día y aumentar tu tiempo conforme crezcas. Entre más te comprometas con el proceso, mayores serán tus resultados y tus ingresos.",
    },
    {
      pregunta: "¿Puedo formar un equipo propio?",
      respuesta:
        "Sí. No solo trabajas para ti, sino que también puedes construir y liderar tu propio equipo de setters. Esto te permite multiplicar tus ganancias mientras impulsas el crecimiento de otros.",
    },
    {
      pregunta: "¿Qué apoyo recibiré de Hitpoly?",
      respuesta:
        "Te damos todo lo necesario para comenzar: guiones probados, estrategias efectivas, herramientas digitales y mentorías para que ejecutes tu rol como un SETTER DE ÉLITE desde el primer día.",
    },
    {
      pregunta: "¿Cuándo comenzaré a ver resultados?",
      respuesta:
        "Depende de tu compromiso, pero nuestro modelo está diseñado para que puedas comenzar a generar ingresos desde el primer mes, incluso mientras aprendes y perfeccionas tus habilidades.",
    },
    {
      pregunta: "¿Cómo se pagan las comisiones?",
      respuesta:
        "Las comisiones se liquidan inmediatamente despues de generarse una VENTA, lo que te permite recibir tus ganancias de manera constante y segura, acompañando tu crecimiento en tiempo real.",
    },
    {
      pregunta: "¿Qué diferencia a Hitpoly de otros programas?",
      respuesta:
        "Hitpoly combina capacitación práctica, un modelo colaborativo y herramientas listas para usar, para que no solo generes ingresos, sino que crezcas profesionalmente en el mundo digital y desarrolles habilidades de liderazgo.",
    },
    {
      pregunta: "¿Qué pasa si tengo dudas durante el proceso?",
      respuesta:
        "Contarás con soporte directo a través de chats con el tutor, sesiones grupales y nuestra comunidad privada, donde podrás resolver dudas, compartir avances y aprender de otros setters como tú.",
    },
  ];

  return (
    <Box>
      <PreguntasFrecuentes preguntas={preguntas} />
    </Box>
  );
}

export default PreguntasFrecuentesHome;
