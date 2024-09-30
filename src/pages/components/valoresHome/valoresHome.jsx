import React from "react";
import Valores from "../../../components/valores/valores";
import imagenPrimera from "../../../assets/mision.jpg";
import imagenSegunda from "../../../assets/vision.jpg";
import imagenTercera from "../../../assets/valores.jpg";

const ValoresHome = () => {
  // Define the card data here
  const cardData = [
    {
      title: "MISIÓN DE LA MEMBRESÍA",
      description:
        "Nuestra misión es proporcionar a nuestros afiliados herramientas innovadoras para que puedan generar ingresos sostenibles mediante la venta de servicios y productos digitales de alta calidad.",
      imageUrl: imagenPrimera,
      linkHref: "https://www.hitpoly.com",
    },
    {
      title: "VISIÓN DE LA MEMBRESÍA",
      description:
        "Ser la red de marketing digital más sólida y confiable, que potencie el crecimiento personal y financiero de nuestros miembros mediante un sistema de compensación justo y eficiente.",
      imageUrl: imagenSegunda,
      linkHref: "https://www.hitpoly.com",
    },
    {
      title: "VALORES DE LA MEMBRESÍA",
      description:
        "Nuestros valores fundamentales son la innovación, la integridad, y el compromiso con el éxito de nuestros afiliados, brindando siempre transparencia y soporte en cada paso del proceso.",
      imageUrl: imagenTercera,
      linkHref: "https://www.hitpoly.com",
    },
  ];

  // Propiedades adicionales
  const interval = 10000; // Cambiar cada 10 segundos
  const styles = {
    container: {},
    title: { color: "#6F4CE0" },
    description: { fontSize: "14px" },
    link: { textDecoration: "underline" },
  };

  return (
    <Valores 
      cards={cardData} 
      interval={interval} 
      styles={styles} 
    />
  );
};

export default ValoresHome;
