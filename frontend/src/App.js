import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Aspirantes from './pages/Aspirantes';
import Sorteo from './pages/Sorteo';
import FormularioAspirante from './components/FormularioAspirante';


function App() {
  
  return (
      <Router>
        <Navbar/>
        <div className='container mt-4'>
          <Routes>
            <Route path='/' element={<Aspirantes/>}/>
            <Route path='/sorteo' element={<Sorteo/>}/>
            <Route path='/inscripcion' element={<FormularioAspirante/>} />
          </Routes>
        </div>

      </Router>
  );
}

export default App;
