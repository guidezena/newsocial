import React from "react";
import { Link } from "react-router-dom"; //importar no terminal: npm install react-router-dom

export default function NavBar(){
    return (
    <nav className="navbar fixed-top navbar-light bg-light">
        <div className="container">
            <Link to='/' className='navbar-brand'>Senacgram</Link>
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <Link to='/explorer' className="nav-link">Explorar</Link></li>
            </ul>
        </div>

    </nav>);
}