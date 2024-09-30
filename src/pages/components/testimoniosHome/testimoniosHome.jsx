import { useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import TituloColumn from "../../../components/titulos/tituloscolumn/tituloscolumn.jsx";
import Butoons from "../../../components/buttons/buttons.jsx";
import TargetasTestimonio from "../../../components/tarjetas/tarjetasTestimonios/targetasTestimonios.jsx";

// Importación de imágenes locales
import juanImage from "../../../assets/testimonio-2.png";
import mariaImage from "../../../assets/testimonio-1.png";
import pedroImage from "../../../assets/testimonio-4.png";
import anaImage from "../../../assets/testimonio-3.png";
import luisImage from "../../../assets/testimonio-6.png";
import carlaImage from "../../../assets/testimonio-5.png";
import sofiaImage from "../../../assets/testimonio-7.png";
import javierImage from "../../../assets/testimonio-8.png";
import luciaImage from "../../../assets/testimonio-9.png";

// Array de testimonios con imágenes locales
const testimoniosData = [
  {
    title: "Testimonio de Juan",
    content:
      "Gracias a Hitpoly, he podido implementar un modelo tecnológico innovador que me ha permitido reactivar mi negocio y generar más ingresos.",
    image: juanImage,
  },
  {
    title: "Testimonio de María",
    content:
      "El apoyo de Hitpoly fue fundamental. Juntos, hemos desarrollado estrategias que no solo benefician a mi empresa, sino que también impulsan la economía local.",
    image: mariaImage,
  },
  {
    title: "Testimonio de Pedro",
    content:
      "Con Hitpoly, encontré la colaboración perfecta. Su enfoque innovador me ayudó a ejecutar mi talento y expandir mis oportunidades de negocio.",
    image: pedroImage,
  },
  {
    title: "Testimonio de Ana",
    content:
      "La ayuda de Hitpoly transformó mi forma de trabajar. Ahora, estoy viendo resultados tangibles y una mejora en mis ganancias.",
    image: anaImage,
  },
  {
    title: "Testimonio de Luis",
    content:
      "El enfoque personalizado de Hitpoly me permitió adaptarme a los cambios del mercado y maximizar mis resultados económicos.",
    image: luisImage,
  },
  {
    title: "Testimonio de Carla",
    content:
      "Gracias a Hitpoly, he aprendido a colaborar mejor con otros negocios, lo que ha llevado a un crecimiento sostenible para todos nosotros.",
    image: carlaImage,
  },
  {
    title: "Testimonio de Sofia",
    content:
      "El sistema innovador de Hitpoly me dio la oportunidad de diversificar mis ingresos y mejorar mi competitividad en el mercado.",
    image: sofiaImage,
  },
  {
    title: "Testimonio de Javier",
    content:
      "La experiencia con Hitpoly ha sido inolvidable. Su apoyo ha sido clave para reactivar mi negocio y hacer crecer mis ventas.",
    image: javierImage,
  },
  {
    title: "Testimonio de Lucia",
    content:
      "Recomiendo Hitpoly a todos mis colegas. Su enfoque innovador y colaborativo ha transformado nuestras operaciones económicas.",
    image: luciaImage,
  },
];

function TestimoniosHome() {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const isMedium = useMediaQuery(theme.breakpoints.up("md"));
  const isSmall = useMediaQuery(theme.breakpoints.up("sm"));

  // Determine the number of visible cards based on the screen size
  const visibleCount = isLarge ? 3 : isMedium || isSmall ? 2 : 1;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimoniosData.length - visibleCount : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev >= testimoniosData.length - visibleCount ? 0 : prev + 1
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        padding: { xs: "20px", md: "20px 100px", lg: "20px 180px" },
        overflow: "hidden",
      }}
    >
      {/* Sección de Título y Botones */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 4,
          flexDirection: { xs: "column", md: "row" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <TituloColumn />
        <Box sx={{ marginTop: { xs: "20px", md: "0" } }}>
          <Butoons onPrev={handlePrev} onNext={handleNext} />
        </Box>
      </Box>

      {/* Contenedor para las tarjetas en fila */}
      <Box
        sx={{
          display: "flex",
          gap: 4,
          width: "100%",
          transition: "transform 0.5s ease-out",
          overflow: "hidden",
          flexWrap: { xs: "wrap", md: "nowrap" },
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        {testimoniosData
          .slice(currentIndex, currentIndex + visibleCount)
          .map((testimonio, index) => (
            <Box
              key={index}
              sx={{
                width: {
                  xs: "100%",
                  sm: visibleCount === 2 ? "40%" : "80%", // Use 48% for two cards
                  md: visibleCount === 2 ? "48%" : "30%", // 2 tarjetas en tablet, 3 en desktop
                },
              }}
            >
              <TargetasTestimonio
                title={testimonio.title}
                content={testimonio.content}
                image={testimonio.image}
              />
            </Box>
          ))}
      </Box>
    </Box>
  );
}

export default TestimoniosHome;
