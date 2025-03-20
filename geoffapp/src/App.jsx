import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    useEffect(() => {
        function handleHashChange() {
            const hash = window.location.hash || '#/';
            if (hash === '#/') {
                setCurrentPage('home');
            } else if (hash === '#/about') {
                setCurrentPage('about');
            } else if (hash === '#/contact') {
                setCurrentPage('contact');
            }
        }

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange();

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    let pageContent;
    if (currentPage === 'about') {
        pageContent = <About />;
    } else if (currentPage === 'contact') {
        pageContent = <Contact />;
    } else {
        pageContent = <Home />;
    }

    return (
        <div className="app">
            <header>
                <h1 className="app-title">GeoffApp</h1>
                <Navigation />
            </header>
            <main>
                {pageContent}
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
    );
}

export default App;