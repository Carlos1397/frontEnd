
import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route } from "react-router-dom";
import Home from './views/Home'
import Mantenimiento from './views/Mantenimiento'
import NotFound from './views/NotFound'
import Usuario from './views/Usuario';
import Login from './components/Login';
import ProtectRouteAuth from './AuthProvider/ProtectRouteAuth'
import { AuthProvider } from './AuthProvider/AuthProvider'
function App() {
  return (
    <AuthProvider>
      <header>
        <NavBar />
      </header>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="mantenimiento" element={<ProtectRouteAuth><Mantenimiento /></ProtectRouteAuth>} />
          <Route path="usuario" element={<ProtectRouteAuth><Usuario /></ProtectRouteAuth>} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
