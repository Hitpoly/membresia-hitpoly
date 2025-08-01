import { Box } from "@mui/system";
import NavBar from "../../components/navBar/navbar.jsx";
import CarruselBanner from "../../components/carruselBanner/carruselBanner.jsx";
import AcordeonHome from "../components/acordeonHome/acordeonHome.jsx";
import ValoresHome from "../components/valoresHome/valoresHome.jsx";
import CardHome from "../components/cardsHome/cardsHome.jsx";
import TestimoniosHome from "../components/testimoniosHome/testimoniosHome.jsx";
import ContadorHome from "../components/contadorHome/contadorHome.jsx";
import PreguntasFrecuentesHome from "../components/preguntasFrecuentesHome/preguntasFrecuentesHome.jsx";
import FooterHome from "../components/footerHome/page.jsx";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const encodedUserId = params.get("userId");

    if (encodedUserId) {
      try {
        const decodedUserId = atob(encodedUserId);
        setUserId(decodedUserId);
      } catch (error) {
        console.error("Error decoding userId:", error);
      }
    }
  }, [location.search]);

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            position: { md: "fixed" },
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: { xs: "0px 10px", md: "10px 40px" },
            backgroundColor: "rgba(250, 250, 250, 0.8)",
            borderBottomLeftRadius: "25px",
            borderBottomRightRadius: "25px",
          }}
        >
          <NavBar userId={userId} />
        </Box>
        <Box
          sx={{
            marginTop: "60px",
            margin: { xs: "0px 0px", sm: "20px 40px", md: "100px 40px" },
            overflowX: "hidden",
          }}
        >
          <CarruselBanner />
        </Box>
        <Box
          id="section1"
          sx={{
            margin: { xs: "50px 20px", sm: "30px 40px", md: "60px 40px" },
            overflowX: "hidden",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <AcordeonHome />
        </Box>
        <Box
          id="section2"
          sx={{
            padding: "60px 0px",
            backgroundColor: "#D9D9D9",
            overflowX: "hidden",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ValoresHome />
        </Box>
        <Box
          id="section3"
          sx={{
            padding: { xs: "40px 40px", md: "60px 100px" },
            overflowX: "hidden",
            display: "flex",
            justifyContent: "center",
            mb: 6,
          }}
        >
          <CardHome />
        </Box>
        <Box
          sx={{
            padding: "60px 100px",
            overflowX: "hidden",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <ContadorHome />
        </Box>
        <Box
          id="section5"
          sx={{
            padding: "60px 30px",
            overflowX: "hidden",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <PreguntasFrecuentesHome />
        </Box>
        <FooterHome />
      </Box>
    </>
  );
}

export default Home;
