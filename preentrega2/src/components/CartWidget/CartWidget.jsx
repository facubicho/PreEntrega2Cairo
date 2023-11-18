import React from "react";
import "../CartWidget/CartWidget.css";
import { BsFillCartFill } from "react-icons/bs";
import zapatillaLogo from "/img/zapatilla-logo2.jpg";



const CartWidget = () => {

    return (
        <nav className="cart-widget">
        <img src={zapatillaLogo} alt="Zapatilla Logo"  />
        <div className="cart-info">
            <BsFillCartFill/>
            <p>0</p>
        </div>
    </nav>
    )
}

export default CartWidget; 

