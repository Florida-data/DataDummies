import { StrictMode, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormChanger } from './FormChanger.jsx';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Welcome } from './Welcome.jsx';
import { AnimatePresence } from 'framer-motion';
import { Home } from './Home.jsx';

export function App() {
    return (
        <StrictMode>
            <Router>
                <BodyBackground />
                <AnimatePresence>
                    <Routes>
                        <Route path='/' element={<Welcome />} />
                        <Route path='/login' element={<FormChanger />} />
                        <Route path='/register' element={<FormChanger />} />
                        <Route path='/home' element={<Home />} />
                    </Routes>
                </AnimatePresence>
            </Router>
        </StrictMode>
    );
}

function BodyBackground() {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/') {
            document.body.style.background = 'url(/src//static/morado.jpg   ) no-repeat center center fixed';
            document.body.style.backgroundSize = 'cover';
        } else {
            document.body.style.background = 'none';
        }
    }, [location]);

    return null; 
}
