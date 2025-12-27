import { Link } from "react-router-dom";
import { useState } from "react";
import TopHeader from "../components/TopHeader";
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => setIsOpen(!isOpen);
    const closeNavbar = () => setIsOpen(false); // closes menu when clicking a link

    return (
        <>
            <TopHeader />
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
                <div className="container">

                    {/* Brand */}
                    <Link className="navbar-brand fw-bold" to="/" onClick={closeNavbar}>
                        Universal CNC Machines
                    </Link>

                    {/* MOBILE BUTTON */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        aria-controls="navbarNav"
                        aria-expanded={isOpen ? "true" : "false"}
                        aria-label="Toggle navigation"
                        onClick={toggleNavbar}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* COLLAPSIBLE MENU */}
                    <div
                        className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
                        id="navbarNav"
                    >
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/" onClick={closeNavbar}>Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/about" onClick={closeNavbar}>About</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/gallery" onClick={closeNavbar}>Gallery</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/services" onClick={closeNavbar}>Services</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/contact" onClick={closeNavbar}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </>
    );
}

export default Navbar;
