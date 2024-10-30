import { Box } from "@mui/system";
import PreguntasFrecuentes from "../../../components/preguntasFrecuentes/preguntasFrecuentes";

function PreguntasFrecuentesHome() {
  // Definir las preguntas y respuestas aquí
  const preguntas = [
    {
      pregunta: "¿Qué es Hitpoly y qué ofrece a sus miembros?",
      respuesta: "Hitpoly es una agencia de soluciones digitales que ofrece a sus miembros herramientas y servicios avanzados en marketing digital y desarrollo de software para ayudarles a generar ingresos comercializando estas soluciones para marcas y empresas, mientras mejoran sus economías con un modelo de negocio solido y sostenible.",
    },
    {
      pregunta: "¿Qué ventajas tiene unirse al sistema de membresías de Hitpoly?",
      respuesta: "El sistema de membresías de Hitpoly permite a los miembros obtener ingresos a través de comisiones por ventas directas, por afiliación de nuevos miembros, por reactivación, por ayudar a que tus afiliados vendan, comisiones recurrentes y bonos por expansión de red, además de ofrecer capacitación continua y herramientas de crecimiento digital.",
    },
    {
      pregunta: "¿Cuáles son los niveles de suscripción disponibles?",
      respuesta: "Hay tres niveles de suscripción: Pro ($20), Innovación VIP ($50) y Global Premium ($80), cada uno con beneficios específicos y mayores oportunidades de ganancias.",
    },
    {
      pregunta: "¿Qué obtengo al elegir la membresía Pro?",
      respuesta: "La membresía Pro incluye asesoría básica en marketing digital, contenido para redes sociales, y acceso a una comunidad de soporte. Además, ofrece comisiones por ventas y bonos adicionales.",
    },
    {
      pregunta: "¿Qué beneficios adicionales incluye la membresía Innovación VIP?",
      respuesta: "Innovación VIP ofrece una estrategia de marketing personalizada, embudos de venta, una tienda online, mentorías y acceso a cursos avanzados en marketing, además de los beneficios de la suscripción Pro.",
    },
    {
      pregunta: "¿Qué incluye la membresía Global Premium?",
      respuesta: "La membresía Global Premium incluye todo lo de Innovación VIP, con beneficios añadidos como asesorías personalizadas, un plan de marketing trimestral, acceso a una biblioteca educativa y un calendario de contenido mensual.",
    },
    {
      pregunta: "¿Cómo se calculan las comisiones por ventas directas?",
      respuesta: "Las comisiones por ventas directas varían según la suscripción: Pro (10%), Innovación VIP (15%) y Global Premium (25%) del valor del servicio vendido.",
    },
    {
      pregunta: "¿Puedo obtener ingresos por afiliados?",
      respuesta: "Sí, puedes ganar comisiones al referir nuevos afiliados. La tasa depende de tu nivel de suscripción, y se aplican bonos adicionales por cada nuevo afiliado activo en la red.",
    },
    {
      pregunta: "¿Existen comisiones recurrentes en Hitpoly?",
      respuesta: "Sí, cada membresía genera comisiones recurrentes mensuales por servicios vendidos: 3% para Pro, 4% para Innovación VIP, y 5% para Global Premium.",
    },
    {
      pregunta: "¿Qué es el Bono de Expansión de Red?",
      respuesta: "Es un bono adicional por la expansión de tu red de afiliados. Por ejemplo, puedes ganar puntos al reclutar miembros activos en el plan Innovación VIP en tu primer y segundo nivel.",
    },
    {
      pregunta: "¿Cómo funciona la reactivación mensual?",
      respuesta: "La reactivación mensual es obligatoria y cuesta $15. Esto permite a los miembros seguir generando comisiones y mantener el estatus dentro de Hitpoly.",
    },
    {
      pregunta: "¿Qué incentivos tengo para reactivar a mis afiliados?",
      respuesta: "Obtienes comisiones por cada reactivación mensual en profundidad: un 5% en el primer nivel, 4% en el segundo nivel, y así sucesivamente hasta el quinto nivel.",
    },
    {
      pregunta: "¿Cuánto puedo ganar con el Bono de Afiliación?",
      respuesta: "Con el Bono de Afiliación, las ganancias varían por suscripción y nivel. Los bonos por nivel pueden sumar hasta un 55% en Global Premium, lo que representa una alta ganancia por expansión.",
    },
    {
      pregunta: "¿Es posible combinar varias fuentes de ingresos en el sistema?",
      respuesta: "Sí, puedes combinar ventas directas, afiliaciones, reactivaciones, bonos por incentivar a la venta, comisiones recurrentes y bonos de expansión para maximizar tus ingresos.",
    },
    {
      pregunta: "¿Hitpoly ofrece soporte para desarrollar mis habilidades?",
      respuesta: "Sí, cada plan incluye acceso a asesorías y mentorías, y el nivel Global Premium proporciona cuatro asesorías personalizadas al mes para crecimiento continuo.",
    },
    {
      pregunta: "¿Cuál es el tiempo de pago de las comisiones?",
      respuesta: "Las comisiones y bonos se liquidan todos los dias viernes de cada semana, según el tipo de comisión o bono generado en tu red.",
    },
    {
      pregunta: "¿Qué tipo de capacitación está disponible para los afiliados?",
      respuesta: "Hitpoly ofrece acceso a cursos avanzados en marketing, asesorías, mentorías y una biblioteca educativa con más de 20 cursos para miembros VIP y Premium.",
    },
    {
      pregunta: "¿Cómo contribuye Hitpoly al desarrollo personal y profesional de los afiliados?",
      respuesta: "Hitpoly fomenta el emprendimiento y el crecimiento de los miembros a través de un sistema de bonificaciones, asesorías y acceso a una comunidad de apoyo que ayuda a maximizar su potencial y resultados.",
    },
    {
      pregunta: "¿La membresía requiere algún tipo de experiencia previa en marketing digital?",
      respuesta: "No es necesario tener experiencia previa. Hitpoly ofrece capacitación, asesorías y recursos para ayudarte a entender el sistema y el mercado digital.",
    },
    {
      pregunta: "¿Por qué elegir Hitpoly sobre otras plataformas de membresía?",
      respuesta: "Hitpoly destaca por su plan de compensación Unilevel Híbrido, que ofrece ingresos no solo por ventas directas, sino también por, afiliaciones, reactivaciones, ayudar a que tus miembros vendan y expansión de red. Su compromiso con la educación continua y el soporte personalizado hace de Hitpoly una opción sólida para quienes buscan crecimiento profesional y generación de ingresos.",
    },
  ];

  return (
    <Box>
      <PreguntasFrecuentes preguntas={preguntas} />
    </Box>
  );
}

export default PreguntasFrecuentesHome;
