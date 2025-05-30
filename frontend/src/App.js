import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aspirantes from "./pages/Aspirantes";
import Sorteo from "./pages/Sorteo";
import FormularioAspirante from "./components/FormularioAspirante";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Home from './pages/Home'; // Componente para la página principal
import Profile from './pages/Profile'; // Componente para el perfil
import Settings from './pages/Settings'; // Componente para configuraciones
import AspiranteFormWrapper from "./components/AspiranteFormWrapper"; // Componente para el formulario de aspirante
import HistorialSorteos from "./pages/HistorialSorteos";
import DetalleSorteo from "./pages/DetalleSorteo";



function App() {
  return (
    <Router>
      <div className="container-fluid mt-2 mx-auto ">
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* Rutas Protegiddas */}
          <Route path="/admin" element={<PrivateRoute><Dashboard />{" "}</PrivateRoute>} >
          <Route index element={<Home/>}/>
          <Route path='/admin/profile' element={<Profile/>}/>
          <Route path='/admin/aspirantes' element={<Aspirantes/>}/>
          <Route path='/admin/settings' element={<Settings/>}/>
          <Route path='/admin/sorteo' element={<Sorteo/>}/>
          <Route path="/admin/sorteos" element={<HistorialSorteos />} />
          <Route path="/admin/sorteos/:id" element={<DetalleSorteo />} />  
          <Route path="aspirantes/:id" element={<AspiranteFormWrapper />} />
          </Route>
          {/*Ruta publica */}
          <Route path="/inscripcion" element={<FormularioAspirante />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
