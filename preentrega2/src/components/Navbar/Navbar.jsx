import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './navbar.css'; 

const Navbar = () => {
    const enlaces = [
        "Nike",
        "Adidas",
        "Puma",
        "New Balance",
        "Reebok",
        "Zona",
        "Sobre Nosotros"
    ];

    return (
        <div className="navbar-container">
            <Link to={"/"} className="logo">
                <CartWidget />
            </Link>

            <ul className="nav-links">
                {enlaces.map((etiqueta, id) => (
                    <li key={id}>
                        <Link to={`${etiqueta}`} className="nav-link">
                            {etiqueta}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
