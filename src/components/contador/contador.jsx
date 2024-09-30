import { useState, useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";

// Función que realiza el conteo animado
function useCounter(start, end, duration, shouldAnimate) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!shouldAnimate) return; // No animar si no está en pantalla

    let increment = (end - start) / (duration / 100); // Incremento en base al tiempo total
    const interval = setInterval(() => {
      setCount((prev) => {
        const nextValue = prev + increment;
        return nextValue >= end ? end : nextValue; // Detener el conteo cuando se alcanza el final
      });
    }, 100);

    return () => clearInterval(interval); // Limpiar intervalo cuando el componente se desmonta
  }, [start, end, duration, shouldAnimate]);

  return Math.floor(count); // Retorna el número redondeado
}

// Función para formatear los números con puntos y agregar la "M" al final
function formatNumber(num) {
  return num.toLocaleString("de-DE"); // Formateo con puntos para miles (formato alemán)
}

// Definimos el componente usando la palabra reservada function
function ContadorInteractivo() {
  const [isVisible, setIsVisible] = useState(false); // Estado para manejar la visibilidad
  const containerRef = useRef(null); // Referencia al contenedor

  // Usamos el hook para los tres contadores, pasando la visibilidad como parámetro
  const miembrosActivos = useCounter(0, 1257, 5000, isVisible); // Miembros Activos hasta 1257 en 5 segundos
  const gananciasMiembros = useCounter(0, 315270, 5000, isVisible); // Ganancias hasta $300,000 en 5 segundos
  const paisesActivos = useCounter(0, 7, 5000, isVisible); // Países Activos hasta 7 en 5 segundos

  // Componente de la línea separadora personalizada
  const LineaSeparadora = () => (
    <Box
      sx={{
        height: "80px", // Altura de la línea
        width: { xs: "5px", md: "7px" }, // Grosor de la línea, responsive
        backgroundColor: "#200E24", // Color de la línea
        borderRadius: "5px", // Hacer las puntas ovaladas
        margin: "0px 20px",
      }}
    />
  );

  // Efecto para observar si el contenedor entra en la pantalla
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true); // El contenedor está visible, activamos la animación
          observer.unobserve(containerRef.current); // Dejamos de observar una vez que se ha activado
        }
      },
      { threshold: 0.5 } // El 50% del contenedor debe estar visible para activar la animación
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <Box
      ref={containerRef} // Referencia al contenedor
      sx={{
        display: "flex", // Para alinear horizontalmente
        flexDirection: { xs: "column", md: "row" }, // Columna en pantallas pequeñas, fila en pantallas medianas
        justifyContent: "space-around", // Distribuir el espacio uniformemente
        alignItems: "center", // Alinear verticalmente
        width: "100%", // Ocupa el 100% del padre
        padding: { xs: "10px", md: "20px" }, // Padding responsive
      }}
    >
      {/* Miembros Activos */}
      <Box sx={{ textAlign: "center", flex: 1, margin: { xs: "10px 0" } }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontFamily: "Poppins, sans-serif",
            fontSize: { xs: "36px", md: "62px" }, // Tamaño de fuente responsive
            color: "#200E24",
          }}
        >
          {formatNumber(miembrosActivos)}M {/* Agregar la "M" después del número */}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: "bold",
            fontFamily: "Poppins, sans-serif",
            fontSize: { xs: "18px", md: "28px" }, // Tamaño de fuente responsive
            color: "#200E24",
          }}
        >
          Miembros Activos
        </Typography>
      </Box>

      {/* Línea separadora */}
      <LineaSeparadora />

      {/* Ganancias Totales */}
      <Box sx={{ textAlign: "center", flex: 1, margin: { xs: "10px 0", md: "0" } }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontFamily: "Poppins, sans-serif",
            fontSize: { xs: "36px", md: "62px" }, // Tamaño de fuente responsive
            color: "#200E24",
          }}
        >
          ${formatNumber(gananciasMiembros)}M {/* Agregar la "M" después del número */}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: "bold",
            fontFamily: "Poppins, sans-serif",
            fontSize: { xs: "18px", md: "28px" }, // Tamaño de fuente responsive
            color: "#200E24",
          }}
        >
          Ganancias Totales
        </Typography>
      </Box>

      {/* Línea separadora */}
      <LineaSeparadora />

      {/* Países Activos */}
      <Box sx={{ textAlign: "center", flex: 1, margin: { xs: "10px 0", md: "0" } }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontFamily: "Poppins, sans-serif",
            fontSize: { xs: "36px", md: "62px" }, // Tamaño de fuente responsive
            color: "#200E24",
          }}
        >
          {paisesActivos}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: "bold",
            fontFamily: "Poppins, sans-serif",
            fontSize: { xs: "18px", md: "28px" }, // Tamaño de fuente responsive
            color: "#200E24",
          }}
        >
          Países Activos
        </Typography>
      </Box>
    </Box>
  );
}

export default ContadorInteractivo;
