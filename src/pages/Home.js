import Slider from "../components/Slider";
import Seo from "../components/Seo";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <Seo />
            <div className="page">
                <Slider />
                <div className="container my-5">
                    <div className="row align-items-center">

                        <div className="col-md-6">
                            <h6 className="text-danger fw-bold">WELCOME TO Universal CNC Machines</h6>
                            <h2 className="fw-bold">
                                Manufacturer of CNC Lathe Machines & Lathe Machines.
                            </h2>

                            <p className="mt-3">
                                We are Rajkot (Gujarat) based CNC Lathe Machines and Lathe Machines
                                manufacturer. Since our very beginning, we are committed towards
                                delivering quality & precision in every machine.
                                With experience of more than 20 years, we have expanded our
                                workshop in Shapar industrial area and started CNC machine
                                manufacturing.
                            </p>

                            <ul className="list-unstyled">
                                <li>✔ Timely Delivery</li>
                                <li>✔ Stringent Quality</li>
                                <li>✔ Development Skills</li>
                                <li>✔ Customized Packing</li>
                                <li>✔ Team of Experts</li>
                                <li>✔ Product Innovation</li>
                                <li>✔ Timely Delivery</li>
                                <li>✔ Stringent Quality</li>
                                <li>✔ Development Skills</li>
                                <li>✔ Customized Packing</li>
                                <li>✔ Team of Experts</li>
                                <li>✔ Product Innovation</li>
                            </ul>

                            <Link to="/about" className="btn btn-success mt-2">
                                Read More
                            </Link>
                        </div>

                        <div className="col-md-6 text-center">
                            <img
                                src="https://picsum.photos/600/350?machine"
                                className="img-fluid rounded shadow"
                                alt="CNC Machine"
                            />
                        </div>
                    </div>
                </div>

                {/* ===================== GALLERY SECTION ===================== */}
                <div className="container my-5 text-center">
                    <h3 className="fw-bold">Gallery</h3>
                    <div className="row mt-4">
                        <div className="col-md-3">
                            <img src="https://picsum.photos/300/200?1" className="img-fluid rounded shadow mb-3" alt="CNC Machine" />
                        </div>
                        <div className="col-md-3">
                            <img src="https://picsum.photos/300/200?2" className="img-fluid rounded shadow mb-3" alt="CNC Machine" />
                        </div>
                        <div className="col-md-3">
                            <img src="https://picsum.photos/300/200?3" className="img-fluid rounded shadow mb-3" alt="CNC Machine" />
                        </div>
                        <div className="col-md-3">
                            <img src="https://picsum.photos/300/200?4" className="img-fluid rounded shadow mb-3" alt="CNC Machine" />
                        </div>
                    </div>

                    <Link to="/gallery" className="btn btn-outline-success">
                        View Gallery
                    </Link>
                </div>

                {/* ===================== CORPORATE VIDEO ===================== */}
                <div className="container my-5 text-center">
                    <h3 className="fw-bold">Corporate Video</h3>
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <div className="video-box rounded shadow"></div>
                        </div>
                        <div className="col-md-6">
                            <div className="video-box rounded shadow"></div>
                        </div>
                    </div>
                </div>

                {/* ===================== OUR SERVICES / COUNTERS ===================== */}
                <div className="container my-5 text-center">
                    <h4 className="fw-bold text-danger">Our Services</h4>
                    <h6 className="fw-bold mb-4">
                        ACHIEVING QUALITY ASSURANCE WITH REGULAR INNOVATIONS
                    </h6>

                    <div className="row">
                        <div className="col-md-3">
                            <div className="counter-box">
                                <h3>100%</h3>
                                <p>Customer Satisfaction</p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="counter-box">
                                <h3>95%</h3>
                                <p>Products Demand</p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="counter-box">
                                <h3>100%</h3>
                                <p>After Sales Service</p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="counter-box">
                                <h3>99%</h3>
                                <p>Products Quality</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
