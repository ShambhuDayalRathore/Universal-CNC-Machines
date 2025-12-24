import { Helmet } from "react-helmet";
function Services() {
    return (
        <>
            {/* ===== SEO ===== */}
            <Helmet>
                <title>Services | CNC Manufacturing Company</title>
                <meta
                    name="description"
                    content="Leading CNC manufacturing company delivering precision machines and industrial solutions."
                />
            </Helmet>

            {/* ===== Page Banner ===== */}
            <div className="about-banner text-white text-center">
                <h2 className="fw-bold">Services</h2>
                <p>Home › Services</p>
            </div>

            {/* ===== Services Section ===== */}
            <div className="container my-5">
                <h2 className="mb-4">Our Services</h2>

                <div className="row">
                    <div className="col-md-4">
                        <div className="card p-3 shadow">
                            <h5>CNC Turning</h5>
                            <p>High precision CNC turning services.</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card p-3 shadow">
                            <h5>CNC Milling</h5>
                            <p>Advanced milling with accuracy.</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card p-3 shadow">
                            <h5>Job Work</h5>
                            <p>Custom industrial job work.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;
