import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Box, IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppButton = () => {
  const [open, setOpen] = useState(false); // Estado para abrir/cerrar el modal
  const [phoneNumber, setPhoneNumber] = useState(''); // Estado para almacenar el número de teléfono ingresado
  const [userMessage, setUserMessage] = useState(''); // Estado para almacenar el mensaje personalizado del usuario

  const myPhoneNumber = '51933961352'; // Tu número de WhatsApp al que se enviará el mensaje

  // Función para abrir el modal
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Función para cerrar el modal
  const handleClose = () => {
    setOpen(false);
  };

  // Función para manejar el envío
  const handleSendMessage = () => {
    if (phoneNumber && userMessage) {
      // Se codifica el mensaje y el número para crear la URL de WhatsApp
      const encodedMessage = encodeURIComponent(`Mensaje de ${phoneNumber}: ${userMessage}`);
      // Cambié el teléfono en la URL por el número fijo y el mensaje del usuario
      const whatsappUrl = `https://api.whatsapp.com/send/?phone=${myPhoneNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`;
      
      // Abrir WhatsApp con el mensaje y el número del usuario
      window.open(whatsappUrl, '_blank'); // Abrir WhatsApp con el mensaje
      setOpen(false); // Cerrar el modal después de enviar el mensaje
    } else {
      alert('Por favor, ingrese un número y un mensaje.');
    }
  };

  return (
    <div>
      {/* Botón flotante en la esquina inferior derecha */}
      <Box position="fixed" bottom={20} right={20} zIndex={999}>
        <IconButton
          color="success"
          onClick={handleClickOpen}
          sx={{
            backgroundColor: '#25d366',
            '&:hover': {
              backgroundColor: '#128c7e',
            },
            padding: 2,
          }}
        >
          <WhatsAppIcon fontSize="large" />
        </IconButton>
      </Box>

      {/* Modal de saludo */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>¡Hola! ¿Cómo te podemos ayudar?</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Tu número de WhatsApp"
            type="text"
            fullWidth
            variant="outlined"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Ejemplo: 1234567890"
          />
          <TextField
            margin="dense"
            label="Tu mensaje"
            type="text"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            placeholder="Escribe tu mensaje..."
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleSendMessage} color="primary">
            Enviar mensaje
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default WhatsAppButton;
