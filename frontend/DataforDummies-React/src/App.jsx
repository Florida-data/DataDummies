import { StrictMode, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormChanger } from './FormChanger.jsx';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Welcome } from './Welcome.jsx';
import { AnimatePresence } from 'framer-motion';
import { Home } from './Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Navbar } from './Navbar.jsx';

export function App() {
    return (
        <StrictMode>
            <Router>
                <BodyBackground />
                <AnimatePresence>
                    <Routes>
                        <Route exact path='/' element={<Welcome />} />
                        <Route exact path='/login' element={ <FormChanger /> } />
                        <Route exact path='/signup' element={  <FormChanger /> } />
                        <Route exact path='/home' element={<Navbar />} />
                    </Routes>
                </AnimatePresence>
            </Router>
        </StrictMode>
    );
}

function BodyBackground() {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/') {
            document.body.style.background = 'url(/src//static/morado.jpg   ) no-repeat center center fixed';
            document.body.style.backgroundSize = 'cover';
        } else {
            document.body.style.background = 'none';
        }
    }, [location]);

    return null; 
}
