import { Helmet } from "react-helmet";

function About() {
    return (
        <>
            {/* ===== SEO ===== */}
            <Helmet>
                <title>About Us | CNC Manufacturing Company</title>
                <meta
                    name="description"
                    content="Leading CNC manufacturing company delivering precision machines and industrial solutions."
                />
            </Helmet>

            {/* ===== Page Banner ===== */}
            <div className="about-banner text-white text-center">
                <h2 className="fw-bold">About Us</h2>
                <p>Home › About Us</p>
            </div>

            {/* ===== About Section ===== */}
            <div className="container my-5">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <img
                            src="https://picsum.photos/400/300?machine"
                            alt="CNC Machine"
                            className="img-fluid shadow"
                        />
                    </div>

                    <div className="col-md-8">
                        <h4 className="fw-bold">Tirupati CNC Products</h4>
                        <p>
                            Established in the year 2000, Tirupati CNC Products is engaged in
                            manufacturing CNC Lathe Machine, CNC Turning Machine, VMC Drilling
                            Machine, and Precision Machining Solutions.
                        </p>

                        <p>
                            Our organization is committed to delivering superior quality
                            products by adopting advanced technology, precision engineering,
                            and continuous innovation. We ensure timely delivery and maximum
                            client satisfaction.
                        </p>
                    </div>
                </div>
            </div>

            {/* ===== Client Satisfaction ===== */}
            <div className="container my-5">
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <h4 className="fw-bold">Client Satisfaction</h4>
                        <p>
                            With our quality-driven approach, we have built a strong client
                            base across India. Our products undergo stringent quality checks
                            to ensure high performance and durability.
                        </p>
                    </div>

                    <div className="col-md-4">
                        <img
                            src="https://picsum.photos/400/300?office"
                            alt="Client Satisfaction"
                            className="img-fluid shadow"
                        />
                    </div>
                </div>
            </div>

            {/* ===== Our Team ===== */}
            <div className="container my-5">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <img
                            src="https://picsum.photos/400/300?team"
                            alt="Our Team"
                            className="img-fluid shadow"
                        />
                    </div>

                    <div className="col-md-8">
                        <h4 className="fw-bold">Our Team</h4>
                        <p>
                            We are supported by a highly skilled and experienced team of
                            professionals who are dedicated to meeting customer expectations
                            and industry standards.
                        </p>
                    </div>
                </div>
            </div>

            {/* ===== Our Infrastructure ===== */}
            <div className="container my-5">
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <h4 className="fw-bold">Our Infrastructure</h4>
                        <p>
                            Our state-of-the-art infrastructure enables us to manufacture
                            high-quality CNC machines efficiently and reliably.
                        </p>

                        <ul>
                            <li>Location: Pune, Maharashtra</li>
                            <li>Skilled Workforce</li>
                            <li>Advanced Machinery</li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <img
                            src="https://picsum.photos/400/300?factory"
                            alt="Infrastructure"
                            className="img-fluid shadow"
                        />
                    </div>
                </div>
            </div>

            {/* ===== Our Focus ===== */}
            <div className="container my-5 text-center">
                <h4 className="fw-bold mb-4">Our Focus</h4>

                <div className="row">
                    <div className="col-md-3">
                        <div className="focus-box">
                            <i className="bi bi-gear"></i>
                            <p>Experienced R&D Department</p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="focus-box">
                            <i className="bi bi-box"></i>
                            <p>Large Product Line</p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="focus-box">
                            <i className="bi bi-graph-up"></i>
                            <p>Good Financial Position</p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="focus-box">
                            <i className="bi bi-building"></i>
                            <p>Large Production Capacity</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
