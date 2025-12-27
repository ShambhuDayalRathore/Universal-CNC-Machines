import Slider from "../components/Slider";
import Seo from "../components/Seo";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <Seo />
            <div className="page">
                <Slider />
                {/* ===== WELCOME / INTRO SECTION ===== */}
                <div className="container my-5">
                    <div className="row align-items-center">

                        <div className="col-md-6 order-2 order-md-1 px-3">
                            <h6 className="text-danger fw-bold small-text">WELCOME TO Universal CNC Machines</h6>
                            <h2 className="fw-bold main-text">
                                Manufacturer of CNC Spring Machines.
                            </h2>

                            <p className="mt-3">
                                We are Faridabad based CNC Spring Formers and Machines
                                manufacturer. Since our very beginning, we are committed towards
                                delivering quality & precision in every machine.
                            </p>

                            <ul className="list-unstyled mobile-features">
                                <li>✔ Timely Delivery</li>
                                <li>✔ Stringent Quality</li>
                                <li>✔ Development Skills</li>
                                <li>✔ Customized Packing</li>
                                <li>✔ Team of Experts</li>
                                <li>✔ Product Innovation</li>
                            </ul>

                            <Link to="/about" className="btn btn-success mt-2 mb-4 mb-md-0">
                                Read More
                            </Link>
                        </div>

                        <div className="col-md-6 order-1 order-md-2 text-center mb-4 mb-md-0">
                            <img
                                src="https://picsum.photos/600/350?machine"
                                className="img-fluid rounded shadow"
                                alt="CNC Machine"
                            />
                        </div>
                    </div>
                </div>

                {/* ===== GALLERY PREVIEW ===== */}
                <div className="container my-5 text-center">
                    <h3 className="fw-bold section-title">Gallery</h3>

                    <div className="row mt-4 g-3">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="col-6 col-md-3">
                                <img
                                    src={`https://picsum.photos/300/200?${i}`}
                                    className="img-fluid rounded shadow gallery-img"
                                    alt="Machine"
                                />
                            </div>
                        ))}
                    </div>

                    <Link to="/gallery" className="btn btn-outline-success mt-3">
                        View Gallery
                    </Link>
                </div>

                {/* ===== VIDEOS ===== */}
                <div className="container my-5 text-center">
                    <h3 className="fw-bold section-title">Corporate Video</h3>

                    <div className="row mt-4 g-4">
                        <div className="col-12 col-md-6">
                            <div className="video-box rounded shadow"></div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="video-box rounded shadow"></div>
                        </div>
                    </div>
                </div>

                {/* ===== SERVICES / COUNTERS ===== */}
                <div className="container my-5 text-center">
                    <h4 className="fw-bold text-danger">Our Services</h4>
                    <h6 className="fw-bold mb-4 small-text">
                        ACHIEVING QUALITY ASSURANCE WITH REGULAR INNOVATIONS
                    </h6>

                    <div className="row g-3">
                        {[
                            ["100%", "Customer Satisfaction"],
                            ["95%", "Products Demand"],
                            ["100%", "After Sales Service"],
                            ["99%", "Products Quality"]
                        ].map(([num, label], i) => (
                            <div key={i} className="col-6 col-md-3">
                                <div className="counter-box rounded shadow">
                                    <h3>{num}</h3>
                                    <p>{label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
