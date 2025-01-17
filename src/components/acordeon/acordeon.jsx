import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import ButtonBaner from "../carruselBanner/buttonBaner/buttonBaner";

const styles = {
  blink: `
    @keyframes blink {
      0% { background-color: #fff; color: #200E24; }
      50% { background-color: #200E24; color: white; }
      100% { background-color: #fff; color: #200E24; }
    }
  `,
};

const Acordeon = ({ tabs, containerStyles, buttonStyles, contentStyles }) => {
  const [activeTab, setActiveTab] = useState(Object.keys(tabs)[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [clickedTabs, setClickedTabs] = useState(new Set());
  const [blinkCount, setBlinkCount] = useState(0);
  const [shouldBlink, setShouldBlink] = useState(false);

  useEffect(() => {
    setClickedTabs((prev) => {
      const updated = new Set(prev);
      updated.add(activeTab);
      return updated;
    });

    const timer = setTimeout(() => {
      setShouldBlink(true);
      const blinkTimer = setInterval(() => {
        setBlinkCount((prev) => prev + 1);
      }, 1000); // Cambia cada segundo

      // Detener el parpadeo después de 3 pulsos
      setTimeout(() => {
        clearInterval(blinkTimer);
        setShouldBlink(false);
        setBlinkCount(0);
      }, 3000); // 3 pulsos (3 segundos)

    }, 10000); // 10 segundos

    return () => {
      clearTimeout(timer);
    };
  }, [activeTab]);

  const handleTabChange = (tab) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsTransitioning(false);
      setShouldBlink(false);
      setBlinkCount(0);
    }, 300);
  };

  return (
    <Box
      sx={{
        width: "100%",
        margin: "0px",
        padding: "0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Poppins, sans-serif",
        ...containerStyles,
      }}
    >
      <style>{styles.blink}</style>

      <Box
        sx={{
          marginBottom: "20px",
          gap: { xs: 2, md: 1, lg: 0 },
          width: { xs: "100%", md: "90%", lg: "80%" },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {Object.keys(tabs).map((tab, index) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            style={{
              padding: "8px 50px",
              cursor: "pointer",
              border: "1px solid #200E24",
              borderRadius: "25px",
              fontWeight: 600,
              fontSize: "12px",
              backgroundColor: activeTab === tab ? "#6F4CE0" : "#fff",
              color: activeTab === tab ? "white" : "#200E24",
              transition: "color 0.3s ease, background-color 0.3s ease",
              fontFamily: "Poppins, sans-serif",
              animation:
                shouldBlink && !clickedTabs.has(tab) && index === Object.keys(tabs).indexOf(activeTab) + 1 && blinkCount < 3
                  ? "blink 1s infinite"
                  : "none",
              ...buttonStyles,
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#6F4CE0";
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              if (activeTab !== tab) {
                e.target.style.backgroundColor = "#fff";
                e.target.style.color = "#6F4CE0";
              }
            }}
          >
            {tabs[tab].title}
          </button>
        ))}
      </Box>

      <Box
        sx={{
          width: { lg: "80%" },
          padding: { xs: "20px", sm: "40px" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          transition: "opacity 0.3s ease-in-out",
          opacity: isTransitioning ? 0 : 1,
          ...contentStyles,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            width: { xs: "90%", md: "45%" },
            marginBottom: { xs: "20px", md: "0" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontSize: { xs: "30px", sm: "30px", md: "35px", lg: "40px" },
              fontWeight: "bold",
              color: "#200E24",
              marginBottom: "10px",
            }}
          >
            {tabs[activeTab].title}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontSize: { xs: "13px", sm: "14px", md: "15px" },
              marginBottom: "20px",
              color: "#200E24",
            }}
          >
            {tabs[activeTab].subtitle}
          </Typography>
          <ButtonBaner
            text="Conocer Más"
            href="/"
            buttonStyles={{
              display: "flex",
              width: "180px",
              marginBottom: "10px",
              justifyContent: "space-between",
              boxShadow: "0px 1px 2px 1px rgba(0, 0, 0, 0.2)",
            }}
          />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "45%" },
            height: "300px",
            display: "flex",
          }}
        >
          <img
            src={tabs[activeTab].image}
            alt={tabs[activeTab].title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "25px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Acordeon;
