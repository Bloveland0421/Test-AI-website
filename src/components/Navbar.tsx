import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css'; // Assuming you have a CSS file for styling

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
        const boxContainer = document.querySelector('.box-container');
        if (boxContainer) {
            if (isOpen) {
                boxContainer.classList.remove('slide-right');
            } else {
                boxContainer.classList.add('slide-right');
            }
        }
    };

    return (
        <>
            <button className="navbar-toggle" onClick={toggleNavbar}>
                <div className={`hamburger ${isOpen ? 'open' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
            <nav className={`navbar ${isOpen ? 'open' : ''}`}>
                {isOpen && (
                    <ul>
                        <li>
                            <Link to="/" onClick={toggleNavbar}>Page 1</Link>
                        </li>
                        <li>
                            <Link to="/page2" onClick={toggleNavbar}>Page 2</Link>
                        </li>
                        <li>
                            <Link to="/page3" onClick={toggleNavbar}>Page 3</Link>
                        </li>
                    </ul>
                )}
            </nav>
        </>
    );
};

export default Navbar;