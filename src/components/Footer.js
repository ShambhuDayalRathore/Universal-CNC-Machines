import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer-bg text-white pt-5">
            <div className="container">
                <div className="row">

                    {/* ===== Company Info ===== */}
                    <div className="col-md-3 mb-4">
                        <h4 className="fw-bold text-uppercase">Tirupati</h4>
                        <p className="small">
                            We are Rajkot (Gujarat) based <b>CNC Lathe Machines & Lathe
                                Machines manufacturer.</b>
                        </p>

                        <h6 className="mt-4">Website Visitors</h6>
                        <div className="visitor-counter">
                            012345
                        </div>
                    </div>

                    {/* ===== Our Products ===== */}
                    <div className="col-md-3 mb-4">
                        <h5 className="footer-title">Our Products</h5>
                        <ul className="footer-list">
                            <li>CNC Lathe Machine</li>
                            <li>CNC Turning Machine</li>
                            <li>VMC Drilling Machine</li>
                            <li>CNC Drilling Machine</li>
                            <li>CNC Roll Turning Lathe</li>
                            <li>Conventional Lathe</li>
                        </ul>
                    </div>

                    {/* ===== Contact Information ===== */}
                    <div className="col-md-3 mb-4">
                        <h5 className="footer-title">Contact Information</h5>

                        <p className="small">
                            Plot No. 15,16,17 Survey No.255,<br />
                            Revera Industrial Estate, Near GEB Substation,<br />
                            Shapar (Veraval), Rajkot – 360024
                        </p>

                        <p className="small">
                            📞 (+91) 9925151087 / 9925120087 <br />
                            📞 (+91) 9925559087
                        </p>

                        <p className="small">
                            <b>Admin:</b> tirupaticnc@yahoo.in <br />
                            <b>Sales:</b> sales@tirupaticnc.in
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

                        <button className="btn btn-outline-light btn-sm mb-4">
                            Download Brochure
                        </button>

                        <h5 className="footer-title mt-3">Quick Link</h5>
                        <ul className="footer-list">
                            <li>
                                <Link to="/sitemap" className="footer-link">
                                    Site Map
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>

                <hr className="footer-line" />

                <div className="text-center pb-3 small">
                    © 2025 Tirupati CNC Products. All Rights Reserved. |
                    Managed by <b>ADSENGINE MEDIA</b>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
