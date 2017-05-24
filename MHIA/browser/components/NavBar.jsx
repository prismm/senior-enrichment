import React from 'react';
import { Link } from 'react-router';

export default function NavBar (props){
    return (
        <header>
            <h1>Margaret Hamilton <br /> Interplanetary Academy of JavaScript</h1>
            <section className="nav-links">
                <h4 className="menu-item">
                    <Link to="/campus">Home</Link>
                </h4>
                <h4 className="menu-item">
                    <Link to="/student">Students</Link>
                </h4>
            </section>
        </header>
    )
}