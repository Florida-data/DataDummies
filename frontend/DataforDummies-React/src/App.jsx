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
import { Activation } from './Activation.jsx';
import { Provider } from 'react-redux';
import store from './Store.jsx';

export function App() {
    return (
        <Provider store={store}>
            <Router>
                <AnimatePresence>
                    <Routes>
                        <Route exact path='/' element={<Welcome />} />
                        <Route exact path='/login' element={ <FormChanger /> } />
                        <Route exact path='/signup' element={  <FormChanger /> } />
                        <Route exact path='/home' element={<Navbar />} />
                        <Route exact path='/activate/:uid/:token' element={<Activation />} />
                    </Routes>
                </AnimatePresence>
            </Router>
        </Provider>
    );
}

