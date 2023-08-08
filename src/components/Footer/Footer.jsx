import React from "react";
import './Footer.css';

const Footer = () => {
    return (
    <>
        <footer>
            <h1>Eat, Cook, Repeat</h1>
            <p>Share your best recipe by uploading here !</p>
        </footer>

        <nav className="nav-footer navbar navbar-expand justify-content-center">
            <ul className="navbar-nav">
                <li className="nav-item mx-2">
                    <a className="nav-link" href="#">Product</a>
                </li>
                <li className="nav-item mx-2">
                    <a className="nav-link" href="#">Company</a>
                </li>
                <li className="nav-item mx-2">
                    <a className="nav-link" href="#">Learn more</a>
                </li>
                <li className="nav-item mx-2">
                    <a className="nav-link" href="#">Get in touch</a>
                </li>
            </ul>
        </nav>
    </>
    )
}

export default Footer;