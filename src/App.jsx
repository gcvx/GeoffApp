import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Advertising from './pages/Advert'; // Updated import to reflect the renamed component
import Map from './pages/Map';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app">
                <header>
                    <h1 className="app-title">GeoffApp</h1>
                    <Navigation />
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/advert" element={<Advertising />} />
                        <Route path="/map" element={<Map />} />
                    </Routes>
                </main>
                <footer>
                    <div className="footer-images">
                        <div className="footer-image left"></div>
                        <div className="footer-image center"></div>
                        <div className="footer-image right"></div>
                    </div>
                    <p>&copy; {new Date().getFullYear()} GeoffApp</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;