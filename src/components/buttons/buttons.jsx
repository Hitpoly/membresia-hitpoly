import ButtonIzquierda from './buttonIzquierda/buttonIzquierda';
import ButtonDerecha from './buttonDerecha/buttonDerecha';
import { Box } from '@mui/system';

function Butoons({ onPrev, onNext, disablePrev = false, disableNext = false }) {
  return (
    <Box sx={{ display: 'flex', gap: '15px', position: 'relative', right: { xs: '0px', md: '70px' } }}>
      <ButtonIzquierda onClick={onPrev} disabled={disablePrev} />
      <ButtonDerecha onClick={onNext} disabled={disableNext} />
    </Box>
  );
}

export default Butoons;
