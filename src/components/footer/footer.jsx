import React from "react";
import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import Logo from "../../assets/logohitpolyblanco.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";

const iconStyles = [
  {
    icon: <InstagramIcon />,
    backgroundColor: "#B51AD8",
    link: "https://www.instagram.com/hitpoly/",
  },
  {
    icon: <FacebookIcon />,
    backgroundColor: "#B51AD8",
    link: "https://www.facebook.com/Hitpoly",
  },
  {
    icon: <LinkedInIcon />,
    backgroundColor: "#B51AD8",
    link: "https://pe.linkedin.com/company/hitpoly",
  },
  {
    icon: <WhatsAppIcon />,
    backgroundColor: "#B51AD8",
    link: "https://wa.me/51933961352",
  },
  {
    icon: <YouTubeIcon />,
    backgroundColor: "#B51AD8",
    link: "https://www.youtube.com/@hitpolyagenciademarketingd5365",
  },
];

const Footer = () => {
  return (
    <Box sx={{ padding: "40px 0" }}>
      <Grid
        container
        spacing={7}
        sx={{
          maxWidth: "96vw",
          padding: "40px 10px",
          margin: "-28px auto",
          backgroundColor: "#0E0610",
          borderRadius: "25px",
        }}
      >
        <Grid item xs={12} md={4} sm={6}>
          <img
            src={Logo}
            alt="HitPoly Logo"
            style={{ height: "40px", marginBottom: "20px" }}
          />
          <Typography
            variant="body1"
            color="#ffffff"
            sx={{
              lineHeight: "1.8",
              width: "90%",
              fontSize: { xs: "0.875rem", sm: "1rem", md: "0.9375rem" },
            }}
          >
            En cada acción que emprendemos, buscamos transformar industrias,
            cambiar vidas y construir un mundo mejor. Lideramos la Revolución de
            Marketing y tecnología de Software con Propósito y Pasión.
          </Typography>
        </Grid>

        <Grid item xs={12} md={2} sm={6}>
          <Typography variant="body1" color="#c13ce3" gutterBottom>
            ENLACES RÁPIDOS
          </Typography>
          {["Home", "Portfolio", "Blog", "Nosotros", "Contacto"].map((link, index) => (
            <Link
              key={index}
              href="/"
              color="#ffffff"
              underline="none"
              display="block"
              sx={{
                marginBottom: "10px",
                fontSize: { xs: "0.875rem", sm: "1rem", md: "0.9375rem" },
              }}
            >
              {link}
            </Link>
          ))}
        </Grid>

        <Grid item xs={12} md={3} sm={6}>
          <Typography variant="body1" color="#c13ce3" gutterBottom>
            POLITICAS
          </Typography>
          {["Politicas de privacidad", "Descargo de responsabilidad", "Terminos y condiciones", "Copyright"].map((policy, index) => (
            <Link
              key={index}
              href="/"
              color="#ffffff"
              underline="none"
              display="block"
              sx={{
                marginBottom: "10px",
                fontSize: { xs: "0.875rem", sm: "1rem", md: "0.9375rem" },
              }}
            >
              {policy}
            </Link>
          ))}
        </Grid>

        <Grid item xs={12} md={3} sm={6}>
          <Typography variant="body1" color="#c13ce3" gutterBottom>
            CONTACTOS
          </Typography>
          <Link
            href="https://wa.me/51933961352"
            underline="none"
            color="inherit"
            sx={{
              marginBottom: "10px",
              fontSize: { xs: "0.875rem", sm: "1rem", md: "0.9375rem" },
            }}
          >
            <Typography variant="body1" sx={{ color: "#ffffff", marginBottom: { xs: "10px", sm: "10px" }, fontSize: { xs: "0.875rem", sm: "1rem", md: "0.9375rem" } }}>
              +51933961352
            </Typography>
          </Link>
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@hitpoly.com"
            target="_blank"
            underline="none"
            color="inherit"
          >
            <Typography
              variant="body1"
              color="#ffffff"
              sx={{
                marginBottom: "10px",
                fontSize: { xs: "0.875rem", sm: "1rem", md: "0.9375rem" },
              }}
            >
              info@hitpoly.com
            </Typography>
          </Link>
        </Grid>

        <Box
          sx={{
            borderTop: "1px solid #1ECDF4",
            paddingTop: "20px",
            width: "100%",
            maxWidth: "1200px",
            margin: "35px auto",
          }}
        >
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            direction={{ xs: "column", md: "row" }}
            sx={{ width: "100%" }}
          >
            <Typography
              variant="body2"
              color="#c13ce3"
              sx={{
                marginTop: "30px",
                textAlign: { xs: "center", md: "left" },
                flexGrow: 1,
                maxWidth: "60%",
              }}
            >
              Copyright © 2024 hitpoly.com | Funciona con hitpoly.com
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ gap: { xs: 2, md: 4 } }}
              mt={2}
            >
              {iconStyles.map(({ icon, backgroundColor, link }, index) => (
                <Link
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ display: "inline-block", lineHeight: 0 }}
                >
                  <IconButton
                    sx={{
                      backgroundColor: backgroundColor,
                      color: "#FFFFFF",
                      "&:hover": {
                        backgroundColor: backgroundColor,
                        opacity: 0.8,
                      },
                      width: 36,
                      height: 36,
                      borderRadius: "8px",
                      marginTop: "30px",
                    }}
                  >
                    {icon}
                  </IconButton>
                </Link>
              ))}
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default Footer;
