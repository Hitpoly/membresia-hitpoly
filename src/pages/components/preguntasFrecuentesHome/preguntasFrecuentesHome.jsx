import { Box } from "@mui/system";
import PreguntasFrecuentes from "../../../components/preguntasFrecuentes/preguntasFrecuentes";

function PreguntasFrecuentesHome() {
  // Definir las preguntas y respuestas aquí
  const preguntas = [
    {
      pregunta: "¿Qué es Hitpoly y qué ofrece a sus miembros?",
      respuesta:
        "Hitpoly es una agencia de soluciones digitales que proporciona herramientas avanzadas en marketing y desarrollo de software. Ayuda a sus miembros a generar ingresos comercializando estas soluciones, mejorando sus economías con un modelo de negocio sólido y sostenible.",
    },
    {
      pregunta: "¿Qué ventajas tiene unirse al sistema de membresías de Hitpoly?",
      respuesta:
        "El sistema de membresías de Hitpoly ofrece comisiones por ventas directas, afiliación de nuevos miembros, reactivaciones y bonos por expansión de red. Además, brinda capacitación continua y herramientas para un crecimiento digital efectivo y sostenido.",
    },
    {
      pregunta: "¿Cuáles son los niveles de suscripción disponibles?",
      respuesta:
        "Existen tres niveles de suscripción: Pro ($20), Innovación VIP ($50) y Global Premium ($80). Cada uno ofrece beneficios específicos, con mayores oportunidades de ganancias y herramientas exclusivas para maximizar el éxito.",
    },
    {
      pregunta: "¿Qué obtengo al elegir la membresía Pro?",
      respuesta:
        "La membresía Pro incluye asesoría básica en marketing digital, contenido para redes sociales y acceso a una comunidad de soporte. Además, ofrece comisiones por ventas y bonos adicionales, ideales para quienes inician en el mundo digital.",
    },
    {
      pregunta: "¿Qué beneficios adicionales incluye la membresía Innovación VIP?",
      respuesta:
        "Innovación VIP ofrece una estrategia de marketing personalizada, embudos de venta, una tienda online, mentorías y acceso a cursos avanzados. También incluye los beneficios de la suscripción Pro, con ventajas adicionales para un crecimiento más rápido.",
    },
    {
      pregunta: "¿Qué incluye la membresía Global Premium?",
      respuesta:
        "La membresía Global Premium incluye todo lo de Innovación VIP, más asesorías personalizadas, un plan de marketing trimestral, acceso a una biblioteca educativa y un calendario de contenido mensual para asegurar el éxito continuo.",
    },
    {
      pregunta: "¿Cómo se calculan las comisiones por ventas directas?",
      respuesta:
        "Las comisiones por ventas directas dependen del nivel de suscripción: Pro (10%), Innovación VIP (15%) y Global Premium (25%). Estos porcentajes son aplicados sobre el valor del servicio vendido, aumentando con cada nivel superior.",
    },
    {
      pregunta: "¿Puedo obtener ingresos por afiliados?",
      respuesta:
        "Sí, puedes obtener comisiones por cada nuevo afiliado que refieras. La tasa de comisión depende de tu nivel de suscripción, y también se aplican bonos adicionales por cada afiliado activo en tu red, aumentando tus ganancias.",
    },
    {
      pregunta: "¿Existen comisiones recurrentes en Hitpoly?",
      respuesta:
        "Sí, las membresías generan comisiones recurrentes mensuales por servicios vendidos: 3% para Pro, 4% para Innovación VIP, y 5% para Global Premium. Esto asegura ingresos continuos y crecimiento sostenido para los miembros.",
    },
    {
      pregunta: "¿Qué es el Bono de Expansión de Red?",
      respuesta:
        "El Bono de Expansión de Red es un bono adicional por la expansión de tu red de afiliados. Puedes ganar puntos al reclutar nuevos miembros activos en el plan Innovación VIP, lo que incrementa tus ingresos y mejora tu posición.",
    },
    {
      pregunta: "¿Cómo funciona la reactivación mensual?",
      respuesta:
        "La reactivación mensual cuesta $15 y es obligatoria para mantener tu estatus dentro de Hitpoly. Esto permite seguir generando comisiones y continuar con el acceso a todas las herramientas y beneficios del sistema.",
    },
    {
      pregunta: "¿Qué incentivos tengo para reactivar a mis afiliados?",
      respuesta:
        "Por cada reactivación mensual de tus afiliados, recibirás comisiones en profundidad: un 5% en el primer nivel, 4% en el segundo, y así sucesivamente hasta el quinto nivel. Esto incentiva a mantener activa tu red.",
    },
    {
      pregunta: "¿Cuánto puedo ganar con el Bono de Afiliación?",
      respuesta:
        "El Bono de Afiliación varía según el nivel y suscripción. Los bonos por nivel pueden sumar hasta un 55% en Global Premium, lo que representa una gran oportunidad de ganancias al expandir tu red de afiliados.",
    },
    {
      pregunta: "¿Es posible combinar varias fuentes de ingresos en el sistema?",
      respuesta:
        "Sí, puedes combinar ingresos por ventas directas, afiliaciones, reactivaciones, bonos por incentivar ventas y comisiones recurrentes. Esta diversificación te permite maximizar tus ingresos y lograr un crecimiento exponencial.",
    },
    {
      pregunta: "¿Hitpoly ofrece soporte para desarrollar mis habilidades?",
      respuesta:
        "Sí, Hitpoly ofrece acceso a asesorías y mentorías en todos sus planes. El nivel Global Premium incluye cuatro asesorías personalizadas al mes, asegurando un crecimiento continuo y el perfeccionamiento de tus habilidades.",
    },
    {
      pregunta: "¿Cuál es el tiempo de pago de las comisiones?",
      respuesta:
        "Las comisiones y bonos se liquidan todos los viernes de cada semana, de acuerdo al tipo de comisión o bono generado en tu red. Este sistema de pagos semanal garantiza la constancia y rapidez en tus ganancias.",
    },
    {
      pregunta: "¿Qué tipo de capacitación está disponible para los afiliados?",
      respuesta:
        "Hitpoly ofrece cursos avanzados en marketing digital, asesorías y mentorías personalizadas. Además, los miembros VIP y Premium tienen acceso a una biblioteca educativa con más de 20 cursos, garantizando formación continua.",
    },
    {
      pregunta: "¿Cómo contribuye Hitpoly al desarrollo personal y profesional de los afiliados?",
      respuesta:
        "Hitpoly apoya el crecimiento de sus afiliados a través de un sistema de bonificaciones, mentorías y una comunidad de apoyo que ayuda a maximizar el potencial de cada miembro. Esto contribuye tanto al desarrollo personal como profesional.",
    },
    {
      pregunta: "¿La membresía requiere algún tipo de experiencia previa en marketing digital?",
      respuesta:
        "No es necesario tener experiencia previa en marketing digital. Hitpoly proporciona la capacitación, asesorías y recursos necesarios para ayudarte a comprender y dominar el sistema y el mercado digital de manera efectiva.",
    },
    {
      pregunta: "¿Por qué elegir Hitpoly sobre otras plataformas de membresía?",
      respuesta:
        "Hitpoly se diferencia por su plan de compensación Unilevel Híbrido, que permite generar ingresos no solo por ventas directas, sino también por afiliaciones, reactivaciones, y expansión de red. Su compromiso con la educación y soporte personalizado asegura el éxito a largo plazo.",
    },
  ];
  

  return (
    <Box>
      <PreguntasFrecuentes preguntas={preguntas} />
    </Box>
  );
}

export default PreguntasFrecuentesHome;
