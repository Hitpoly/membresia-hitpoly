import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Grid, IconButton, Link, Typography } from "@mui/material";
import React from "react";
import Logo from "../../assets/logohitpolyblanco.png";

const iconStyles = [
  {
    icon: <InstagramIcon />,
    backgroundColor: "#B51AD8",
    link: "https://www.instagram.com/hitpoly/",
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
    <Box
      sx={{
        padding: { xs: "40px 30px", md: "20px 80px" },
        backgroundColor: "#6F4CE0",
        maxWidth: "100vw",
        borderRadius: "25px 25px 0px 0px",
      }}
    >
      <Grid
        container
        sx={{
          marginTop: "60px"
        }}
      >
        <Grid item xs={12} md={4} sm={6} mb={3}>
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

        <Grid item xs={12} md={2} sm={6} mb={3}>
          <Typography variant="body1" color="#fff" gutterBottom>
            ENLACES RÁPIDOS
          </Typography>
          {[
            { text: "Home", link: "/" },
            { text: "Portfolio", link: "https://hitpoly.com/portfolio" },
            { text: "Blog", link: "https://blog.hitpoly.com/" },
            { text: "Nosotros", link: "https://hitpoly.com/nosotros" },
            { text: "Contacto", link: "/contacto" }
          ].map((link, index) => (
            <Link
              key={index}
              href={link.link} // Usar el enlace dinámico
              color="#ffffff"
              underline="none"
              display="block"
              sx={{
                marginBottom: "10px",
                fontSize: { xs: "0.875rem", sm: "1rem", md: "0.9375rem" },
              }}
            >
              {link.text}
            </Link>
          ))}
        </Grid>

        <Grid item xs={12} md={3} sm={6} mb={3}>
          <Typography variant="body1" color="#fff" gutterBottom>
            POLITICAS
          </Typography>
          {[
            { text: "Politicas de privacidad", link: "/https://hitpoly.com/privacypolicy" },
            { text: "Descargo de responsabilidad", link: "https://hitpoly.com/disclaimer" },
            { text: "Terminos y condiciones", link: "https://hitpoly.com/termsandconditions" },
            { text: "Copyright", link: "https://hitpoly.com/Copyright" }
          ].map((policy, index) => (
            <Link
              key={index}
              href={policy.link} // Usar el enlace dinámico
              color="#ffffff"
              underline="none"
              display="block"
              sx={{
                marginBottom: "10px",
                fontSize: { xs: "0.875rem", sm: "1rem", md: "0.9375rem" },
              }}
            >
              {policy.text}
            </Link>
          ))}
        </Grid>

        <Grid item xs={12} md={3} sm={6}>
          <Typography variant="body1" color="#fff" gutterBottom>
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
            <Typography
              variant="body1"
              sx={{
                color: "#ffffff",
                marginBottom: { xs: "10px", sm: "10px" },
                fontSize: { xs: "0.875rem", sm: "1rem", md: "0.9375rem" },
              }}
            >
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
              color="white"
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
                      marginTop: "0px",
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
