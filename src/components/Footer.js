import { Link } from "react-router-dom";
import BackToTop from "./BackToTop";

function Footer() {
    return (
        <footer className="footer-bg text-white pt-5">
            <div className="container">
                <div className="row">

                    {/* ===== Company Info ===== */}
                    <div className="col-md-3 mb-4">
                        <h4 className="fw-bold text-uppercase">{process.env.REACT_APP_COMPANY_NAME}</h4>
                        <p className="small">
                            We are {process.env.REACT_APP_COMPANY_CITY} based <b>CNC Spring Formers &
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
                            {process.env.REACT_APP_COMPANY_ADDRESS1},<br />
                            {process.env.REACT_APP_COMPANY_ADDRESS2}
                        </p>

                        <p className="small">
                            📞 ({process.env.REACT_APP_COMPANY_MOBILE_COUNTRYCODE}) {process.env.REACT_APP_COMPANY_MOBILE1}, <br />
                            📞 ({process.env.REACT_APP_COMPANY_MOBILE_COUNTRYCODE}) {process.env.REACT_APP_COMPANY_MOBILE2}
                        </p>

                        <p className="small">
                            {process.env.REACT_APP_COMPANY_EMAIL}
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
                    © {new Date().getFullYear()} {process.env.REACT_APP_COMPANY_NAME}. All Rights Reserved. |
                    Managed by <b>{process.env.REACT_APP_COMPANY_NAME}</b>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
