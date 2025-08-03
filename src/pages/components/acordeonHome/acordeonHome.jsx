import { Box } from "@mui/system";
import Acordeon from "../../../components/acordeon/acordeon";

// Importa las imágenes directamente
import imagenEconomica from "../../../assets/reactivacionEconomica.jpg";
import imagesEducacion from "../../../assets/educacionParaElFuturo.jpg";
import imagesEmpresarial from "../../../assets/crecimientoEmpresarial.jpg";

const images = {
  economica: imagenEconomica,
  educacion: imagesEducacion,
  empresarial: imagesEmpresarial,
};

const tabs = {
  economica: {
    title: "LAS COMISIONES MÁS ALTAS DE LATINOAMÉRICA",
    subtitle:
      "Como Setter de Élite puedes ganar hasta el 30% de la facturación total en cada oportunidad que generes. Sin límites, sin competencia interna y con total respaldo: el primero que registra al prospecto se queda con la comisión. Aquí tu tiempo vale y tus contactos se convierten en dinero real.",
    image: images.economica,
  },
  educacion: {
    title: "TECNOLOGÍA Y FORMACIÓN DE OTRO NIVEL",
    subtitle:
      "Tendrás acceso a nuestro CRM, sistema de afiliados, tecnologías exclusivas, programas de capacitación y mentorías para que aprendas a identificar oportunidades en cualquier sector. Te impulsamos con bonos, regalías, premios por alcanzar metas y una cultura emprendedora diseñada para que capitalices tus conocimientos en internet.",
    image: images.educacion,
  },
  empresarial: {
    title: "VENDE LO QUE QUIERAS, CON EL RESPALDO DE HITPOLY",
    subtitle:
      "Servicios, soluciones y productos de alto valor: marketing, ventas, desarrollo de tecnologías digitales y más. Tú generas el contacto, nosotros cerramos la venta y tú cobras. Un ecosistema completo para que vivas de encontrar personas con problemas y guiarlas hacia la solución, mientras escalas tus ingresos sin techo.",
    image: images.empresarial,
  },
};


const containerStyles = {};
const buttonStyles = {};
const contentStyles = {};

function AcordeonHome() {
  return (
    <Box sx={{ height: "100%" }}>
      <Acordeon
        tabs={tabs}
        containerStyles={containerStyles}
        buttonStyles={buttonStyles}
        contentStyles={contentStyles}
      />
    </Box>
  );
}

export default AcordeonHome;
