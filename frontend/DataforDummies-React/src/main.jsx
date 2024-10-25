import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormChanger } from './FormChanger.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Welcome } from './Welcome.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      
        <Routes>
          <Route path='/' element={<Welcome/>} />
          <Route path='/login' element={<FormChanger />} />
          <Route path='/register' element={<FormChanger />} />
        </Routes>
      
    </Router>
  </StrictMode>
);