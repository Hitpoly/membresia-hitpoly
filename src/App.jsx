import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import NavBar from './components/navBar/navbar';
import Navigation from './components/navBar/navegation/navegation'; // Importa Navigation

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<NavBar />} /> {/* Ruta para NavBar */}
        <Route path="/navigation" element={<Navigation />} /> {/* Ruta para Navigation */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
