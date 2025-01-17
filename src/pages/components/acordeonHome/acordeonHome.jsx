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
    title: "IMPACTO ECONÓMICO",
    subtitle:
      "Impulsa tus ingresos con un sistema que combina tecnología y estrategias digitales. Diseñado para que obtengas resultados inmediatos mientras creas un futuro financiero sostenible. Aquí, tu éxito es parte de nuestra misión.",
    image: images.economica,
  },
  educacion: {
    title: "APRENDIZAJE TRANSFORMADOR",
    subtitle:
      "Domina habilidades digitales con programas educativos diseñados para el éxito. Aprende a gestionar herramientas innovadoras y a construir tu negocio digital con confianza, marcando un nuevo estándar en el emprendimiento.",
    image: images.educacion,
  },
  empresarial: {
    title: "COMERCIALIZA SOLUCIONES DIGITALES",
    subtitle:
      "Como parte de Hitpoly, tendrás la oportunidad de ofrecer a marcas y empresas soluciones de marketing digital y desarrollo de software, ayudándolas a capitalizar en internet de manera segura y efectiva. Además, podrás compartir esta oportunidad única, expandiendo tus ingresos y construyendo una red comercial que te llevara al camino  del éxito.",
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
