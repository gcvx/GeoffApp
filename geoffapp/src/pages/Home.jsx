import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome to the GeoffApp! This is the home page of our application.</p>
            <p>Navigate using the menu above or the link below to explore other pages:</p>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/advert">Advert</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
};

export default Home;