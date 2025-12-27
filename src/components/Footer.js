import { Link } from "react-router-dom";
import BackToTop from "./BackToTop";

function Footer() {
    return (
        <footer className="footer-bg text-white pt-5">
            <div className="container">
                <div className="row">

                    {/* ===== Company Info ===== */}
                    <div className="col-md-3 mb-4">
                        <h4 className="fw-bold text-uppercase">Universal CNC Machines</h4>
                        <p className="small">
                            We are Faridabad (UP) based <b>CNC Spring Formers &
                                Machines manufacturer.</b>
                        </p>

                        {/* <h6 className="mt-4">Website Visitors</h6>
                        <div className="visitor-counter">
                            012345
                        </div> */}
                    </div>

                    {/* ===== Our Products ===== */}
                    <div className="col-md-3 mb-4">
                        <h5 className="footer-title">Our Products</h5>
                        <ul className="footer-list">
                            <li>CNC Spring Formers</li>
                            <li>CNC Spring Coilers</li>
                            <li>CNC Wire Benders</li>
                            <li>Conveyor Furnace</li>
                            <li>Testing Machines</li>
                            <li>Vision Inspection Machine</li>
                        </ul>
                    </div>

                    {/* ===== Contact Information ===== */}
                    <div className="col-md-3 mb-4">
                        <h5 className="footer-title">Contact Information</h5>

                        <p className="small">
                            Plot No. 77, Shiv Colony, Sector-22,<br />
                            Faridabad-121005
                        </p>

                        <p className="small">
                            📞 (+91) 8586862367, <br />
                            📞 (+91) 9810733911
                        </p>

                        <p className="small">
                            universalcncmachines@gmail.com
                        </p>

                        <div className="social-icons">
                            <i className="bi bi-facebook"></i>
                            <i className="bi bi-instagram"></i>
                            <i className="bi bi-linkedin"></i>
                            <i className="bi bi-youtube"></i>
                        </div>
                    </div>

                    {/* ===== Support & Quick Link ===== */}
                    <div className="col-md-3 mb-4">
                        <h5 className="footer-title">We Support</h5>

                        <div className="support-icons mb-3">
                            <span>🇮🇳 Make in India</span>
                        </div>

                        {/* <button className="btn btn-outline-light btn-sm mb-4">
                            Download Brochure
                        </button> */}

                        <ul className="footer-list">
                            <li>
                                <Link to="/sitemap" className="footer-link">
                                    Site Map
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
                <BackToTop />
                <hr className="footer-line" />

                <div className="text-center pb-3 small">
                    © {new Date().getFullYear()} Universal CNC Machines. All Rights Reserved. |
                    Managed by <b>Universal CNC Machines</b>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
