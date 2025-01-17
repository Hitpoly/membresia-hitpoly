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
        "Empoderar a nuestros afiliados con herramientas digitales avanzadas, permitiéndoles comercializar soluciones de marketing y desarrollo de software mientras construyen ingresos sólidos y sostenibles.",
      imageUrl: imagenPrimera,
      linkHref: "https://www.hitpoly.com",
    },
    {
      title: "VISIÓN DE LA MEMBRESÍA",
      description:
        "Ser el sistema líder en soluciones digitales, transformando vidas al ofrecer oportunidades únicas de capitalización y crecimiento profesional en un entorno seguro y confiable.",
      imageUrl: imagenSegunda,
      linkHref: "https://www.hitpoly.com",
    },
    {
      title: "VALORES DE LA MEMBRESÍA",
      description:
        "Fomentamos la innovación, la confianza y el compromiso, proporcionando transparencia y apoyo constante para garantizar el éxito de cada afiliado en nuestro ecosistema.",
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

  return <Valores cards={cardData} interval={interval} styles={styles} />;
};

export default ValoresHome;
