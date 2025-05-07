import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Aspirantes from './pages/Aspirantes';
import Sorteo from './pages/Sorteo';
import FormularioAspirante from './components/FormularioAspirante';
import Login from './components/Login'; 
import Dashboard from './components/Dashboard';

function App() {
  
  return (
      <Router>
        <Navbar/>
        <div className='container-fluid mt-2 mx-auto'>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/admin' element={<Dashboard/>}/>
            <Route path='/' element={<Aspirantes/>}/>
            <Route path='/sorteo' element={<Sorteo/>}/>
            <Route path='/inscripcion' element={<FormularioAspirante/>} />
          </Routes>
        </div>

      </Router>
  );
}

export default App;
