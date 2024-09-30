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
    title: "REACTIVACIÓN ECONÓMICA",
    subtitle:
      "Ya sea que estés comenzando o busques expandir tus horizontes, ofrecemos las herramientas necesarias para que empieces a capitalizar de inmediato. Comparte la oportunidad con otros y genera ingresos pasivos al instante por afiliar a nuevos miembros. Aquí, tu éxito es nuestro compromiso.",
    image: images.economica,
  },
  educacion: {
    title: "EDUCACIÓN PARA EL FUTURO",
    subtitle:
      "Desarrollamos programas educativos innovadores que te enseñan a gestionar tu propia agencia de soluciones digitales. Aprende a utilizar nuestra producción y maximiza tus oportunidades de crecimiento en un entorno seguro y eficiente. Conviértete en un experto y ayuda a otros a hacer lo mismo.",
    image: images.educacion,
  },
  empresarial: {
    title: "CRECIMIENTO EMPRESARIAL",
    subtitle:
      "Somos un ecosistema de crecimiento colaborativo: las marcas se benefician de soluciones digitales eficientes, mientras que los productores y comercializadores capitalizan en el mercado digital. Al final, todos avanzamos juntos hacia el éxito, en un modelo donde cada afiliado aporta y se beneficia del crecimiento colectivo.",
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
